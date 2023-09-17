"use client"

import { useEffect, useState } from "react"

import { useSelector } from "@/lib/redux"
import { selectAllStores } from "@/lib/redux/slices/storeSlice/selectors"

import StoreCard from "./store-card"

const StoreList = () => {
  const storeList = useSelector(selectAllStores)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">
          Store List
        </h2>
        <p className="mx-auto mt-4 max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Find the best skateboarding gears from stores around the world
        </p>
      </div>
      {isClient && (
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {storeList.map((store, index) => (
            <div key={index} className="col-span-1">
              <StoreCard store={store} />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default StoreList
