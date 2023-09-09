import { SiteHeader } from "@/components/site-header"

interface LobbyLayoutProps {
  children: React.ReactNode
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1">{children}</main>
    </div>
  )
}
