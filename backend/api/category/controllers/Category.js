"use strict";
const { sanitizeEntity } = require("strapi-utils");

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { params } = ctx;
    let entity;

    if (isNaN(Number(params.id))) {
      entity = await strapi.services.category.findOne({ slug: params.id });
    } else {
      entity = await strapi.services.category.findOne({ id: params.id });
    }

    return sanitizeEntity(entity, { model: strapi.models.category });
  }
};
