import { useEffect, useState } from 'react';

export default function Profile() {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (storedUser) {
      setEmail(storedUser.email || '');
      setUsername(storedUser.username || '');
      setBio(storedUser.bio || '');
    }
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/users/${storedUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username, bio }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || 'Erreur lors de la mise à jour');
        return;
      }

      // Mise à jour dans le localStorage
      localStorage.setItem('user', JSON.stringify(data));
      setMessage('Profil mis à jour avec succès !');
    } catch (err) {
      setMessage('Erreur:\n', err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center flex-col gap-6">
      <h2 className="text-3xl font-bold text-gray-800">Modifier le profil</h2>

      <form onSubmit={handleSave} className="min-h-screen w-full bg-gray-100 flex items-center justify-center flex-col gap-10">
        <div>
          <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nom d'utilisateur
          </label>
          <input
            type="text"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="DarkKnight974"
            required
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Adresse Mail
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@entreprise.com"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <textarea value={bio} onChange={e => setBio(e.target.value)} placeholder="Bio" className="p-2 border rounded"></textarea>

        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Enregistrer les modifications</button>

        {message && <p className="text-sm text-center text-gray-700">{message}</p>}
      </form>
    </div>
  );
}
