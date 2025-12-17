import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const snapshot = await getDocs(collection(db, "projects"));
    setProjects(snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })));
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this project?")) return;
    await deleteDoc(doc(db, "projects", id));
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="space-y-4">
      {projects.map(project => (
        <div key={project.id} className="border p-4 rounded flex justify-between">
          <div>
            <h3 className="font-bold">{project.title}</h3>
            <p className="text-sm">{project.description}</p>
          </div>

          <button
            onClick={() => handleDelete(project.id)}
            className="text-red-600 font-semibold"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
