const Knex = require('knex')
import { development } from "../../knexfile"
const { Model } = require('objection')

const knexConnection = Knex(development)

Model.knex(knexConnection)

class Wine extends Model {
  static get tableName() {
    return 'wines'
  }

  static get relationMappings() {
    return {
      // A wine belongs to a region
      region: {
        relation: Model.BelongsToOneRelation,
        modelClass: Region,
        join: {
          from: 'wines.region_id',
          to: 'region.id',
        },
      },
    }
  }
}

class Region extends Model {
  static get tableName() {
    return 'regions'
  }

  static get relationMappings() {
    return {
      // A region may have many wines
      wine: {
        relation: Model.HasManyRelation,
        modelClass: Wine,
        join: {
          from: 'regions.id',
          to: 'wines.region_id',
        },
      },
      // A region belongs to one country
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: Country,
        join: {
          from: 'regions.country_id',
          to: 'countries.id',
        },
      },
    }
  }
}

class Country extends Model {
  static get tableName() {
    return 'countries'
  }

  static get relationMappings() {
    return {
      region: {
        // A country has many regions
        relation: Model.HasManyRelation,
        modelClass: Region,
        join: {
          from: 'country.id',
          to: 'regions.country_id',
        },
      },
    }
  }
}

module.exports = { Wine, Region, Country }
