import * as jwt from 'jsonwebtoken';
import User from '../interfaces/user';

class JwtToken {
    // public secret = process.env.JWTSECRET || '@notherP@ss';

    public static createToken(payload: Partial<User>):string {
        const token = jwt.sign(
            { payload }, process.env.JWTSECRET || '@notherP@ss', 
            { algorithm: 'HS256', expiresIn: '7d' }
        );

        return token;
    }

    public static verifyToken(token: string) {
        const data = jwt.verify(token, process.env.JWTSECRET || '@notherP@ss');
        return data;
    }
}

export default JwtToken;
