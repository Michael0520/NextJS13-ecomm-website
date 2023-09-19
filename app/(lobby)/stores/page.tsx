import { Button } from "@/components/ui/button"
import { Shell } from "@/components/shells/shell"

import StoreList from "../components/store-list"

const StoreListPage = () => {
  return (
    <Shell>
      <div className="flex gap-4">
        <Button>Filter</Button>
        <Button>Sort</Button>
      </div>
      <StoreList />
    </Shell>
  )
}

export default StoreListPage
