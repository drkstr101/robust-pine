/** @format */

import React from "react"
import { Button, Typography } from "@material-ui/core"
import { SectionHeader } from "@waweb/molecules"
import { Section, HeroSimpleBackground } from "@waweb/organisms"

const Hero = ({ className, ...rest }: ViewComponentProps): JSX.Element => (
  <div className={className} {...rest}>
    <HeroSimpleBackground backgroundImage="https://assets.maccarianagency.com/the-front/shapes/banner-bg.svg">
      <Section narrow>
        <>
          <SectionHeader
            title={
              <span>
                Supercharge Your{" "}
                <Typography color="primary" variant="inherit" component="span">
                  Digital Brand
                </Typography>
              </span>
            }
            titleVariant="h3"
            subtitle="Our mission is to build unique and engaging digital products that are a joy to use. We are a small team of professional with a big footprint. who share your passions. We help you fulfill your best potential through an engaging lifestyle experience."
            ctaGroup={[
              <Button
                color="primary"
                variant="contained"
                size="large"
                href="/support#contact"
              >
                Get Started
              </Button>,
              <Button
                color="secondary"
                variant="outlined"
                size="large"
                href="/case-studies/"
              >
                Learn More
              </Button>,
            ]}
            disableGutter
          />
          <Typography
            variant="overline"
            align="center"
            component="p"
            color="primary"
          >
            We build micro frontends!
          </Typography>
        </>
      </Section>
    </HeroSimpleBackground>
  </div>
)

export default Hero
