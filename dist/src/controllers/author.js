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
exports.list = exports.find = exports.create = void 0;
const author_1 = __importDefault(require("../interfaces/author"));
const author_2 = require("../services/author");
const http_status_codes_1 = require("http-status-codes");
function create(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, site } = req.body;
        const authorService = new author_2.AuthorService();
        const objAuthor = author_1.default.parse({ name, site });
        yield authorService.create(objAuthor);
        res.status(http_status_codes_1.StatusCodes.CREATED).send();
    });
}
exports.create = create;
function find(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const authorService = new author_2.AuthorService();
        const obj = yield authorService.find(parseInt(id, 10));
        return res.status(http_status_codes_1.StatusCodes.OK).json(obj);
    });
}
exports.find = find;
function list(_req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authorService = new author_2.AuthorService();
        const authorList = yield authorService.list();
        return res.json(authorList);
    });
}
exports.list = list;
