"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
/* Core */
import { Provider } from "react-redux"

import { reduxStore } from "@/lib/redux"
/* Instruments */
import { TooltipProvider } from "@/components/ui/tooltip"

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <Provider store={reduxStore} {...props}>
        <TooltipProvider>{children}</TooltipProvider>
      </Provider>
    </NextThemesProvider>
  )
}
