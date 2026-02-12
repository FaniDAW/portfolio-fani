import { useEffect, useState } from "react";

/**
 * Panel admin simple
 * Muestra todos los contactos
 */

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
 const [authorized, setAuthorized] = useState(false);

  /**
   * Mini protección básica temporal
   */
  useEffect(() => {
    const key = prompt("Introduce clave admin:");

    if (key === "1234") {
      setAuthorized(true);
    }
  }, []);

  /**
   * Cargar contactos si está autorizado
   */
  useEffect(() => {
    if (!authorized) return;

    fetch("http://localhost:3001/contact")
      .then(res => res.json())
      .then(setContacts);
  }, [authorized]);

  if (!authorized) {
    return <div className="p-20 text-center">No autorizado</div>;
  }

  
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl font-semibold mb-10">
          Panel de Contactos
        </h1>

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
