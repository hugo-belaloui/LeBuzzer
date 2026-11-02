import { Link } from "react-router-dom";
import { Play, Plus } from "lucide-react";

const input =
  "w-full rounded-xl border border-white/10 bg-[#0B0F14] px-4 py-3 outline-none placeholder:text-white/30 focus:border-[#FFD629]";
const card = "rounded-3xl border border-white/10 bg-[#171C25] p-6";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-extrabold">
        <span className="text-[#FFD629]">Dashboard</span> admin
      </h1>

      {/* Statistiques */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className={card}>
          <p className="text-sm text-[#F8FAFC]/60">Quiz créés</p>
          <p className="text-4xl font-extrabold text-[#FFD629]">3</p>
        </div>
        <div className={card}>
          <p className="text-sm text-[#F8FAFC]/60">Parties lancées</p>
          <p className="text-4xl font-extrabold text-[#FFD629]">12</p>
        </div>
      </div>

      {/* Lancer une partie */}
      <section className={`${card} mx-auto max-w-xl space-y-4`}>
        <h2 className="text-xl font-bold">Lancer une partie</h2>

        <select className={input}>
          <option>Choisis un quiz</option>
          <option>Culture générale</option>
          <option>Géographie</option>
        </select>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#FFD629] px-7 py-4 font-bold text-black transition hover:brightness-95"
        >
          <Play size={20} fill="black" />
          Lancer la partie
        </button>

        <div className="rounded-2xl border border-[#FFD629]/40 bg-[#0B0F14] p-4 text-center">
          <p className="text-sm text-[#F8FAFC]/60">Code de la partie</p>
          <p className="text-4xl font-extrabold tracking-[0.3em] text-[#FFD629]">
            A7K2P
          </p>
        </div>

        <Link
          to="/admin/quiz/ajouter"
          className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-[#FFD629] hover:text-[#FFD629]"
        >
          <Plus size={18} />
          Ajouter un nouveau quiz
        </Link>
      </section>
    </div>
  );
}