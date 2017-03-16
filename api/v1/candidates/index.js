/*
 * What this resource or module will do?
 * Handles CRUD operations related to "users"
 * Users is a collection for maintaining/persisting credentials part of each user registered in the system
 * 
 * i.e., operations this module will support are typically like
 * 
 * - Register a new User (HTTP POST /candidate)
 * - Update credentials of User (HTTP PATCH /candidate/credentials)
 * - Disable account of a user (HTTP PATCH /candidate/account) 
 * 
 * Recommended to mount routes of this module as '/candidate'
 * i.e., if a client wants to make a request it will start from '/users/<route defined in the module>'
 *
 */

module.exports = require('./candidates.router');