// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const samarthyaPlatform = require('samarthyaPlatform');

// Get our API routes
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/SamarthyaDB');
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/auth', samarthyaPlatform.authenticationRoutes);
app.use('/users', samarthyaPlatform.userRoutes);
app.use('/resources', samarthyaPlatform.resourcesRoutes);
app.use('/email', samarthyaPlatform.emailUtilRoutes);
app.use('/coordinates', samarthyaPlatform.coordinateRoutes);
app.use('/candidates', samarthyaPlatform.candidateRoutes);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 Get port from environment and store in Express.
*/

const port = process.env.PORT || '3003';

app.set('port', port);

/**
* Create HTTP server.
*/
const server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
*/
server.listen(port, () => console.log(`API runnin on localhost:${port}`));

// // Get dependencies
// const express = require('express');

// // Get our API routes
// const app = express();
// const path = require('path');
// const http = require('http');
// const bodyParser = require('body-parser');
// var passport = require('passport');
// var flash = require('connect-flash');
// const samarthyaPlatform = require('samarthyaPlatform');
// const session = require('express-session');
// const cors = require('cors');



// // const passport=require('passport');
// // const flash=require('connect-flash');
// const morgan = require('morgan')
// var corsOptions = {

// "origin": "*",
//   'optionsSuccessStatus': 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
// };
// app.use(cors(corsOptions));
// app.use(morgan('dev'))


// // Parsers for POST data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// // Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));
// app.use(session({
//     secret: '7march2017',
//     resave: true,
//     saveUninitialized: true,
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());

// // Set our api routes
// app.use('/emailverify', samarthyaPlatform.emailVerifyRoutes);
// app.use('/api', samarthyaPlatform.authenticationRoutes);
// samarthyaPlatform.passport(passport);
// samarthyaPlatform.socialAuth(app, passport);
// // app.use('/social',samarthyaPlatform.socialAuth);


// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// /**
//   Get port from environment and store in Express.
//  */

// const port = process.env.PORT || '9090';

// app.set('port', port);

// /**
//  * Create HTTP server.
//  */
// const server = http.createServer(app);

// /** 
//  * Listen on provided port, on all network interfaces.
//  */
// server.listen(port, () => console.log(`API runnin on localhost:${port}`));