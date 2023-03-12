// import User from '../interfaces/user';
import UserLoginModel from '../models/userLogin';
import JwtToken from '../helpers/jwtToken';
import UserLogin from '../interfaces/userLogin';
import NotFound from '../errors/notFound';
import Bcrypt from '../helpers/bcrypt';

export class UserLoginService {
  model: UserLoginModel = new UserLoginModel();

  async login(obj: UserLogin): Promise<string>  {

    const foundUser = await this.model.findByEmail(obj.email);
    if (!foundUser) {
      throw new NotFound('O e-mail informado não existe');
    }

    const passIsValid = Bcrypt.verifyPass(obj.password, foundUser.password);

    if (!passIsValid) {
      throw new NotFound('Senha incorreta');
    }

    return JwtToken.createToken(foundUser);
    
  }

}
