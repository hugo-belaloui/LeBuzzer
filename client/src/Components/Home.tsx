
import React from "react";
import {
  Zap,
  Play,
  Users,
  UserRoundX,
  Smartphone,
  Check,
  Menu,
} from "lucide-react";
import quizImage from "../assets/quiz-removebg.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Zap,
    title: "En temps réel",
    description:
      "Les réponses et le classement se mettent à jour instantanément pour tous les joueurs.",
  },
  {
    icon: Users,
    title: "Jusqu'à 15 joueurs",
    description:
      "Animez vos quiz en petit comité ou en grand groupe, en plateau comme en séminaire.",
  },
  {
    icon: UserRoundX,
    title: "Sans inscription",
    description:
      "Aucun compte, aucune collecte de données. On entre un code, et c'est parti !",
  },
  {
    icon: Smartphone,
    title: "Sur tous vos écrans",
    description:
      "Un animateur sur ordinateur, des joueurs sur leur téléphone. Tout le monde est connecté.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d12] text-white">

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-6 py-16 md:min-h-[500px] md:grid-cols-2">

          {/* TEXTE HERO */}
          <div className="relative z-20">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/60 px-3 py-1 text-xs font-bold">
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              Quiz en <span className="text-yellow-400">direct</span>
            </div>

            <h1 className="text-4xl font-black leading-[1.15] tracking-tight md:text-[55px]">
              Le quiz en direct,
              <span className="block text-yellow-400">
                c'est vous qui l'écrivez !
              </span>
            </h1>

            <p className="mt-7 max-w-[500px] text-base leading-relaxed text-gray-300">
              Créez vos parties, invitez vos joueurs et animez des quiz
              en temps réel, en plateau comme en séminaire d'entreprise.
              Simple, rapide et sans inscription.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                id="creer"
                to="/admin"
                className="flex items-center justify-center gap-3 rounded-2xl bg-yellow-400 px-7 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                <Play size={20} fill="black" />
                Créer une partie
              </Link>

              <Link
                id="rejoindre"
                to="/user"
                className="flex items-center justify-center gap-3 rounded-2xl border border-gray-600 px-7 py-4 font-bold transition hover:border-yellow-400 hover:text-yellow-400"
              >
                <Users size={20} />
                Rejoindre une partie
              </Link>
            </div>
          </div>

          {/* IMAGE DES DEUX TELEPHONES */}
          <div className="relative flex items-center justify-center">

            {/* Halo lumineux */}
            <div className="absolute h-80 w-80 rounded-full bg-yellow-400/20 blur-[100px]" />

            <img
              src={quizImage}
              alt="Aperçu du quiz Le Buzzer et du classement des joueurs"
              className="relative z-10 w-full max-w-[600px] object-contain drop-shadow-2xl"
            />

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-white/10" id="features">
        <div className="mx-auto max-w-[1120px] px-6 py-14">

          <p className="mb-3 text-sm font-bold uppercase text-yellow-400">
            Pourquoi choisir Le Buzzer ?
          </p>

          <h2 className="text-3xl font-black md:text-4xl">
            Une expérience de quiz unique
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title}>
                  <div className="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white/10">
                    <Icon
                      size={38}
                      className="text-yellow-400"
                    />
                  </div>

                  <h3 className="mb-3 text-lg font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="relative overflow-hidden">

        {/* Effets lumineux */}
        <div className="absolute -left-20 -top-32 h-72 w-72 rounded-full bg-yellow-400/20 blur-[100px]" />

        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow-400/20 blur-[100px]" />

        <div className="relative mx-auto flex max-w-[950px] flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row md:py-20">

          <div className="max-w-[520px]">

            <div className="mb-4 inline-flex rounded-full border border-yellow-400 px-4 py-1 text-xs font-bold text-yellow-400">
              ✦ Prêt à jouer ?
            </div>

            <h2 className="text-3xl font-black leading-tight md:text-4xl">
              Créez votre première partie
              en quelques secondes !
            </h2>

            <p className="mt-4 text-sm text-gray-300 md:text-base">
              Invitez vos amis, partagez le code et que le meilleur gagne !
            </p>

          </div>

          <div className="flex w-full max-w-[285px] flex-col gap-4">
            <Link
              to="/admin"
              className="flex items-center justify-center gap-3 rounded-full bg-yellow-400 px-7 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-300"
            >
              <Play size={20} fill="black" />
              Créer une partie
            </Link>

            <Link
              to="/user"
              className="flex items-center justify-center gap-3 rounded-full border border-yellow-200 px-7 py-4 font-bold transition hover:bg-white/10"
            >
              <Users size={20} />
              Rejoindre une partie
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
