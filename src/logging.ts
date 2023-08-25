import { LoggerModule } from "nestjs-pino";

let logLevel = 'info';
if (process.env.LOG_LEVEL) { // not: null, undefined or empty
  logLevel = process.env.LOG_LEVEL
}

const config = {
  pinoHttp: {
    level: logLevel,
    // level: process.env.LOG_LEVEL ?? 'info' // no funciona si es empty :(
  }
}

if (process.env.LOG_MODE === 'pretty') {
  config.pinoHttp['transport'] = {
    target: 'pino-pretty',
    options: {
      ignore: 'req.headers',
    }
  }
}

export const loggerModule = LoggerModule.forRoot(config);
