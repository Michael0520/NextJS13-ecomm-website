import { FC } from "react"
import { ChevronRightIcon } from "@radix-ui/react-icons"

interface BreadcrumbItem {
  name: string
  link: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  const processedItems = items.map((item, index) => {
    const shouldShowIcon = index > 0
    const isCurrent = item.current

    const icon = shouldShowIcon ? <ChevronRightIcon className="mx-1" /> : null
    const content = isCurrent ? (
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

    return { icon, content }
  })

  return (
    <nav className="container flex h-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {processedItems.map((item, index) => (
          <li className="inline-flex items-center" key={index}>
            {item.icon}
            {item.content}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
