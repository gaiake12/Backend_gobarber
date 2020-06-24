import { Router } from 'express';

import AutheticateUserService from '../services/AuthenticateUserService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const autheticateUser = new AutheticateUserService();

  const { user, token } = await autheticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionRouter;
