import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        throw new Error("Credenciales inválidas");
      }

      const data = await res.json();

      // Guardar token
      localStorage.setItem("token", data.token);

      navigate("/admin");

    } catch {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md p-10 border rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">
          Login Admin
        </h2>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="input w-full"
        />

        <input
          type="password"
          placeholder="Contraseña"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="input w-full"
        />

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-full bg-pink-900 text-white hover:bg-pink-800 transition"
        >
          Entrar
        </button>
      </form>
    </section>
  );
}
