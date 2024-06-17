import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors)
app.use(express.json())

app.use('/auth', authRoutes)
// app.use('/tasks',)

async function startApp() {
    try {
        await app.listen(PORT,() => console.log(`Server started on ${PORT} port`))
    } catch (e){
        console.log(e)
    }
}

startApp()