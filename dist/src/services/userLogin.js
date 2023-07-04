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
exports.UserLoginService = void 0;
// import User from '../interfaces/user';
const userLogin_1 = __importDefault(require("../models/userLogin"));
const jwtToken_1 = __importDefault(require("../helpers/jwtToken"));
const notFound_1 = __importDefault(require("../errors/notFound"));
const bcrypt_1 = __importDefault(require("../helpers/bcrypt"));
// import { JwtPayload } from 'jsonwebtoken';
class UserLoginService {
    constructor() {
        this.model = new userLogin_1.default();
        // verifyToken(token: string): string | Partial<JwtPayload> {
        //   return JwtToken.verifyToken(token);
        // }
    }
    login(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.model.findByEmail(obj.email);
            if (!foundUser) {
                throw new notFound_1.default('O e-mail informado não existe');
            }
            const passIsValid = bcrypt_1.default.verifyPass(obj.password, foundUser.password);
            if (!passIsValid) {
                throw new notFound_1.default('Senha incorreta');
            }
            return jwtToken_1.default.createToken(foundUser);
        });
    }
}
exports.UserLoginService = UserLoginService;
