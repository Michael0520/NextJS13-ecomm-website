import { type SidebarNavItem } from "@/types/nav"

export interface DashboardConfig {
    sidebarNav: SidebarNavItem[]
}

// TODO:Admin Feature
export const dashboardConfig: DashboardConfig = {
    sidebarNav: [
        {
            title: "Account",
            href: "/dashboard/account",
            icon: "user",
            items: [],
        },
        {
            title: "Stores",
            href: "/dashboard/stores",
            icon: "store",
            items: [],
        },
        {
            title: "Billing",
            href: "/dashboard/billing",
            icon: "billing",
            items: [],
        },
        {
            title: "Purchases",
            href: "/dashboard/purchases",
            icon: "dollarSign",
            items: [],
        },
    ],
}
