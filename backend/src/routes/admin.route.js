import { Router } from "express";
import { adminOnly, protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
import { createProduct, getAllCustomers, getAllOrders, getAllProducts, getDashboardStasts, updateOrderStatus, updateProduct, deleteProduct } from "../controllers/admin.controller.js";

const router = Router();

router.use(protectRoute,adminOnly)

router.post("/products",upload.array("images",3),createProduct)
router.get("/products",getAllProducts)
router.put("/products/:id",upload.array("images",3),updateProduct)
route.delete("/products/:id",deleteProduct)

router.get("/orders",getAllOrders)
router.patch("/orders/:orderId/status",updateOrderStatus)

router.get("/customers",getAllCustomers)
router.get("/stats",getDashboardStasts)

export default router