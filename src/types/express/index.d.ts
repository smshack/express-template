import {} from "../../config";

// Express의 Request 객체를 글로벌 네임스페이스에서 확장
declare global {
  namespace Express {
    // Express의 Request 인터페이스 확장
    export interface Request {
      user?: User; // Request 객체에 user 필드 추가 (선택적)
    }
  }
}
