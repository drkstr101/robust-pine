import React from "react"
import { Box, Typography } from "@material-ui/core"
import SectionAlternate from "."

export function Example() {
  return (
    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">
      <SectionAlternate>
        <Typography>This is section with default padding</Typography>
      </SectionAlternate>
    </Box>
  )
}
