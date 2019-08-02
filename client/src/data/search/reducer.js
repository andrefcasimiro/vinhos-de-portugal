import * as actions from "./actions"
import type { SearchParameters } from "./types"

export type SearchState = {
  parameters: SearchParameters,
}

const initialState: SearchState = {
  parameters: {},
}

type Action = ExtractActionTypes<typeof actions>

export const searchReducer = (
  state: SearchState = initialState,
  action: Action,
): SearchState => {
  switch (action.type) {
    case "SEARCH/APPLY":
      return {
        ...state,
        parameters: {
          ...state.parameters,
          ...action.payload,
        },
      }
    default:
      return state
  }
}
