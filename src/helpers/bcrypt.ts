import bcrypt from 'bcrypt';

class Bcrypt {

    public static createPassHash(pass: string):string | undefined {

        const saltRounds = 10;

        if (pass == undefined) {
            return undefined;
        }

        return bcrypt.hashSync(pass, saltRounds);
    }

    public static verifyPass(loginPass: string, dbHash: string | undefined): boolean {

        if (loginPass == undefined || dbHash == undefined) {
            return false;
        }

        return bcrypt.compareSync(loginPass, dbHash);
    }
}

export default Bcrypt;
