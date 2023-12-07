import { Router } from "express";
const router = Router();

// 테스트용 라우터를 설정하는 함수
export default (app: Router) => {
  // '/test' 경로로 들어오는 모든 요청에 대해 라우터 적용
  app.use("/test", router);

  // '/test' 경로로 들어오는 GET 요청 처리
  router.get("/", (req, res) => {
    // 테스트 메시지 응답
    res.send("just test!!");
  });
};
