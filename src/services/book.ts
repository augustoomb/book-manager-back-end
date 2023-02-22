import Book from '../interfaces/book';
import { Model } from '../models/model';
import BookModel from '../models/book';
import Service from './service';
// import BadRequest from '../errors/badRequest';

export class BookService extends Service<Book> {
  constructor(model: Model<Book> = new BookModel()) {
    super(model);
  }

  // async create(obj: Book): Promise<void> {
  //   if (obj.title.length <= 3) {
  //     throw new BadRequest('O título precisa ter pelo menos 4 caracteres');
  //   }
  //   return super.create(obj);
  // }

}
