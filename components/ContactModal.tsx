import React, { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset form when modal opens
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'お名前を入力してください。';
    }
    if (!email.trim()) {
      newErrors.email = 'メールアドレスを入力してください。';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = '有効なメールアドレスを入力してください。';
    }
    if (!message.trim()) {
      newErrors.message = 'お問い合わせ内容を入力してください。';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      onSubmit();
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-gray-900 border-2 border-purple-500/50 rounded-xl shadow-2xl shadow-purple-500/10 w-full max-w-lg max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="font-teko text-4xl font-bold"><span className="text-purple-400">管理者へ</span>のお問い合わせ</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors text-3xl leading-none">&times;</button>
        </header>
        
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-300">お名前</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full bg-gray-800/50 border-2 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-purple-400 transition-all ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-purple-400'}`}
              placeholder="山田 太郎"
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-300">メールアドレス</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full bg-gray-800/50 border-2 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-purple-400 transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-purple-400'}`}
              placeholder="your.email@example.com"
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
           <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-300">お問い合わせ内容</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className={`w-full bg-gray-800/50 border-2 rounded-lg py-2 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-purple-400 transition-all ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-700 focus:ring-purple-400'}`}
              placeholder="ご意見、ご感想、不具合の報告など"
              disabled={isSubmitting}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>
        </form>
        
        <footer className="p-4 border-t border-gray-700 mt-auto">
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full font-teko text-3xl bg-purple-500 text-white font-bold py-2 px-12 rounded-lg hover:bg-purple-400 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                  送信中...
                </>
            ) : (
                '送信'
            )}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ContactModal;
