const express = require('express')
const app = express()
const port = 4000

app.get('*', (req, res) => {
  res.send('<b>Would you look at that, I think it works</b>')
})

app.listen(port)
console.log(`listening on ${port}`)
