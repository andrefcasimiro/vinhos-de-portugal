import { Wine } from "../../models/schema"

export const get = async (id) => {
  return await Wine.query()
    .where('id', id)
    .first()
}

export const list = async (args) => {
  let result = await Wine

  if (!args.filter || !Object.keys(args.filter).length) {
    return result.query()
  }

  const { countries } = args.filter

  if (countries) {
    result = result.query()
      .join('regions', 'regions.id', 'wines.region_id')
      .whereIn('regions.country_id', countries)
  }

  return result
}

