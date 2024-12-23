import * as fs from 'fs';
import * as path from 'path';

export const makeMiddleware = (name: string) => {
  const middlewareName = `${name.charAt(0).toLowerCase()}${name.slice(1)}Middleware`;
  const middlewarePath = path.join(process.cwd(), 'middleware', `${middlewareName}.ts`);

  // Create middleware directory if it doesn't exist
  const middlewareDir = path.join(process.cwd(), 'middleware');
  if (!fs.existsSync(middlewareDir)) {
    fs.mkdirSync(middlewareDir, { recursive: true });
  }

  const middlewareTemplate = `import { Request, Response, NextFunction } from 'express';

export const ${middlewareName} = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Add your middleware logic here
    
    next();
  } catch (error) {
    next(error);
  }
};`;

  fs.writeFileSync(middlewarePath, middlewareTemplate);
  console.log(`Middleware created: ${middlewarePath}`);
}; 