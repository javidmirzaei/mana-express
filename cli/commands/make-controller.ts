import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

interface ControllerOptions {
  resource?: boolean;
}

export const makeController = (name: string, options: ControllerOptions) => {
  const controllerName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Controller`;
  const modelName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Model`;
  
  const controllerPath = path.join(process.cwd(), 'controllers', `${controllerName}.ts`);

  // Create controllers directory if it doesn't exist
  const controllersDir = path.join(process.cwd(), 'controllers');
  if (!fs.existsSync(controllersDir)) {
    fs.mkdirSync(controllersDir, { recursive: true });
  }

  const controllerTemplate = options.resource ? 
    `import { ${modelName} } from "../model/${name}.model";
import { baseControllers } from "./baseControllers";

export class ${controllerName} extends baseControllers {
  constructor() {
    super(${modelName});
  }

  // Add custom methods here
}` :
    `import { Request, Response, NextFunction } from 'express';

export class ${controllerName} {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({ message: 'Index method' });
    } catch (error) {
      next(error);
    }
  }

  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      res.json({ message: 'Show method', id });
    } catch (error) {
      next(error);
    }
  }

  async store(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({ message: 'Store method', data: req.body });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      res.json({ message: 'Update method', id, data: req.body });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      res.json({ message: 'Delete method', id });
    } catch (error) {
      next(error);
    }
  }
}`;

  fs.writeFileSync(controllerPath, controllerTemplate);
  console.log(`Controller created: ${controllerPath}`);
}; 