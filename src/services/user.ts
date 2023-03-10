import User from '../interfaces/user';
import { SimpleModel } from '../models/model';
import UserModel from '../models/user';
import Service from './service';

export class UserService extends Service<User> {
  constructor(model: SimpleModel<User> = new UserModel()) {
    super(model);
  }
}
