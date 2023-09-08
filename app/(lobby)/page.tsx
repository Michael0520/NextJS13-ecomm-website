import Breadcrumb from "./components/Breadcrumb"

const IndexPage = () => {
  const breadCrumbList = [
    { name: "台灣", link: "#" },
    { name: "台北市", link: "#" },
    { name: "內湖區", link: "" },
  ]
  return (
    <div>
      {/* Breadcrumb - Block */}
      <Breadcrumb items={breadCrumbList} />
      {/* Banner - Block */}

      {/* Page Title - Block */}
      {/* Page Description - Group - three column*/}
      {/* HashTag - Block - font-bold */}
      {/* Button Group - inline - About 查看類似商品、團購訂單 */}
      {/* Outlet about Left Sidebar , Right Product List */}
    </div>
  )
}

export default IndexPage
