"use client"

import { useId, useTransition } from "react"
import type { CartLineItem } from "@/types"

import { cartSlice, useDispatch } from "@/lib/redux"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

interface UpdateCartProps {
  cartLineItem: CartLineItem
}

export function UpdateCart({ cartLineItem }: UpdateCartProps) {
  const id = useId()
  const [isPending, startTransition] = useTransition()
  const dispatch = useDispatch()

  // Decrement quantity
  const handleDecrement = () => {
    const updatedItem = { ...cartLineItem, quantity: cartLineItem.quantity - 1 }
    dispatch(cartSlice.actions.updateItem(updatedItem))
  }

  // Increment quantity
  const handleIncrement = () => {
    const updatedItem = { ...cartLineItem, quantity: cartLineItem.quantity + 1 }
    dispatch(cartSlice.actions.updateItem(updatedItem))
  }

  // remove product
  const handleDelete = () => {
    dispatch(cartSlice.actions.removeItem(Number(cartLineItem.id)))
  }

  // update quantity
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedItem = { ...cartLineItem, quantity: Number(e.target.value) }
    dispatch(cartSlice.actions.updateItem(updatedItem))
  }

  const handleAction = (action: Function) => () => {
    startTransition(async () => {
      try {
        console.log("action")
        action()
      } catch (err) {
        console.log(err)
      }
    })
  }

  return (
    <div className="xs:w-auto xs:justify-normal flex w-full items-center justify-between space-x-2">
      <div className="flex items-center">
        {/* decrement */}
        <Button
          id={`${id}-decrement`}
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-r-none"
          onClick={handleAction(handleDecrement)}
          disabled={isPending}
        >
          <Icons.remove className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">Remove one item</span>
        </Button>
        {/* Input */}
        <Input
          id={`${id}-quantity`}
          type="number"
          min="0"
          className="h-8 w-14 rounded-none border-x-0"
          value={cartLineItem.quantity}
          onChange={(e) => {
            const action = handleAction(() => handleQuantityChange(e))
            action()
          }}
          disabled={isPending}
        />
        {/* increment */}
        <Button
          id={`${id}-increment`}
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-l-none"
          onClick={handleAction(handleIncrement)}
          disabled={isPending}
        >
          <Icons.add className="h-3 w-3" aria-hidden="true" />
          <span className="sr-only">Add one item</span>
        </Button>
      </div>
      {/* Remove */}
      <Button
        id={`${id}-delete`}
        variant="outline"
        size="icon"
        className="h-8 w-8"
        onClick={handleAction(handleDelete)}
        disabled={isPending}
      >
        <Icons.trash className="h-3 w-3" aria-hidden="true" />
        <span className="sr-only">Delete item</span>
      </Button>
    </div>
  )
}
