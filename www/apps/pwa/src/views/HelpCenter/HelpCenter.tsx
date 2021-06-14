/** @format */

import React from "react"
import { Section, SectionAlternate } from "@waweb/organisms"
import { Faq, Contact, Hero } from "./components"

import { faq } from "./data"

const HelpCenter = (): JSX.Element => (
  <div>
    <Hero />
    <Section>
      <Faq data={faq} />
    </Section>
    <SectionAlternate>
      <Contact />
    </SectionAlternate>
  </div>
)

export default HelpCenter
