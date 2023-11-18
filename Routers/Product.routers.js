import { Router } from "express";
import { AddProduct , GetAllProducts} from "../Controllers/Products.controllers.js";

const router = Router();

router.post('/add-product', AddProduct)
router.get('/get-all-product', GetAllProducts)

export default router;