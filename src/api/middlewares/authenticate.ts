import { Request, Response, NextFunction } from "express";
import passport from "passport";
import config from "../../config";
import jwt from "jsonwebtoken";

// 로그인 프로세스를 처리하는 함수
const loginProcess = (req: Request, res: Response, next: NextFunction) =>
  // local 전략을 사용하여 인증 처리
  passport.authenticate(
    "local",
    { session: false },
    (err: Error, user: any, info: any) => {
      // 이메일 또는 비밀번호가 잘못되었을 때 에러 처리
      if (err || !user)
        return res.status(400).json({
          success: false,
          message: info.message,
          user: null,
          token: null,
        });

      // 정상적으로 사용자 정보를 찾았을 때
      req.login(user, { session: false }, (err) => {
        // 로그인 과정에서 에러가 발생한 경우
        if (err)
          res.status(400).json({
            success: false,
            message: err.message,
            user: null,
            token: null,
          });

        // JWT 토큰 생성
        const accessToken = jwt.sign(
          JSON.parse(JSON.stringify(user)),
          config.jwtSecret,
          {}
        ); // 옵션 추가 가능
        // 응답으로 JWT 토큰 전송
        res.status(200).json({
          success: true,
          message: "토큰 발급",
          user,
          token: accessToken,
        });
      });
    }
  )(req, res);

// JWT를 사용한 인증 미들웨어
const authenticateJwt = (req: Request, res: Response, next: NextFunction) =>
  // JWT 전략을 사용하여 인증 처리
  passport.authenticate("jwt", { session: false }, (err: Error, user: any) => {
    // 인증 실패 시 에러 처리
    if (err || !user)
      return res.status(403).json({ success: false, message: "Forbidden" });

    // 인증 성공 시 사용자 정보를 req.user에 할당
    if (user) req.user = user;
    // 다음 미들웨어로 진행
    next();
  })(req, res, next);

export { loginProcess, authenticateJwt };
