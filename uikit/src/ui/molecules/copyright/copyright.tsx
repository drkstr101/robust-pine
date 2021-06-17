import React from "react"
import { Link, makeStyles, Typography } from "@material-ui/core"

export type CopyrightProps = {
  /**
   * a text to be rendered in the component.
   */
  name?: string
  href?: string
}

const useStyles = makeStyles((theme) => ({
  copyright: {
    margin: theme.spacing(2)
  }
}))

export function Copyright({
  name = "Watheia Labs, LLC",
  href = "https://watheia.app"
}) {
  const classes = useStyles()
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={classes.copyright}
    >
      {"Copyright © "}
      <Link color="inherit" href={href}>
        {name}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}
