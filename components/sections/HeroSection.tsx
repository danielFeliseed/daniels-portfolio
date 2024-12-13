import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const TypingText = ({ text, delay = 0, speed = 50, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        startTyping();
      }, delay);
      return () => clearTimeout(delayTimeout);
    } else {
      startTyping();
    }
  }, []);

  const startTyping = () => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= text.length - 1) {
          clearInterval(intervalId);
          setIsTypingComplete(true);
          return prev;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(intervalId);
  };

  useEffect(() => {
    setDisplayedText(text.substring(0, currentIndex + 1));
  }, [currentIndex, text]);

  return (
    <span className={className}>
      {displayedText}
      {!isTypingComplete && (
        <span className="inline-block w-[2px] h-[1em] bg-current animate-pulse ml-1" />
      )}
    </span>
  );
};

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
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Github className="w-6 h-6" />
        </a>
        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="mailto:your.email@example.com"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Mail className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}