import jwt from "jsonwebtoken";

const secretKey = "your-secret-key";

export const generateToken = (payload: any): string => {
  const token = jwt.sign(payload, secretKey);
  return token;
};

export const verifyToken = (token: string): any => {
  const decoded = jwt.verify(token, secretKey);
  return decoded;
};
