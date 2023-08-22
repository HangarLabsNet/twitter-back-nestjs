# twitter-back-nestjs

A twitter clone (backend).<br>
Link to [demo](https://5kblkr9vod.execute-api.us-east-1.amazonaws.com/Prod/docs)

## Tech Stack

- Node.js 18
- NestJS 10
- Objection 3 with knex 2

## Local start
```bash
pnpm i
pnpm start:dev
```

## Running database migrations
```bash
pnpm knex migration:latest
```

## Environment variables
All variables are located in this file [example.env](example.env)

## Knowing issues
- The logs include full request data. Is it possible that this data is displayed only once?
- dotenv is loading inelegantly, is there a better way to do it? I already tried using the Nest Config but it doesn't load the variables during the registry configuration
