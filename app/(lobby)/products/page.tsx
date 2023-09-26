"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { toast } from "sonner"

import { DEFAULT_PRICE_RANGE, PriceRange, SortOption } from "@/config/products"
import { cartSlice, useDispatch, useSelector } from "@/lib/redux"
import { CartType } from "@/lib/validations/cart"
import { ProductType } from "@/lib/validations/product"
import { StoreType } from "@/lib/validations/store"
import { useDebounce } from "@/hooks/useDebounce"
import { Icons } from "@/components/icons"
import { Shell } from "@/components/shells/shell"

import ProductListCard from "./components/products-card"
import ProductListFilterSheet from "./components/products-filter-sheet"
import ProductListSortDropdownMenu from "./components/products-sort-dropdownMenu"

interface StarProps {
  full: boolean
}

// TODO:rating feature
const Star: React.FC<StarProps> = ({ full }) => (
  <Icons.star
    className={`h-5 w-5 ${full ? "text-yellow-300" : "text-gray-300"}`}
  />
)

const ProductListPage: React.FC = () => {
  const dispatch = useDispatch()
  const storeList = useSelector((state) => state.storeList.storeList)
  const [isClient, setIsClient] = useState(false)
  const [filteredStoreIds, setFilteredStoreIds] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<PriceRange>(DEFAULT_PRICE_RANGE)
  const debouncedPrice = useDebounce(priceRange, 500)

  const [sortOption, setSortOption] = useState<SortOption | null>(null)

  const handleStoreFilterChange = (selectedStoreIds: string[]) => {
    setFilteredStoreIds(selectedStoreIds)
  }

  const handlePriceRangeChange = (newPriceRange: PriceRange) => {
    setPriceRange(newPriceRange)
  }

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
    toast.success("Added to cart.")
  }

  const filteredProducts = useMemo(() => {
    return storeList.reduce((acc: ProductType[], store: StoreType) => {
      if (
        store.products &&
        (filteredStoreIds.length === 0 || filteredStoreIds.includes(store.id))
      ) {
        const productsInPriceRange = store.products.filter(
          (product) =>
            product.price >= debouncedPrice[0] &&
            product.price <= debouncedPrice[1]
        )
        return [...acc, ...productsInPriceRange]
      }
      return acc
    }, [])
  }, [storeList, filteredStoreIds, debouncedPrice])

  const sortedAndFilteredProducts = useMemo(() => {
    let sortedProducts = [...filteredProducts]
    switch (sortOption) {
      case SortOption.PRICE_ASC:
        sortedProducts.sort((a, b) => a.price - b.price)
        break
      case SortOption.PRICE_DESC:
        sortedProducts.sort((a, b) => b.price - a.price)
        break
      case SortOption.NAME_ASC:
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      case SortOption.NAME_DESC:
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name))
        break
      default:
        break
    }
    return sortedProducts
  }, [filteredProducts, sortOption])

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
        <ProductListFilterSheet
          storeList={storeList}
          disabled={!isClient}
          onStoreFilterChange={handleStoreFilterChange}
          priceRange={priceRange}
          onPriceRangeChange={handlePriceRangeChange}
        />
        <ProductListSortDropdownMenu
          disabled={!isClient}
          sortOption={sortOption}
          onSortChange={(option) => setSortOption(option)}
        />
      </div>
      {isClient && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedAndFilteredProducts.map((product, index) => (
            <Link
              href={`/product/${product.id}`}
              key={`${product.id}-${index}-id`}
            >
              <ProductListCard
                key={`${product.id}-${index}-id`}
                product={product}
                handleAddToCart={() => handleAddToCart(product)}
              />
            </Link>
          ))}
        </div>
      )}
    </Shell>
  )
}

export default ProductListPage
