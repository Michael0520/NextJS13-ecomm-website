"use client"

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
}
const ProductListFilterSheet = ({
  disabled,
  storeList,
}: ProductListFilterSheetProps) => {
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
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium tracking-wide text-foreground">
              Stores
            </h3>
            <ScrollArea className="h-[calc(100%-10rem)]">
              <div className="space-y-4">
                {storeList.map((store) => (
                  <div key={store.id} className="flex items-center space-x-2">
                    <Checkbox id={`store-${store.id}`} />
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
      </SheetContent>
    </Sheet>
  )
}

export default ProductListFilterSheet
