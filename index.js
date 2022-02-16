const express = require ("express");
const cors = require ("cors");
const fileUpload = require ("express-fileupload");

const dotenv = require ("dotenv");
dotenv.config()

const db=require("./db")
const router = require("./route/index")

const PORT = process.env.PORT || 5000

const app = express()
app . use ( cors ( ) )
app.use(express.json())
// app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`-= Server started on port ${PORT} =-`))
    } catch (e) {
        console.log('Error: ' + e)
    }
}

start()