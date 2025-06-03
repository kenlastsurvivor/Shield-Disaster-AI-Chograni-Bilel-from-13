import React, { useState } from 'react';

type LoginFormProps = {
  onLogin: (username: string) => void;
};

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().length < 3) {
      setError("Nom d'utilisateur trop court");
      return;
    }
    setError('');
    onLogin(username.trim());
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: '3em auto', background: '#222', color: '#fff', padding: 24, borderRadius: 10 }}>
      <h2>Connexion</h2>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ width: '100%', padding: 8, marginBottom: 12, borderRadius: 5, border: '1px solid #444' }}
        autoFocus
      />
      <button type="submit" style={{ width: '100%', padding: 10, borderRadius: 5, background: '#4caf50', color: '#fff', border: 'none' }}>
        Se connecter
      </button>
      {error && <div style={{ color: '#ffb300', marginTop: 12 }}>{error}</div>}
    </form>
  );
}
