import React from "react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export enum CardType {
  Basic = "Basic",
  Hot = "Hot",
  SoldOut = "SoldOut",
}

interface ProductCardProps {
  type: CardType
  title?: string
  description?: string
  content?: string
  footer?: string
}

// 價格和標籤樣式
enum PriceStyles {
  Basic = "text-gray-600",
  Hot = "text-red-600 font-bold",
  SoldOut = "line-through text-gray-400",
}

const renderBadge = (type: CardType) => {
  if (type === CardType.Hot) {
    return (
      <div className="absolute right-0 top-0 z-30 m-2">
        {type === CardType.Hot && (
          <span className="rounded-full bg-red-500 px-2 py-1 text-white">
            熱售中
          </span>
        )}
      </div>
    )
  }
  return null
}

const soldOutCover = (type: CardType) => {
  if (type === CardType.SoldOut) {
    return (
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80">
        <span className="text-4xl font-bold text-white">售完</span>
      </div>
    )
  }
  return null
}

const ProductCard: React.FC<ProductCardProps> = ({
  type,
  title,
  description,
  content,
  footer,
}) => {
  const imageURL =
    "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"

  return (
    <Card className="h-full transition duration-500 hover:z-10 hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        {/* Hot Badge */}
        {renderBadge(type)}

        {/* Image */}
        <div className="relative z-10 h-48 w-full">
          <Image
            src={imageURL}
            alt={title || "Image"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {/* Sold Out Cover */}
          {soldOutCover(type)}
        </div>

        {/* Title & Description */}
        <CardHeader className="py-2">
          <CardTitle>{title || "卡片標題"}</CardTitle>
          <CardDescription>{description || "卡片描述"}</CardDescription>
        </CardHeader>
      </div>

      {/* Content & Footer */}
      <CardContent className="py-2">
        <span className={`${PriceStyles[type]}`}>
          商品價格：${content || "99"}
        </span>
      </CardContent>
    </Card>
  )
}

export default ProductCard
