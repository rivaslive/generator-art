declare type ID = string | number;
declare type TokenType = 'token' | 'code';

declare namespace Express {
  export interface Request {
    user?: any
  }
}
