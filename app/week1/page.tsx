import Link from "next/link"
import { Code } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { ExampleBlock } from "@/components/example-block"

export default function Week1Page() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Week1 - React JSX
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <ExampleBlock
        title="Example01"
        description="example01"
        content="
              console.log('example01')
              "
      />
      <ExampleBlock
        title="Example02"
        description="example02"
        content="
              console.log('example02')
              "
      />
    </section>
  )
}
