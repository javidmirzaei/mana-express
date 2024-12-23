import * as fs from "fs";
import * as path from "path";

const createController = (name: string): void => {
  const controllerName = `${name.charAt(0).toUpperCase()}${name.slice(
    1
  )}Controller`;
  const modelName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Model`;

  const controllerPath = path.join(
    __dirname,
    "controllers",
    `${controllerName}.ts`
  );

  const controllerTemplate = `
import { ${modelName} } from "../model/${name}.model";
import { baseControllers } from "./baseControllers";

export class ${controllerName} extends baseControllers {
  constructor() {
    super(${modelName});
  }
}`;

  fs.writeFileSync(controllerPath, controllerTemplate.trim());
  console.log(`Controller created: ${controllerPath}`);
};

const name = process.argv[2];
if (!name) {
  console.error("Please provide a name for the controller.");
  process.exit(1);
}

createController(name); 