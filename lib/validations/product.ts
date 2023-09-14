import * as z from "zod"

import { SaleStatus } from "@/app/(lobby)/products/components/product-card"

export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(1, {
    message: "Must be at least 1 character",
  }),
  description: z.string().optional(),
  type: z.nativeEnum(SaleStatus),
  inventory: z.number(),
  footer: z.string().optional(),
  images: z.array(z.string()).optional(),
  price: z.number(),
})

export type ProductType = z.infer<typeof productSchema>
