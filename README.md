# huddle

Monorepo with `client` (SvelteKit) and `server` (Express).

Scripts (run from repo root):

- `npm run dev` — start both server and client concurrently (dev).
- `npm run build` — build the client for production.
- `npm run preview` — start the server and preview the client (uses `vite preview`).
- `npm run client:dev|build|preview` — run client scripts only.
- `npm run server:dev|start` — run server scripts only.

Notes:
- We use workspaces so dependencies for both `client` and `server` are installed from the root with `npm install`.
- The server is a minimal Express app in `server/index.js` listening on port 3000.
- The client is a SvelteKit app in `client/`.

On Windows PowerShell, run:

```
npm install
npm run dev
```

The client will be available at http://localhost:5173/ and the server at http://localhost:3000/.
