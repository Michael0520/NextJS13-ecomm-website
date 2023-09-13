"use client"

import React, { useCallback, useId, useTransition } from "react"
import type { CartLineItem } from "@/types"

import { cartSlice, useDispatch } from "@/lib/redux"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

interface UpdateCartProps {
  cartLineItem: CartLineItem
}

export function UpdateCart({ cartLineItem }: UpdateCartProps) {
  const { quantity } = cartLineItem

  const id = useId()
  const [isPending, startTransition] = useTransition()
  const dispatch = useDispatch()

  const handleUpdateItem = useCallback(
    (updatedQuantity: number) => {
      const updatedItem = { ...cartLineItem, quantity: updatedQuantity }
      dispatch(cartSlice.actions.updateItem(updatedItem))
    },
    [cartLineItem, dispatch]
  )

  const handleAction = useCallback(
    (action: Function) => () => {
      startTransition(() => {
        try {
          action()
        } catch (err) {
          console.log(err)
        }
      })
    },
    [startTransition]
  )

  const handleDecrement = handleAction(() => handleUpdateItem(quantity - 1))
  const handleIncrement = handleAction(() => handleUpdateItem(quantity + 1))
  const handleDelete = handleAction(() =>
    dispatch(cartSlice.actions.removeItem(Number(cartLineItem.id)))
  )

  const handleQuantityChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      startTransition(() => {
        try {
          handleUpdateItem(Number(e.target.value))
        } catch (err) {
          console.log(err)
        }
      })
    },
    [startTransition, handleUpdateItem]
  )

  return (
    <div className="xs:w-auto xs:justify-normal flex w-full items-center justify-between space-x-2">
      <div className="flex items-center">
        {/* decrement */}
        <Button
          id={`${id}-decrement`}
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-r-none"
          onClick={handleDecrement}
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
          value={quantity}
          onChange={handleQuantityChange}
          disabled={isPending}
        />
        {/* increment */}
        <Button
          id={`${id}-increment`}
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-l-none"
          onClick={handleIncrement}
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
        onClick={handleDelete}
        disabled={isPending}
      >
        <Icons.trash className="h-3 w-3" aria-hidden="true" />
        <span className="sr-only">Delete item</span>
      </Button>
    </div>
  )
}
