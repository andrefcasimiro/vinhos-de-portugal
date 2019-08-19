import type { SearchParameters } from "./types"

type ApplySearch = {|
  type: "SEARCH/APPLY",
  payload: SearchParameters,
|}
export const applySearch = (parameters: SearchParameters): ApplySearch => ({
  type: "SEARCH/APPLY",
  payload: parameters,
})
