import { Router } from 'express';
import testRouter from './routes/testRouter';

// Express 애플리케이션에 대한 라우터를 설정하는 함수
export default () => {
    // 새로운 Router 인스턴스 생성
    const app = Router();

    // 각각의 라우터 모듈을 주 라우터에 연결
    testRouter(app); // 테스트 관련 라우터

    // 설정된 라우터 반환
    return app;
};
