import { Router } from "express";
import UserRouter from "./users/route";
import HouseRouter from "./houses/route";
import PointRouter from "./points/router";
import AuthRouter from "./auth/route";
import ApiKeyMiddleware from "../middlewares/api-key";


const router = Router();
router.use(ApiKeyMiddleware);

router.get('/',(req,res) => {
    console.log('Pagina principal');
    res.json({message: "Pagina Principal"})

})
router.use('/api/auth', AuthRouter)
router.use('/api/users',UserRouter)
router.use('/api/points',PointRouter)
router.use('/api/houses', HouseRouter) 




export default router;