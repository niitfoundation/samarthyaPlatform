/*
 * What this resource or module will do?
 * Handles CRUD operations related to "users"
 * Users is a collection for maintaining/persisting credentials part of each user registered in the system
 * 
 * i.e., operations this module will support are typically like
 * 
 * - Register a new User (HTTP POST /coordinate)
 * - Update credentials of User (HTTP PATCH /coordinate/credentials)
 * - Disable account of a user (HTTP PATCH /coordinate/account) 
 * 
 * Recommended to mount routes of this module as '/coordinate'
 * i.e., if a client wants to make a request it will start from '/coordinate/<route defined in the module>'
 *
 */

module.exports = require('./coordinators.router');