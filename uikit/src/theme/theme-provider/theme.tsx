/** @format */

import { createContext } from "react"

export type ThemeProps = {
  /**
   * primary color of theme.
   */
  color?: string
}

export const Theme = createContext<ThemeProps>({
  color: "aqua",
})
