'use client';
import { useLanguageStore } from '@/stores/languageStore';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <button
      onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 flex gap-3 text-white"
    >
      {language === 'ja' ? 'English' : '日本語'}<Globe />
    </button>
  );
}
