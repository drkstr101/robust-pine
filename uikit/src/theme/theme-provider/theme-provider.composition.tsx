/** @format */

import React, { useContext } from "react"
import { ThemeProvider } from "./theme-provider"
import { Theme } from "./theme"

export function MockComponent() {
  const theme = useContext(Theme)

  return <div style={{ color: theme.color }}>this should be {theme.color}</div>
}

export const BasicThemeUsage = () => {
  return (
    <ThemeProvider color="blue">
      <MockComponent />
    </ThemeProvider>
  )
}
