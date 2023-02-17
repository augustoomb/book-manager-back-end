import { RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import Author from '../interfaces/author';
import { SimpleModel } from './model';

const DATABASE = 'book_manager_db'

export default class AuthorModel implements SimpleModel<Author> {

    constructor(private tableName: string = 'Authors', private connection = conn){}

    async create(obj: Author): Promise<void> {
        await this.connection.execute(`INSERT INTO ${DATABASE}.${this.tableName} (name, site)
        VALUES (?, ?);`, [obj.name, obj.site])
    }

    async list(): Promise<Partial<Author>[]> {
        const result = await this.connection.execute(`SELECT id, name, site
         FROM ${DATABASE}.${this.tableName};`);

        const [authors] = result;
        return authors as Author[];
    }

    async find(id: number): Promise<Partial<Author> | null> {
        // const result = await this.connection.execute<ROwDataPacket[]>(`SELECT id, name, site
        const result = await this.connection.execute(`SELECT id, name, site
         FROM ${DATABASE}.${this.tableName} AS A WHERE A.id = ?;`, [id]);

        const [authors] = result as RowDataPacket[];
        return authors[0] as Author;
    }
}
