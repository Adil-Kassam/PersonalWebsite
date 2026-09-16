import fs from 'fs'
import path from 'path'

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

const mdxFiles = fs.readdirSync(postsDir).filter((file) => path.extname(file) === '.mdx')

const posts = mdxFiles.map((file) => {
    const rawContent = fs.readFileSync(path.join(postsDir, file), 'utf-8')
    const { metadata, content } = parseFrontmatter(rawContent)
    const slug = path.basename(file, path.extname(file))

    return { metadata, slug, content }
})

fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2))
console.log(`✓ Generated posts-data.json with ${posts.length} posts`)