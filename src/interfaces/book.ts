import { z } from 'zod';

const Book = z.object({
    id: z.number({
        'invalid_type_error': '"id" deve ser um número',
    }).optional(),
    title: z.string({
        'required_error': '"title" é um campo obrigatório',
        'invalid_type_error': '"title" deve ser uma string',
    }).min(3,{ 
        message: '"title" deve ter no mínimo 3 caracteres' 
    }),
    rating: z.number({
        'invalid_type_error': '"rating" deve ser um número',
    }).optional(),
    year: z.number({
        'invalid_type_error': '"year" deve ser um número',
    }).optional(),
    genre: z.string({
        'invalid_type_error': '"genre" deve ser uma string',
    }).optional(),
    pages: z.number({
        'invalid_type_error': '"pages" deve ser um número',
    }).optional(),
    thumb: z.string({
        'invalid_type_error': '"thumb" deve ser uma string',
    }).optional(),
    hasBeenRead: z.number({
        'required_error': '"hasBeenRead" é um campo obrigatório',
        'invalid_type_error': '"hasBeenRead" deve ser um número',
    }).gte(0, { 
        message: '"hasBeenRead" deve ser 0 ou 1' 
    }).lte(1, { 
        message: '"hasBeenRead" deve ser 0 ou 1' 
    }),
    // authorId: z.number({
    //     'required_error': '"authorId" é um campo obrigatório',
    //     'invalid_type_error': '"authorId" deve ser um número',
    // }).gt(0, { 
    //     message: '"authorId" deve ser maior que 0' 
    // }),
    authorName: z.string({
        'required_error': '"authorId" é um campo obrigatório'
    }),
    userId: z.number({
        'required_error': '"userId" é um campo obrigatório',
        'invalid_type_error': '"userId" deve ser um número',
    }).gt(0, { 
        message: '"userId" deve ser maior que 0' 
    }),
    infoLink: z.string({
        'required_error': '"infoLink" é um campo obrigatório'
    }),
})

type Book = z.infer<typeof Book>

export default Book