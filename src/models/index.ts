import User from "./userModel"; // User 모델 가져오기
export * from "./sequelize"; // sequelize 관련 설정 및 유틸리티 내보내기

// db 객체에 User 모델 포함
const db = { User };

// db 객체의 타입을 정의하는 dbType 타입
export type dbType = typeof db;
