// @flow
import { compose, prop } from "ramda"
import type { Selector } from "common/redux/types"
import type { LanguageState } from "data/search/reducer"

const base: Selector<LanguageState> = prop("language")

export const selectLanguage: Selector<string> = compose(
  prop("language"),
  base,
)
