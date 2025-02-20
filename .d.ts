declare module 'logger-endpoints-api' {
  import { Request, Response, NextFunction } from 'express';

  function logger(req: Request, res: Response, next: NextFunction): void;
  export = logger;
}
