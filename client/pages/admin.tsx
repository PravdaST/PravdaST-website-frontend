import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    // Простa автентикация за админ панела
    if (username === 'admin' && password === 'pravdast2025') {
      const token = btoa(`${username}:${password}:${Date.now()}`);
      localStorage.setItem('adminToken', token);
      setIsLoggedIn(true);
    } else {
      alert('Невалидни данни за достъп');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsLoggedIn(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Зареждане...</div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="bg-slate-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Админ панел
          </h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                Потребителско име
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--pravdast-yellow)] focus:border-transparent"
                placeholder="Въведете потребителско име"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Парола
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--pravdast-yellow)] focus:border-transparent"
                placeholder="Въведете парола"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--pravdast-yellow)] text-black py-2 px-4 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
            >
              Влизане
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">Pravdast CRM</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-300">Добре дошли, Админ</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700 transition-colors"
              >
                Изход
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Dashboard Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">Общо контакти</h3>
              <p className="text-3xl font-bold text-[var(--pravdast-yellow)]">0</p>
              <p className="text-gray-400 text-sm">Нови заявки този месец</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">Активни проекти</h3>
              <p className="text-3xl font-bold text-green-400">0</p>
              <p className="text-gray-400 text-sm">В процес на изпълнение</p>
            </div>
            <div className="bg-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">Приходи</h3>
              <p className="text-3xl font-bold text-blue-400">0 лв.</p>
              <p className="text-gray-400 text-sm">Този месец</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-slate-800 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Бързи действия</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <button className="bg-[var(--pravdast-yellow)] text-black px-4 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors">
                Нов контакт
              </button>
              <button className="bg-blue-600 text-white px-4 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Нов проект
              </button>
              <button className="bg-green-600 text-white px-4 py-3 rounded-md font-medium hover:bg-green-700 transition-colors">
                Създай оферта
              </button>
              <button className="bg-purple-600 text-white px-4 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
                Отчети
              </button>
            </div>
          </div>

          {/* System Status */}
          <div className="bg-slate-800 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4">Статус на системата</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-md">
                <span className="text-white">Уебсайт статус</span>
                <span className="text-green-400 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Активен
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-md">
                <span className="text-white">API връзки</span>
                <span className="text-green-400 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Функционални
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-md">
                <span className="text-white">Email система</span>
                <span className="text-green-400 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  SendGrid активен
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-700 rounded-md">
                <span className="text-white">Google Analytics</span>
                <span className="text-green-400 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  Проследяване активно
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}