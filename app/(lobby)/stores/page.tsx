"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

import { useSelector } from "@/lib/redux"
import { selectAllStores } from "@/lib/redux/slices/storeSlice/selectors"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shell } from "@/components/shells/shell"

import StoreCard from "../components/store-card"

const StoreListPage: React.FC = () => {
  const storeList = useSelector(selectAllStores)
  const [isClient, setIsClient] = useState(false)

  const [searchTerm, setSearchTerm] = useState("")
  const [activeSearchTerm, setActiveSearchTerm] = useState("")

  const filteredStores = useMemo(() => {
    if (activeSearchTerm === "") {
      return storeList
    }
    return storeList.filter((store) =>
      store.name.toLowerCase().includes(activeSearchTerm.toLowerCase())
    )
  }, [storeList, activeSearchTerm])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setActiveSearchTerm(searchTerm)
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Shell>
      <section className="mb-8">
        <h3 className="text-4xl font-bold">Stores</h3>
        <p className="opacity-70">Buy products from our stores</p>
      </section>
      <div className="mb-4 flex gap-4">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <form
            className="flex w-full max-w-sm items-center space-x-2"
            onSubmit={handleSearch}
          >
            <Input
              type="text"
              placeholder="store name"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </div>
      {isClient && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredStores.map((store, index) => (
            <Link href={`/store/${store.id}`} key={`${store.id}-${index}-id`}>
              <StoreCard store={store} />
            </Link>
          ))}
        </div>
      )}
    </Shell>
  )
}

export default StoreListPage
