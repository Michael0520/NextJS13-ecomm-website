import { notFound } from "next/navigation"
import productListData from "@/public/data/productList.json"

import { ProductType } from "@/lib/validations/product"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { AddToCartForm } from "@/components/forms/add-store-form"
import { ProductImageCarousel } from "@/components/product-image-carousel"
import RatingBadge from "@/components/RatingBadge"
import { Shell } from "@/components/shells/shell"

interface ProductPageProps {
  params: {
    productId: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const targetProduct = productListData.find(
    (item) => item.id === params.productId
  )

  console.log(productListData)
  console.log(targetProduct)
  if (targetProduct) {
    const { name, price, description, images, id } = targetProduct
    return (
      <Shell>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16">
          {/* 圖片區域 */}
          <ProductImageCarousel
            className="w-full md:w-1/2"
            images={images}
            options={{
              loop: true,
            }}
          />
          <Separator className="mt-4 md:hidden" />

          {/* 產品詳情區域 */}
          <div className="card flex-1">
            {/* 產品名稱 */}
            <h1 className="title mb-4 text-2xl font-bold">{name}</h1>

            {/* 產品價格 */}
            <div className="price mb-4 text-xl font-semibold">${price}</div>

            {/* RatingBadge */}
            <RatingBadge className="mb-4" />

            {/* 數量選擇與添加到購物車的按鈕 */}
            <AddToCartForm productId={id} />

            <Separator className="mt-5" />
            {/* 產品描述 */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{description}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Shell>
    )
  }
  if (!targetProduct) {
    notFound()
  }
}
