import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
// TODO:cart-items-ui
// import { CartLineItems } from "@/components/checkout/cart-line-items"
import { Icons } from "@/components/icons"

// import { getCartAction } from "@/app/_actions/cart"

export async function CartSheet() {
  const itemCount = 0
  const avatarURL = "https://picsum.photos/id/237/800/800"
  const hasItem = itemCount > 0

  return (
    <Sheet>
      {/* Shop Cart Button */}
      <SheetTrigger asChild>
        {/* Mobile Button */}
        <div className="">
          <div className="block md:hidden">
            <Button
              aria-label="Open cart"
              variant="outline"
              size="icon"
              className="relative"
            >
              {itemCount > 0 && (
                <Badge
                  variant="secondary"
                  className="absolute -right-2 -top-2 h-6 w-6 justify-center rounded-full p-2.5"
                >
                  {itemCount}
                </Badge>
              )}
              <Icons.ShoppingCart className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button
              className={`flex items-center space-x-2 overflow-hidden rounded-full`}
              variant="outline"
            >
              <div className="relative -ml-2 h-8 w-8">
                <Image
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 rounded-full"
                  alt="shopping-card-avatar"
                  src={avatarURL}
                />
              </div>
              <span className="text-sm">{`${itemCount} items`}</span>
              <span className="mx-1 text-sm">|</span>
              <Icons.ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </SheetTrigger>

      {/* Sheet Content */}
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Cart {hasItem && `(${itemCount})`}</SheetTitle>
        </SheetHeader>
        <div className="pr-6">
          <Separator />
        </div>
        {hasItem ? (
          <>
            <div className="flex flex-1 flex-col gap-5 overflow-hidden">
              {/* <CartLineItems items={cartLineItems} /> */}
            </div>
            <div className="grid gap-1.5 pr-6 text-sm">
              <Separator className="mb-2" />
              <div className="flex">
                <span className="flex-1">Subtotal</span>
                <span>{itemCount}</span>
              </div>
              <div className="flex">
                <span className="flex-1">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex">
                <span className="flex-1">Taxes</span>
                <span>Calculated at checkout</span>
              </div>
              <Separator className="mt-2" />
              <div className="flex">
                <span className="flex-1">Total</span>
                <span>{itemCount}</span>
              </div>
              <SheetFooter className="mt-1.5">
                <SheetTrigger asChild>
                  <Link
                    aria-label="View your cart"
                    href="/cart"
                    className={buttonVariants({
                      size: "sm",
                      className: "w-full",
                    })}
                  >
                    Continue to checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <Icons.ShoppingCart
              className="mb-4 h-16 w-16 text-muted-foreground"
              aria-hidden="true"
            />
            <div className="text-xl font-medium text-muted-foreground">
              Your cart is empty
            </div>
            <SheetTrigger asChild>
              <Link
                aria-label="Add items to your cart to checkout"
                href="/products"
                className={cn(
                  buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "text-sm text-muted-foreground",
                  })
                )}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
