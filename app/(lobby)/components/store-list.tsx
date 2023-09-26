"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { useSelector } from "@/lib/redux"
import { selectAllStores } from "@/lib/redux/slices/storeSlice/selectors"
import { Button } from "@/components/ui/button"

import ProductCard from "../store/[id]/components/product-card"
import StoreCard from "./store-card"

const StoreList = () => {
  const storeList = useSelector(selectAllStores)
  const productListData = useSelector((state) => state.storeList.productList)
  const topFourStores = storeList.slice(0, 4)

  const topTwelveProducts = productListData.slice(0, 12)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="flex flex-col gap-24">
      {/* popular stores */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl leading-[1.1] sm:text-2xl md:text-4xl"
          >
            Popular Stores
          </motion.h2>
          <motion.div
            className="text-center"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/stores">
              <Button size="sm">View all</Button>
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isClient &&
            topFourStores.map((store, index) => (
              <div key={index} className="col-span-1">
                <StoreCard store={store} />
              </div>
            ))}
        </div>
      </div>
      {/* popular products */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl leading-[1.1] sm:text-2xl md:text-4xl"
          >
            Popular Products
          </motion.h2>
          <motion.div
            className="text-center"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Link href="/products">
              <Button size="sm">View all</Button>
            </Link>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {isClient &&
            topTwelveProducts.map((product, index) => (
              <div key={index} className="col-span-1">
                <ProductCard {...product} />
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default StoreList
