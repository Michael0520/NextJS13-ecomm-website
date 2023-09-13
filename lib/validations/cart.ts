import * as z from "zod"

export const cartItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    quantity: z.number().min(0),
    price: z.number(),
    images: z.array(z.string()).optional(),
})

export const checkoutItemSchema = cartItemSchema.extend({
    price: z.number(),
})

export const deleteCartItemSchema = z.object({
    productId: z.number(),
})

export const deleteCartItemListSchema = z.object({
    productIds: z.array(z.number()),
})

export const updateCartItemSchema = z.object({
    quantity: z.number().min(0).default(1),
})

export type CartType = z.infer<typeof cartItemSchema>;
