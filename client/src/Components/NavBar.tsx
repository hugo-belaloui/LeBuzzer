import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="relative bg-zinc-950 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold"
        >
         Le <span className="text-yellow-400">Buzzer</span>
        </Link>

        {/* Liens desktop */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            to="/"
            className="text-zinc-300 transition hover:text-yellow-400"
          >
            Accueil
          </Link>

          <Link
            to="/admin"
            className="text-zinc-300 transition hover:text-yellow-400"
          >
            Créer une partie
          </Link>

          <Link
            to="/user"
            className="rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-zinc-950 transition hover:bg-yellow-300"
          >
            Rejoindre
          </Link>
        </div>

        {/* Bouton mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-2xl hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-2 border-t border-zinc-800 bg-zinc-950 px-4 py-4 shadow-lg md:hidden">
          <Link
            to="/"
            onClick={closeMenu}
            className="rounded-lg px-3 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-yellow-400"
          >
            Accueil
          </Link>

          <Link
            to="/admin"
            onClick={closeMenu}
            className="rounded-lg px-3 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-yellow-400"
          >
            Créer une partie
          </Link>

          <Link
            to="/user"
            onClick={closeMenu}
            className="rounded-lg bg-yellow-400 px-3 py-3 text-center font-semibold text-zinc-950 hover:bg-yellow-300"
          >
            Rejoindre
          </Link>
        </div>
      )}
    </nav>
  );
}

