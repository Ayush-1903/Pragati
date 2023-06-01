"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const chalk_1 = __importDefault(require("chalk"));
const morganChalk = (0, morgan_1.default)(function (tokens, req, res) {
    return [
        chalk_1.default.green.bold(tokens.method(req, res)),
        chalk_1.default.red.bold(tokens.status(req, res)),
        chalk_1.default.white(tokens.url(req, res)),
        chalk_1.default.yellow(tokens["response-time"](req, res) + " ms"),
    ].join(" ");
});
exports.default = morganChalk;
