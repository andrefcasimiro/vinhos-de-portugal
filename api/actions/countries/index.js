import { Country } from "../../models/schema"
import { countryErrors } from "../../errors"

export const get = async (id) => {
  return await Country.query()
    .where('id', id)
    .first()
}

export const list = async () => await Country.query()

export const add = async input => {
  const { name } = input.input

  const countryModel = await Country.query().where('name', name).first()

  if (countryModel) {
    throw new Error(countryErrors.COUNTRY_ALREADY_EXISTS)
  }

  return await Country.query()
    .insert({
      name,
    })
}
