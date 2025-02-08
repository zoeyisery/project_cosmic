import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string): boolean => {
  try {
    const decoded: any = jwtDecode(token);
    const now = Date.now() / 1000;
    return decoded.exp > now;
  } catch (error) {
    console.log("토큰 검증 실패", error);
    return false;
  }
};
