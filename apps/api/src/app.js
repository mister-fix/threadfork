// Importing dependencies
const express = require('express')
const app = express()

// JSON Formatting
app.set('json spaces', 2)

/**
 * @method GET
 * @description This method will retrieve the root ('/') endpoint
 * @access public
 */
app.get('/', (req, res) => {
  res.send({ message: 'Hello from API!' })
})

// Exporting app
module.exports = app
