import { Router } from "express";
import AuthRouters from './Auth.routers.js'
import ProductRouter from './Product.routers.js'

const router = Router()

router.use('/auth' , AuthRouters)
router.use('/product' , ProductRouter)

export default router;