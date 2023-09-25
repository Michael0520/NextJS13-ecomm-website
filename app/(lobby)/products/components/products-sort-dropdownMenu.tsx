"use client"

import { useTransition } from "react"

import { SortOption, sortOptions } from "@/config/products" // 引入 SortOption
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"

interface ProductListSortDropdownMenuProps {
  onSortChange: (option: SortOption) => void
}

const ProductListSortDropdownMenu: React.FC<
  ProductListSortDropdownMenuProps
> = ({ onSortChange }) => {
  const [isPending, startTransition] = useTransition()

  const handleSortChange = (value: SortOption) => {
    startTransition(() => {
      onSortChange(value)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="Sort products" size="sm" disabled={isPending}>
          Sort
          <Icons.chevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.label}
            onClick={() => handleSortChange(option.value)}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProductListSortDropdownMenu
