import * as z from "zod"

import { SaleStatus } from "@/app/(lobby)/products/components/product-card"

export enum ProductCategory {
  HOT = "hot",
  FOOD = "food",
  DRINK = "drink",
}

export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(1, {
    message: "Must be at least 1 character",
  }),
  description: z.string().optional(),
  category: z.nativeEnum(ProductCategory).optional(),
  saleStatus: z.nativeEnum(SaleStatus),
  inventory: z.number(),
  footer: z.string().optional(),
  images: z.array(z.string()).optional(),
  price: z.number(),
})

export type ProductType = z.infer<typeof productSchema>
