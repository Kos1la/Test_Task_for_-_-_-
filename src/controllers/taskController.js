import prisma from '../prismaClient.js';

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        const task = await prisma.task.create({
            data: {
                title,
                description,
                user_id: req.userId
            }
        });
        console.log(task);
        res.status(201).json(task);
    } catch (e) {
        console.error('Error creating task:', e);
        res.status(500).json({ message: 'Server error' });
    }
};


export const getAllTasks = async (req,res) => {
    try {
        const tasks = await prisma.task.findMany({where: {
            user_id: req.userId
            }})
        res.status(200).json(tasks)
    } catch (e) {
        console.error('Error get tasks:',e)
        res.status(500).json({ message: 'Server error' });
    }
}

export const getTaskById = async (req,res) => {
    try {
        const { id } = req.params
        const task = await prisma.task.findUnique
        ({where:{id:Number(id), user_id: req.userId}})

        if(!task) return res.status(404).json({message:'Task not found'})

        res.status(200).json(task)
    } catch (e) {
        console.error('Error get tasks:',e)
        res.status(500).json({ message: 'Server error' });
    }
}

export const updateTaskById = async (req,res) => {
    try {
        const { id } = req.params
        const { title, description, status} = req.body
        const task = await prisma.task.update({
            where:{id:Number(id), user_id:req.userId },
            data:{title, description, status}
        })
        res.status(200).json(task)
    } catch (e) {
        console.error('Error get tasks:',e)
        res.status(500).json({ message: 'Server error' });
    }
}

export const deleteTaskById = async (req,res) => {
    try {

        const { id } = req.params

        const task = await prisma.task.findFirst({
            where: {
                id: Number(id),
                user_id: req.userId
            }
        });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await prisma.task.delete({
            where: {
                id: task.id
            }
        });
        res.status(204).json('Deleted success').end()
    } catch (e) {
        console.error('Error deleting task:', e);
        res.status(500).json({ message: 'Server error' });
    }
}