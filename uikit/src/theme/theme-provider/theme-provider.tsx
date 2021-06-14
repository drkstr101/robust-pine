/** @format */

import React, { ReactNode } from "react"
import { Theme } from "./theme"

export type ThemeProviderProps = {
  /**
   * primary color of theme.
   */
  color?: string

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode
}

export function ThemeProvider({ color, children }: ThemeProviderProps) {
  return <Theme.Provider value={{ color }}>{children}</Theme.Provider>
}
