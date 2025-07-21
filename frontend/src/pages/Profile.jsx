import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEmail(parsedUser.email || '');
      setUsername(parsedUser.username || '');
      setBio(parsedUser.bio || '');
    }
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username, bio }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || 'Erreur lors de la mise à jour');
        return;
      }

      localStorage.setItem('user', JSON.stringify(data));
      setMessage('Profil mis à jour avec succès !');
    } catch (err) {
      setMessage('Erreur:\n', err);
    }
  };

  if (!user) return null;

  return (
    <div className="base-page background">
      <div className="main-title">
        <h2>Modifier le profil</h2>
      </div>

      <form className="form" onSubmit={handleSave}>
        <div>
          <label for="username" class="mini-title">
            Nom d'utilisateur
          </label>
          <input
            type="text"
            id="username"
            className="input"
            placeholder="DarkKnight974"
            required
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
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
            value={email}
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
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <textarea
          className="text-area"
          placeholder="Bio"
          onChange={e => setBio(e.target.value)}
          value={bio}
        />

        <button type="submit" className="button">Enregistrer</button>

        {message && <p className="validation-text">{message}</p>}
      </form>
    </div>
  );
}
