import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import prisma from "./prismaClient.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Вызываем cors как функцию

app.use(express.json());
app.use('/auth', authRoutes);

app.get('/test-db', async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Database connection error', error });
    }
}); // test

async function startApp() {
    try {
        await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.error('Error starting server:', e); // Используем console.error для вывода ошибок
    }
}

startApp();
