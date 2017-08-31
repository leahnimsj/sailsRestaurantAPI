/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    restaurantName: {
      type: 'string',
      required: true,
      unique: true

    },

    cuisine: {
      type: 'string'
    },

    expensiveRating: {
      type: 'integer',
      min: 1,
      max: 5

    },

    locationNeighborhood: {
      type: 'string'
    },

    closeToHome: {
      type: 'boolean'
      // considering this to be a validation

    },

    website: {
      type: 'string',
      url: true
    }

  }
};
