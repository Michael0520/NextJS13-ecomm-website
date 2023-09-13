import { cartItemSchema } from "@/lib/validations/cart"
import { z } from "zod"

export interface StoredFile {
    id: string
    name: string
    url: string
}

export type CartLineItem = z.infer<typeof cartItemSchema>