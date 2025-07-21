import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navdiv">
      <nav className="navbar">
        <Link to="/">Acceuil</Link>
        <p>|</p>
        <Link to="/login">Connexion</Link>
        <p>|</p>
        <Link to="/register">Inscription</Link>
        <p>|</p>
        <Link to="/profile">Profil</Link>
      </nav>
    </div>
  );
}
