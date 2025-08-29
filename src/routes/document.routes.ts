import { Router } from "express";
import { createDocument } from "../controllers/document.controller";
import { basicAuth } from "../middlewares/auth.middleware";

const router = Router();

// POST /document
router.post("/", basicAuth, createDocument);

export default router;
