import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Login from './login';
import Dashboard from './dashboard';

export default function Admin() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('adminToken')
  );

  const handleLogin = (newToken: string) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setToken(null);
  };

  return (
    <>
      <Helmet>
        <title>Админ панел | Pravdast</title>
        <meta name="description" content="Административен панел за управление на съдържанието" />
      </Helmet>

      {!token ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard onLogout={handleLogout} />
      )}
    </>
  );
}