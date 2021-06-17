/** @format */

import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import React, { ReactNode } from "react"
import { createTheme, ColorScheme, Theme } from "./theme"
import { Provider, defaultTheme, Button } from "@adobe/react-spectrum"
import "./sass/main.scss"

export type ThemeProviderProps = {
  /**
   * primary color of theme.
   */
  colorScheme?: ColorScheme

  /**
   * children to be rendered within this theme.
   */
  children: ReactNode
}

export function ThemeProvider({ colorScheme, children }: ThemeProviderProps) {
  const theme = createTheme(colorScheme)
  return (
    <Theme.Provider value={{ colorScheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider theme={defaultTheme} colorScheme={colorScheme}>
          {children}
        </Provider>
      </MuiThemeProvider>
    </Theme.Provider>
  )
}
