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
exports.UserService = void 0;
const user_1 = __importDefault(require("../models/user"));
const userLogin_1 = __importDefault(require("../models/userLogin"));
const service_1 = __importDefault(require("./service"));
const jwtToken_1 = __importDefault(require("../helpers/jwtToken"));
const badRequest_1 = __importDefault(require("../errors/badRequest"));
class UserService extends service_1.default {
    constructor(model = new user_1.default()) {
        super(model);
    }
    createUser(obj) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const userLoginModel = new userLogin_1.default();
            const foundUser = yield userLoginModel.findByEmail(obj.email);
            if (foundUser) {
                throw new badRequest_1.default('Usuário já existe!!!!');
            }
            const createdUser = yield _super.create.call(this, obj);
            return jwtToken_1.default.createToken(createdUser);
        });
    }
}
exports.UserService = UserService;
