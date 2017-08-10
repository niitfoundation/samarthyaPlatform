/*
 * What this resource or module will do?
 * Handle Create and Find operation for 'professions node in neo4j' used for Knowledge model by administrator
 *
 * i.e., operations this module will support are typically like
 *
 * - Get all professions in graph database
 * - Add a profession node in database
 *
 * Recommended to mount routes of this module as '/professions'
 * i.e., if a client wants to make a request it will start from '/professions/<route defined in the module>'
 *
 */
module.exports = require('./profession.router');
