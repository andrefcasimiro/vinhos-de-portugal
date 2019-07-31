import validator from "validator"

export const isValidString = str => !validator.isEmpty(str)
