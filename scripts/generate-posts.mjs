import fs from 'fs'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import { highlight } from 'sugar-high'
import { visit } from 'unist-util-visit'

const postsDir = path.join(process.cwd(), 'app', 'blog', 'posts')
const outputPath = path.join(process.cwd(), 'app', 'blog', 'posts-data.json')

function parseFrontmatter(fileContent) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
    const match = frontmatterRegex.exec(fileContent)
    const frontMatterBlock = match[1]
    const content = fileContent.replace(frontmatterRegex, '').trim()
    const frontMatterLines = frontMatterBlock.trim().split('\n')
    const metadata = {}

    frontMatterLines.forEach((line) => {
        const [key, ...valueArr] = line.split(': ')
        let value = valueArr.join(': ').trim()
        value = value.replace(/^['"](.*)['"]$/, '$1')
        metadata[key.trim()] = value
    })

    return { metadata, content }
}

// Highlight code blocks at build time using sugar-high
function highlightCodeBlocks() {
    return (tree) => {
        visit(tree, 'element', (node) => {
            if (node.tagName === 'code' && node.children?.[0]?.type === 'text') {
                const codeText = node.children[0].value
                const highlighted = highlight(codeText)
                node.children = [{ type: 'raw', value: highlighted }]
            }
        })
    }
}

async function compileMarkdown(markdown) {
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSlug)
        .use(highlightCodeBlocks)
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(markdown)

    return String(file)
}

async function main() {
    const mdxFiles = fs.readdirSync(postsDir).filter((file) => path.extname(file) === '.mdx')

    const posts = await Promise.all(
        mdxFiles.map(async (file) => {
            const rawContent = fs.readFileSync(path.join(postsDir, file), 'utf-8')
            const { metadata, content } = parseFrontmatter(rawContent)
            const slug = path.basename(file, path.extname(file))
            const html = await compileMarkdown(content)

            return { metadata, slug, content: html }
        })
    )

    fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2))
    console.log(`✓ Generated posts-data.json with ${posts.length} posts (pre-rendered HTML)`)
}

main()