import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarNavProps {
  items: string[]
  activeCategoryIndex: number | null
  onClick: (index: number) => void
}

export function SidebarNav({
  items,
  activeCategoryIndex,
  onClick,
  ...props
}: SidebarNavProps) {
  return (
    <nav
      className={cn(
        "flex space-x-2 whitespace-nowrap lg:flex-col lg:space-x-0 lg:space-y-1 lg:whitespace-normal"
      )}
      {...props}
    >
      {items.map((item, index) => (
        <Button
          key={item}
          variant="ghost"
          className={cn(
            activeCategoryIndex === index
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
          onClick={() => onClick(index)}
        >
          {item}
        </Button>
      ))}
    </nav>
  )
}
