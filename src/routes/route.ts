import { Router } from "express";
import users__router from "./users/route";
import houses__router from "./houses/route";
import points__router from "./points/router";
import auth__router from "./auth/route";


const router = Router();


router.get('/',(req,res) => {
    console.log('Pagina principal');
    res.json({message: "Pagina Principal"})

})
router.use('/api/auth', auth__router)
router.use('/api/users',users__router)
router.use('/api/points',points__router)
router.use('/api/houses', houses__router) 




export default router;