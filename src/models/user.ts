import { ResultSetHeader, RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import User from '../interfaces/user';
import { SimpleModel } from './model';

const DATABASE = 'book_manager_db'

export default class UserModel implements SimpleModel<User> {

    constructor(private tableName: string = 'Users', private connection = conn){}

    async create(obj: User): Promise<User> {
        const [result] = await 
        this.connection.execute<ResultSetHeader>(`INSERT INTO ${DATABASE}.${this.tableName}
        (name, email, password, role)
        VALUES (?, ?, ?, ?);`, [obj.name, obj.email, obj.password, obj.role])

        return {id: result.insertId, ...obj};
    }

    async list(_userId: number): Promise<Partial<User>[]> {
        const result = await this.connection.execute(`SELECT id, name, email, password, role
         FROM ${DATABASE}.${this.tableName};`);

        const [users] = result;
        return users as User[];
    }

    async find(id: number): Promise<Partial<User> | null> {
        const result = await this.connection.execute(`SELECT id, name, email, password, role
         FROM ${DATABASE}.${this.tableName} AS A WHERE A.id = ?;`, [id]);

        const [users] = result as RowDataPacket[];

        return users[0] as User;
    }

    async findByEmail(email: string): Promise<Partial<User> | null> {
        const result = await this.connection.execute(`SELECT id, name, email, password, role
         FROM ${DATABASE}.${this.tableName} AS A WHERE A.email = ?;`, [email]);

        const [users] = result as RowDataPacket[];
        return users[0] as User;
    }
}
