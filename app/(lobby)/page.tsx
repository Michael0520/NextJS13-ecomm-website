import Image from "next/image"

import Breadcrumb from "./components/Breadcrumb"

const IndexPage = () => {
  const breadCrumbList = [
    { name: "台灣", link: "#" },
    { name: "台北市", link: "#" },
    { name: "內湖區", link: "" },
  ]

  const imageURL =
    "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  return (
    <>
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
      <section className="px-12 py-6">
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
      <div className="flex flex-col px-12">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          4.9 (42 評分) • 早餐和早午餐 • $ 詳細資訊
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          30–45 分鐘 • 57TWD 費用
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          在上方輸入地址，即可查看外送及自取預估時間。
        </div>
      </div>
      {/* Highlight text - Block - font-bold */}
      <div className="px-12 py-2 text-sm font-bold text-gray-600 dark:text-gray-400">
        $ • 早餐和早午餐
      </div>

      {/* Button Group - inline - About 查看類似商品、團購訂單 */}
      {/* Outlet about Left Sidebar , Right Product List */}
    </>
  )
}

export default IndexPage
