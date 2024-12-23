import * as fs from 'fs';
import * as path from 'path';

export const makeSeeder = (name: string) => {
  const seederName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Seeder`;
  const seederPath = path.join(process.cwd(), 'seeders', `${seederName}.ts`);

  // Create seeders directory if it doesn't exist
  const seedersDir = path.join(process.cwd(), 'seeders');
  if (!fs.existsSync(seedersDir)) {
    fs.mkdirSync(seedersDir, { recursive: true });
  }

  const seederTemplate = `import mongoose from 'mongoose';

export class ${seederName} {
  async run() {
    try {
      // Write your seeder logic here
      // Example:
      // const data = [
      //   { name: 'John Doe', email: 'john@example.com' },
      //   { name: 'Jane Doe', email: 'jane@example.com' }
      // ];
      // await YourModel.insertMany(data);
      
      console.log('${seederName} completed successfully');
    } catch (error) {
      console.error('Error in ${seederName}:', error);
      throw error;
    }
  }

  async revert() {
    try {
      // Write your revert logic here
      // Example:
      // await YourModel.deleteMany({});
      
      console.log('${seederName} reverted successfully');
    } catch (error) {
      console.error('Error reverting ${seederName}:', error);
      throw error;
    }
  }
}`;

  fs.writeFileSync(seederPath, seederTemplate);
  console.log(`Seeder created: ${seederPath}`);
}; 