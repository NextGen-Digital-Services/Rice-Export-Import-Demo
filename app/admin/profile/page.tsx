'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export default function AdminProfilePage() {
  const [password, setPassword] = useState('');

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Password updated successfully!');
    setPassword('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-3xl font-bold text-basil">My Profile & Security</h1>
        <p className="text-xs text-charcoal/60">Update administrator account credentials and password.</p>
      </div>

      <form onSubmit={handleUpdate} className="bg-ivory border border-sand p-6 space-y-4 max-w-xl">
        <Input label="Admin Name" defaultValue="Taxvi Export Admin" readOnly />
        <Input label="Email" defaultValue="admin@taxviglobal.com" readOnly />
        <Input
          label="New Password"
          type="password"
          placeholder="Enter new security password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="gold">
          Update Security Settings
        </Button>
      </form>
    </div>
  );
}
