import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/data';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/locales/translations';
import TypingText from '../ui/TypingText';

export default function HeroSection() {
    const { language } = useLanguageStore();
    const t = translations[language];
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900" />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        {t.hero.h1}
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold mb-6"
                >
                    <TypingText
                        text={t.hero.title}
                        className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                        delay={200}
                        speed={80}
                    />
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                >
                    <TypingText
                        text={t.hero.subtitle}
                        className="text-xl md:text-2xl text-gray-300 mb-8 block max-w-2xl mx-auto"
                        delay={1000}
                        speed={70}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0 }}
                    className="flex justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        {t.hero.viewProjects}
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                    >
                        {t.hero.contactMe}
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5 }}
                className="absolute bottom-8 flex gap-6"
            >
                <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Github className="w-6 h-6" />
                </a>
                <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Linkedin className="w-6 h-6" />
                </a>
                <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    <Mail className="w-6 h-6" />
                </a>
            </motion.div>
        </section>
    );
}