import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

// 회원가입 요청의 유효성을 검사하는 미들웨어
const registerValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 필수 입력 필드의 유효성 검사를 병렬로 수행
  await Promise.all([
    check("email").isEmail().run(req), // 이메일 형식 검사
    check("name").exists().run(req), // 이름 필드 존재 여부 검사
    check("nickname").exists().run(req), // 닉네임 필드 존재 여부 검사
    check("password").exists().run(req), // 비밀번호 필드 존재 여부 검사
  ]);

  // 검사 결과에 에러가 있는지 확인
  const errors = validationResult(req);
  // 에러가 있을 경우 클라이언트에 에러 정보 전송
  if (!errors.isEmpty())
    return res.status(422).json({ success: false, errors: errors.array() });

  // 다음 미들웨어로 진행
  next();
};

// 로그인 요청의 유효성을 검사하는 미들웨어
const loginValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // 이메일과 비밀번호 필드의 유효성 검사 수행
  await Promise.all([
    check("email").isEmail().run(req),
    check("password").exists().run(req),
  ]);

  // 검사 결과에 에러가 있는지 확인
  const errors = validationResult(req);
  // 에러가 있을 경우 클라이언트에 에러 정보 전송
  if (!errors.isEmpty())
    return res.status(422).json({ success: false, errors: errors.array() });

  // 다음 미들웨어로 진행
  next();
};

export { registerValidator, loginValidator };
