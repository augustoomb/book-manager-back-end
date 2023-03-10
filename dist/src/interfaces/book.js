"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const Book = zod_1.z.object({
    id: zod_1.z.number({
        'invalid_type_error': '"id" deve ser um número',
    }).optional(),
    title: zod_1.z.string({
        'required_error': '"title" é um campo obrigatório',
        'invalid_type_error': '"title" deve ser uma string',
    }).min(3, {
        message: '"title" deve ter no mínimo 3 caracteres'
    }),
    rating: zod_1.z.number({
        'invalid_type_error': '"rating" deve ser um número',
    }).optional(),
    year: zod_1.z.number({
        'invalid_type_error': '"year" deve ser um número',
    }).optional(),
    genre: zod_1.z.string({
        'invalid_type_error': '"genre" deve ser uma string',
    }).optional(),
    pages: zod_1.z.number({
        'invalid_type_error': '"pages" deve ser um número',
    }).optional(),
    thumb: zod_1.z.string({
        'invalid_type_error': '"thumb" deve ser uma string',
    }).optional(),
    hasBeenRead: zod_1.z.number({
        'required_error': '"hasBeenRead" é um campo obrigatório',
        'invalid_type_error': '"hasBeenRead" deve ser um número',
    }).gte(0, {
        message: '"hasBeenRead" deve ser 0 ou 1'
    }).lte(1, {
        message: '"hasBeenRead" deve ser 0 ou 1'
    }),
    authorId: zod_1.z.number({
        'required_error': '"authorId" é um campo obrigatório',
        'invalid_type_error': '"authorId" deve ser um número',
    }).gt(0, {
        message: '"authorId" deve ser maior que 0'
    }),
});
exports.default = Book;
