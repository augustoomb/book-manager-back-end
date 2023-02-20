import Author from '../interfaces/author';
import { SimpleModel } from '../models/model';
import AuthorModel from '../models/author';
import Service from './service';
import BadRequest from '../errors/badRequest';

export class AuthorService extends Service<Author> {
  constructor(model: SimpleModel<Author> = new AuthorModel()) {
    super(model);
  }

  async create(obj: Author): Promise<void> {
    if (obj.name.length <= 3) {
      throw new BadRequest('O nome precisa ter pelo menos 4 caracteres');
    }
    return super.create(obj);
  }

}
