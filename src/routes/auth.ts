import { Request, NextFunction, CognitoResponse, AuthResponse } from 'express';
import CognitoExpress from 'cognito-express';
import { Models } from '../models';

const cognito = new CognitoExpress({
  region: process.env.AWS_REGION,
  cognitoUserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
  tokenUse: process.env.AWS_TOKEN_USE,
  tokenExpiration: process.env.AWS_TOKEN_EPIRATION,
});

export function Auth(
  req: Request,
  res: AuthResponse,
  next: NextFunction
): void {
  const token = req.headers.authorization;

  if (!token) res.status(401).send('Access Token missing from header.');

  cognito.validate(
    token,
    async function (err: Error, response: CognitoResponse): Promise<void> {
      if (err) res.status(401).send(err);

      res.locals.cognitoUser = response;

      const user = await Models.User.findOne({
        where: { cognitoUserId: response.sub },
      }).catch((err) => {
        res.status(401).send(err);
      });

      if (user) {
        res.locals.user = user;
        next();
      }
    }
  );
}
