const express = require('express')
const log = require('emojifylogs').log
const app = express()
app.use(express.static('public'))
const port = 3000
app.listen(port,()=>log(`listening On the Part ${port}`))

app.get('/log',(req,res)=>{
    log.warn('--->{',req.query.joy)
})