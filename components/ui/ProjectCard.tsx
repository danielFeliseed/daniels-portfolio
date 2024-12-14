import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Calendar, Star } from 'lucide-react';
import { useState } from 'react';
import { Project } from '../../types';
import { useLanguageStore } from '@/stores/languageStore';
import { translations } from '@/locales/translations';

export default function ProjectCard({ project }: { project: Project }) {
    const { language } = useLanguageStore();
    const t = translations[language];
    const projectKey = Number(project.id) as keyof typeof t.projects.projectItems;
    const projectT = t.projects.projectItems[projectKey];
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const cardVariants = {
        hover: {
            scale: 1.02,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (

        <motion.div
            initial="initial"
            whileHover="hover"
            variants={cardVariants}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl break-inside-avoid"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                animate={{
                    opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            />

            <div className="p-4 sm:p-6 relative z-10 h-full flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                >
                    {/* Mobile layout */}
                    <div className="block sm:hidden">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center mb-3">
                            {projectT.title}
                        </h3>
                        <div className="flex justify-center">
                            <motion.div
                                className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-1.5"
                            >
                                <Calendar className="w-4 h-4 text-blue-400" />
                                <span className="text-gray-300 font-medium">{projectT.period}</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="hidden sm:flex sm:justify-between sm:items-center">
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {projectT.title}
                        </h3>
                        <motion.div
                            animate={{
                                x: isHovered ? 0 : 10,
                                boxShadow: isHovered ? "0 0 20px rgba(59, 130, 246, 0.2)" : "none"
                            }}
                            className="inline-flex items-center gap-2 text-sm bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-1.5"
                        >
                            <Calendar className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300 font-medium">{projectT.period}</span>
                        </motion.div>
                    </div>
                </motion.div>

                <p className="text-gray-300 mb-4">{projectT.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/20"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative"
                        >
                            <div className="space-y-4 mt-4">
                                <div className="space-y-2">
                                    <h4 className="text-lg font-semibold text-blue-400">{t.projects.keyFeatures}</h4>
                                    <ul className="space-y-1">
                                        {projectT.features?.map((feature: string, index: number) => (
                                            <motion.li
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="text-gray-400 flex items-center gap-2"
                                            >
                                                <Star className="w-4 h-4 text-yellow-500" />
                                                {feature}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-auto pt-6 flex justify-end">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown className="w-6 h-6" />
                        </motion.div>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
}