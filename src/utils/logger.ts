import winston, { transport } from 'winston';
import config from '../config';
import fs from 'fs';
import 'winston-daily-rotate-file';

const logDir = __dirname + '/../logs';

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const infoTransport = new winston.transports.DailyRotateFile({
    filename: 'info.log',
    dirname: logDir,
    level: 'info',
    maxFiles: '30d',
});

const errorTransport = new winston.transports.DailyRotateFile({
    filename: 'error.log',
    dirname: logDir,
    level: 'error',
    maxFiles: '30d',
});

const transports: transport[] = [infoTransport, errorTransport];

if (process.env.NODE_ENV !== 'development') {
    transports.push(new winston.transports.Console());
} else {
    transports.push(
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.cli(),
                winston.format.splat()
            ),
        })
    );
}

// winston 로거 인스턴스 생성
const LoggerInstance = winston.createLogger({
    level: config.logs.level, // 로그 레벨 설정
    levels: winston.config.npm.levels, // npm 로그 레벨 사용
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss', // 타임스탬프 형식 지정
        }),
        winston.format.errors({ stack: true }), // 에러 스택 트레이스 포함
        winston.format.splat(),
        winston.format.json() // JSON 형식으로 로그 출력
    ),
    transports, // 로그 전송 방법 설정
});

export default LoggerInstance;
