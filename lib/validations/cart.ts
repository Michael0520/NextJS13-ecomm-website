import * as z from "zod"

export const cartItemSchema = z.object({
    productId: z.number(),
    quantity: z.number().min(0),
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
