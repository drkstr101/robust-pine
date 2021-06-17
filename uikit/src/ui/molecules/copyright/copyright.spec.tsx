import React from "react"
import { render } from "@testing-library/react"
import { BasicCopyright } from "./copyright.composition"

it("should render with the correct text", () => {
  const { getByText } = render(<BasicCopyright />)
  const rendered = getByText("hello from Copyright")
  expect(rendered).toBeTruthy()
})
