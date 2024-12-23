# Mana Express

A powerful TypeScript-based REST API framework built on Express.js, featuring a modular architecture and Laravel-inspired CLI.

## Features

- 🚀 MVC Architecture
- 🎯 TypeScript Support
- 🔥 Hot Reload Development
- 🛠️ Artisan-like CLI Tool
- 🗄️ MongoDB with Mongoose
- 🔒 JWT Authentication
- 📝 Base CRUD Operations
- 🎨 Service Layer Pattern
- 🌐 Route Auto-registration
- ⚡ Path Aliases

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start
```

## CLI Commands

Generate code quickly using the Mana CLI:

```bash
# Create a new controller
pnpm mana make:controller UserController
pnpm mana make:controller UserController -r  # Resource controller

# Create a new model
pnpm mana make:model User
pnpm mana make:model User -c  # With controller
pnpm mana make:model User -r  # With route
pnpm mana make:model User -c -r  # With both

# Create middleware
pnpm mana make:middleware Auth

# Create service
pnpm mana make:service User

# Create migration
pnpm mana make:migration create_users_table

# Create seeder
pnpm mana make:seeder UserSeeder
```

## Project Structure

```
.
├── app.ts              # Application entry point
├── controllers/        # Request handlers
├── model/             # Database models
├── services/          # Business logic
├── middleware/        # Express middleware
├── router/            # Route definitions
├── migrations/        # Database migrations
├── seeders/          # Database seeders
└── types/            # TypeScript type definitions
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your_database
JWT_SECRET=your_jwt_secret
```

## Authentication

JWT-based authentication is included. Protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
