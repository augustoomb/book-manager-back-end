"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class Bcrypt {
    static createPassHash(pass) {
        const saltRounds = 10;
        if (pass == undefined) {
            return undefined;
        }
        return bcrypt_1.default.hashSync(pass, saltRounds);
    }
    static verifyPass(loginPass, dbHash) {
        if (loginPass == undefined || dbHash == undefined) {
            return false;
        }
        return bcrypt_1.default.compareSync(loginPass, dbHash);
    }
}
exports.default = Bcrypt;
