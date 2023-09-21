"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { useSelector } from "@/lib/redux"
import { ProductType } from "@/lib/validations/product"
import { StoreType } from "@/lib/validations/store"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Shell } from "@/components/shells/shell"

type SelectedProductType = Pick<
  ProductType,
  "name" | "images" | "description" | "price"
>

interface StarProps {
  full: boolean
}

const Star: React.FC<StarProps> = ({ full }) => (
  <Icons.star
    className={`h-5 w-5 ${full ? "text-yellow-300" : "text-gray-300"}`}
  />
)

interface ProductCardProps {
  product: SelectedProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, images, description, price } = product

  /**
   * TODO: rating with stars
   * const stars = Array.from({ length: 5 }, (_, i) => i < rating)
   */

  return (
    <Card className="relative flex h-full flex-col">
      <div className="grow">
        <AspectRatio ratio={16 / 9}>
          {images && images.length > 0 ? (
            <Image
              src={images[0]}
              alt="image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-t-lg object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-t-lg bg-secondary">
              <Icons.placeholder
                className="h-9 w-9 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          )}
        </AspectRatio>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
          {/* TODO: rating with start ui */}
          {/* <div className="mb-5 mt-2.5 flex items-center">
          <Badge className="mr-2">{rating.toFixed(1)}</Badge>
          {stars.map((full, i) => (
            <Star key={`${productName}-star-${i}`} full={full} />
          ))}
        </div> */}
        </CardContent>
      </div>
      <CardFooter className="flex justify-between">
        <p>
          {/* original price */}
          <span className="text-3xl font-bold">${price}</span>

          {/* TODO: discount feature*/}
          <span className="text-sm line-through opacity-50">
            ${(price * 0.85).toFixed(0)}
          </span>
        </p>
        <Button className="rounded0 px-4 py-2 ">Add to cart</Button>
      </CardFooter>
    </Card>
  )
}

const StoreListPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false)
  const storeList = useSelector((state) => state.storeList.storeList)

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
      {isClient && (
        <>
          <div className="mb-4 flex gap-4">
            <Button>Filter</Button>
            <Button>Sort</Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allProducts.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        </>
      )}
    </Shell>
  )
}

export default StoreListPage
