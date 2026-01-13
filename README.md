# mcf4-starterkit-ui

Minimal starter UI for Next.js projects.
## Preview

![Dashboard preview](/public/dashboard.png)

## Features
- Next.js (13+)
- TypeScript ready
- Component-driven structure
- ESlint + Prettier configured
- CI-friendly scripts

## Prerequisites
- Node.js 16 or later
- npm, yarn, or pnpm

## Quickstart

Install dependencies:
```bash
# npm
npm install

# yarn
yarn

# pnpm
pnpm install
```

Run development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Build and start:
```bash
npm run build
npm run start
```

## Available scripts
- dev — start dev server
- build — production build
- start — start production server
- lint — run ESLint
- format — run Prettier
- test — run tests (if configured)

Example package.json scripts:
```json
{
    "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "format": "prettier --write .",
        "test": "jest"
    }
}
```

## Environment
Create `.env.local` for environment-specific variables:
```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## Recommended structure
```
/src
    /app or /pages
    /components
    /styles
    /lib
/public
/.eslintrc
/.prettierrc
/tsconfig.json
/package.json
```

## Contributing
- Fork, create a feature branch, open a PR.
- Follow existing code style and run lint/format before committing.

## License
MIT