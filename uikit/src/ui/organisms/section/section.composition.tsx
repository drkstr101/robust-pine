import React from "react"
import { Box, Typography } from "@material-ui/core"
import Section from "."

export function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <Section>
        <Typography>This is section with default padding</Typography>
      </Section>
    </Box>
  )
}
