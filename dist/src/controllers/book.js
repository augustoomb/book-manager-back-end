"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclude = exports.update = exports.list = exports.find = exports.create = void 0;
const book_1 = __importDefault(require("../interfaces/book"));
const book_2 = require("../services/book");
const http_status_codes_1 = require("http-status-codes");
function create(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, rating, year, genre, pages, thumb, hasBeenRead, authorId } = req.body;
        const bookService = new book_2.BookService();
        const objBook = book_1.default.parse({
            title, rating, year,
            genre, pages, thumb, hasBeenRead, authorId
        });
        yield bookService.create(objBook);
        res.status(http_status_codes_1.StatusCodes.CREATED).send();
    });
}
exports.create = create;
function find(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const bookService = new book_2.BookService();
        const obj = yield bookService.find(parseInt(id, 10));
        return res.status(http_status_codes_1.StatusCodes.OK).json(obj);
    });
}
exports.find = find;
function list(_req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookService = new book_2.BookService();
        const bookList = yield bookService.list();
        return res.json(bookList);
    });
}
exports.list = list;
function update(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, rating, year, genre, pages, thumb, hasBeenRead, authorId } = req.body;
        const { id } = req.params;
        const bookService = new book_2.BookService();
        const objBook = book_1.default.parse({
            title, rating, year,
            genre, pages, thumb, hasBeenRead, authorId
        });
        yield bookService.update(Number(id), objBook);
        res.status(http_status_codes_1.StatusCodes.OK).send();
    });
}
exports.update = update;
function exclude(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const bookService = new book_2.BookService();
        yield bookService.delete(Number(id));
        res.status(http_status_codes_1.StatusCodes.OK).send();
    });
}
exports.exclude = exclude;
