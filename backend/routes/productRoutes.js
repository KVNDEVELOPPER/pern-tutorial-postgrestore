import express from "express";
import {
  createProduct,
  getAllProducts,
} from "../controllers/productControllers";

const router = express.Router();

router.get("/", getAllProducts);

router.post("/", createProduct);

export default router;
