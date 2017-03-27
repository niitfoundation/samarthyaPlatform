/*
 * What this resource or module will do?
 * Handle CRUD operations for 'Reference data' used for Knowledge model
 *
 * i.e., operations this module will support are typically like
 *
 * - Get all data (HTTP GET /reference)
 * - Update nodes and relations
 * - Delete nodes and relations
 * - Add nodes and relations
 *
 * Recommended to mount routes of this module as '/reference'
 * i.e., if a client wants to make a request it will start from '/reference/<route defined in the module>'
 *
 */
module.exports = require('./language.router');
