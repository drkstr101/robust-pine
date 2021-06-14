/** @format */

import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery, Grid, Button, Typography } from "@material-ui/core"
import { Image } from "@waweb/atoms"
import { SectionHeader } from "@waweb/molecules"

const useStyles = makeStyles((theme) => ({
  image: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: 500,
    },
  },
}))

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => {
  const classes = useStyles()

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  })

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos={"fade-up"}>
          <SectionHeader
            title={
              <span>
                Welcome to{" "}
                <Typography component="span" variant="inherit" color="primary">
                  Watheia.
                </Typography>
                <br />
                <span>Develop anything your business needs.</span>
              </span>
            }
            subtitle="Build a beautiful, modern website with flexible, fully customizable, atomic Material UI components."
            ctaGroup={[
              <Button variant="contained" color="primary" size="large">
                View Pages
              </Button>,
              <Button variant="outlined" color="primary" size="large">
                Microlab
              </Button>,
            ]}
            align={isMd ? "left" : "center"}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={"fade-up"}
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/mind-map.svg"
            alt="Watheia Company"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Hero
