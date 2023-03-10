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
// import { ComplexModel, Model, SimpleModel } from '../models/model';
const notFound_1 = __importDefault(require("../errors/notFound"));
class Service {
    //   constructor(model: ComplexModel<T> | Model<T> | SimpleModel<T>) {
    constructor(model) {
        this.model = model;
    }
    create(obj) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.create(obj);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.list();
        });
    }
    find(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this.model;
            const foundObj = yield model.find(id);
            if (!foundObj) {
                throw new notFound_1.default('O item solicitado não existe');
            }
            return yield this.model.find(id);
        });
    }
    update(id, obj) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this.model;
            if (model.update === undefined) {
                throw new Error('Não é possível atualizar este item');
            }
            const foundObj = yield model.find(id);
            if (!foundObj) {
                throw new notFound_1.default('O item solicitado não existe');
            }
            yield model.update(id, obj);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = this.model;
            if (model.delete === undefined) {
                throw new Error('Não é possível deletar este item');
            }
            const foundObj = yield model.find(id);
            if (!foundObj) {
                throw new notFound_1.default('O item solicitado não existe');
            }
            yield model.delete(id);
        });
    }
}
exports.default = Service;
