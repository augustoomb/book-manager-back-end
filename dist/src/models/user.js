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
class UserModel {
    constructor(tableName = 'Users', connection = connection_1.default) {
        this.tableName = tableName;
        this.connection = connection;
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.connection.execute(`INSERT INTO ${DATABASE}.${this.tableName}
        (name, email, password, role)
        VALUES (?, ?, ?, ?);`, [obj.name, obj.email, obj.password, obj.role]);
            return Object.assign({ id: result.insertId }, obj);
        });
    }
    list(_userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute(`SELECT id, name, email, password, role
         FROM ${DATABASE}.${this.tableName};`);
            const [users] = result;
            return users;
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute(`SELECT id, name, email, password, role
         FROM ${DATABASE}.${this.tableName} AS A WHERE A.id = ?;`, [id]);
            const [users] = result;
            return users[0];
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.execute(`SELECT id, name, email, password, role
         FROM ${DATABASE}.${this.tableName} AS A WHERE A.email = ?;`, [email]);
            const [users] = result;
            return users[0];
        });
    }
}
exports.default = UserModel;
