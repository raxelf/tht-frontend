import jwt, { type JwtPayload } from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "not-safe-key";

export const createToken = (payload: JwtPayload) =>
  jwt.sign(payload, SECRET_KEY);

export const readPayload = (token: string) => jwt.verify(token, SECRET_KEY);
