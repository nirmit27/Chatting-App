// Socket.IO Intro

const path= require('path')
const express = require('express')
const { createServer } = require('node:http')

const port = 3000

const app = express()
const server = createServer(app)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "./index.html"))
})

server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})