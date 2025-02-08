import express from "express"

import authMiddleware from "../middleware/auth.js";

import { listOrders, placeOrder, userOrder, verifyOrder } from "../controllers/OrderController.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",authMiddleware,verifyOrder);
orderRouter.post("/userorders",authMiddleware,userOrder);
orderRouter.get("/list",listOrders)



export default orderRouter;