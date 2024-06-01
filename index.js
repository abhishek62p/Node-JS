const express = require('express')
const app = express()
const port = 2363

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/login',(req, res) => {
    res.send('Login')
})

app.get('/login/successfull',(req, res) => {
    res.send('Login Successfull')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})