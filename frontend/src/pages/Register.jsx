import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:5000/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message || 'Erreur lors de l\'inscription');
      return;
    }

    navigate('/');
    console.log(data);
  };

  return (
    <div className="base-page background">
      <form className="form" onSubmit={handleSubmit}>
        <div className="main-title">
          <h2>Inscription</h2>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="mini-title">
            Adresse Mail
          </label>
          <input
            type="email"
            id="email"
            className="input"
            placeholder="john.doe@entreprise.com"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="mini-title">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="•••••••••"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="button">
          S'inscrire
        </button>
      </form>
    </div>
  );
}
