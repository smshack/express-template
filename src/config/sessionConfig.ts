import dotenv from "dotenv";
dotenv.config(); // .env 파일에서 환경변수 불러오기

export default {
  secret: process.env.SESSION_SECRET!, // 세션 암호화에 사용될 비밀키 (환경변수에서 불러옴)
  resave: false, // 세션을 항상 다시 저장할지 여부 (변경되지 않은 세션은 다시 저장하지 않음)
  saveUninitialized: true, // 초기화되지 않은 세션을 저장소에 저장할지 여부 (새로운 세션이지만 변경되지 않은 경우 저장)
  cookie: {
    secure: false, // secure 쿠키 사용 여부 (true일 경우 HTTPS에서만 쿠키 전송)
  },
};
