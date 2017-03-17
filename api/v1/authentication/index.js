/*
 * What this resource or module will do?
 * Handles authentication operations related to "users"
 * Users is a collection for maintaining/persisting credentials part of each user registered in the system
 * 
 * i.e., operations this module will support are typically like
 * 
 * - Authenticate  User (HTTP POST /auth)
 * change password (HTTP POST /auth/resetPassword)
 * - validate users for every request using router middlware 
 *   
 * Recommended to mount routes of this module as '/auth'
 * i.e., if a client wants to make a request it will start from '/auth/<route defined in the module>'
 *
 */

module.exports = require('./auth.router');