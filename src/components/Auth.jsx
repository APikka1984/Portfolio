import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  if (user) {
    return <Navigate to="/dashboard" />;
  }

  const login = async () => {
    await signInWithPopup(auth, googleProvider);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
      <button
        onClick={login}
        className="bg-black text-white px-6 py-3 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
