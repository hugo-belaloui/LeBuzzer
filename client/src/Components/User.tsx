
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Home, Users } from "lucide-react";
import Footer from "./Footer";
export default function User() {
      const navigate = useNavigate();
      const [code, setCode] = useState("");

    // const handleChange = (e) => {
    //     // Lettres et chiffres uniquement, en majuscules, 5 max
    //     const value = e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    //     setCode(value.slice(0, 5));
    // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.length === 5) navigate(`/user?code=${code}`); // adapte la route
  };
  return (
    <>
      <main className="min-h-screen bg-[#0B0F14] px-6 py-8 text-[#F8FAFC]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold transition hover:border-[#FFD629] hover:text-[#FFD629]"
        >
          <Home size={18} />
            Accueil
        </Link>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 flex w-full max-w-md flex-col gap-5 rounded-3xl border border-white/10 bg-[#171C25] p-8"
      >
        <h1 className="text-center text-2xl font-extrabold">
          Rejoindre une <span className="text-[#FFD629]">partie</span>
        </h1>

        <input
          type="text"
        //   value={code}
        //   onChange={handleChange}
          placeholder="A7K2P"
          maxLength={5}
          className="rounded-xl border border-white/10 bg-[#0B0F14] px-4 py-4 text-center text-2xl font-bold uppercase tracking-[0.5em] text-[#FFD629] outline-none placeholder:text-white/20 focus:border-[#FFD629]"
        />

        <button
          type="submit"
        //   disabled={code.length < 5}
          className="flex items-center justify-center gap-3 rounded-full bg-[#FFD629] px-7 py-4 font-bold text-black transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Users size={20} />
          Rejoindre
        </button>
      </form>
    </main>
    <Footer />
  </>
  );
}


