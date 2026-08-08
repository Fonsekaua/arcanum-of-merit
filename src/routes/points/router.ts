import { Router } from "express";

const PointRouter = Router();

PointRouter.get('/student/:id', (req,res) => {
    const {id} = req.body
    console.log('Pontos do estudante: ',id)
    res.json({message: `Pontos do estudante: ${id}`})
})

PointRouter.post('/auth/add/:id', (req,res) => {
    const {id} = req.body
    console.log('Adicionando pontos ao estudante: ',id)
    res.json({message: `Adicionando pontos ao estudante: ${id}`})
})

PointRouter.post('/auth/remove/:id', (req,res) => {
    const {id} = req.body
    console.log('Removendo pontos do estudante: ',id)
    res.json({message: `Removendo pontos do estudante: ${id}`})
})

PointRouter.get('/house/:id', (req,res) => {
    const {id} = req.body
    console.log('Pontos da casa: ',id)
    res.json({message: `Pontos da casa: ${id}`})
})

export default PointRouter;