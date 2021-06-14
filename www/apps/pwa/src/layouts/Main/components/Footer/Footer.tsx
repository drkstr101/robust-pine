/** @format */

import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import { Typography, Grid } from "@material-ui/core"
import { Image } from "@watheia/com.ui.atoms.image"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 120,
    height: 32,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  groupTitle: {
    textTransform: "uppercase",
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: "rgba(255,255,255,.6)",
    "&:hover": {
      background: "transparent",
    },
    "&:last-child": {
      marginRight: 0,
    },
  },
  copyright: {
    color: theme.palette.text.secondary,
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: "0 !important",
  },
  menu: {
    display: "flex",
  },
  menuItem: {
    margin: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    "&:last-child": {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: "uppercase",
    color: "white",
  },
  divider: {
    width: "100%",
  },
  navLink: {
    color: "rgba(255,255,255,.6)",
  },
}))

interface Props {
  className?: string
  pages: PagesProps
}

const Footer = ({ pages, className, ...rest }: Props): JSX.Element => {
  const classes = useStyles()

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item>
            <div className={classes.logoContainer}>
              <a href="/" title="watheia">
                <Image
                  className={classes.logoImage}
                  src="https://cdn.watheia.org/assets/logo-banner-alt.svg"
                  alt="watheia"
                  lazy={false}
                />
              </a>
            </div>
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.copyright}>
              &copy; Watheia Labs, LLC. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer
