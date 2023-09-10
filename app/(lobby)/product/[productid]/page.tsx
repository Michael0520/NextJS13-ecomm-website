import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { AddToCartForm } from "@/components/forms/add-store-form"
import { ProductImageCarousel } from "@/components/product-image-carousel"
import { Shell } from "@/components/shells/shell"

const ProductPage = () => {
  const imageList = [
    {
      id: "0",
      name: "random01",
      url: "https://picsum.photos/id/237/800/800",
    },
    {
      id: "1",
      name: "random02",
      url: "https://picsum.photos/id/238/800/800",
    },
    {
      id: "2",
      name: "random03",
      url: "https://picsum.photos/id/239/800/800",
    },
  ]
  return (
    <Shell>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16">
        {/* 圖片區域 */}
        <ProductImageCarousel
          className="w-full md:w-1/2"
          images={imageList}
          options={{
            loop: true,
          }}
        />
        <Separator className="mt-4 md:hidden" />

        {/* 產品詳情區域 */}
        <div className="card flex-1">
          {/* 產品名稱 */}
          <h1 className="title mb-4 text-2xl font-bold">Product Name</h1>

          {/* 產品價格 */}
          <div className="price mb-4 text-xl font-semibold">$100.00</div>
          {/* 標籤 */}
          <div className="shop mb-4 cursor-pointer text-base text-blue-600">
            Hast Tags
          </div>

          {/* 數量選擇與添加到購物車的按鈕 */}
          <AddToCartForm productId={1} />

          <Separator className="mt-5" />
          {/* 產品描述 */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger>Description</AccordionTrigger>
              <AccordionContent>
                No description is available for this product.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Shell>
  )
}

export default ProductPage
