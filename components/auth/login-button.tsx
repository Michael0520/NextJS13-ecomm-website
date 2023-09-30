"use client"

import Link from "next/link"
import { DefaultSession } from "next-auth"
import { signOut, useSession } from "next-auth/react"

import { Icons } from "../icons"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const LoginAvatar = () => {
  const sessionData: DefaultSession = useSession()?.data || {
    expires: new Date().toISOString(),
  }
  const user: DefaultSession["user"] =
    "user" in sessionData ? sessionData.user : undefined

  const initials = `${user?.name?.charAt(0) ?? ""}`
  const handleClickToSignOut = () => {
    signOut()
  }

  return (
    <>
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              className="relative h-8 w-8 rounded-full"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.image || ""} alt={user.name ?? ""} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup></DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <div onClick={handleClickToSignOut}>
                <Icons.logout className="mr-2 h-4 w-4" aria-hidden="true" />
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/signin">
          <Button size="sm" className="ml-4">
            Sign In
          </Button>
          <span className="sr-only">Sign In</span>
        </Link>
      )}
    </>
  )
}

export default LoginAvatar
