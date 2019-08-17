// @flow
import { map } from "ramda"

export const breakpoints = {
  phone: 350,
  phoneWide: 450,
  tablet: 650,
  tabletWide: 880,
  laptop: 1024,
  desktop: 1440,
}

export const emify = (px: number) => `${px / 16}rem`

export const mq = map(
  value => `@media (min-width: ${emify(value)})`,
  breakpoints,
)

export const mqMax = map(
  value => `@media (max-width: ${emify(value)})`,
  breakpoints,
)

type MediaType = "max" | "min"

export const legacyMq = (mediaType: MediaType) => map(
  value => mediaType === "max"
    ? `@media (max-width: ${value}px)`
    : `@media (min-width: ${value}px)`,
  breakpoints,
)

