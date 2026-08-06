import { Router } from "express";

const houses__router = Router();

houses__router.use('/',(req,res) => {
    console.log('Pagina das casas');
    res.json({message: "Pagina das casas"})
}) 
houses__router.get('/:name',(req,res) => {
    const {name} = req.body;
    console.log('Pagina da casa:',name);
    res.json({message: `Pagina da casa: ${name}`})
}) 

export default houses__router;