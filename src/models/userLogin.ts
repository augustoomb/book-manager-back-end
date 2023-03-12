import { RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import User from '../interfaces/user';

const DATABASE = 'book_manager_db'

export default class UserLoginModel {

    constructor(private tableName: string = 'Users', private connection = conn){}

    async findByEmail(email: string): Promise<Partial<User> | null> {
        const result = await this.connection.execute(`SELECT id, name, email, password, role
         FROM ${DATABASE}.${this.tableName} AS A WHERE A.email = ?;`, [email]);

        const [users] = result as RowDataPacket[];
        return users[0] as User;
    }
}
