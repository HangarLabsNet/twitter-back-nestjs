export LOG_LEVEL=warn
export DB_CLIENT=better-sqlite3
export DB_CONNECTION_STRING=./test.sqlite
export JWT_SECRET=12435687
export JWT_TOKEN_EXPIRATION=10s

###

yarn migrate:recreate
yarn jest
