import React from "react"
import { DarkTheme } from "./theme.composition"
import { render } from "@testing-library/react"

it("should render the button in the dark scheme", () => {
  const { getByText } = render(<DarkTheme />)
  const rendered = getByText("Watheia Labs, LLC")
  expect(rendered).toBeTruthy()
})
