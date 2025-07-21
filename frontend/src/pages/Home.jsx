import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="main-page">
      <div className="main-title">
        <h1>Bienvenue sur la page d'acceuil</h1>
      </div>
      <div className="button">
        <Link to="/login">
          <button>Se connecter</button>
        </Link>
      </div>
      <div className="button">
        <Link to="/register">
          <button>S'inscrire</button>
        </Link>
      </div>
    </div>
  );
}
