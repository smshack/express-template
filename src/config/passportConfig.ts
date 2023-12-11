import passport from 'passport';
// import User from '../models/userModel';
import passportLocal from 'passport-local';
import passportJwt from 'passport-jwt';
import argon2 from 'argon2';
import dotenv from 'dotenv';
dotenv.config();

export default () => {
    // JWT 전략과 Local 전략을 Passport에 설정
    // const JwtStrategy = passportJwt.Strategy;
    // const ExtractJwt = passportJwt.ExtractJwt;
    // const LocalStrategy = passportLocal.Strategy;
    // // 로컬 인증 전략 사용 설정
    // passport.use(
    //     new LocalStrategy(
    //         {
    //             usernameField: 'email', // 이메일 필드 명시
    //             passwordField: 'password', // 비밀번호 필드 명시
    //             session: false, // 세션 사용 안함
    //             passReqToCallback: true, // 콜백 함수에 req 객체 전달
    //         },
    //         async (req, email, password, done) => {
    //             try {
    //                 // 이메일을 사용하여 사용자 검색
    //                 const user = await User.findOne({ where: { email } });
    //                 if (!user)
    //                     return done(null, false, {
    //                         message: '존재하지 않는 이메일입니다',
    //                     });
    //                 // 비밀번호 검증
    //                 if (!(await argon2.verify(user.password, password)))
    //                     return done(null, false, {
    //                         message: '비밀번호가 틀립니다',
    //                     });
    //                 done(null, user); // 검증 성공 시 사용자 정보 전달
    //             } catch (err) {
    //                 done(err);
    //             }
    //         }
    //     )
    // );
    // // JWT 인증 전략 사용 설정
    // passport.use(
    //     new JwtStrategy(
    //         {
    //             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Bearer 토큰으로부터 JWT 추출
    //             secretOrKey: process.env.JWT_SECRET!, // JWT 비밀키
    //         },
    //         async (payload, done) => {
    //             try {
    //                 // JWT 페이로드를 사용하여 사용자 검색
    //                 const user = await User.findOne({
    //                     where: { id: payload.id },
    //                 });
    //                 if (!user) return done(null, false);
    //                 done(null, user); // 검증 성공 시 사용자 정보 전달
    //             } catch (err) {
    //                 done(err, false);
    //             }
    //         }
    //     )
    // );
    // 세션을 사용할 때만 필요한 코드 (현재 주석 처리됨)
    // passport.serializeUser<User, any>((user, done) => {
    //     done(null, user.email);
    // });
    // passport.deserializeUser<User, any>(async (email, done) => {
    //     try {
    //         const user = await User.findOne({ where: { email } });
    //         if (!user) return done(new Error('is not exists'));
    //         done(null, user!);
    //     } catch (err) {
    //         done(err);
    //     }
    // });
};
