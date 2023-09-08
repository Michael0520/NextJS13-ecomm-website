import { ChevronRightIcon } from "@radix-ui/react-icons"

const Breadcrumb = () => {
  const items = [
    { name: "台灣", link: "#" },
    { name: "台北市", link: "#" },
    { name: "內湖區", link: "", current: true },
  ]

  return (
    <nav className="container flex h-8 items-center" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 md:space-x-4">
        {items.map(({ name, link, current }, index) => (
          <li className="inline-flex items-center" key={index}>
            {index > 0 && <ChevronRightIcon className="mx-1" />}
            {current ? (
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {name}
              </span>
            ) : (
              <a
                href={link}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                {name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
