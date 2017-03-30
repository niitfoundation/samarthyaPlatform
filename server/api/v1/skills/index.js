/*
 * What this resource or module will do?
 * Handle Create and Find operation for 'skills node in neo4j' used for Knowledge model by administrator
 *
 * i.e., operations this module will support are typically like
 *
 * - Get all skills in graph database
 * - Add a skills node in database
 *
 * Recommended to mount routes of this module as '/skills'
 * i.e., if a client wants to make a request it will start from '/skills/<route defined in the module>'
 *
 */
module.exports = require('./skill.router');
