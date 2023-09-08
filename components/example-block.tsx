type ExampleBlockProps = {
  title: string
  description: string
  content: string
}
export const ExampleBlock = ({
  title,
  description,
  content,
}: ExampleBlockProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        {title}
      </h1>
      <h2 className="text-xl font-extrabold leading-tight tracking-tighter md:text-base">
        {description}
      </h2>
      <code>{content}</code>
    </div>
  )
}
