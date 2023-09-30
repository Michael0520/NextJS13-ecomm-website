"use client"

import * as React from "react"
import { signIn } from "next-auth/react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"

interface SignInFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignInForm = ({ className, ...props }: SignInFormProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const ButtonContent = ({ platform }: { platform: string }) => (
    <>
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : platform === "google" ? (
        <Icons.google className="mr-2 h-4 w-4" />
      ) : (
        <Icons.gitHub className="mr-2 h-4 w-4" />
      )}
      Sign In with {platform.charAt(0).toUpperCase() + platform.slice(1)}
    </>
  )

  const handleClick = (platform: string) => {
    signIn(platform)
  }

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            <ButtonContent platform="email" />
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      {["google", "github"].map((platform) => (
        <Button
          key={platform}
          variant="outline"
          type="button"
          disabled={isLoading}
          onClick={() => handleClick(platform)}
        >
          <ButtonContent platform={platform} />
        </Button>
      ))}
    </div>
  )
}

export default SignInForm
