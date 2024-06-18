import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient.js';  // Убедитесь, что путь правильный

const secretKey = process.env.JWT_SECRET;

export const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 8);
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword
            }
        });
        console.log(user)
        res.status(201).json({ message: 'User registered successfully' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Server error' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Internal server error' });
    }
};
