import { get, list } from "../../../actions/wines"

export default {
  Query: {
    getWine: (root, args) => {
      return new Promise((resolve, reject) => {
        const { id } = args

        if (!id) {
          reject("No id was provided.")
        }

        const result = get(id)

        if (result && result.error) {
          reject(result.error)
        }

        resolve(result)
      })
    },
    listWines: (root, args) => {
      return new Promise((resolve, reject) => {
        const result = list(args)

        if (result && result.error) {
          reject(result.error)
        }

        resolve(result)
      })
    },
  }
}
