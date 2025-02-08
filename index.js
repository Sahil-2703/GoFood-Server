const mongoDB = require('./db')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

app.get('/', (req,res) => {
    res.send("Hello world")
})

const corsOption = {
    origin: 'go-food-client-iota.vercel.app',
    method: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 204
}

// app.use((req, res, next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "go-food-client-iota.vercel.app");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// })

app.use(cors(corsOption))

app.use(express.json())

app.use('/api', require('./Routes/createUser'));
app.use('/api', require('./Routes/DisplayData'));
app.use('/api', require('./Routes/OrderData'));

mongoDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})