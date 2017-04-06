/*
 * What this resource or module will do?
 * Handles CRUD operations related to "users"
 * i.e., operations this module will support are typically like
 * - Register a new User (HTTP Get /candidates-search) *
 * Recommended to mount routes of this module as '/candidate-search'
 * i.e., if a client wants to make a request it will start from '/users/<route defined in the module>'
 *
 */

module.exports = require('./candidatesSearch.router');