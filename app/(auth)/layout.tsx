import { ReactNode } from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Icons } from "@/components/icons"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <div className="container relative grid h-[100dvh] items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/"
          className="absolute left-8 top-8 flex gap-2 md:right-8 lg:hidden"
        >
          <Icons.popcorn />
          Modern eat
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <Image
            src="https://images.unsplash.com/photo-1572536578780-e093289832fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
            fill
            priority
            alt="image"
            className="absolute inset-0 object-cover opacity-50"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Link
            href="/"
            className="relative z-20 flex items-center gap-2 text-lg font-medium"
          >
            <Icons.popcorn />
            Modern eat
          </Link>
          <div className="absolute bottom-6 left-8 z-20 line-clamp-1 text-base">
            Photo by{" "}
            <a
              href="https://unsplash.com/ja/@pixelperfektion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              className="hover:underline"
            >
              pixelperfektion
            </a>
            {" on "}
            <a
              href="https://unsplash.com/photos/OS2WODdxy1A?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
              className="hover:underline"
            >
              Unsplash
            </a>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            {children}
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
