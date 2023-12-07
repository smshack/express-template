import dotenv from "dotenv";
// 기본적으로 NODE_ENV 환경변수를 'development'로 설정
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// .env 파일에서 환경변수 로드
const envFound = dotenv.config();
// .env 파일을 찾지 못할 경우 에러 발생
if (envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️");

export default {
  port: parseInt(process.env.PORT!, 10), // 서버 포트 번호 (환경변수에서 불러옴)
  jwtSecret: process.env.JWT_SECRET!, // JWT 비밀키 (환경변수에서 불러옴)
  logs: {
    level: process.env.LOG_LEVEL || "silly", // 로깅 레벨 (환경변수에서 불러옴, 기본값 'silly')
  },
  api: {
    prefix: "/api", // API 경로 접두사
  },
};
