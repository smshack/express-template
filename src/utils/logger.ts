import winston from "winston";
import config from "../config";

// 로그 전송 방법을 저장할 배열
const transports = [];

// 개발 환경이 아닐 경우 콘솔에 로그를 출력
if (process.env.NODE_ENV !== "development") {
  transports.push(new winston.transports.Console());
} else {
  // 개발 환경일 경우 형식화된 콘솔 로그를 출력
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
      format: "YYYY-MM-DD HH:mm:ss", // 타임스탬프 형식 지정
    }),
    winston.format.errors({ stack: true }), // 에러 스택 트레이스 포함
    winston.format.splat(),
    winston.format.json() // JSON 형식으로 로그 출력
  ),
  transports, // 로그 전송 방법 설정
});

export default LoggerInstance;
