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
exports.list = exports.find = exports.login = exports.create = void 0;
const user_1 = __importDefault(require("../interfaces/user"));
const userLogin_1 = __importDefault(require("../interfaces/userLogin"));
const user_2 = require("../services/user");
const userLogin_2 = require("../services/userLogin");
const http_status_codes_1 = require("http-status-codes");
const bcrypt_1 = __importDefault(require("../helpers/bcrypt"));
function create(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email, role } = req.body;
        let { password } = req.body;
        const userService = new user_2.UserService();
        password = bcrypt_1.default.createPassHash(password);
        const objUser = user_1.default.parse({ name, email, password, role });
        const token = yield userService.createUser(objUser);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(token);
    });
}
exports.create = create;
function login(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const userLoginService = new userLogin_2.UserLoginService();
        const objLoginUser = userLogin_1.default.parse({ email, password });
        const token = yield userLoginService.login(objLoginUser);
        res.status(http_status_codes_1.StatusCodes.OK).json(token);
    });
}
exports.login = login;
function find(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { userId } = req;
        const userService = new user_2.UserService();
        const obj = yield userService.find(userId || 0, parseInt(id, 10));
        return res.status(http_status_codes_1.StatusCodes.OK).json(obj);
    });
}
exports.find = find;
function list(req, res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userService = new user_2.UserService();
        const { userId } = req;
        const userList = yield userService.list(userId || 0);
        return res.json(userList);
    });
}
exports.list = list;
