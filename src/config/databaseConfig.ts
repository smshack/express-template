import dotenv from 'dotenv';
dotenv.config(); // .env 파일에서 환경변수를 불러옴

export default {
    // 개발 환경에 대한 데이터베이스 설정
    development: {
        username: process.env.MYSQL_USER!, // 데이터베이스 사용자 이름
        password: process.env.MYSQL_PASSWORD!, // 데이터베이스 비밀번호 (환경변수에서 불러옴)
        database: process.env.MYSQL_DBNAME!, // 사용할 데이터베이스 이름
        host: process.env.MYSQL_LOCAL_HOST!, // 데이터베이스 호스트 (환경변수에서 불러옴)
        logging: false, // 로깅 비활성화
        dialect: 'mysql', // 사용할 데이터베이스 종류 (MYSQL)
    },
    // 테스트 환경에 대한 데이터베이스 설정
    test: {
        username: process.env.MYSQL_USER!,
        password: process.env.MYSQL_PASSWORD!,
        database: process.env.MYSQL_DBNAME!, // 사용할 데이터베이스 이름
        host: process.env.MYSQL_LOCAL_HOST!,
        logging: false,
        dialect: 'mysql', // 여기서는 MYSQL을 사용함을 명시
    },
    // 생산 환경에 대한 데이터베이스 설정
    production: {
        username: process.env.MYSQL_PASSWORD!,
        password: process.env.MYSQL_PASSWORD!,
        database: process.env.MYSQL_DBNAME!, // 사용할 데이터베이스 이름
        host: process.env.MYSQL_LOCAL_HOST!,
        logging: false,
        dialect: 'mysql', // 여기서도 MYSQL 사용
    },
};
