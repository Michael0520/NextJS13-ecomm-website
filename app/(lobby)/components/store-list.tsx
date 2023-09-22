"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { useSelector } from "@/lib/redux"
import { selectAllStores } from "@/lib/redux/slices/storeSlice/selectors"
import { Shell } from "@/components/shells/shell"

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
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl"
        >
          Store List
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto mt-4 max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
        >
          Find the best skateboarding gears from stores around the world
        </motion.p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isClient &&
          storeList.map((store, index) => (
            <div key={index} className="col-span-1">
              <StoreCard store={store} />
            </div>
          ))}
      </div>
    </>
  )
}

export default StoreList
