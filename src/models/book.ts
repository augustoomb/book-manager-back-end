import { RowDataPacket } from 'mysql2';
import conn from '../database/connection';
import Book from '../interfaces/book';
import { Model } from './model';

const DATABASE = 'book_manager_db'

export default class BookModel implements Model<Book> {
    constructor(private tableName: string = 'Books', private connection = conn){}

    async create(obj: Book): Promise<void> {
        await this.connection.execute(`INSERT INTO ${DATABASE}.${this.tableName} 
        (title, rating, year, genre, pages, thumb, has_been_read, author_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?);`, [
            obj.title, obj.rating, obj.year, obj.genre,
            obj.pages, obj.thumb, obj.hasBeenRead, obj.authorId])
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

    async update(id: number, obj: Book): Promise<void> {
        await this.connection.execute(`UPDATE ${DATABASE}.${this.tableName}
        AS B SET B.title = ?, B.rating = ?, B.year = ?,
        B.genre = ?, B.pages = ?, B.thumb = ?, B.has_been_read = ?, B.author_id = ?
        WHERE B.id = ?;`, [
            obj.title, obj.rating,, obj.year, obj.genre, obj.pages,
            obj.thumb, obj.hasBeenRead, obj.authorId, id
        ]);
    }

    async delete(id: number): Promise<void> {
        await this.connection.execute(`DELETE FROM ${DATABASE}.${this.tableName}
        AS B WHERE B.id = ?;`, [id]);
    }
    
}
