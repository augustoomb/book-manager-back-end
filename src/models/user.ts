import { RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import User from '../interfaces/user';
import { SimpleModel } from './model';

const DATABASE = 'book_manager_db'

export default class AuthorModel implements SimpleModel<User> {

    constructor(private tableName: string = 'Users', private connection = conn){}

    async create(obj: User): Promise<void> {
        await this.connection.execute(`INSERT INTO ${DATABASE}.${this.tableName}
        (name, email, password, role)
        VALUES (?, ?, ?, ?);`, [obj.name, obj.email, obj.password, obj.role])
    }

    async list(): Promise<Partial<User>[]> {
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
}
