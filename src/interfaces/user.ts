import { z } from 'zod';

const User = z.object({
    id: z.number({
        'invalid_type_error': '"id" deve ser um número',
    }).optional(),
    name: z.string({
        'required_error': '"name" é um campo obrigatório',
        'invalid_type_error': '"name" deve ser uma string',
    }).min(3,{ 
        message: '"name" deve ter no mínimo 3 caracteres' 
    }),
    email: z.string({
        'required_error': '"email" é um campo obrigatório',
        'invalid_type_error': '"email" deve ser uma string',
    }).email(),
    password: z.string({
        'required_error': '"password" é um campo obrigatório',
        'invalid_type_error': '"password" deve ser uma string',
    }).min(6,{ 
        message: '"password" deve ter no mínimo 6 caracteres' 
    }),
    role: z.number({
        'invalid_type_error': '"role" deve ser um número',
    }).gte(0).lte(2),
})

type User = z.infer<typeof User>

export default User