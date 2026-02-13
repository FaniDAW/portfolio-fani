/**
 * ============================================
 * MIDDLEWARE SIMPLE DE PROTECCIÓN
 * ============================================
 */

export const verifyToken = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No autorizado" });
  }

  const token = authHeader.split(" ")[1];

  if (token !== "admin-token-simple") {
    return res.status(401).json({ message: "Token inválido" });
  }

  next();
};
