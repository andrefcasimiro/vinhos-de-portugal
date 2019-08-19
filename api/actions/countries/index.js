import { Country } from "../../models/schema"
import { userInputErrors, countryErrors } from "../../errors"
import { isValidString } from "../../validators"
import { escapeString } from "../../sanitizers"

export const get = async (id) => {
  return await Country.query()
    .where('id', id)
    .first()
}

export const list = async () => await Country.query()

export const add = async input => {
  // Input exists?
  if (!input) {
    throw new Error(userInputErrors.INVALID_INPUT)
  }

  // Sanitize it
  const name = escapeString(input.input.name)

  // Validate it
  if (!isValidString(name)) {
    throw new Error(userInputErrors.INVALID_INPUT)
  }

  // Format it
  const firstLetter = name.charAt(0).toUpperCase()
  const formattedCountryName = firstLetter + (name.slice(1)).toLowerCase()

  // Check if it exists in the records
  const countryModel = await Country.query().where(
    'name', formattedCountryName
  ).first()

  if (countryModel && countryModel.name) {
    throw new Error(countryErrors.COUNTRY_ALREADY_EXISTS)
  }

  // It doesn't, register it
  return await Country.query()
    .insert({
      name: formattedCountryName,
    })
}
