import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes)



async function startApp() {
    try {
        await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.error('Error starting server:', e); // Используем console.error для вывода ошибок
    }
}

startApp();
