"use client"

import { useId, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import type { z } from "zod"

import { updateCartItemSchema } from "@/lib/validations/cart"
import { useQuantity } from "@/hooks/useQuantity"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

// import { addToCartAction } from "@/app/_actions/cart"

interface AddToCartFormProps {
  productId: number
}

type Inputs = z.infer<typeof updateCartItemSchema>

export function AddToCartForm({ productId }: AddToCartFormProps) {
  const { quantity, setQuantity, increment, decrement } = useQuantity(1)

  const handleQuantityChange = (value: string) => {
    const parsedValue = parseInt(value, 10)
    if (!isNaN(parsedValue)) {
      setQuantity(parsedValue)
    }
  }
  const id = useId()
  const [isPending, startTransition] = useTransition()

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(updateCartItemSchema),
    defaultValues: {
      quantity: 1,
    },
  })

  const onSubmit = (data: Inputs) => {
    // TODO:Redux Update Cart
    // startTransition(async () => {
    //   try {
    //     // await addToCartAction({
    //     //   productId,
    //     //   quantity: data.quantity,
    //     // })
    //   } catch (err) {
    //     // catchError(err)
    //     console.log(err)
    //   }
    // })
    toast.success("Added to cart.")
  }

  return (
    <Form {...form}>
      <form
        className="flex items-center space-x-2"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <div className="flex items-center">
          <Button
            id={`${id}-decrement`}
            type="button"
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-r-none"
            onClick={decrement}
            disabled={isPending}
          >
            <Icons.remove className="h-3 w-3" aria-hidden="true" />
            <span className="sr-only">Remove one item</span>
          </Button>
          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormLabel className="sr-only">Quantity</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    inputMode="numeric"
                    min={0}
                    className="h-8 w-14 rounded-none border-x-0"
                    {...field}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            id={`${id}-increment`}
            type="button"
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-l-none"
            onClick={increment}
            disabled={isPending}
          >
            <Icons.add className="h-3 w-3" aria-hidden="true" />
            <span className="sr-only">Add one item</span>
          </Button>
        </div>
        <Button type="submit" size="sm" disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Add to cart
          <span className="sr-only">Add to cart</span>
        </Button>
      </form>
    </Form>
  )
}
