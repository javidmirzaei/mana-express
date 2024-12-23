import * as fs from 'fs';
import * as path from 'path';

export const makeService = (name: string) => {
  const serviceName = `${name.charAt(0).toUpperCase()}${name.slice(1)}Service`;
  const servicePath = path.join(process.cwd(), 'services', `${serviceName}.ts`);

  // Create services directory if it doesn't exist
  const servicesDir = path.join(process.cwd(), 'services');
  if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
  }

  const serviceTemplate = `export class ${serviceName} {
  constructor() {
    // Add your service dependencies here
  }

  // Add your service methods here
  async findAll() {
    try {
      // Implement find all logic
      return [];
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string) {
    try {
      // Implement find by id logic
      return null;
    } catch (error) {
      throw error;
    }
  }

  async create(data: any) {
    try {
      // Implement create logic
      return data;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, data: any) {
    try {
      // Implement update logic
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string) {
    try {
      // Implement delete logic
      return true;
    } catch (error) {
      throw error;
    }
  }
}`;

  fs.writeFileSync(servicePath, serviceTemplate);
  console.log(`Service created: ${servicePath}`);
}; 