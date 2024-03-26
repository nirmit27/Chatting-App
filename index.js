// Socket.IO Intro

const path= require('path')
const express = require('express')
const { createServer } = require('node:http')
const { Server } = require('socket.io')

const port = 3000

const app = express()
const server = createServer(app)
const io = new Server(server)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "./index.html"))
})

io.on('connection', (socket)=>{
    console.log("a user connected")
    socket.on('disconnect', ()=>{
        console.log("a user disconnected")
    })
})

server.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
})