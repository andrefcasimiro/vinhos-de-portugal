import { Region } from "../../models/schema"

export const get = async (id) => {
  return await Region.query()
    .where('id', id)
    .first()
}

export const list = async () => await Region.query()

export const add = async (input) => {
  const { name, country_id } = input.input

  return await Region.query()
    .insert({
      name,
      country_id,
    })
}
