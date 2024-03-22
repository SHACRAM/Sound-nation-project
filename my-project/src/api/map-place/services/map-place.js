'use strict';

/**
 * map-place service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::map-place.map-place');
