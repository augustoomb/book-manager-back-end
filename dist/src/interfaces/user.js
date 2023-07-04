"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const User = zod_1.z.object({
    id: zod_1.z.number({
        'invalid_type_error': '"id" deve ser um número',
    }).optional(),
    name: zod_1.z.string({
        'required_error': '"name" é um campo obrigatório',
        'invalid_type_error': '"name" deve ser uma string',
    }).min(3, {
        message: '"name" deve ter no mínimo 3 caracteres'
    }),
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
    role: zod_1.z.number({
        'invalid_type_error': '"role" deve ser um número',
    }).gte(0).lte(2),
});
exports.default = User;
