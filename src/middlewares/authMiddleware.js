import jwt from 'jsonwebtoken'

export default (req,res,next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if(!token) return res.status(401).json({message:'Need authorization'})
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId
        next()
    } catch (e) {
        res.status(401).json({message: 'Authorization error'})
    }
}