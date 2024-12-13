import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks } from '@/data';
import TypingText from '../ui/TypingText';

export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-gray-900" />

            <div className="relative z-10 text-center px-4">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                >
                    <TypingText
                        text="Full Stack Developer"
                        className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                        speed={80}
                    />
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                >
                    <TypingText
                        text="Building modern web experiences with Next.js, React, and Laravel"
                        className="text-xl md:text-2xl text-gray-300 mb-8 block max-w-2xl mx-auto"
                        delay={2000}
                        speed={60}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 6 }}
                    className="flex justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 6.5 }}
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