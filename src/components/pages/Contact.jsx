export default function Contact() {
  return (
    <section className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
      <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Contact Us</h1>
      <p className="mt-3 text-slate-600">
        Have a question about orders, returns, or products? Send us a message and our team will get back to you quickly.
      </p>

      <form className="mt-8 grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-blue-500 focus:border-blue-400 focus:ring-2"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-blue-500 focus:border-blue-400 focus:ring-2"
        />
        <textarea
          rows="5"
          placeholder="Write your message..."
          className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none ring-blue-500 focus:border-blue-400 focus:ring-2"
        />
        <button
          type="button"
          className="rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
