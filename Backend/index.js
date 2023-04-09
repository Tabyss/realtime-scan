import  express  from "express";
import cors from "cors"
import dotenv from "dotenv"
import TamuRoute from "./routers/TamuRoute.js"
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json()) //-> agar menerima data dalam bentuk JSON
app.use(TamuRoute)

app.listen(process.env.APP_PORT, ()=>{
    console.log("server mlayu...", process.env.APP_PORT)
})

