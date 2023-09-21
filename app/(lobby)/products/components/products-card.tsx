import Image from "next/image"

import { ProductType } from "@/lib/validations/product"
import { AspectRatio } from "@/components/ui/aspect-ratio"
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

type SelectedProductType = Pick<
  ProductType,
  "name" | "images" | "description" | "price"
>

interface ProductCardProps {
  product: SelectedProductType
  handleAddToCart: () => void
}

const ProductListCard: React.FC<ProductCardProps> = ({
  product,
  handleAddToCart,
}) => {
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
        <Button className="rounded0 px-4 py-2" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductListCard
