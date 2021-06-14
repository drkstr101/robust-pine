import React from "react"
import Home from "../components/homepage"
import Main from "layouts/Main"
import WithLayout from "WithLayout"

const HomePage = (): JSX.Element => {
  return <WithLayout component={Home} layout={Main} />
}

export default HomePage
