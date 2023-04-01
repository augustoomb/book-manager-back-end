import Book from '../interfaces/book';
import { ComplexModelBook } from '../models/model';
import BookModel from '../models/book';
import Service from './service';
import BadRequest from '../errors/badRequest';

export class BookService extends Service<Book> {
  constructor(model: ComplexModelBook<Book> = new BookModel()) {
    super(model);
  }

  async create(obj: Book): Promise<Partial<Book>> {
    const foundBook = await
      (this.model as ComplexModelBook<Book>).findByTitle(obj.title);

    if (foundBook) {
      throw new BadRequest('Livro já adicionado');      
    }

    const createdBook = await super.create(obj);

    return createdBook;
  }
  
  async update(userId: number, id: number, obj: Book): Promise<void> {
    const foundBook = await
      (this.model as ComplexModelBook<Book>).find(userId, id);

    if (!foundBook) {
      throw new BadRequest('Livro não existe');      
    }

    await super.update(userId, id, obj)
  }
  
  

  // async create(obj: Book): Promise<void> {
  //   if (obj.title.length <= 3) {
  //     throw new BadRequest('O título precisa ter pelo menos 4 caracteres');
  //   }
  //   return super.create(obj);
  // }

}
