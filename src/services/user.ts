import User from '../interfaces/user';
import { SimpleModel } from '../models/model';
import UserModel from '../models/user';
import Service from './service';
import JwtToken from '../helpers/jwtToken';

export class UserService extends Service<User> {
  constructor(model: SimpleModel<User> = new UserModel()) {
    super(model);
  }

  async createUser(obj: User): Promise<string> {

    super.create(obj);

    return JwtToken.createToken(obj);
  }

}
