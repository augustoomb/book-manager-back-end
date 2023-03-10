"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const Author = zod_1.z.object({
    id: zod_1.z.number({
        'invalid_type_error': '"id" deve ser um número',
    }).optional(),
    name: zod_1.z.string({
        'required_error': '"name" é um campo obrigatório',
        'invalid_type_error': '"name" deve ser uma string',
    }).min(3, {
        message: '"name" deve ter no mínimo 3 caracteres'
    }),
    site: zod_1.z.string({
        'invalid_type_error': '"site" deve ser uma string',
    }).optional(),
});
exports.default = Author;
