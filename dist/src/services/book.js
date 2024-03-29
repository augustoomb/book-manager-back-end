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
exports.BookService = void 0;
const book_1 = __importDefault(require("../models/book"));
const service_1 = __importDefault(require("./service"));
const badRequest_1 = __importDefault(require("../errors/badRequest"));
class BookService extends service_1.default {
    constructor(model = new book_1.default()) {
        super(model);
    }
    create(obj) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const foundBook = yield this.model.findByTitle(obj.title);
            if (foundBook) {
                throw new badRequest_1.default('Livro já adicionado');
            }
            const createdBook = yield _super.create.call(this, obj);
            return createdBook;
        });
    }
    update(userId, id, obj) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const foundBook = yield this.model.find(userId, id);
            if (!foundBook) {
                throw new badRequest_1.default('Livro não existe');
            }
            yield _super.update.call(this, userId, id, obj);
        });
    }
}
exports.BookService = BookService;
