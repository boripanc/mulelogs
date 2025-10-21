const express = require('express')
const app = express()
const port = 3000

app.pos('/', (req, res) => {
    console.log(req);
  res.send('success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})