import * as actions from "./actions"
import { languages } from "./constants"

export type LanguageState = {
  language: string,
}

const initialState: LanguageState = {
  language: languages.PORTUGUESE,
}

type Action = ExtractActionTypes<typeof actions>

export const languageReducer = (
  state: LanguageState = initialState,
  action: Action,
): LanguageState => {
  switch (action.type) {
    case "LANGUAGE/APPLY":
      return {
        ...state,
        language: action.payload,
      }
    default:
      return state
  }
}
