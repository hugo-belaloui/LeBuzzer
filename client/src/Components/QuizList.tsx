import { Link } from "react-router-dom";
import { Trash2, Plus, Check, Pencil } from "lucide-react";

export default function QuizList() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">
          Mes <span className="text-[#FFD629]">quiz</span>
        </h1>
        <Link
          to="/admin/quiz/ajouter"
          className="flex items-center gap-2 rounded-full bg-[#FFD629] px-5 py-3 text-sm font-bold text-black transition hover:brightness-95"
        >
          <Plus size={18} />
          Nouveau quiz
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2].map((n) => (
          <article
            key={n}
            className="rounded-3xl border border-white/10 bg-[#171C25] p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Culture générale</h2>
                <p className="text-sm text-[#F8FAFC]/60">1 question</p>
              </div>

              <div className="flex gap-2">
                {/* Modifier */}
                <Link
                  to="#"
                  className="rounded-full border border-white/10 p-2 text-[#F8FAFC]/70 transition hover:border-[#FFD629] hover:text-[#FFD629]"
                  aria-label="Modifier le quiz"
                  title="Modifier"
                >
                  <Pencil size={18} />
                </Link>

                {/* Supprimer */}
                <button
                  type="button"
                  className="rounded-full border border-white/10 p-2 text-[#F8FAFC]/70 transition hover:border-red-500 hover:text-red-500"
                  aria-label="Supprimer le quiz"
                  title="Supprimer"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            <ol className="space-y-3">
              <li className="rounded-xl bg-[#0B0F14] p-4">
                <p className="mb-2 font-semibold">
                  <span className="text-[#FFD629]">1.</span> Quelle est la capitale de la France ?
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2 font-semibold text-[#FFD629]">
                    <Check size={14} /> Paris
                  </li>
                  <li className="text-[#F8FAFC]/60">Lyon</li>
                  <li className="text-[#F8FAFC]/60">Marseille</li>
                  <li className="text-[#F8FAFC]/60">Toulouse</li>
                </ul>
              </li>
            </ol>
          </article>
        ))}
      </div>
    </div>
  );
}