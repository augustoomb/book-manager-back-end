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
exports.authenticateToken = void 0;
// import * as jwt from 'jsonwebtoken';
const jwtToken_1 = __importDefault(require("../helpers/jwtToken"));
const user_1 = __importDefault(require("../models/user"));
function authenticateToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ 'message': 'Token não encontrado' });
        }
        const validation = jwtToken_1.default.verifyToken(authorization);
        if (validation.payload) {
            if (yield userExists(validation.payload.id)) {
                req.userId = validation.payload.id;
                next();
            }
            else {
                return res.status(401).json({ 'message': 'Token inválido' });
            }
        }
        else {
            return res.status(401).json({ 'message': 'Token inválido' });
        }
    });
}
exports.authenticateToken = authenticateToken;
function userExists(idUser) {
    return __awaiter(this, void 0, void 0, function* () {
        const userModel = new user_1.default();
        const foundUser = yield userModel.find(idUser);
        // console.log(foundUser)
        return foundUser ? true : false;
    });
}
