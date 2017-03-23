// Get dependencies
const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')
//const samarthyaPlatform = require('samarthyaPlatform')

// Get our API routes
const app = express()

// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost/SamarthyaDB');
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')))

// Set our api routes
//app.use('/auth', samarthyaPlatform.authenticationRoutes)
//app.use('/users', samarthyaPlatform.userRoutes)
//app.use('/resources', samarthyaPlatform.resourcesRoutes)
//app.use('/email', samarthyaPlatform.emailUtilRoutes)
//app.use('/candidates', samarthyaPlatform.candidateRoutes)

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

/**
 Get port from environment and store in Express.
*/

const port = process.env.PORT || '3005'

app.set('port', port)

/**
* Create HTTP server.
*/
const server = http.createServer(app)

/**
* Listen on provided port, on all network interfaces.
*/
server.listen(port, () => console.log(`API runnin on localhost:${port}`))
