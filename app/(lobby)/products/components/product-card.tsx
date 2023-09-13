import React from "react"
import Image from "next/image"

import { ProductType } from "@/lib/validations/product"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export enum CardType {
  Basic = "Basic",
  Hot = "Hot",
  SoldOut = "SoldOut",
}

interface ProductCardProps extends Omit<ProductType, "footer"> {
  type: CardType
}

const renderBadge = (type: CardType) =>
  type === CardType.Hot && (
    <div className="absolute right-0 top-0 z-30 m-2">
      <span className="rounded-full bg-red-500 px-2 py-1 text-white">
        熱售中
      </span>
    </div>
  )

const soldOutCover = (type: CardType) =>
  type === CardType.SoldOut && (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80">
      <span className="text-4xl font-bold text-white">售完</span>
    </div>
  )

const ProductCard: React.FC<ProductCardProps> = ({
  type,
  name,
  inventory,
  images,
  price,
}) => {
  const mainImage = images ? images[0] : null

  return (
    <Card className="h-full overflow-hidden transition duration-500 hover:z-10 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        {renderBadge(type)}

        <div className="relative z-10 h-48 w-full">
          {mainImage ? (
            <Image
              src={mainImage}
              alt={name || "Image"}
              fill
              className="object-cover object-center"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-secondary">
              <Icons.placeholder
                className="h-9 w-9 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          )}
          {soldOutCover(type)}
        </div>

        <CardHeader className="py-3">
          <CardTitle>{name || "卡片標題"}</CardTitle>
        </CardHeader>
      </div>

      <CardContent className="flex flex-col items-start gap-2 py-3">
        <Badge className="mt-2 text-xs sm:mt-0">
          庫存：{inventory || "未知"}
        </Badge>
        <div className="flex w-full items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Icons.ArrowRightCircle />
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
