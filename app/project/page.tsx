import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import { Menu } from "./components/week1-menu-header"

export default function ProjectPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {/* Menu Bar */}
      <Menu />

      {/* Breadcrumb */}
      <div className=" bg-red-200">Breadcrumb</div>
      {/* Banner */}
      <div className=" bg-red-300">Banner</div>
      {/* Title */}
      <div className=" bg-red-400">Title</div>
      {/* Description */}
      <div className=" bg-red-500">Description</div>
      {/* Tags */}
      <div className=" bg-red-600">Tags</div>
      {/* SideBar from  food menu */}
      <div className=" bg-red-700">SideBar from food menu</div>
      {/* product list  */}
      <div className=" bg-red-800">product list</div>
    </section>
  )
}
