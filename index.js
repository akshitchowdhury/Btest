import bodyParser from 'body-parser'
import express from 'express'
import moduleName from 'module'

const app = express()
const port = 3000

app.listen(port, ()=>{
    console.log("listening to port "+ port)
})



