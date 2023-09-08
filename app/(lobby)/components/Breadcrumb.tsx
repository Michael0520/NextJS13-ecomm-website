import { FC, useMemo } from "react"
import { ChevronRightIcon } from "@radix-ui/react-icons"

type BreadcrumbItem = {
  name: string
  link: string
  current?: boolean
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  const renderedItems = useMemo(() => {
    return items.map((item, index) => {
      const isIconVisible = index > 0
      const content = item.current ? (
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {item.name}
        </span>
      ) : (
        <a
          href={item.link}
          className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        >
          {item.name}
        </a>
      )

      return (
        <li className="inline-flex items-center" key={index}>
          {isIconVisible && <ChevronRightIcon className="mx-1" />}
          {content}
        </li>
      )
    })
  }, [items])

  return (
    <nav className="container flex h-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {renderedItems}
      </ol>
    </nav>
  )
}

export default Breadcrumb
