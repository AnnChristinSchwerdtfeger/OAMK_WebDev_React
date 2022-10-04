const express = require('express')
const app = express()
const port = 3002
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const names = [
    {name:"john"},
    {name:"jessie"},
    {name:"josy"},
    {name:"paul"}
]

app.get("/",(req,res)=>{
    console.log("data from route /")
    res.status(200).json(names)
})

/* #note1
app.get("/",(req,res)=>{
    res.status(200).json(
        {message :"Node Server responding and running",
        text:"this is another text",
        foo:"this is a foo test"
        }
    )
})
*/

app.get("/new",(req,res)=>{
    console.log('body:', req.body)
    names.push(req.body)
    res.status(200).json(req.body)
})

app.listen(port,() => {
    console.log(`server is running on port ${port}` )
})