// Importing and enabling dotenv
require('dotenv').config()

// Importing express app
const app = require('./src/app')

// Configuring host and port
const host = process.env.HOST ?? 'localhost'
const port = process.env.PORT || 3000

// Launching server
app.listen(port, host, () => {
  console.log(`[nodemon] server running at: http://${host}:${port}/`)
})
