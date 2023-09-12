import Image from "next/image"
import Link from "next/link"
import productListData from "@/data/productList.json"
import { GridIcon, PlusIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { Shell } from "@/components/shells/shell"

import Breadcrumb from "./components/Breadcrumb"
import ProductCard, { CardType } from "./components/product-card"
import { SidebarNav } from "./components/sidebar-nav"

const IndexPage = () => {
  const breadCrumbList = [
    { name: "台灣", link: "#" },
    { name: "台北市", link: "#" },
    { name: "內湖區", link: "" },
  ]

  const imageURL =
    "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

  const sidebarNavItems = [
    {
      title: "最熱門",
      href: "/",
    },
    {
      title: "鬆餅",
      href: "/cake",
    },
    {
      title: "蛋類",
      href: "/egg",
    },
    {
      title: "飲品",
      href: "/drink",
    },
    {
      title: "魚類",
      href: "/fish",
    },
  ]

  return (
    <Shell>
      {/* Breadcrumb - Block */}
      <Breadcrumb items={breadCrumbList} />
      {/* Banner - Block */}
      <section className="relative h-[200px] w-full">
        <Image
          src={imageURL}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
        />
      </section>
      {/* Page Title - Block */}
      <section className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6">
        <header className="text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            非常厲害美食館 信義活力吳興店
          </h1>
          <p className="mt-2 text-xl text-gray-700 dark:text-gray-300">
            Subheading or description
          </p>
        </header>
      </section>

      {/* Page Description - Group - three column */}
      <section className="flex flex-col px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          4.9 (42 評分) • 早餐和早午餐 • $ 詳細資訊
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          30–45 分鐘 • 57TWD 費用
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          在上方輸入地址，即可查看外送及自取預估時間。
        </div>
      </section>
      {/* Highlight text - Block - font-bold */}
      <div className="px-6 text-sm font-bold text-gray-600 dark:text-gray-400 sm:px-8 md:px-12">
        $ • 早餐和早午餐
      </div>

      {/* Button Group - inline - About 查看類似商品、團購訂單 */}
      <section className="flex gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6">
        <Button className="rounded-full">
          <GridIcon className="mr-2 h-4 w-4" /> 查看類似商品
        </Button>
        <Button className="rounded-full">
          <PlusIcon className="mr-2 h-4 w-4" /> 團購訂單
        </Button>
      </section>
      {/* Outlet about Left Sidebar , Right Product List */}
      <section className="flex flex-col space-y-8 overflow-hidden px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="overflow-x-auto lg:w-1/6 lg:overflow-x-visible">
          <SidebarNav items={sidebarNavItems} />
        </aside>

        <div className=" grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productListData.map((product, index) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <ProductCard {...product} type={product.type as CardType} />
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  )
}

export default IndexPage
