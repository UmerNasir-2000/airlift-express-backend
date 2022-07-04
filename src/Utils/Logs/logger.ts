import { format, transports } from "winston";
import {
    NestjsWinstonLoggerService,
    appendRequestIdToLogger,
    LoggingInterceptor,
    morganRequestLogger,
    morganResponseLogger,
    appendIdToRequest
  } from "nestjs-winston-logger";
import { INestApplication } from "@nestjs/common";

function logger (app: INestApplication) {

    const globalLogger = new NestjsWinstonLoggerService({
        format: format.combine(
            format.timestamp({ format: "isoDateTime" }),
            format.json(),
            format.colorize({ all: true }),
        ),
        transports: [
        new transports.File({ filename: "error.log", level: "error" }),
        new transports.File({ filename: "combined.log" }),
        new transports.Console(),
        ],
    });

    app.useLogger(globalLogger);
    
    app.use(appendIdToRequest);
    app.use(appendRequestIdToLogger(globalLogger));
    
    app.use(morganRequestLogger(globalLogger));
    app.use(morganResponseLogger(globalLogger));
    
    app.useGlobalInterceptors(new LoggingInterceptor(globalLogger));

}

export default logger;

