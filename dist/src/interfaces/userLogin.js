"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const UserLogin = zod_1.z.object({
    email: zod_1.z.string({
        'required_error': '"email" é um campo obrigatório',
        'invalid_type_error': '"email" deve ser uma string',
    }).email(),
    password: zod_1.z.string({
        'required_error': '"password" é um campo obrigatório',
        'invalid_type_error': '"password" deve ser uma string',
    }).min(6, {
        message: '"password" deve ter no mínimo 6 caracteres'
    }),
});
exports.default = UserLogin;
