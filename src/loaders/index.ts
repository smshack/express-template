import { Application } from 'express';
import expressLoader from './expressLoader';
import logger from '../utils/logger';
import { sequelize } from '../models';

// 데이터베이스 연결을 시도하는 함수
async function waitForDatabase() {
    try {
        await sequelize.authenticate();
        logger.info(
            '🤩 Database connection has been established successfully.'
        );
        return true;
    } catch (error) {
        logger.error('데이터베이스 연결 실패, 재시도 중...');
        return false;
    }
}

// Express 애플리케이션을 초기화하는 함수
export default async ({ expressApp }: { expressApp: Application }) => {
    try {
        // 데이터베이스가 준비될 때까지 기다림
        while (!(await waitForDatabase())) {
            await new Promise(resolve => setTimeout(resolve, 5000)); // 5초 후 재시도
        }

        // Express 로더를 통해 필요한 미들웨어 및 라우트 설정
        await expressLoader({ app: expressApp });
        logger.info('🤩 express loaded'); // Express 로딩 성공 로그
    } catch (loadError) {
        // loadError가 Error 인스턴스인지 확인
        if (loadError instanceof Error) {
            logger.error(`🤔 ${loadError.message}`);
        } else {
            logger.error('🤔 알 수 없는 오류 발생');
        }
        process.exit(1);
    }
};
