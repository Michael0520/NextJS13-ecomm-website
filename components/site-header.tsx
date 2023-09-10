import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import CartButton from "./card-button"
import { Combobox } from "./combobox"

export function SiteHeader() {
  const avatarURL = "https://picsum.photos/id/237/800/800"
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* Command */}
            <Combobox />
            {/* Social Media Link */}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            {/* Theme Mode */}
            <ThemeToggle />
            {/* Shop Cart */}
            <CartButton itemCount={1} avatarSrc={avatarURL} />
          </nav>
        </div>
      </div>
    </header>
  )
}
