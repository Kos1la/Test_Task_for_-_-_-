import prisma from '../prismaClient.js';

export const createTask = async (req,res) => {
    try {
        const { title,description } = req.body
        const task = prisma.task.create({
            data:{
                title,
                description,
                user_id:req.userId
            }
        })
        console.log(task)
    res.status(201).json(task)
    } catch (e) {

    }
}

export const getAllTasks = async (req,res) => {
    try {

    } catch (e) {

    }
}

export const getTaskById = async (req,res) => {
    try {

    } catch (e) {

    }
}

export const updateTaskById = async (req,res) => {
    try {

    } catch (e) {

    }
}

export const deleteTaskById = async (req,res) => {
    try {
        
    } catch (e) {
        
    }
}