import Image from "next/image"
import Link from "next/link"

import { StoreType } from "@/lib/validations/store"
import { Button } from "@/components/ui/button"

type Props = {
  store: StoreType
}

const StoreCard: React.FC<Props> = ({ store }) => {
  const imgURL = store.imgURL ?? "/images/placeholder.png"

  return (
    <div className="hover:group group relative flex h-[300px] w-full flex-col overflow-hidden rounded-lg text-white shadow-md">
      {/* Header */}
      <div className="absolute top-1 z-20 flex w-full flex-col items-start justify-start p-3">
        <p className="text-tiny font-bold uppercase text-white/60">
          Your day your way
        </p>
        <h4 className="z-20 text-xl font-medium text-white/90">{store.name}</h4>
      </div>

      {/* Image */}
      <div className="absolute inset-0 z-10 bg-zinc-950/50 transition-colors group-hover:bg-zinc-950/50"></div>
      <div className="absolute inset-0 z-0 transition-transform group-hover:scale-110">
        <Image
          src={imgURL}
          alt={store.name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          priority
        />
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 z-10 flex h-auto w-full items-center overflow-hidden rounded-b-lg border-t border-gray-600 bg-black/40 p-3 backdrop-blur backdrop-saturate-150">
        <div className="flex grow items-center gap-2">
          {/* Icon Placeholder */}
          <div className="relative h-11 w-10 shrink-0 rounded-lg bg-transparent">
            <Image
              src={imgURL}
              alt="Breathing App Icon"
              className="relative z-10 h-11 w-10 rounded-full bg-black"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              priority
            />
          </div>
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{store.location}</p>
            <div className="max-h-[50px] overflow-y-auto">
              <p className="text-tiny line-clamp-1 text-white/60">
                {store.description}
              </p>
            </div>
          </div>
        </div>
        <Link href={`/store/${store.id}`}>
          <Button>Shop</Button>
        </Link>
      </div>
    </div>
  )
}

export default StoreCard
