import useTitle from "../hooks/useTitle";

export default function ContactPage() {
  useTitle("Contact | Anuj Kumar");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">Contact Page</h1>
    </div>
  );
}
