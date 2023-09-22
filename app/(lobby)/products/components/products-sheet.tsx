"use client"

import { useCallback, useEffect, useState } from "react"

import { StoreType } from "@/lib/validations/store"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

type ProductListFilterSheetProps = {
  disabled?: boolean
  storeList: StoreType[]
  priceRange: [number, number]
  onStoreFilterChange: (selectedStoreIds: string[]) => void
  onPriceRangeChange: (price: [number, number]) => void
}
const ProductListFilterSheet = ({
  disabled,
  storeList,
  priceRange,
  onStoreFilterChange,
  onPriceRangeChange,
}: ProductListFilterSheetProps) => {
  const [storeIds, setStoreIds] = useState<string[]>([])

  const clearFilters = () => {
    setStoreIds([])
    onStoreFilterChange([])
  }

  const handleStoreCheckboxChange = useCallback(
    (storeId: string, isChecked: boolean) => {
      setStoreIds((prevIds) =>
        isChecked
          ? [...prevIds, storeId]
          : prevIds.filter((id) => id !== storeId)
      )
    },
    []
  )

  useEffect(() => {
    onStoreFilterChange(storeIds)
  }, [storeIds, onStoreFilterChange])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button disabled={disabled} size="sm">
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="px-1">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="flex flex-1 flex-col gap-5 px-1">
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wide text-foreground">
              Price range ($)
            </h3>
            <Slider
              defaultValue={[33]}
              max={100}
              step={1}
              value={priceRange}
              onValueChange={(value: typeof priceRange) =>
                onPriceRangeChange(value)
              }
            />
            <div className="flex items-center space-x-4">
              <Input
                type="number"
                inputMode="numeric"
                min={0}
                max={priceRange[1]}
                className="h-9"
                value={priceRange[0]}
                onChange={(e) => {
                  const value = Number(e.target.value)
                  onPriceRangeChange([value, priceRange[1]])
                }}
              />
              <span className="text-muted-foreground">-</span>
              <Input
                type="number"
                inputMode="numeric"
                min={priceRange[0]}
                max={500}
                className="h-9"
                value={priceRange[1]}
                onChange={(e) => {
                  const value = Number(e.target.value)
                  onPriceRangeChange([priceRange[0], value])
                }}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wide text-foreground">
              Stores
            </h3>
            <ScrollArea className="h-[calc(100%-10rem)]">
              <div className="space-y-4">
                {storeList.map((store) => (
                  <div key={store.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`store-${store.id}`}
                      checked={storeIds.includes(store.id)}
                      onCheckedChange={(isChecked) => {
                        handleStoreCheckboxChange(store.id, !!isChecked)
                      }}
                    />
                    <Label
                      htmlFor={`store-${store.id}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {store.name}
                    </Label>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
        <Separator className="my-4" />
        <SheetFooter>
          <Button
            aria-label="Clear filters"
            size="sm"
            className="w-full"
            onClick={clearFilters}
          >
            Clear Filters
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default ProductListFilterSheet
