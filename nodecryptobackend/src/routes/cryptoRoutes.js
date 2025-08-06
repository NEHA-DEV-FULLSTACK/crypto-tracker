import express from "express";
import { getCryptoData } from "../controllers/cryptoController.js";

const router = express.Router();

// Route: GET /api/crypto/current
router.get("/current", getCryptoData);

export default router;
