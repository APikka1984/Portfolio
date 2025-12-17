import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function AddProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "projects"), {
      title,
      description,
      liveUrl,
      githubUrl,
      createdAt: serverTimestamp(),
    });

    setTitle("");
    setDescription("");
    setLiveUrl("");
    setGithubUrl("");

    alert("Project added ✅");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        className="w-full border p-2"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        className="w-full border p-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <input
        className="w-full border p-2"
        placeholder="Live URL"
        value={liveUrl}
        onChange={(e) => setLiveUrl(e.target.value)}
      />

      <input
        className="w-full border p-2"
        placeholder="GitHub URL"
        value={githubUrl}
        onChange={(e) => setGithubUrl(e.target.value)}
      />

      <button className="bg-black text-white px-4 py-2 rounded">
        Add Project
      </button>
    </form>
  );
}
