import { config } from 'dotenv';
import express, { Request, Response } from 'express';
import proxy from 'express-http-proxy';
import expressWinston from 'express-winston';
import winston from 'winston';

import routes from './routes';

config();

const app = express();

const router = express.Router();

// request logger
app.use(
    expressWinston.logger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
        ),
        meta: false,
        msg: 'HTTP {{req.method}} {{req.url}}',
        expressFormat: true,
        colorize: true,
    })
);

// error logger
app.use(
    expressWinston.errorLogger({
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
        ),
    })
);

// env variables are cast as strings
if(process.env.USE_MOCKS === 'false') {
    app.use(
        '/',
        proxy(process.env.PROXY_URL || '', {
            //  don't reject self-signed certificates
            //  or set env variable NODE_TLS_REJECT_UNAUTHORIZED = 0
            proxyReqOptDecorator: (proxyReqOpts) => ({
                ...proxyReqOpts,
                rejectUnauthorized: false,
            }),
        })
    );
} else {
    // delay response by random time
    app.use((req, res,next) => {
        setTimeout(next,Math.ceil(Math.random() * 1000));
    });
}

router.get('/', (req: Request, res: Response) =>
    res.send('React Mock Server')
);

// Routes
app.use('/', routes);
app.listen(4000);