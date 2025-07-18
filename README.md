# ProfileLoginApp

ProfileLoginApp est une application web simple qui permet aux utilisateurs de s'enregistrer, se connecter et modifier leur profil.

---

## ✨ Fonctionnalités

- Inscription avec email et mot de passe
- Connexion avec authentification sécurisée (hash bcrypt)
- Page de modification de profil (nom d'utilisateur, bio, email, mot de passe)

---

## 📁 Pages de l'application

### 🔑 /register

Page d'enregistrement avec formulaire (email + mot de passe). En cas de succès, redirige vers la page de connexion.

### 🔐 /login

Page de connexion. Une fois authentifié, l'utilisateur est redirigé vers la page de profil.

### 👤 /profile

Page pour modifier les informations de profil (email, nom d'utilisateur, bio, mot de passe). Le mot de passe n'est modifié que s'il est renseigné.

---

## 📅 Prérequis

- Docker + Docker Compose
- Node.js >= 20.18.4

---

## ♰ Structure du projet

```
ProfileLoginApp/
├── backend/        # API Express + PostgreSQL
├── frontend/       # App React + Vite + TailwindCSS
├── db/             # Fichier SQL d'initialisation de la base
├── docker-compose.yml
└── README.md
```

---

## 🚀 Lancer le projet

### Avec Docker (recommandé)

```bash
docker-compose up --build
```

- Frontend : [http://localhost:3000](http://localhost:3000)
- Backend  : [http://localhost:5000](http://localhost:5000)
- Base de données PostgreSQL : port 5433

Pour arrêter :

```bash
docker-compose down
```

---

### Sans Docker (localement)

#### 1. Backend

```bash
cd backend
npm install
npm run dev
```

> Assurez-vous que PostgreSQL et Node.js >= 20.19.4 sont installés localement. Le fichier `.env` doit aussi être bien configuré.

#### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

> L'application tourne sur [http://localhost:3000](http://localhost:3000)

---

## 📝 Initialisation de la base de données

Si vous utilisez Docker, la base est automatiquement créée avec le fichier `db/init.sql`.

---

## 💼 Auteur

**Iyad Hossen**\
Projet d'entraînement full-stack (React, Node, PostgreSQL, Docker)

---

## ⚒️ Améliorations possibles

- Ajout d'une authentification avec JWT
- Mots de passe plus sécurisés (policy + validation frontend)
- Gestion des sessions
- Design responsive et plus moderne

---

## 🛠️ Ressources utiles

- [React](https://reactjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Node.js](https://nodejs.org)
- [Vite](https://vitejs.dev)
- [PostgreSQL](https://www.postgresql.org)
- [Docker](https://www.docker.com/)

---
