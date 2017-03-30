/*
 * What this resource or module will do?
 * Handle Create and Find operation for 'roles node in neo4j' used for Knowledge model by administrator
 *
 * i.e., operations this module will support are typically like
 *
 * - Get all roles in graph database
 * - Add a role node in database
 *
 * Recommended to mount routes of this module as '/roles'
 * i.e., if a client wants to make a request it will start from '/roles/<route defined in the module>'
 *
 */
module.exports = require('./role.router');
