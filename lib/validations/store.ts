import * as z from "zod"

import { productSchema } from "./product"

export enum OpenStatus {
  OPEN = "open",
  CLOSED = "closed",
  COMING_SOON = "coming_soon",
}

export const storeSchema = z.object({
  id: z.string(),
  name: z.string().min(1, {
    message: "Must be at least 1 character",
  }),
  description: z.string().optional(),
  openStatus: z.nativeEnum(OpenStatus),
  location: z.string(),
  openingHours: z.string().optional(),
  phone: z.string().optional(),
  products: z.array(productSchema).optional(),
  imgURL: z.string().optional(),
})

export type StoreType = z.infer<typeof storeSchema>
