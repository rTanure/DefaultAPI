const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

const content = {
    "message": "API connected!"
}

app.route('/').get((req, res)=>{
    res.send(content)
})

app.listen(PORT, ()=>{
    console.log("Server running!")
    console.log("localhost:" + PORT)
})