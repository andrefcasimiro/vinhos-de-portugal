import { get, list } from "../../../actions/wines"

export default {
  Query: {
    wine: (root, args) => {
      return new Promise((resolve, reject) => {
        const { id } = args

        if (!id) {
          reject("No id was provided.")
        }

        const res = get(id)

        console.log('result: ', res)

        if (res && res.error) {
          reject(res.error)
        }

        resolve(res)
      })
    },
    wines: (root, args) => {
      return new Promise((resolve, reject) => {
        const res = list()

        if (res && res.error) {
          reject(res.error)
        }

        resolve(res)
      })
    },
  }
}
