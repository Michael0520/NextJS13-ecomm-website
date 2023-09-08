// import { currentUser } from "@clerk/nextjs"

import { SiteHeader } from "@/components/site-header"

interface LobbyLayoutProps {
  children: React.ReactNode
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  //   const user = await currentUser()

  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}
