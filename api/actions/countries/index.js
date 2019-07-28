import { Country } from "../../models/schema"

export const get = async (id) => {
  return await Country.query()
    .where('id', id)
    .first()
}

export const list = async () => await Country.query()

export const add = async (input) => {
  const { name } = input.input

  return await Country.query()
    .insert({
      name,
    })
}
