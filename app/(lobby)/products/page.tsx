"use client"

import { useEffect, useState } from "react"

import { cartSlice, useDispatch, useSelector } from "@/lib/redux"
import { CartType } from "@/lib/validations/cart"
import { ProductType } from "@/lib/validations/product"
import { StoreType } from "@/lib/validations/store"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Shell } from "@/components/shells/shell"

import ProductListCard from "./components/products-card"
import ProductListFilterSheet from "./components/products-sheet"

interface StarProps {
  full: boolean
}

const Star: React.FC<StarProps> = ({ full }) => (
  <Icons.star
    className={`h-5 w-5 ${full ? "text-yellow-300" : "text-gray-300"}`}
  />
)

const StoreListPage: React.FC = () => {
  const dispatch = useDispatch()
  const [isClient, setIsClient] = useState(false)
  const storeList = useSelector((state) => state.storeList.storeList)
  console.log(storeList)
  const handleAddToCart = (selectedProduct: ProductType) => {
    const { id, name, images, price } = selectedProduct

    const cartItem: CartType = {
      id,
      name,
      price,
      quantity: 1,
      images,
    }

    dispatch(cartSlice.actions.addItem(cartItem))
  }

  const allProducts = storeList.reduce(
    (acc: ProductType[], store: StoreType) => {
      if (store.products) {
        return [...acc, ...store.products]
      }
      return acc
    },
    []
  )

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <Shell>
      <section className="mb-8">
        <h3 className="text-4xl font-bold">Products</h3>
        <p className="opacity-70">Buy products from our stores </p>
      </section>
      <div className="mb-4 flex gap-4">
        <ProductListFilterSheet storeList={storeList} disabled={!isClient} />
        <Button disabled={!isClient}>Sort</Button>
      </div>
      {isClient && (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allProducts.map((product, index) => (
              <ProductListCard
                key={`${product.id}-${index}`}
                product={product}
                handleAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </>
      )}
    </Shell>
  )
}

export default StoreListPage
