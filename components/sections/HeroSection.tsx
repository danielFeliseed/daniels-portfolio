import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { socialLinks } from '@/data';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/locales/translations';
import TypingText from '../ui/TypingText';

export default function HeroSection() {
    const { language } = useLanguageStore();
    const t = translations[language];

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-gray-900 to-gray-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-20" />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2 mb-8"
                >
                    {language === 'ja' ? (
                        <motion.p
                            className="text-3xl sm:text-4xl md:text-5xl font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                {t.hero.name}
                            </span>
                        </motion.p>
                    ) : (
                        <>
                            <motion.h1
                                className="text-2xl sm:text-3xl font-medium text-blue-400"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {t.hero.greeting}
                            </motion.h1>
                            <motion.p
                                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                                    {t.hero.name}
                                </span>
                            </motion.p>
                        </>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 relative"
                >
                    <div className="relative">
                        <TypingText
                            text={t.hero.title}
                            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent inline-block"
                            delay={200}
                            speed={80}
                        />
                        <motion.div
                            className="h-px w-24 mx-auto mt-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                            initial={{ width: 0 }}
                            animate={{ width: 96 }}
                            transition={{ delay: 1, duration: 0.8 }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mb-8 sm:mb-10 md:mb-12 relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-transparent" />
                    <div className="relative px-3 py-2 rounded-lg">
                        <TypingText
                            text={t.hero.subtitle}
                            className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                            delay={1000}
                            speed={70}
                        />
                        <motion.div
                            className="absolute -inset-x-6 sm:-inset-x-10 inset-y-0 border-x border-blue-500/5"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                >
                    <motion.a
                        href="#projects"
                        className="group relative w-48 text-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">{t.hero.viewProjects}</span>
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="group w-48 text-center px-8 py-3 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {t.hero.contactMe}
                    </motion.a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-6 flex flex-col items-center gap-8"
            >
                <div className="flex gap-6">
                    {[
                        { icon: <Github className="w-5 h-5" />, href: socialLinks.github },
                        { icon: <Linkedin className="w-5 h-5" />, href: socialLinks.linkedin },
                        { icon: <Mail className="w-5 h-5" />, href: `mailto:${socialLinks.email}` }
                    ].map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all duration-200"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="w-6 h-6 text-gray-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}