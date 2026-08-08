import { Router } from "express";

const AuthRouter = Router()

AuthRouter.post('/login', (req,res) => {
    console.log('Logando no servidor')
    res.json({message: "Logando no servidor"})
})

AuthRouter.post('/register', (req,res) => {
    console.log('Cadastrando no servidor')
    res.json({message: "Cadastrando no servidor"})
})
AuthRouter.post('/logout', (req,res) => {
    console.log('Deslogando do servidor')
    res.json({message: "Deslogando do servidor"})
})

export default AuthRouter;