import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-gradient-to-b from-white to-slate-100">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-4 md:p-8">
          <div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Flow<span className="text-blue-600">bite</span>
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Premium shopping experience with curated products, secure checkout, and quick delivery.
            </p>
            <p className="mt-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
              Fast checkout. Easy returns.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
              <li><Link to="/about-us" className="hover:text-blue-600">About</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Email: support@flowbite.shop</li>
              <li>Phone: +91 98765 43210</li>
              <li>Mon - Sat: 10:00 AM - 7:00 PM</li>
              <li>Secure payments and buyer protection</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-900">Stay Updated</h4>
            <p className="mt-3 text-sm text-slate-600">
              Get offers, new arrivals, and style updates in your inbox.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-sm outline-none ring-blue-500 focus:border-blue-400 focus:ring-2"
              />
              <button
                type="button"
                className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-5 text-sm text-slate-600 md:flex-row">
          <p>© 2026 Flowbite Store. All rights reserved.</p>
          <p className="font-medium text-slate-700">Made for modern shoppers.</p>
        </div>
      </div>
    </footer>
  );
}
