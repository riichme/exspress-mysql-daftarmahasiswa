const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./connection')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  db.query("SELECT * FROM daftarmahasiswa", (error, result) => {

      console.log(result)
  })
  res.send('Utama')
})

app.get('/hello', (req, res) => {
  console.log({urlParam  : req.query.alamat})
  res.send('Helo World lala')
})

app.post('/login', (req, res) => {
  console.log({requestFromOutside : req.body})
  // if(req.name ==='dea'){
    res.send('Login berhasil')
  })

  app.put('/username', (req,res) => {
    console.log({updateData : req.body})
    res.send('update berhasil')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})