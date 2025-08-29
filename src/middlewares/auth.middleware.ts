import { Request, Response, NextFunction } from "express";
import auth from "basic-auth";

// Para la prueba técnica puedes dejarlo fijo o leer de variables de entorno
const USERNAME = process.env.BASIC_USER || "admin";
const PASSWORD = process.env.BASIC_PASS || "1234";

export function basicAuth(req: Request, res: Response, next: NextFunction) {
  const user = auth(req);
  if (!user || user.name !== USERNAME || user.pass !== PASSWORD) {
    res.set("WWW-Authenticate", 'Basic realm="API"');
    return res.status(401).send("Unauthorized");
  }
  next();
}
