'use client';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <HeroSection />

      <ProjectsSection />

      <ContactSection />
    </main>
  );
}