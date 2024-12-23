import * as fs from 'fs';
import * as path from 'path';

export const makeRoute = (name: string) => {
  const controllerName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Controller`;
  const routePath = path.join(process.cwd(), 'router', `${name}.router.ts`);

  // Create router directory if it doesn't exist
  const routerDir = path.join(process.cwd(), 'router');
  if (!fs.existsSync(routerDir)) {
    fs.mkdirSync(routerDir, { recursive: true });
  }

  const routeTemplate = `import { BaseRoute } from './baseRoute';
import { ${controllerName} } from '../controllers/${controllerName}';

const ${name}Controller = new ${controllerName}();
const ${name}Route = new BaseRoute(${name}Controller);

export default ${name}Route.getRouter();`;

  fs.writeFileSync(routePath, routeTemplate);
  console.log(`Route created: ${routePath}`);

  // Update main router index.ts
  const indexPath = path.join(process.cwd(), 'router', 'index.ts');
  if (fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, 'utf-8');
    
    // Add import statement
    const importStatement = `import ${name}Router from './${name}.router';`;
    if (!indexContent.includes(importStatement)) {
      const importPosition = indexContent.lastIndexOf('import');
      const endOfImports = indexContent.indexOf('\n', importPosition) + 1;
      indexContent = indexContent.slice(0, endOfImports) + importStatement + '\n' + indexContent.slice(endOfImports);
    }

    // Add router usage
    const routerUsage = `router.use('/${name}s', ${name}Router);`;
    if (!indexContent.includes(routerUsage)) {
      const lastRouterUse = indexContent.lastIndexOf('router.use');
      const endOfLine = indexContent.indexOf('\n', lastRouterUse) + 1;
      indexContent = indexContent.slice(0, endOfLine) + routerUsage + '\n' + indexContent.slice(endOfLine);
    }

    fs.writeFileSync(indexPath, indexContent);
    console.log(`Updated router index: ${indexPath}`);
  }
}; 