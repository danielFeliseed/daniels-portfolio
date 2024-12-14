'use client';
import { useLanguageStore } from '@/stores/languageStore';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageStore();

  return (
    <button
      onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
      className="fixed top-4 right-4 z-50 px-4 py-2 rounded-full bg-gray-800/80"
    >
      {language === 'ja' ? 'English' : '日本語'}
    </button>
  );
}
