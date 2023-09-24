"use client"

import { useEffect } from "react"
import { supabase } from "@/service/index"

import { Shell } from "@/components/shells/shell"

import HeroSection from "./components/hero-section"
import StoreList from "./components/store-list"

const LobbyIndexPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("store").select("*")
      const twimgs = data
      console.log(twimgs)

      return {
        twimgs,
      }
    }

    fetchData()
  }, [])

  return (
    <Shell>
      <HeroSection />
      <StoreList />
    </Shell>
  )
}

export default LobbyIndexPage
