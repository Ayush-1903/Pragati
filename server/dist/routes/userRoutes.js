import express from "express";
var router = express.Router();
import { login, signup } from "../controllers/userControllers.js";
router.post("/login", login);
router.post("/signup", signup);
export default router;
