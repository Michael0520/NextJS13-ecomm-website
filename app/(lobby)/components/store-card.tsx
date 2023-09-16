"use client"

import Image from "next/image"

import { OpenStatus, StoreType } from "@/lib/validations/store"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
  store: StoreType
}

const StoreCard: React.FC<Props> = ({ store }) => {
  const imgURL = store.imgURL ?? "/images/placeholder.png"

  return (
    <Card className="relative h-full rounded-lg border shadow transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <Image
        className="h-32 w-full rounded-t-lg object-cover"
        src={imgURL}
        alt={store.name}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        width={500}
        height={500}
        priority
      />
      <CardContent className="p-5">
        <CardHeader className="mb-2">
          <CardTitle as="h3" className="text-2xl font-bold tracking-tight">
            {store.name}
          </CardTitle>
        </CardHeader>
        <CardDescription className="mb-3">{store.description}</CardDescription>
        <div className="mb-2 flex justify-between text-sm">
          <span>{store.location}</span>
          <span>{store.openingHours}</span>
        </div>
        <div className="flex justify-between">
          <a href={`tel:${store.phone}`} className="text-sm text-blue-500">
            {store.phone}
          </a>
          <Badge
            className="w-auto"
            variant={
              store.openStatus === OpenStatus.OPEN ? "default" : "destructive"
            }
          >
            {store.openStatus}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export default StoreCard
