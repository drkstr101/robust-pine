import React from "react"
import { get } from "lodash"

import { classNames, toStyleObj, withPrefix } from "@waweb/utils"
import SectionActions from "components/SectionActions"

export default class HeroSection extends React.Component {
  render() {
    const section = get(this.props, "section", null)
    const background = get(section, "background", null)
    const background_color =
      get(background, "background_color", null) || "white"
    const background_opacity_pct =
      get(background, "background_image_opacity", null) || 100
    const background_opacity = background_opacity_pct * 0.01
    const background_size =
      get(background, "background_image_size", null) || "cover"
    const background_repeat =
      get(background, "background_image_repeat", null) || "no-repeat"
    return (
      <section
        className={classNames("section", "hero", {
          "bg-image":
            get(section, "has_background", null) &&
            get(background, "background_image", null),
          "inverse bg-blue":
            get(section, "has_background", null) && background_color === "blue",
          "bg-gray":
            get(section, "has_background", null) && background_color === "gray",
          "section--padding":
            get(section, "has_background", null) || get(section, "image", null),
        })}
      >
        {get(section, "has_background", null) &&
          get(background, "background_image", null) && (
            <div
              className="bg-image__image"
              style={toStyleObj(
                "background-image: url('" +
                  withPrefix(get(background, "background_image", null)) +
                  "'); opacity: " +
                  background_opacity +
                  "; background-size: " +
                  background_size +
                  "; background-repeat: " +
                  background_repeat
              )}
            />
          )}
        <div className="container container--lg">
          <div
            className={classNames(
              "flex",
              "flex--middle",
              "flex--center",
              "flex--col-2",
              {
                "align-center": get(section, "align", null) === "center",
                "align-right": get(section, "align", null) === "right",
              }
            )}
          >
            {get(section, "image", null) && (
              <div
                className={classNames("cell", "section__media", {
                  "section__media--right":
                    get(section, "image_position", null) === "right",
                })}
              >
                <img
                  src={withPrefix(get(section, "image", null))}
                  alt={get(section, "image_alt", null)}
                />
              </div>
            )}
            <div className="cell section__body">
              {get(section, "title", null) && (
                <h1 className="section__title">
                  {get(section, "title", null)}
                </h1>
              )}
              {get(section, "subtitle", null) && (
                <div className="section__copy">
                  <p>{get(section, "subtitle", null)}</p>
                </div>
              )}
              {get(section, "actions", null) && (
                <div className="section__actions btn-group">
                  <SectionActions
                    {...this.props}
                    actions={get(section, "actions", null)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
