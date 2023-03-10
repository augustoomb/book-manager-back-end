"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = exports.authorRouter = void 0;
const author_1 = __importDefault(require("./author"));
exports.authorRouter = author_1.default;
const book_1 = __importDefault(require("./book"));
exports.bookRouter = book_1.default;
