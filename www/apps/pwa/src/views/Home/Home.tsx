/** @format */

import React from "react"
import {
  Divider,
  Button,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core"
import { SectionHeader } from "@waweb/molecules"
import { SectionAlternate } from "@waweb/organisms"
import { Account, Landings, Pages, Hero } from "./components"
import { landings, pages, account } from "./data"

const useStyles = makeStyles(() => ({
  fontWeight900: {
    fontWeight: 900,
  },
}))

const Home = ({ themeMode }): JSX.Element => {
  const classes = useStyles()
  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })
  return (
    <div>
      <Hero />
      <SectionAlternate>
        <>
          <SectionHeader
            title="Watheia Labs in action"
            subtitle="All examples you find below are included in the download package."
            align={isMd ? "center" : "left"}
            titleVariant="h4"
            titleProps={{ className: classes.fontWeight900 }}
            ctaGroup={[
              <Button
                size="large"
                component="a"
                target="blank"
                href="https://watheia.app/support/"
                variant="contained"
                color="primary"
              >
                Get Support
              </Button>,
            ]}
          />
          <Landings data={landings} themeMode={themeMode} />
        </>
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        <Pages data={pages} themeMode={themeMode} />
      </SectionAlternate>
      <Divider />
      <SectionAlternate>
        <Account data={account} themeMode={themeMode} />
      </SectionAlternate>
    </div>
  )
}

export default Home
