/*
 * What this resource or module will do?
 * Handle Create and Find operation for 'centers node in neo4j' used for Knowledge model by administrator
 *
 * i.e., operations this module will support are typically like
 *
 * - Get all centers in graph database
 * - Add a center node in database
 *
 * Recommended to mount routes of this module as '/centers'
 * i.e., if a client wants to make a request it will start from '/centers/<route defined in the module>'
 *
 */
module.exports = require('./centres.router');
