import { Router } from "express";

const auth__router = Router()

auth__router.post('/login', (req,res) => {
    console.log('Logando no servidor')
    res.json({message: "Logando no servidor"})
})

auth__router.post('/register', (req,res) => {
    console.log('Cadastrando no servidor')
    res.json({message: "Cadastrando no servidor"})
})
auth__router.post('/logout', (req,res) => {
    console.log('Deslogando do servidor')
    res.json({message: "Deslogando do servidor"})
})

export default auth__router;