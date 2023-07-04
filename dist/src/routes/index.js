"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.bookRouter = void 0;
// import authorRouter from './author';
const book_1 = __importDefault(require("./book"));
exports.bookRouter = book_1.default;
const user_1 = __importDefault(require("./user"));
exports.userRouter = user_1.default;
