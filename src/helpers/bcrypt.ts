import bcrypt from 'bcrypt';

class Bcrypt {

    public static createPassHash(pass: string):string | undefined {
        if (pass == undefined) {
            return undefined;
        }

        return bcrypt.hashSync(pass, 10);
    }

    // public static verifyToken(token: string) {
    //     pass
    // }
}

export default Bcrypt;
