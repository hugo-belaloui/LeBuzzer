import { Link } from "react-router-dom";
import { Plus, Save, ArrowLeft } from "lucide-react";

const input =
  "w-full rounded-xl border border-white/10 bg-[#0B0F14] px-4 py-3 outline-none placeholder:text-white/30 focus:border-[#FFD629]";
const card = "rounded-3xl border border-white/10 bg-[#171C25] p-6";

export default function AddQuiz() {
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">
          Ajouter un <span className="text-[#FFD629]">quiz</span>
        </h1>
        <Link
          to="/admin/quiz"
          className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold transition hover:border-[#FFD629] hover:text-[#FFD629]"
        >
          <ArrowLeft size={18} />
          Mes quiz
        </Link>
      </div>

      <section className={`${card} space-y-4`}>
        <input className={input} placeholder="Titre du quiz (ex : Culture générale)" />

        <div className="space-y-3 rounded-2xl border border-white/10 p-4">
          <p className="font-semibold">Question 1</p>
          <input className={input} placeholder="Écris ta question" />

          {["A", "B", "C", "D"].map((letter) => (
            <div key={letter} className="flex items-center gap-3">
              <input
                type="radio"
                name="correct"
                className="h-5 w-5 accent-[#FFD629]"
              />
              <input className={input} placeholder={`Réponse ${letter}`} />
            </div>
          ))}
          <p className="text-xs text-[#F8FAFC]/50">
            Coche le rond à côté de la bonne réponse.
          </p>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-[#FFD629] px-5 py-2 text-sm font-semibold text-[#FFD629] transition hover:bg-[#FFD629]/10"
          >
            <Plus size={18} />
            Ajouter la question
          </button>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-[#FFD629] px-7 py-4 font-bold text-black transition hover:brightness-95"
        >
          <Save size={20} />
          Enregistrer le quiz
        </button>
      </section>
    </div>
  );
}