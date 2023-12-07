import { Application } from 'express';
import expressLoader from './expressLoader';
import logger from '../utils/logger';

// Express 애플리케이션을 초기화하는 함수
export default async ({ expressApp }: { expressApp: Application }) => {
    try {
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
