/*
 * What this resource or module will do?
 * Handles email verification  operations related to "users register"
 * Users is a collection for maintaining/persisting credentials part of each user registered in the system
 * 
 * i.e., operations this module will support are typically like
 * 
 * - Email verification while registering user (HTTP POST /email/sendmail)
 * - validate users for every request using router middlware 
 *   
 * Recommended to mount routes of this module as '/email'
 * i.e., if a client wants to make a request it will start from '/email/<route defined in the module>'
 *
 */

module.export = require('./emailVerify.router');