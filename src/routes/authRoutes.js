import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import { check } from "express-validator";


const router = Router();

router.post('/register', [
    check('email', 'Логин не может быть пустым и должен быть корректным email').isEmail(),
    check('password', 'Пароль должен быть больше 5 и меньше 15 символов').isLength({min:5,max:15})
], register);
router.post('/login', login);

export default router;
