//@flow
import { dictionary } from "./constants"
import { languages } from "data/languages/constants"

/**
 * Returns a translated text based on the selected language of our app state
 * @param {*} language - The selected language stored in our redux store state
 * @param {*} key - The key to access our dictionary
 * @param {*} subkey - If set, reaches for a nested key inside another key
 */
export const getText = (
  language: string,
  key: string,
  subkey?: string,
) => {
  if (!language) {
    return
  }

  switch (language) {
    case languages.ENGLISH:
      return subkey
        ? dictionary[key][subkey].english
        : dictionary[key].english
    case languages.PORTUGUESE:
    default:
      return subkey
        ? dictionary[key][subkey].portuguese
        : dictionary[key].portuguese
  }
}
