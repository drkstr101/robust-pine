/** @format */

import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"

import { useMediaQuery, Grid } from "@material-ui/core"
import { LearnMoreLink, Image } from "@waweb/atoms"
import { SectionHeader } from "@waweb/molecules"
import { CardBase } from "@waweb/organisms"

const useStyles = makeStyles(() => ({
  logo: {
    maxWidth: 50,
  },
}))

const Integrations = ({
  data,
  className,
  ...rest
}: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={6}>
              <SectionHeader
                title="Application Modernization "
                subtitle="Our Application Modernization Services help you upgrade your legacy applications to a modern cloud-native microservices core, allowing businesses to innovate faster and scale while reducing technical debt."
                align="left"
                label="Our services"
                ctaGroup={[
                  <LearnMoreLink
                    title="Learn more"
                    href="/support#contact"
                    variant="h6"
                  />,
                ]}
                disableGutter
                data-aos="fade-up"
              />
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Image
                src="https://assets.maccarianagency.com/the-front/illustrations/progressive-app.svg"
                alt="Integrations"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={isMd ? 4 : 2}
            direction={isMd ? "row" : "column-reverse"}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Grid container spacing={2}>
                {data.map((item: any, index: number) => (
                  <Grid item xs={4} key={index}>
                    <CardBase withShadow liftUp>
                      <Image
                        src={item.logo}
                        alt={item.name}
                        className={classes.logo}
                        lazy={false}
                      />
                    </CardBase>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <SectionHeader
                title="01 Assess & Prioritize "
                subtitle="We evaluate legacy applications on two critical points - value to the business and its technical debt over time. We then prioritize incremental changes to IT systems, starting first with at highest ROIs."
                align="left"
                label="Our approach"
                ctaGroup={[
                  <LearnMoreLink
                    title="See case study"
                    href="#"
                    variant="h6"
                  />,
                ]}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Integrations
