
import React, { useEffect } from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-5 right-5 bg-gray-800 border border-cyan-500 text-white py-3 px-5 rounded-lg shadow-2xl shadow-cyan-500/10 flex items-center justify-between animate-fade-in-up z-50 max-w-sm">
      <p className="text-sm mr-4">{message}</p>
      <button onClick={onClose} className="text-2xl font-light text-gray-400 hover:text-white leading-none transition-colors">&times;</button>
    </div>
  );
};

export default Toast;
