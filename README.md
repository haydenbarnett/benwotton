# Ben Wotton

Personal website for Ben Wotton. Powered by React, Next.js, Typescript, Prismic. Hosted with Vercel.

## Setup

Install dependencies and start the development server:

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3001](http://localhost:3001). Set `PORT` to use a
different port, for example `PORT=3100 pnpm dev`.

## Environment

Copy `.env.example` to `.env.local` and set the Prismic repository name and
access token. `PRISMIC_ACCESS_TOKEN` is server-only and must not use a
`NEXT_PUBLIC_` prefix.
