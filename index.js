const express = require('express')

const server = express()

//when we call this json function, it returns a middleware function that is added to the top of the middleware chain.
//this is the first thing that will get access to the req and res objects
//takes raw json string that came in with request and turns it into body object and add it to the req object
//bc I'm not specifying an http verb and path, every req and res will go through this
//then it passes to the next thing that matches which is the post with a path
server.use(express.json())

let hubs = []
let lessons = []

server.get('/', (req, res) => {
    res.json({message: 'sup world'})
})

server.post('/api/hubs', (req, res) => {
    const hubInfo = req.body;
    hubs.push(hubInfo)
    console.log(hubInfo)

    //typically with POST, I want to send back a 201 status code as well as the info requested/submitted
    res.status(201).json(hubInfo)
})

const PORT = 5000
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})