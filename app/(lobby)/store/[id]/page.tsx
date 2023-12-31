"use client"

import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { GridIcon, PlusIcon } from "@radix-ui/react-icons"

import { useSelector } from "@/lib/redux"
import { ProductCategory, ProductType } from "@/lib/validations/product"
import { Button } from "@/components/ui/button"
import { Shell } from "@/components/shells/shell"

import ProductCard from "./components/product-card"
import { SidebarNav } from "./components/sidebar-nav"

const IndexPage = ({ params }: { params: { id: string } }) => {
  const [isClient, setIsClient] = useState(false)
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const handleOnMenuCategoryClick = (index: number) => {
    setActiveCategory(index)
  }

  const storeData = useSelector((state) => {
    return state.storeList.storeList.find((store) => store.id === params.id)
  })

  const { name, description, imgURL } = storeData ?? {}

  const productListData = useMemo(() => {
    return storeData?.products ?? []
  }, [storeData])

  const modifiedProductListData = useMemo(() => {
    const hotProducts = productListData.filter(
      (product) => product.category === ProductCategory.HOT
    )

    const otherProducts = productListData.filter(
      (product) => product.category !== ProductCategory.HOT
    )

    return [...hotProducts, ...otherProducts]
  }, [productListData])

  const productsByCategory = modifiedProductListData.reduce<{
    [key: string]: ProductType[]
  }>((acc, product) => {
    const { category } = product
    if (!acc[category!]) {
      acc[category!] = []
    }
    acc[category!].push(product)
    return acc
  }, {})

  const categories = useMemo(
    () => [
      ProductCategory.HOT,
      ...Object.keys(productsByCategory).filter(
        (category) => category !== ProductCategory.HOT
      ),
    ],
    [productsByCategory]
  )

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (activeCategory === null) {
      const hotIndex = categories.indexOf(ProductCategory.HOT)
      if (hotIndex !== -1) {
        setActiveCategory(hotIndex)
      } else {
        setActiveCategory(0)
      }
    }
    if (activeCategory !== null) {
      const activeSection = sectionRefs.current[categories[activeCategory]]

      if (activeSection) {
        const rect = activeSection.getBoundingClientRect()
        const HEADER_HEIGHT = 64
        const offsetTop = window.pageYOffset + rect.top - HEADER_HEIGHT
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }
  }, [categories, activeCategory])

  return (
    <Shell>
      <section className="relative h-[200px] w-full">
        <Image
          src={imgURL || ""}
          alt="Banner Image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          className="object-cover"
        />
      </section>
      <section className="px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6">
        <header className="text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            {name || "Store Name"}
          </h1>
          <p className="mt-2 text-xl text-gray-700 dark:text-gray-300">
            {description || "Store Description"}
          </p>
        </header>
      </section>
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
      <div className="px-6 text-sm font-bold text-gray-600 dark:text-gray-400 sm:px-8 md:px-12">
        $ • 早餐和早午餐
      </div>
      <section className="flex gap-3 px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6">
        <Button className="rounded-full">
          <GridIcon className="mr-2 h-4 w-4" /> 查看類似商品
        </Button>
        <Button className="rounded-full">
          <PlusIcon className="mr-2 h-4 w-4" /> 團購訂單
        </Button>
      </section>
      {isClient && (
        <section className="relative flex flex-col items-start space-y-8 overflow-hidden px-6 py-3 sm:px-8 sm:py-4 md:px-12 md:py-6 lg:flex-row lg:space-x-12 lg:space-y-0 lg:overflow-visible">
          <aside className="z-20 max-h-screen w-full overflow-x-auto lg:sticky lg:left-0 lg:top-[84px] lg:w-1/6">
            <SidebarNav
              items={categories}
              activeCategoryIndex={activeCategory}
              onClick={handleOnMenuCategoryClick}
            />
          </aside>
          <Suspense>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Object.keys(productsByCategory).map((category) => (
                <section
                  className="col-span-full"
                  key={category}
                  ref={(el) =>
                    (sectionRefs.current[category] = el as HTMLDivElement)
                  }
                >
                  <div className="mb-4 border-b border-gray-300 pb-2">
                    <h2 className="text-2xl font-bold">{category}</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {productsByCategory[category].map((product, index) => (
                      <Link href={`/product/${product.id}`} key={product.id}>
                        <ProductCard {...product} />
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </Suspense>
        </section>
      )}
    </Shell>
  )
}

export default IndexPage
