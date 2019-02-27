// Imports.
const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()
// Express server.
const staticFileMiddleware = express.static(__dirname)
app.use(staticFileMiddleware)
app.use(
  history({
    disableDotRule: true,
    verbose: true
  })
)
app.use(staticFileMiddleware)
const port = 5555
app.listen(port, () => {
  console.log('App listening on port ${5555}!')
})
