import validator from "validator"

export const escapeString = str =>
  validator.escape(str)
