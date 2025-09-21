# Huddle Monorepo

A monorepo containing the Huddle application with a SvelteKit client and Express.js server.

## Structure

```
├── client/          # SvelteKit frontend application
├── server/          # Express.js backend API
└── package.json     # Root package.json with workspace configuration
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

Install all dependencies for both client and server:

```bash
npm install
```

### Development

Start both client and server in development mode:

```bash
npm run dev
```

Or start them individually:

```bash
# Start only the client (SvelteKit dev server)
npm run dev:client

# Start only the server (Express.js with nodemon)
npm run dev:server
```

### Building

Build both applications:

```bash
npm run build
```

Or build them individually:

```bash
# Build only the client
npm run build:client

# Build only the server
npm run build:server
```

### Workspace Commands

You can run commands in specific workspaces:

```bash
# Install a package in the client workspace
npm install <package-name> --workspace=client

# Install a package in the server workspace
npm install <package-name> --workspace=server

# Run a script in a specific workspace
npm run <script-name> --workspace=<workspace-name>
```

## Workspaces

- **client**: SvelteKit application with Tailwind CSS
- **server**: Express.js API server

## Development URLs

- Client: http://localhost:5173 (SvelteKit default)
- Server: http://localhost:3000 (Express.js)

## Deployment

### Vercel (Client)

The client (SvelteKit app) is configured for deployment on Vercel:

1. The project uses `@sveltejs/adapter-vercel` for optimal Vercel integration
2. `vercel.json` configures the build process for the monorepo structure
3. Only the client workspace is deployed, server is ignored via `.vercelignore`

To deploy manually:
```bash
npm run build:client  # Test the build locally first
npx vercel           # Deploy to Vercel
```

### Server Deployment

The Express.js server can be deployed to platforms like:
- Railway
- Render
- Heroku
- DigitalOcean App Platform

Example for Railway:
```bash
cd server
# Follow Railway deployment instructions
```

## Monorepo Structure

This project uses npm workspaces for monorepo management:
- Dependencies are installed at the root level when possible
- Each workspace has its own `package.json`
- Cross-workspace dependencies are automatically linked
