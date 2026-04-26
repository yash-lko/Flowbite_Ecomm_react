import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyGlobalContext } from "../pages/MainContext";

export default function Navbar() {
  const { cart } = useContext(MyGlobalContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900/95 shadow-lg backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 via-blue-400 to-indigo-500 shadow-md transition-transform duration-300 group-hover:scale-105">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6"
              alt="Flowbite Logo"
            />
          </div>
          <span className="self-center whitespace-nowrap text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            Flow<span className="text-cyan-300">bite</span>
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
          <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 p-1.5 text-sm font-medium text-slate-100">
            <li>
              <Link
                to="/"
                className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-white/20"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-white/20"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-white/20"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="rounded-full px-4 py-2 transition-colors duration-200 hover:bg-white/20"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden items-center gap-3 md:order-2 md:flex">
          <Link to="/view-carts">
            <button
              type="button"
              className="cursor-pointer rounded-full border border-cyan-300/60 bg-cyan-300/20 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-300/30 hover:shadow-cyan-400/30"
            >
              View Cart ({cart.length})
            </button>
          </Link>

          <Link to="/auth">
            <button
              type="button"
              className="cursor-pointer rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue-900 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Login / Logout
            </button>
          </Link>
        </div>

        <div className={`${menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"} w-full overflow-hidden transition-all duration-300 md:hidden`}>
          <div className="mt-2 rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur">
            <ul className="space-y-1 text-sm font-semibold text-slate-100">
              <li><Link to="/" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-white/15">Home</Link></li>
              <li><Link to="/about-us" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-white/15">About</Link></li>
              <li><Link to="/products" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-white/15">Products</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2 hover:bg-white/15">Contact</Link></li>
            </ul>
            <div className="mt-3 flex flex-col gap-2">
              <Link to="/view-carts" onClick={() => setMenuOpen(false)}>
                <button
                  type="button"
                  className="w-full cursor-pointer rounded-xl border border-cyan-300/60 bg-cyan-300/20 px-4 py-2.5 text-sm font-semibold text-cyan-100"
                >
                  View Cart ({cart.length})
                </button>
              </Link>
              <Link to="/auth" onClick={() => setMenuOpen(false)}>
                <button
                  type="button"
                  className="w-full cursor-pointer rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-blue-900"
                >
                  Login / Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
