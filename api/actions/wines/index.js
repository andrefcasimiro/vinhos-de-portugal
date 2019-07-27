import { Wine } from "../../models/schema"

export const get = async (id) => {
  return await Wine.query()
    .where('id', id)
    .first()
}

export const list = async () => await Wine.query()
