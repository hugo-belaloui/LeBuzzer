import {
  Zap,
  ArrowUp,
  Heart,
} from "lucide-react";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080d12]">

      {/* Décoration lumineuse */}
      <div className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-[100px]" />
      <div className="absolute -right-20 -top-32 h-64 w-64 rounded-full bg-yellow-400/10 blur-[100px]" />

      <div className="relative mx-auto max-w-[1120px] px-6">

        {/* Partie principale */}
        <div className="grid gap-12 border-b border-white/10 py-14 md:grid-cols-4">

          {/* Logo et description */}
          <div className="md:col-span-2">

            <a href="/" className="mb-5 flex items-center gap-2 text-3xl font-black">
              <Zap className="h-10 w-10 fill-yellow-400 text-yellow-400" />
              <span>
                Le <span className="text-yellow-400">Buzzer</span>
              </span>
            </a>

            <p className="max-w-sm text-sm leading-7 text-gray-400">
              Le quiz en direct, c'est vous qui l'écrivez !
              Créez vos parties, invitez vos amis et partagez
              des moments inoubliables autour du quiz.
            </p>

            {/* Réseaux sociaux */}
            {/* <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  <Icon size={19} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 font-bold text-white">
              Navigation
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="/" className="transition hover:text-yellow-400">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#creer" className="transition hover:text-yellow-400">
                  Créer une partie
                </a>
              </li>
              <li>
                <a href="#rejoindre" className="transition hover:text-yellow-400">
                  Rejoindre une partie
                </a>
              </li>
              <li>
                <a href="#features" className="transition hover:text-yellow-400">
                  Fonctionnalités
                </a>
              </li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="mb-5 font-bold text-white">
              Informations
            </h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="/about" className="transition hover:text-yellow-400">
                  À propos
                </a>
              </li>
              <li>
                <a href="/contact" className="transition hover:text-yellow-400">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="transition hover:text-yellow-400">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="/terms" className="transition hover:text-yellow-400">
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bas du footer */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center md:flex-row">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Le Buzzer. Tous droits réservés.
          </p>

          <p className="flex items-center gap-1 text-xs text-gray-500">
            Fait avec  pour les passionnés de quiz.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Retour en haut"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}
