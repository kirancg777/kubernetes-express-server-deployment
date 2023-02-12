import express from "express";
import fetch from 'node-fetch'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/", (req,res) => {
    const helloMessage = `Hello from the kiran cg express ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
})

app.get("/nginx", async (req, res) => {
    const url = 'http://nginx'
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)
})

app.listen(PORT, () => {
    console.log(`web server is listening at PORT ${PORT}`)
})