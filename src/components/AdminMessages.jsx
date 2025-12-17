import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);
    setMessages(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    await deleteDoc(doc(db, "messages", id));
    fetchMessages();
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="space-y-4">
      {messages.length === 0 && (
        <p className="text-gray-500">No messages yet</p>
      )}

      {messages.map((msg) => (
        <div
          key={msg.id}
          className="border rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">{msg.name}</h3>
              <p className="text-sm text-gray-600">{msg.email}</p>
            </div>

            <button
              onClick={() => handleDelete(msg.id)}
              className="text-red-600 text-sm font-semibold"
            >
              Delete
            </button>
          </div>

          <p className="mt-3 text-gray-700">{msg.message}</p>
        </div>
      ))}
    </div>
  );
}
