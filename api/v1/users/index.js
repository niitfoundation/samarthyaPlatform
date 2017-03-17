/*
 * What this resource or module will do?
 * Handles CRUD operations related to "users"
 * Users is a collection for maintaining/persisting credentials part of each user registered in the system
 *
 * i.e., operations this module will support are typically like
 *
 * - Register a new User (HTTP POST /user)
 * - Update credentials of User (HTTP PATCH /user/credentials)
 * - Disable account of a user (HTTP PATCH /user/account)
 *
 * Recommended to mount routes of this module as '/users'
 * i.e., if a client wants to make a request it will start from '/users/<route defined in the module>'
 *
 */

module.exports = require('./users.router');
