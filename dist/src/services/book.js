"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_1 = __importDefault(require("../models/book"));
const service_1 = __importDefault(require("./service"));
// import BadRequest from '../errors/badRequest';
class BookService extends service_1.default {
    constructor(model = new book_1.default()) {
        super(model);
    }
}
exports.BookService = BookService;
