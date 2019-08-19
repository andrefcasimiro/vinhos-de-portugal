import { get, list, add } from "../../../actions/countries"

export default {
  Query: {
    getCountry: (root, args) => {
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
    listCountries: (root, args) => {
      return new Promise((resolve, reject) => {
        const result = list()

        if (result && result.error) {
          reject(result.error)
        }

        resolve(result)
      })
    },
  },
  Mutation: {
    addCountry: (root, input) => {
      return new Promise((resolve, reject) => {
        const result = add(input)

        if (result && result.error) {
          reject(result.error)
        }

        resolve(result)
      })
    },
  },
}
