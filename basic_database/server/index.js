const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise') //NEWWWW TEST NEEDED
const config = require('./config') //not a library, but a file

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",async(req,res)=>{
    try{
        const conn = await mysql.createConnection(config.db)
        //console.log(conn)
        const [result,] = await conn.execute('select * from task')
        console.log('res: ',result)
        if (!result) result=[] //if there is no data return empty string
        res.status(200).json({result})
    }catch(err){
        res.status(500).json({error: err.message})
    }
    
})

app.post("/new", async(req,res)=>{
    try{
        const conn = await mysql.createConnection(config.db)
        const [result,structure] = await conn.execute('insert into task (description) values (?) ', [req.body.description])
        console.log(structure)
        res.status(200).json({id:result.insertId})
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.delete("/delete/:id", async(req,res)=>{
    try{
        const conn = await mysql.createConnection(config.db)
        await conn.execute('delete from task where id = ? ',[req.params.id])
        console.log("request:", req)
        console.log("request.params: ", req.params)
        res.status(200).json({id:req.params.id})
    }catch(err){
        res.status(500).json({error:err.message})
    }
})


app.listen(port,() => {
    console.log(`server is running on port ${port}` )
})