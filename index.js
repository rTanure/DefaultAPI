const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: "http://localhost:3000"
}))

const PORT = process.env.PORT || 8080

const content = {
    "message": "API connected!"
}

app.route('/api').get((req, res)=>{
    res.send(content)
})

app.listen(PORT, ()=>{
    console.log("Server running!")
    console.log("localhost:" + PORT)
})