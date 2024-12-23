import { Command } from 'commander';
import { makeController } from './commands/make-controller';
import { makeModel } from './commands/make-model';
import { makeRoute } from './commands/make-route';
import { makeMiddleware } from './commands/make-middleware';
import { makeService } from './commands/make-service';
import { makeMigration } from './commands/make-migration';
import { makeSeeder } from './commands/make-seeder';

const program = new Command();

program
  .name('mana')
  .description('Mana Express CLI - A powerful CLI for Mana Express Framework')
  .version('1.0.0');

// make:controller command
program
  .command('make:controller')
  .description('Create a new controller')
  .argument('<name>', 'Name of the controller')
  .option('-r, --resource', 'Create a resource controller')
  .action(makeController);

// make:model command
program
  .command('make:model')
  .description('Create a new model')
  .argument('<name>', 'Name of the model')
  .option('-c, --controller', 'Create a controller for the model')
  .option('-r, --route', 'Create a route for the model')
  .action(makeModel);

// make:route command
program
  .command('make:route')
  .description('Create a new route')
  .argument('<name>', 'Name of the route')
  .action(makeRoute);

// make:middleware command
program
  .command('make:middleware')
  .description('Create a new middleware')
  .argument('<name>', 'Name of the middleware')
  .action(makeMiddleware);

// make:service command
program
  .command('make:service')
  .description('Create a new service')
  .argument('<name>', 'Name of the service')
  .action(makeService);

// make:migration command
program
  .command('make:migration')
  .description('Create a new migration')
  .argument('<name>', 'Name of the migration')
  .action(makeMigration);

// make:seeder command
program
  .command('make:seeder')
  .description('Create a new seeder')
  .argument('<name>', 'Name of the seeder')
  .action(makeSeeder);

program.parse(); 