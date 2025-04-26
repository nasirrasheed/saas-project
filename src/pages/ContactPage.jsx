import useTitle from '../hooks/useTitle'; // <- Add this

export default function ContactPage() {
  useTitle("Contact Us - FreelanceFinance"); // <- Set the page title

  return (
    <div className="max-w-3xl mx-auto p-8 text-blue-900">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have a question, feature request, or just want to say hi? Drop us a message.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded-lg"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full border px-4 py-2 rounded-lg"
        />
        <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">
          Send Message
        </button>
      </form>
    </div>
  );
}
