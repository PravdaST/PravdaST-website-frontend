import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface LoginProps {
  onLogin: (token: string) => void;
}

export default function AdminLogin({ onLogin }: LoginProps) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { toast } = useToast();

  const loginMutation = useMutation({
    mutationFn: async (data: { username: string; password: string }) => {
      return await apiRequest('/api/admin/login', 'POST', data);
    },
    onSuccess: (data) => {
      localStorage.setItem('adminToken', data.token);
      onLogin(data.token);
      toast({
        title: "Успешен вход",
        description: "Добре дошли в админ панела!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Грешка при вход",
        description: error.message || "Невалидни данни за вход",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      toast({
        title: "Грешка",
        description: "Моля въведете потребителско име и парола",
        variant: "destructive",
      });
      return;
    }
    loginMutation.mutate(credentials);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <Card className="w-full max-w-md bg-slate-800 border-slate-700">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-[#ECB629]/10 rounded-full w-fit">
            <Lock className="h-8 w-8 text-[#ECB629]" />
          </div>
          <CardTitle className="text-2xl text-white">Админ панел</CardTitle>
          <CardDescription className="text-gray-400">
            Вход в системата за управление
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">
                Потребителско име
              </Label>
              <Input
                id="username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="admin"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">
                Парола
              </Label>
              <Input
                id="password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="••••••••"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? 'Влизане...' : 'Влез'}
            </Button>
          </form>
          

        </CardContent>
      </Card>
    </div>
  );
}