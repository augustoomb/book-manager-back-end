import { z } from 'zod';

const UserLogin = z.object({
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
})

type UserLogin = z.infer<typeof UserLogin>

export default UserLogin