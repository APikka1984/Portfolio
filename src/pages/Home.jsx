import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";

export default function Home() {
  useTitle("Anuj Kumar | Full Stack Developer");

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Anuj Kumar</h1>
        <p className="text-xl text-gray-600">
          Full Stack Developer | React | Firebase | Node.js
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/contact"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Contact Me
          </Link>

          <a
            href="https://github.com/"
            target="_blank"
            className="border border-black px-6 py-3 rounded hover:bg-gray-100"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m an electronics engineer turned full-stack developer with hands-on
          experience building real-world applications using React, Firebase,
          Node.js, and modern web tools. I enjoy learning new technologies and
          solving real problems through clean code.
        </p>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg">Portfolio Website</h3>
              <p className="text-sm text-gray-600 mt-2">
                React + Firebase portfolio with admin dashboard.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg">Admin Dashboard</h3>
              <p className="text-sm text-gray-600 mt-2">
                Google Auth protected admin panel.
              </p>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg">Contact System</h3>
              <p className="text-sm text-gray-600 mt-2">
                Firestore-powered contact messages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-500">
        © {new Date().getFullYear()} Anuj Kumar
      </footer>
    </div>
  );
}
