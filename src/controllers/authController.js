import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient.js';

const secretKey = 'your_secret_key';  // Замените на безопасный ключ и храните его в переменной окружения

export const register = async (req, res) => {
    try {
        console.log('hi')
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const login = async (req, res) => {
    try {

    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Internal server error' });
    }
};
