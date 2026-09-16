export function CustomMDX({ source }: { source: string }) {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: source }}
    />
  )
}