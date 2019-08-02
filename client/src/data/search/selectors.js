// @flow
import { compose, prop } from "ramda"
import type { Selector } from "common/redux/types"
import type { SearchParameters } from "data/search/types"
import type { SearchState } from "data/search/reducer"

const base: Selector<SearchState> = prop("search")

export const selectSearchParameters: Selector<SearchParameters> = compose(
  prop("parameters"),
  base,
)
