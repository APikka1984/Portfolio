import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    await deleteDoc(doc(db, "messages", id));
  };

  if (loading) return <p>Loading messages...</p>;

  if (messages.length === 0)
    return <p className="text-gray-500">No messages yet.</p>;

  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="border p-4 rounded-lg bg-white shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold">{msg.name}</h3>
              <p className="text-sm text-gray-600">{msg.email}</p>
            </div>

            <button
              onClick={() => handleDelete(msg.id)}
              className="text-red-600 text-sm"
            >
              Delete
            </button>
          </div>

          <p className="mt-2 text-gray-800">{msg.message}</p>
        </div>
      ))}
    </div>
  );
}
