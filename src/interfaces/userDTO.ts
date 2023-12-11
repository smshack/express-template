export interface UserDTO {
  id?: number; // 사용자의 고유 식별자. 선택적 속성
  email: string; // 사용자의 이메일 주소
  name: string; // 사용자의 이름
  nickname: string; // 사용자의 닉네임
  password: string; // 사용자의 비밀번호
  phone?: string | null; // 사용자의 전화번호. 선택적 속성이며, 값이 없을 경우 null 일 수 있음
}
