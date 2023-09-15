import * as z from "zod"

import { SaleStatus } from "@/app/(lobby)/products/components/product-card"

export enum ProductCategory {
  HOT = "hot",
  FOOD = "food",
  DRINK = "drink",
  EGG = "egg",
  SNAKE = "snake",
  PIZZA = "pizza",
  BURGER = "burger",
  SUSHI = "sushi",
  PASTA = "pasta",
  SALAD = "salad",
  DESSERT = "dessert",
  ICE_CREAM = "ice_cream",
  SNACK = "snack",
  SEAFOOD = "seafood",
  CHINESE = "chinese",
  INDIAN = "indian",
  MEXICAN = "mexican",
  VEGETARIAN = "vegetarian",
  GLUTEN_FREE = "gluten_free",
  VEGAN = "vegan",
  BBQ = "bbq",
  STEAK = "steak",
  SOUP = "soup",
  SANDWICH = "sandwich",
  DRINKS = "drinks",
  COFFEE = "coffee",
  TEA = "tea",
  JUICE = "juice",
  SMOOTHIE = "smoothie",
  MILKSHAKE = "milkshake",
  BEER = "beer",
  WINE = "wine",
  COCKTAIL = "cocktail",
  NON_ALCOHOLIC = "non_alcoholic",
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
