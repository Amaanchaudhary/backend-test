import { Router } from "express";
import { Login, Register } from "../Controllers/Auth.controllers.js";

const router = Router()

router.post('/register' , Register)
router.get('/login' , Login)

export default router;