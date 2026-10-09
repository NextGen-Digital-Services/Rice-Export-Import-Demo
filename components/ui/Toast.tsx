'use client';

import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-gold-dark" />,
    error: <AlertCircle className="w-5 h-5 text-terracotta" />,
    info: <Info className="w-5 h-5 text-basil" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-basil text-ivory border border-gold/40 shadow-2xl animate-slideUp">
      {icons[type]}
      <span className="text-xs font-medium tracking-wide">{message}</span>
      <button onClick={onClose} className="ml-2 text-ivory/60 hover:text-gold transition-colors">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
