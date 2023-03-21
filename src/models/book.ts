import { ResultSetHeader, RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import Book from '../interfaces/book';
import { ComplexModelBook } from './model';

const DATABASE = 'book_manager_db'

export default class BookModel implements ComplexModelBook<Book> {
    constructor(private tableName: string = 'Books', private connection = conn){}

    // eslint-disable-next-line complexity
    async create(obj: Book): Promise<Book> {
        const [result] = await
        this.connection.execute<ResultSetHeader>(`INSERT INTO ${DATABASE}.${this.tableName} 
        (title, thumb, has_been_read, author_name, info_link, user_id) 
        VALUES (?, ?, ?, ?, ?, ?);`, [
            obj.title, obj.thumb || null, obj.hasBeenRead,
            obj.authorName, obj.infoLink, obj.userId])

        return {id: result.insertId, ...obj};
    }

    async list(): Promise<Partial<Book>[]> {
        const result = await this.connection.execute(`SELECT *
         FROM ${DATABASE}.${this.tableName};`);

        const [books] = result;
        return books as Book[];
    }

    async find(id: number): Promise<Partial<Book> | null> {
        const result = await this.connection.execute(`SELECT *
         FROM ${DATABASE}.${this.tableName} AS B WHERE B.id = ?;`, [id]);

        const [books] = result as RowDataPacket[];
        return books[0] as Book;
    }

    async findByTitle(title: string): Promise<Partial<Book> | null> {
        const result = await this.connection.execute(`SELECT *
         FROM ${DATABASE}.${this.tableName} AS B WHERE B.title = ?;`, [title]);

        const [books] = result as RowDataPacket[];
        return books[0] as Book;
    }

    // eslint-disable-next-line complexity
    async update(id: number, obj: Book): Promise<void> {
        await this.connection.execute(`UPDATE ${DATABASE}.${this.tableName}
        AS B SET B.title = ?, B.thumb = ?, B.has_been_read = ?, B.author_name = ?,
        B.info_link = ?, B.user_id = ? WHERE B.id = ?;`, [
            obj.title, obj.thumb || null, obj.hasBeenRead,
            obj.authorName, obj.infoLink, obj.userId, id
        ]);
    }

    async delete(id: number): Promise<void> {
        await this.connection.execute(`DELETE FROM ${DATABASE}.${this.tableName}
        AS B WHERE B.id = ?;`, [id]);
    }
    
}
