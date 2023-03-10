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
const connection_1 = __importDefault(require("../database/connection"));
const DATABASE = 'book_manager_db';
class BookModel {
    constructor(tableName = 'Books', connection = connection_1.default) {
        this.tableName = tableName;
        this.connection = connection;
    }
    // eslint-disable-next-line complexity
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`INSERT INTO ${DATABASE}.${this.tableName} 
        (title, rating, year, genre, pages, thumb, has_been_read, author_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`, [
                obj.title, obj.rating || null, obj.year || null, obj.genre || null,
                obj.pages || null, obj.thumb || null, obj.hasBeenRead, obj.authorId
            ]);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute(`SELECT *
         FROM ${DATABASE}.${this.tableName};`);
            const [books] = result;
            return books;
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute(`SELECT *
         FROM ${DATABASE}.${this.tableName} AS B WHERE B.id = ?;`, [id]);
            const [books] = result;
            return books[0];
        });
    }
    // eslint-disable-next-line complexity
    update(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`UPDATE ${DATABASE}.${this.tableName}
        AS B SET B.title = ?, B.rating = ?, B.year = ?,
        B.genre = ?, B.pages = ?, B.thumb = ?, B.has_been_read = ?, B.author_id = ?
        WHERE B.id = ?;`, [
                obj.title, obj.rating || null, obj.year || null, obj.genre || null,
                obj.pages || null, obj.thumb || null, obj.hasBeenRead, obj.authorId, id
            ]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`DELETE FROM ${DATABASE}.${this.tableName}
        AS B WHERE B.id = ?;`, [id]);
        });
    }
}
exports.default = BookModel;
