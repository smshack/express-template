import "reflect-metadata"; // reflect-metadata 라이브러리를 포함 (데코레이터와 같은 기능을 위해 필요)
import express from "express"; // express 모듈 가져오기
import logger from "./utils/logger"; // 로깅 유틸리티 가져오기
import config from "./config"; // 설정 파일 가져오기
import loader from "./loaders"; // 로더 가져오기

// 서버 시작 함수
async function startServer() {
  const app = express(); // express 애플리케이션 인스턴스 생성
  const port = config.port; // 설정 파일에서 포트 가져오기

  await loader({ expressApp: app }); // 로더를 사용하여 애플리케이션 초기화

  // 서버 시작
  app.listen(port, (err?: Error) => {
    if (err) {
      logger.error(err.message); // 서버 시작 시 에러가 발생한 경우 로그 기록
      return;
    }
    logger.info(`🔥🔥 Server listening on port ${port} 🔥🔥`); // 서버 시작 로그 기록
  });
}

startServer(); // 서버 시작 함수 실행
