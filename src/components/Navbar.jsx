import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Anuj Kumar</h1>

      <div className="space-x-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        <Link to="/admin" className="hover:text-red-400">Admin</Link>
      </div>
    </nav>
  );
}
