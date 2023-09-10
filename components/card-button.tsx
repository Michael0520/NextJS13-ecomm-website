import { FC } from "react"
import Image from "next/image"

import { Icons } from "./icons"
import { Button } from "./ui/button"

interface CartButtonProps {
  itemCount: number
  avatarSrc: string
}

const CartButton: FC<CartButtonProps> = ({
  itemCount,
  avatarSrc,
  ...props
}) => {
  return (
    <Button
      className={`flex items-center space-x-2 overflow-hidden rounded-full ${props}`}
    >
      <div className="relative -ml-2 h-8 w-8">
        <Image
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 rounded-full"
          alt="shopping-card-avatar"
          src={avatarSrc}
        />
      </div>
      <span className="text-sm">{`${itemCount} items`}</span>
      <span className="mx-1 text-sm">|</span>
      <Icons.ShoppingCart className="h-5 w-5" />
    </Button>
  )
}

export default CartButton
