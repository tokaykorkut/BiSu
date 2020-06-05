const express = require('express')
const path = require('path')
require('./server/dbconfig/config')
const CustomerRouter = require('./server/routers/customerRouter')
const OrderRouter = require('./server/routers/orderRouter')
const app  = express()

const port = process.env.NODE_ENV || 3001

app.use(express.json())
app.use(OrderRouter)
app.use(CustomerRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/client/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'/client/build/index.html'))
    })
}

app.listen(port,()=>{console.log(port)})