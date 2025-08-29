import { Request, Response, NextFunction } from "express";
import auth from "basic-auth";

// Usuario y contraseña por defecto
const USERNAME = process.env.BASIC_USER || "admin";
const PASSWORD = process.env.BASIC_PASS || "1234";


// Middleware de autenticación básica
export function basicAuth(req: Request, res: Response, next: NextFunction) {
  const user = auth(req);
  if (!user || user.name !== USERNAME || user.pass !== PASSWORD) {
    res.set("WWW-Authenticate", 'Basic realm="API"');
    return res.status(401).send("Unauthorized");
  }
  next();
}
