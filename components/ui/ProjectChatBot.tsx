'use client';
import { useState, useEffect } from 'react';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/locales/translations';
import { Send, Bot, User, Loader2 } from 'lucide-react';

export default function ProjectChatbot() {
    const { language } = useLanguageStore();
    const t = translations[language];
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([{
        role: 'assistant',
        content: t.chatbot.greeting
    }]);

    useEffect(() => {
        setMessages(prevMessages => [
            { role: 'assistant', content: t.chatbot.greeting },
            ...prevMessages.slice(1)
        ]);
    }, [language, t.chatbot.greeting]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = {
            role: 'user',
            content: input
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/AiChat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [...messages, userMessage]
                }),
            });

            const data = await response.json();

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: data.message
            }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: t.chatbot.errorMessage
            }]);
        }

        setIsLoading(false);
    };

    return (
        <div className="flex flex-col w-full max-w-2xl mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 p-4 border-b border-gray-700">
                <div className="flex items-center gap-2">
                    <Bot className="w-6 h-6 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">{t.chatbot.chatbotName}</h3>
                </div>
            </div>

            <div className="flex-1 p-4 h-[400px] overflow-y-auto space-y-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'
                            }`}
                    >
                        {message.role === 'assistant' && (
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                        )}
                        <div
                            className={`rounded-lg p-3 max-w-[80%] ${message.role === 'user'
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-800 text-gray-100'
                                }`}
                        >
                            {message.content}
                        </div>
                        {message.role === 'user' && (
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                <User className="w-5 h-5 text-white" />
                            </div>
                        )}
                    </div>
                ))}
                {isLoading && (
                    <div className="flex items-center gap-2 text-gray-400">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{t.chatbot.thinking}</span>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={t.chatbot.placeholder}
                        className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </form>
        </div>
    );
};