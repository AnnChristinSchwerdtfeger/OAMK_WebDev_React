const mysql = require('mysql2/promise') 
const config = require('../config') //not a library, but a file

async function query(sql,params){
    const conn = await mysql.createConnection(config.db)
    const [result,] = await conn.execute(sql,params)

    return result
}

async function post(sql,params){
    const conn = await mysql.createConnection(config.db)
    const [result,] = await conn.execute(sql,params)

    return result
}

async function del(sql,params){
    const conn = await mysql.createConnection(config.db)
    const [result,] = await conn.execute(sql,params)

    return result
}

module.exports = {query,post,del}