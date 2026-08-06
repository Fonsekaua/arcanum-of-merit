import { Router } from "express";

const users__router = Router();

users__router.get('/student',(req,res) => {
    console.log('Pagina pagina de alunos');
    res.json({message: "Pagina de alunos"})
})

users__router.get('/teacher',(req,res) => {
    console.log('Pagina de professores');
    res.json({message: "Pagina professores"})
})

users__router.get('/:name',(req,res) => {
    const {name} = req.body
    console.log('Pagina do usuario:',name);
    res.json({message: `Pagina do usuario: ${name}`})
}) 


export default users__router;