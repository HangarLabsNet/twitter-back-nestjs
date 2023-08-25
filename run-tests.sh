export LOG_MODE=pretty
export DB_CLIENT=better-sqlite3
export DB_CONNECTION_STRING=./test.sqlite
export JWT_SECRET=12435687
export JWT_TOKEN_EXPIRATION=10s

###

pnpm migrate:recreate
pnpm jest
