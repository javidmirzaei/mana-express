import * as fs from 'fs';
import * as path from 'path';
import { makeController } from './make-controller';
import { makeRoute } from './make-route';

interface ModelOptions {
  controller?: boolean;
  route?: boolean;
}

export const makeModel = (name: string, options: ModelOptions) => {
  const modelName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Model`;
  const interfaceName = `I${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  
  const modelPath = path.join(process.cwd(), 'model', `${name}.model.ts`);

  // Create model directory if it doesn't exist
  const modelDir = path.join(process.cwd(), 'model');
  if (!fs.existsSync(modelDir)) {
    fs.mkdirSync(modelDir, { recursive: true });
  }

  const modelTemplate = `import { Schema, model } from 'mongoose';

export interface ${interfaceName} {
  // Add your interface properties here
  createdAt?: Date;
  updatedAt?: Date;
}

const ${name}Schema = new Schema<${interfaceName}>(
  {
    // Add your schema fields here
  },
  {
    timestamps: true,
  }
);

export const ${modelName} = model<${interfaceName}>('${name}', ${name}Schema);`;

  fs.writeFileSync(modelPath, modelTemplate);
  console.log(`Model created: ${modelPath}`);

  // Create associated controller if requested
  if (options.controller) {
    makeController(name, { resource: true });
  }

  // Create associated route if requested
  if (options.route) {
    makeRoute(name);
  }
}; 