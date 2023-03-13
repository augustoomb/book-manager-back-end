import Author from '../interfaces/author';
import { ComplexModelAuthor } from '../models/model';
import AuthorModel from '../models/author';
import Service from './service';
import BadRequest from '../errors/badRequest';

export class AuthorService extends Service<Author> {
  constructor(model: ComplexModelAuthor<Author> = new AuthorModel()) {
    super(model);
  }
 

  async create(obj: Author): Promise<void> {
    const foundAuthor = await
      (this.model as ComplexModelAuthor<Author>).findByName(obj.name);

    if (foundAuthor) {
      throw new BadRequest('Autor já cadastrado');      
    }

    super.create(obj)
  }

  // async findByName (name: string): Promise<Partial<Author> | null> {
  //   return await (this.model as ComplexModelAuthor<Author>).findByName(name)
  // }

}
