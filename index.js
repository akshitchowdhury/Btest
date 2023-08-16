import bodyParser from 'body-parser'
import express from 'express'
import moduleName from 'module'
import {dirname} from 'path'
import fileURLToPath from 'url'

const app = express()
const port = 3000
const _dirname = dirname(fileURLToPath(import.meta.url))


app.listen(port, ()=>{
    console.log("listening to port "+ port)
})

app.get("/", (rew,res)=>{

    res.sendFile(_dirname, "/index.html")
})

app.use(bodyParser.urlencoded({extended: true}))

app.post("/submit", (req,res)=>{
    console.log(req.body)
})

