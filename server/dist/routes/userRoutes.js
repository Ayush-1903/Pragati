"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const userControllers_js_1 = require("../controllers/userControllers.js");
router.post("/login", userControllers_js_1.login);
router.post("/signup", userControllers_js_1.signup);
router.post("/forgot-password", userControllers_js_1.forgotPassword);
router.patch("/reset-password", userControllers_js_1.resetPassword);
exports.default = router;
