import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from "../prismaClient.js";

export const register = async (req, res) => {
    try {
        const {email,password} = req.body
        const hashedPassword = await bcrypt.hash(password,8)
        const user = await prisma.user.create({data: {email,password:hashedPassword}})
        res.status(201).json({message:`${user} registered successfully`})
        console.log(user)
    } catch (e) {
    console.log(e)
    }
};

// export const login = async (req,res) => {
//     try {
//
//     } catch (e) {
//         console.log(e)
//     }
// }



