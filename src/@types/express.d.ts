import { Request, Response } from 'express';
import { User } from '../models';

declare module 'express' {
  interface GetAllRequest extends Request {
    query: {
      range?: string;
      sort?: string;
    };
  }

  interface AuthResponse extends Response {
    locals: {
      cognitoUser: CognitoResponse;
      user: User;
    };
  }

  interface CognitoResponse extends Response {
    sub: string;
    aud: string;
    email_verified: boolean;
    token_use: string;
    auth_time: number;
    iss: string;
    'cognito:username': string;
    exp: number;
    given_name: string;
    iat: number;
    email: string;
  }
}
