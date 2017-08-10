/*
 * What this resource or module will do?
 * Handle Create and Find operation for 'locations node in neo4j' used for Knowledge model by administrator
 *
 * i.e., operations this module will support are typically like
 *
 * - Get all locations in graph database
 * - Add a location node in database
 *
 * Recommended to mount routes of this module as '/locations'
 * i.e., if a client wants to make a request it will start from '/locations/<route defined in the module>'
 *
 */
module.exports = require('./location.router');
