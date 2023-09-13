import { z } from "zod"

import { cartItemSchema } from "@/lib/validations/cart"

export interface StoredFile {
  id: string
  name: string
  url: string
}

export type CartLineItem = z.infer<typeof cartItemSchema>
