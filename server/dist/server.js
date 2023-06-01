"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_js_1 = __importDefault(require("./routes/userRoutes.js"));
const morgan_1 = __importDefault(require("morgan"));
// import chalk from "chalk";
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
dotenv_1.default.config();
// middleware
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)(":date[web] ⌛ :method :url :status ⚫ :response-time ms - :res[content-length]"));
app.use("/user", userRoutes_js_1.default);
// connect to DB
(0, mongoose_1.connect)(process.env.MONGO_URI)
    .then(() => {
    app.listen(PORT, () => {
        console.log(`listening 🦻 on port ${PORT}!!  `);
    });
})
    .catch((err) => {
    console.log(err);
});
