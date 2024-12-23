import * as fs from 'fs';
import * as path from 'path';

export const makeMigration = (name: string) => {
  const timestamp = new Date().getTime();
  const migrationName = `${timestamp}_${name}`;
  const migrationPath = path.join(process.cwd(), 'migrations', `${migrationName}.ts`);

  // Create migrations directory if it doesn't exist
  const migrationsDir = path.join(process.cwd(), 'migrations');
  if (!fs.existsSync(migrationsDir)) {
    fs.mkdirSync(migrationsDir, { recursive: true });
  }

  const migrationTemplate = `import { Db } from 'mongodb';

export const up = async (db: Db) => {
  try {
    // Write your migration up logic here
    // Example:
    // await db.collection('users').updateMany({}, { $set: { newField: 'value' } });
  } catch (error) {
    throw error;
  }
};

export const down = async (db: Db) => {
  try {
    // Write your migration down logic here
    // Example:
    // await db.collection('users').updateMany({}, { $unset: { newField: '' } });
  } catch (error) {
    throw error;
  }
};`;

  fs.writeFileSync(migrationPath, migrationTemplate);
  console.log(`Migration created: ${migrationPath}`);
}; 