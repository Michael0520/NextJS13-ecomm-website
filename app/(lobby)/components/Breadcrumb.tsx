import { FC, useMemo } from "react"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { twMerge } from "tailwind-merge"

type BreadcrumbItem = {
  name: string
  link: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  const renderedItems = useMemo(() => {
    return items.map((item, index) => {
      const isLastItem = index === items.length - 1
      const shouldShowIcon = index > 0

      const commonClasses = "ml-1 text-sm font-medium md:ml-2"
      const activeClasses = isLastItem ? "text-gray-500 dark:text-gray-400" : ""
      const linkClasses = !isLastItem
        ? "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
        : ""

      const combinedClasses = twMerge(
        commonClasses,
        isLastItem ? activeClasses : linkClasses
      )

      const itemContent = isLastItem ? (
        <span className={combinedClasses}>{item.name}</span>
      ) : (
        <a href={item.link} className={combinedClasses}>
          {item.name}
        </a>
      )

      return (
        <li className="inline-flex items-center" key={index}>
          {shouldShowIcon && <ChevronRightIcon className="mx-1" />}
          {itemContent}
        </li>
      )
    })
  }, [items])

  return (
    <nav className="container flex py-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {renderedItems}
      </ol>
    </nav>
  )
}

export default Breadcrumb
