import { useState } from "react";

export default function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <section className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm md:p-10">
      <h1 className="text-3xl font-extrabold text-slate-900 md:text-4xl">Login / Logout</h1>
      <p className="mt-3 text-slate-600">
        This demo page lets you switch auth state for UI flow.
      </p>

      <div className="mt-8 rounded-2xl bg-slate-50 p-6">
        <p className="text-lg font-semibold text-slate-800">
          Status: {isLoggedIn ? "Logged In" : "Logged Out"}
        </p>

        <button
          onClick={() => setIsLoggedIn((prev) => !prev)}
          type="button"
          className={`mt-5 rounded-xl px-6 py-3 font-semibold text-white transition ${
            isLoggedIn ? "bg-red-600 hover:bg-red-700" : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </section>
  );
}
