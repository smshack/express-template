import { Model, DataTypes } from "sequelize";
import { sequelize } from "./sequelize";

// User 모델 클래스 정의
class User extends Model {
  public readonly id!: number; // 사용자 ID (자동 생성)
  public email!: string; // 사용자 이메일
  public password!: string; // 사용자 비밀번호
  public name!: string; // 사용자 이름
  public nickname!: string; // 사용자 닉네임
  public phone?: string; // 사용자 전화번호 (선택적)
  // createdAt과 updatedAt은 Sequelize에서 자동으로 관리됨
}

// User 모델 초기화 및 테이블 구조 정의
User.init(
  {
    email: { type: DataTypes.STRING, allowNull: false, unique: true }, // 이메일 필드 (유일하며, 필수)
    name: { type: DataTypes.STRING(20), allowNull: false }, // 이름 필드 (20자 제한, 필수)
    nickname: { type: DataTypes.STRING(20), allowNull: false, unique: true }, // 닉네임 필드 (20자 제한, 유일하며, 필수)
    password: { type: DataTypes.STRING, allowNull: false }, // 비밀번호 필드 (필수)
    phone: { type: DataTypes.STRING, allowNull: true }, // 전화번호 필드 (선택적)
  },
  {
    sequelize, // sequelize 인스턴스
    modelName: "User", // 모델 이름
    tableName: "user", // 테이블 이름
    charset: "utf8", // 문자셋 설정
    collate: "utf8_general_ci", // 정렬 규칙 설정
  }
);

// 관계 설정 (추후 정의할 수 있음)
// export const associate = (db)=>{}
export default User;
