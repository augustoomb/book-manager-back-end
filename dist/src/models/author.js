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
class AuthorModel {
    constructor(tableName = 'Authors', connection = connection_1.default) {
        this.tableName = tableName;
        this.connection = connection;
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`INSERT INTO ${DATABASE}.${this.tableName} (name, site)
        VALUES (?, ?);`, [obj.name, obj.site || null]);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute(`SELECT id, name, site
         FROM ${DATABASE}.${this.tableName};`);
            const [authors] = result;
            return authors;
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // const result = await this.connection.execute<ROwDataPacket[]>(`SELECT id, name, site
            const result = yield this.connection.execute(`SELECT id, name, site
         FROM ${DATABASE}.${this.tableName} AS A WHERE A.id = ?;`, [id]);
            const [authors] = result;
            return authors[0];
        });
    }
}
exports.default = AuthorModel;
