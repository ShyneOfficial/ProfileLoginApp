import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center flex-col gap-10">
      <h1 className="text-5x1 font-bold text-gray-800">Bienvenue sur la page d'acceuil</h1>
      <Link to="/login"><button>Se connecter</button></Link>
      <Link to="/register"><button>S'inscrire</button></Link>
    </div>
  );
}
