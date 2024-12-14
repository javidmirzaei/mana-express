const fs = require("fs");
const path = require("path");

const createController = (name) => {
  const controllerName = `${name.charAt(0).toUpperCase()}${name.slice(
    1
  )}Controller`;
  const modelName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Model`;

  const controllerPath = path.join(
    __dirname,
    "controllers",
    `${controllerName}.js`
  );

  const controllerTemplate = `
const BaseController = require("./baseControllers");
const { ${modelName} } = require("../models/${name}.model");

class ${controllerName} extends BaseController {
  constructor() {
    super(${modelName});
  }
}

module.exports = new ${controllerName}();
  `;
  fs.writeFileSync(controllerPath, controllerTemplate.trim());
  console.log(`Controller created: ${controllerPath}`);
};

const name = process.argv[2];
if (!name) {
  console.error("Please provide a name for the controller.");
  process.exit(1);
}

createController(name);
