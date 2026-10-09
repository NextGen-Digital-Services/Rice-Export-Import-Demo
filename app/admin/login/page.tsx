'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { CustomLogo } from '@/components/site/CustomLogo';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Lock, Mail, ShieldAlert, Sparkles } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('admin@taxviglobal.com');
  const [password, setPassword] = useState('Admin@123');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (success) {
      router.push('/admin/dashboard');
    } else {
      setError('Invalid email or password. Use demo credentials below.');
    }
  };

  return (
    <div className="min-h-screen bg-basil-dark text-ivory flex items-center justify-center p-6 relative">
      <div className="w-full max-w-md bg-basil border border-gold/40 p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-3">
          <CustomLogo variant="light" className="justify-center" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold block pt-2">
            Global Trade Control Panel
          </span>
        </div>

        {/* Demo Credentials Box */}
        <div className="bg-basil-dark p-4 border border-gold/30 text-xs text-ivory/90 space-y-1">
          <div className="flex items-center gap-1.5 text-gold font-bold uppercase text-[10px]">
            <Sparkles className="w-3.5 h-3.5" /> Demo Login Credentials
          </div>
          <p><strong>Email:</strong> admin@taxviglobal.com</p>
          <p><strong>Password:</strong> Admin@123</p>
        </div>

        {error && (
          <div className="p-3 bg-terracotta/20 border border-terracotta text-ivory text-xs flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0 text-terracotta" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Admin Email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="gold" className="w-full py-3">
            Authenticate & Access Dashboard
          </Button>
        </form>
      </div>
    </div>
  );
}
