import config from "../config";
import express from "express";
// import session from 'express-session';
import flash from "connect-flash";
import passport from "passport";
import passportConfig from "../config/passportConfig";
// import sessionConfig from '../config/sessionConfig';
import cors from "cors";
import hpp from "hpp";
import helmet from "helmet";
import morgan from "morgan";
import routes from "../api";

// Express 애플리케이션에 미들웨어 및 라우트 설정을 추가하는 함수
export default async ({ app }: { app: express.Application }): Promise<void> => {
  // 운영 환경일 경우 보안 및 로깅을 위한 미들웨어 설정
  if (process.env.NODE_ENV === "production") {
    app.use(morgan("combined")); // HTTP 요청 로그 기록
    app.use(helmet()); // HTTP 헤더 보안 강화
    app.use(hpp()); // HTTP 파라미터 오염 방지
  } else {
    app.use(morgan("dev")); // 개발 환경용 HTTP 요청 로그 기록
  }
  app.use(express.json()); // JSON 형식의 요청 본문 처리
  app.use(express.urlencoded({ extended: true })); // URL 인코딩된 요청 본문 처리
  // app.use(session(sessionConfig)); // 세션 활성화 (현재 주석 처리됨)
  app.use(flash()); // 플래시 메시지 사용 활성화
  app.use(passport.initialize()); // Passport 초기화
  // app.use(passport.session()); // Passport에 세션 연결 (현재 주석 처리됨)
  passportConfig(); // Passport 전략 및 인증 방식 설정
  app.use(cors()); // CORS 미들웨어 사용

  // 기본 라우트 설정
  app.get("/favicon.ico", (req, res) => res.status(204));
  app.get("/", (req, res) => res.send("root!"));
  app.use(config.api.prefix, routes()); // API 라우트 설정

  // 404 에러 처리 미들웨어
  app.use((req, res, next) => {
    const err = new Error("Not Found");
    next(err);
  });
};
