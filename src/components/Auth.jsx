import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const ADMIN_EMAIL = "ak3979170@gmail.com";

export default function Auth() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      if (result.user.email === ADMIN_EMAIL) {
        localStorage.setItem("isAdmin", "true"); // 🔐 persist
        navigate("/dashboard");
      } else {
        alert("Access denied");
        await auth.signOut();
      }
    } catch (err) {
      console.error(err);
      alert("Login cancelled");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-80 text-center">
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
