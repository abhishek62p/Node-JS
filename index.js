const express = require('express')

// importing the express js module into our application

const app = express()

// we are initilizing the app using express
// Using the app we are configuring th route of "GET" and path is "/getUsers"
// whenever request for this andpoint getUsers

// Differents HTTP methods 
// 1. GET
// 2. POST
// 3. PUT 
// 4. PATCH
// 5. DELETE

// app.get('/getUser', => {    -> this is totally based on your application
// request captured as in input
// responce as output
// }) 


const port = 2363

app.get('/hello',(req, res) => {
    res.send('Hello World')
})

app.get('/login',(req, res) => {
    res.send('Login')
})

app.get('/login/successfull',(req, res) => {
    res.send('Login Successfull')
})

// we are starting the app at port no 2363
// node -> http.createServer
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})