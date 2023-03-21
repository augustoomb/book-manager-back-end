import User from '../interfaces/user';
import { SimpleModel } from '../models/model';
import UserModel from '../models/user';
import UserLoginModel from '../models/userLogin';
import Service from './service';
import JwtToken from '../helpers/jwtToken';
import BadRequest from '../errors/badRequest';

export class UserService extends Service<User> {
  constructor(model: SimpleModel<User> = new UserModel()) {
    super(model);
  }

  async createUser(obj: User): Promise<string> {

    const userLoginModel = new UserLoginModel();
    const foundUser = await userLoginModel.findByEmail(obj.email);

    if (foundUser) {
      throw new BadRequest('Usuário já existe!!!!');
    }

    const createdUser = await super.create(obj);

    return JwtToken.createToken(createdUser);
  }

}
