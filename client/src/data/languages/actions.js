
type ApplyLanguage = {|
  type: "LANGUAGE/APPLY",
  payload: SearchParameters,
|}
export const applyLanguage = (language: string): ApplyLanguage => ({
  type: "LANGUAGE/APPLY",
  payload: language,
})
