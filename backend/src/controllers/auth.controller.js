/**
 * ============================================
 * LOGIN SIMPLE (SIN JWT REAL)
 * ============================================
 */

export const login = (req, res) => {
  const { email, password } = req.body;

  // Credenciales hardcodeadas (como lo tenías al inicio)
  if (email === "admin@fani.com" && password === "1234") {

    // Token simple (no firmado)
    const token = "admin-token-simple";

    return res.json({ token });
  }

  return res.status(401).json({
    message: "Credenciales incorrectas"
  });
};
