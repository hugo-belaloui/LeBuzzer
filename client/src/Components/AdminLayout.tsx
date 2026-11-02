import { Link, NavLink, Outlet } from "react-router-dom";
import {
  Zap,
  LayoutDashboard,
  ListChecks,
  PlusCircle,
  Home,
} from "lucide-react";

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
    isActive
      ? "bg-[#FFD629] text-black"
      : "text-[#F8FAFC]/80 hover:bg-white/5 hover:text-[#FFD629]"
  }`;

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0F14] text-[#F8FAFC] md:flex-row">
      {/* Barre latérale */}
      <aside className="border-b border-white/10 bg-[#171C25] p-4 md:w-64 md:shrink-0 md:border-b-0 md:border-r md:p-6">
        <Link
          to="/"
          className="mb-4 flex items-center gap-2 text-2xl font-extrabold md:mb-8"
        >
          <Zap className="text-[#FFD629]" fill="#FFD629" />
          Le <span className="text-[#FFD629]">Buzzer</span>
        </Link>

        <nav className="flex flex-row flex-wrap gap-2 md:flex-col">
          <NavLink to="/admin" end className={linkClass}>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink to="/admin/quiz" end className={linkClass}>
            <ListChecks size={18} />
            Mes quiz
          </NavLink>

          <NavLink to="/admin/quiz/ajouter" className={linkClass}>
            <PlusCircle size={18} />
            Ajouter un quiz
          </NavLink>

          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold transition hover:border-[#FFD629] hover:text-[#FFD629] md:mt-6"
          >
            <Home size={18} />
            Accueil
          </Link>
        </nav>
      </aside>

      {/* Contenu des pages */}
      <main className="flex-1 px-6 py-10 md:px-10">
        <Outlet />
      </main>
    </div>
  );
}