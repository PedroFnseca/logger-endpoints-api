import chalk from 'chalk';
import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  const start = Date.now();

  const method = req.method;
  const url = req.url;

  let methodColor: string;

  if (method === 'GET') {
    methodColor = chalk.green(method);
  } else if (method === 'POST') {
    methodColor = chalk.blue(method);
  } else if (method === 'PUT' || method === 'PATCH') {
    methodColor = chalk.magenta(method);
  } else if (method === 'DELETE') {
    methodColor = chalk.red(method);
  } else {
    methodColor = method;
  }

  console.log(`[${methodColor}] ${url}`);

  res.on('finish', () => {
    const elapsed = Date.now() - start;
    const statusCode = res.statusCode;
    let statusColor: string;

    if (statusCode >= 200 && statusCode < 300) {
      statusColor = chalk.green(statusCode.toString());
    } else if (statusCode >= 300 && statusCode < 400) {
      statusColor = chalk.yellow(statusCode.toString());
    } else {
      statusColor = chalk.red(statusCode.toString());
    }

    console.log(`[${methodColor}] ${url} ${statusColor} ${elapsed}ms`);
  });

  next();
};

export default logger;
