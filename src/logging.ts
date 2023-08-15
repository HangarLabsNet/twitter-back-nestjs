import { LoggerModule } from "nestjs-pino";

export const loggerModule = (
  process.env.LOG_MODE === 'pretty' ? LoggerModule.forRoot({
    pinoHttp: {
      transport: {
        target: 'pino-pretty',
        options: {
          ignore: 'req.headers',
        }
      },
    }
  }) : LoggerModule.forRoot()
)
