import { Sequelize, Options } from 'sequelize';
import databaseConfig from '../config/databaseConfig';
import dotenv from 'dotenv';

dotenv.config(); // .env 파일에서 환경변수를 불러옴

// 현재 환경(NODE_ENV)에 따라 데이터베이스 환경 설정 선택
const env =
    (process.env.NODE_ENV as 'production' | 'test' | 'development') ||
    'development';
const { database, username, password } = databaseConfig[env];
// console.log(process.env);
// Sequelize 인스턴스 생성
const sequelize = new Sequelize(database, username, password, {
    ...(databaseConfig[env] as Options),
});

// 순환 참조를 방지하기 위해 sequelize 인스턴스 내보내기
export { sequelize };
export default sequelize;
