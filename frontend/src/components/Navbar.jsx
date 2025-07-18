import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Acceuil</Link> | 
      <Link to="/login">Connexion</Link> | 
      <Link to="/register">Inscription</Link> | 
      <Link to="/profile">Profil</Link>
    </nav>
  );
}
