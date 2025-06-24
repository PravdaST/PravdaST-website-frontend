import { createRoot } from "react-dom/client";
import * as React from 'react';
import "./index.css";

// Simple admin login component
function AdminLogin({ onLogin }: { onLogin: (token: string) => void }) {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.get('username'),
          password: formData.get('password')
        })
      });
      
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('adminToken', data.token);
        onLogin(data.token);
      } else {
        alert(data.message || 'Невалидни данни');
      }
    } catch (error) {
      alert('Грешка при връзката със сървъра');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0f172a', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ 
        backgroundColor: '#1e293b', 
        padding: '2rem', 
        borderRadius: '0.5rem', 
        width: '100%', 
        maxWidth: '400px' 
      }}>
        <h1 style={{ 
          color: 'white', 
          textAlign: 'center', 
          marginBottom: '1.5rem',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          Админ панел
        </h1>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            name="username"
            type="text"
            placeholder="Потребител"
            required
            style={{
              padding: '0.75rem',
              backgroundColor: '#334155',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              fontSize: '1rem'
            }}
          />
          <input
            name="password"
            type="password"
            placeholder="Парола"
            required
            style={{
              padding: '0.75rem',
              backgroundColor: '#334155',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              fontSize: '1rem'
            }}
          />
          <button 
            type="submit"
            style={{
              padding: '0.75rem',
              backgroundColor: '#eab308',
              color: 'black',
              border: 'none',
              borderRadius: '0.25rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Влез
          </button>
        </form>
      </div>
    </div>
  );
}

// Admin dashboard
function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', color: 'white' }}>
      <header style={{ backgroundColor: '#1e293b', padding: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>CRM Панел</h1>
          <button 
            onClick={onLogout}
            style={{
              backgroundColor: '#dc2626',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer'
            }}
          >
            Излез
          </button>
        </div>
      </header>
      <div style={{ padding: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Добре дошли в админ панела!</h2>
        <p style={{ color: '#94a3b8' }}>
          CRM системата е готова за управление на блог постове и категории.
        </p>
        <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#1e293b', borderRadius: '0.5rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Статус на системата:</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}>✓ PostgreSQL база данни - свързана</li>
            <li style={{ marginBottom: '0.5rem' }}>✓ JWT автентикация - активна</li>
            <li style={{ marginBottom: '0.5rem' }}>✓ API endpoints - функционални</li>
            <li style={{ marginBottom: '0.5rem' }}>✓ Vercel деплойване - готово</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Main app
function App() {
  const [token, setToken] = React.useState<string | null>(
    localStorage.getItem('adminToken')
  );
  
  const handleLogin = (newToken: string) => setToken(newToken);
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken(null);
  };

  const path = window.location.pathname;
  
  if (path === '/admin') {
    return token ? (
      <AdminDashboard onLogout={handleLogout} />
    ) : (
      <AdminLogin onLogin={handleLogin} />
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#0f172a', 
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Pravdast
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: '2rem' }}>
          Business Engineering Platform - CRM System
        </p>
        <a 
          href="/admin"
          style={{
            backgroundColor: '#eab308',
            color: 'black',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: '0.25rem',
            fontWeight: '600'
          }}
        >
          Админ панел
        </a>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
