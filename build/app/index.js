"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { router as homeRouter } from './routes/Home.routes'
const homeRouter = require('./routes/Home.routes');
const app = (0, express_1.default)();
console.log(homeRouter);
app.use(homeRouter);
module.exports = app;
