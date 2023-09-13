"use client"

import { useId, useTransition } from "react"
import type { CartLineItem } from "@/types"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

interface UpdateCartProps {
  cartLineItem: CartLineItem
}

export function UpdateCart({ cartLineItem }: UpdateCartProps) {
  const id = useId()
  const [isPending, startTransition] = useTransition()

  return (
    <div className="xs:w-auto xs:justify-normal flex w-full items-center justify-between space-x-2">
      <div className="flex items-center">
        <Button
          id={`${id}-decrement`}
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-r-none"
          onClick={() => {
            startTransition(async () => {
              try {
                console.log("decrement")
                // await updateCartItemAction({
                //   productId: cartLineItem.id,
                //   quantity: Number(cartLineItem.quantity) - 1,
                // })
              } catch (err) {
                console.log(err)
              }
            })
          }}
          disabled={isPending}
        >
          <Icons.remove className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">Remove one item</span>
        </Button>
        <Input
          id={`${id}-quantity`}
          type="number"
          min="0"
          className="h-8 w-14 rounded-none border-x-0"
          value={cartLineItem.quantity}
          onChange={(e) => {
            startTransition(async () => {
              try {
                console.log("quantity")
                // await updateCartItemAction({
                //   productId: cartLineItem.id,
                //   quantity: Number(cartLineItem.quantity) - 1,
                // })
              } catch (err) {
                console.log(err)
              }
            })
          }}
          disabled={isPending}
        />
        <Button
          id={`${id}-increment`}
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-l-none"
          onClick={() => {
            startTransition(async () => {
              try {
                console.log("increment")
                // await updateCartItemAction({
                //   productId: cartLineItem.id,
                //   quantity: Number(cartLineItem.quantity) + 1,
                // })
              } catch (err) {
                console.log(err)
              }
            })
          }}
          disabled={isPending}
        >
          <Icons.add className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">Add one item</span>
        </Button>
      </div>
      <Button
        id={`${id}-delete`}
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={() => {
          startTransition(async () => {
            try {
              console.log("delete")
              //   await deleteCartItemAction({
              //     productId: cartLineItem.id,
              //   })
            } catch (err) {
              console.log(err)
            }
          })
        }}
        disabled={isPending}
      >
        <Icons.trash className="h-3 w-3" aria-hidden="true" />
        <span className="sr-only">Delete item</span>
      </Button>
    </div>
  )
}
