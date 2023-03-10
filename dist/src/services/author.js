"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorService = void 0;
const author_1 = __importDefault(require("../models/author"));
const service_1 = __importDefault(require("./service"));
// import BadRequest from '../errors/badRequest';
class AuthorService extends service_1.default {
    constructor(model = new author_1.default()) {
        super(model);
    }
}
exports.AuthorService = AuthorService;
