import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"
import { Shell } from "@/components/shells/shell"

export default function ProductsLoading() {
  return (
    <Shell>
      {/* Breadcrumb */}
      <nav className="container flex py-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {/* 麵包屑項目的 skeleton */}
          {Array.from({ length: 3 }).map((_, i) => (
            <li className="inline-flex items-center" key={i}>
              {/* 如果需要顯示分隔符號的 skeleton */}
              {i !== 0 && <Skeleton className="mx-1 h-4 w-4" />}
              <Skeleton className="ml-1 h-4 w-20 text-sm md:ml-2" />
            </li>
          ))}
        </ol>
      </nav>

      {/* Banner */}
      <div className="flex h-[200px] w-full items-center justify-center bg-secondary">
        <Icons.placeholder
          className="h-9 w-9 text-muted-foreground"
          aria-hidden="true"
        />
      </div>

      {/* Title */}
      <section className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6">
        <header className="text-left">
          <Skeleton className="mb-4 h-12 w-80" />
          <Skeleton className="h-6 w-64" />
        </header>
      </section>

      {/* Highlight text - Block - font-bold */}
      <section className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6">
        <header className="text-left">
          <Skeleton className="mb-4 h-12 w-80" />
          <Skeleton className="h-6 w-64" />
        </header>
      </section>

      {/* Button Group - inline - About 查看類似商品、團購訂單 */}
      <div className="flex flex-col space-y-6">
        <section className="flex gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6">
          <Skeleton className="h-10 w-36 rounded-full" />
          <Skeleton className="h-10 w-36 rounded-full" />
        </section>
      </div>

      {/* Outlet about Left Sidebar , Right Product List */}
      <section className="flex w-full flex-col space-y-8 px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="lg:w-1/5">
          <nav className="flex space-x-2 whitespace-nowrap lg:flex-col lg:space-x-0 lg:space-y-1 lg:whitespace-normal">
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-36" />
            <Skeleton className="h-10 w-36" />
          </nav>
        </aside>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grow lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex h-[200px] w-full items-center justify-center bg-secondary"
            >
              <Icons.placeholder
                className="h-9 w-9 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </section>
    </Shell>
  )
}
