import { Router } from "express";

const UserRouter = Router();

UserRouter.get('/student',(req,res) => {
    console.log('Pagina pagina de alunos');
    res.json({message: "Pagina de alunos"})
})

UserRouter.get('/teacher',(req,res) => {
    console.log('Pagina de professores');
    res.json({message: "Pagina professores"})
})

UserRouter.get('/:name',(req,res) => {
    const {name} = req.body
    console.log('Pagina do usuario:',name);
    res.json({message: `Pagina do usuario: ${name}`})
}) 


export default UserRouter;