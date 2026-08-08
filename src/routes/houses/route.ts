import { Router } from "express";

const HouseRouter = Router();

HouseRouter.use('/',(req,res) => {
    console.log('Pagina das casas');
    res.json({message: "Pagina das casas"})
}) 
HouseRouter.get('/:name',(req,res) => {
    const {name} = req.body;
    console.log('Pagina da casa:',name);
    res.json({message: `Pagina da casa: ${name}`})
}) 

export default HouseRouter;