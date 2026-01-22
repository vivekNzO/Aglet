import { Router } from "express";
import {protectRoute} from '../middleware/auth.middleware.js'
import { createReview, deleteReview } from "../controllers/review.controller.js";

const router = Router()

router.use(protectRoute)

router.post("/",createReview)
// todo implement this later
router.delete("/:reviewId",deleteReview)

export default router