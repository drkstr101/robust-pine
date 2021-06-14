/** @format */

import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Divider } from "@material-ui/core"
import { Section, SectionAlternate } from "@waweb/organisms"

import {
  About,
  Features,
  Hero,
  Integrations,
  Pricings,
  Reviews,
  Subscription,
} from "./components"

import { ctx } from "@waweb/ctx.data"

const useStyles = makeStyles((theme) => ({
  hero: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(-9),
    },
  },
  sectionAlternate: {
    background: "transparent",
    backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 100%, ${theme.palette.background.paper} 0%)`,
    [theme.breakpoints.up("md")]: {
      backgroundImage: `linear-gradient(180deg, ${theme.palette.alternate.main} 50%, ${theme.palette.background.paper} 0%)`,
    },
  },
  reviewSection: {
    background: theme.palette.secondary.main,
  },
  sectionSubscription: {
    paddingTop: theme.spacing(8),
  },
}))

const DesignCompany = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div>
      <Hero data-aos="fade-up" className={classes.hero} />
      <SectionAlternate className={classes.sectionAlternate}>
        <About />
      </SectionAlternate>
      <Section>
        <Integrations data={ctx.integrations} />
      </Section>
      <SectionAlternate innerNarrowed>
        <Features />
      </SectionAlternate>
      <SectionAlternate className={classes.reviewSection}>
        <Reviews data={ctx.reviews} />
      </SectionAlternate>
      <Section className={classes.sectionSubscription}>
        <Subscription data-aos="fade-up" />
      </Section>
      <Divider />
    </div>
  )
}

export default DesignCompany
