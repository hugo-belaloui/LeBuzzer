# ⚡ Le Buzzer

Application de quiz en direct : l'animateur crée ses quiz et lance une partie, les joueurs la rejoignent avec un code à 5 caractères.

> Projet en cours : l'interface est en place (design statique). Les données et le temps réel seront branchés ensuite.

## Fonctionnalités

- Page d'accueil avec présentation du jeu
- Rejoindre une partie avec un code (lettres et chiffres)
- Espace admin avec barre latérale :
  - **Dashboard** : statistiques et lancement d'une partie
  - **Mes quiz** : liste des quiz, modification et suppression
  - **Ajouter un quiz** : formulaire de création (questions + 4 réponses)

## Technologies

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (icônes)

## Installation

```bash
# Cloner le projet
git clone https://github.com/hugo-belaloui/LeBuzzer.git
cd LeBuzzer/client

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## Pages et routes

| URL | Page |
| --- | --- |
| `/` | Accueil |
| `/user` | Rejoindre une partie |
| `/admin` | Dashboard |
| `/admin/quiz` | Mes quiz |
| `/admin/quiz/ajouter` | Ajouter un quiz |
| `/admin/quiz/modifier` | Modifier un quiz |

## Structure

```
src/
├── App.jsx
└── Components/
    ├── NavBar.jsx
    ├── Home.jsx
    ├── User.jsx
    ├── AdminLayout.jsx
    ├── Dashboard.jsx
    ├── QuizList.jsx
    ├── AddQuiz.jsx
    └── EditQuiz.jsx
```

## Palette de couleurs

| Rôle | Couleur |
| --- | --- |
| Fond | `#0B0F14` |
| Cartes | `#171C25` |
| Accent | `#FFD629` |
| Texte | `#F8FAFC` |

## À faire

- [ ] Sauvegarder les quiz (localStorage, puis base de données)
- [ ] Générer un vrai code de partie
- [ ] Classement des joueurs
- [ ] Modification d'un quiz par son identifiant (`/admin/quiz/modifier/:id`)
