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
        const { title, thumb, hasBeenRead, authorName, infoLink } = req.body;
        const { userId } = req;
        const bookService = new book_2.BookService();
        const objBook = book_1.default.parse({
            title, thumb, hasBeenRead, authorName, userId, infoLink
        });
        const createdBook = yield bookService.create(objBook);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(createdBook);
    });
}
exports.create = create;
function find(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { userId } = req;
        const bookService = new book_2.BookService();
        const obj = yield bookService.find(userId || 0, parseInt(id, 10));
        return res.status(http_status_codes_1.StatusCodes.OK).json(obj);
    });
}
exports.find = find;
function list(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookService = new book_2.BookService();
        const { userId } = req;
        // console.log('augusto', userId)
        const bookList = yield bookService.list(userId || 0);
        return res.json(bookList);
    });
}
exports.list = list;
function update(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { title, thumb, hasBeenRead, authorName, infoLink } = req.body;
        const { userId } = req;
        const { id } = req.params;
        const bookService = new book_2.BookService();
        const objBook = book_1.default.parse({
            title, thumb, hasBeenRead, authorName, userId, infoLink
        });
        yield bookService.update(userId || 0, Number(id), objBook);
        res.status(http_status_codes_1.StatusCodes.OK).send();
    });
}
exports.update = update;
function exclude(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { userId } = req;
        const bookService = new book_2.BookService();
        yield bookService.delete(userId || 0, Number(id));
        res.status(http_status_codes_1.StatusCodes.OK).send();
    });
}
exports.exclude = exclude;
