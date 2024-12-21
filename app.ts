import express, { Express } from 'express';
import favicon from 'serve-favicon';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';
import { allRoutes } from './router';

// Read private key and configure environment
const privateKey = fs.readFileSync('privateKey.key');
dotenv.config({
  path: path.join(__dirname, '.env'),
});

const app: Express = express();

// JWT Configuration
const secret: string = '4fb900905353d2f8016f5abba888736847776e29ab27166ef87e5f0b7924fb72';

interface TokenPayload {
  id: string;
  email: string;
}

const token = jwt.sign(
  { id: 'some-hash-id', email: 'javid@gmail.com' } as TokenPayload,
  privateKey,
  {
    expiresIn: '1d',
    algorithm: 'RS512',
  }
);

// Middleware
app.use(express.json());
app.use(favicon(path.join(__dirname, 'logo.png')));

// Database connection
import './config/mongo.config';

// Routes
app.use(allRoutes);

// Server startup
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(
    `Server running at port ${PORT} http://localhost:${PORT}`
  );
});

export default app; 