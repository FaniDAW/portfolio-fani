
import { useEffect, useState } from "react";


type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

export default function AdminContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://localhost:3001/contact", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("No autorizado");
        }
        return res.json();
      })
      .then(setContacts)
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      });

  }, []);

  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-semibold">
            Panel de Contactos
          </h1>

          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="text-sm text-red-500"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="space-y-6">
          {contacts.map(contact => (
            <div
              key={contact.id}
              className="p-6 border rounded-xl shadow-sm"
            >
              <p className="font-semibold">{contact.name}</p>
              <p className="text-sm text-zinc-500">{contact.email}</p>

              {contact.phone && (
                <p className="text-sm">{contact.phone}</p>
              )}

              <p className="mt-4">{contact.message}</p>

              <p className="text-xs text-zinc-400 mt-2">
                {new Date(contact.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
