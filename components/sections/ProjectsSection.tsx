import ProjectCard from "../ui/ProjectCard";
import ProjectChatbot from "../ui/ProjectChatBot";
import { projects } from "../../data";
import { Project } from "../../types";

export default function ProjectsSection() {

    return (
        <section id="projects" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-white text-center">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 grid-auto-rows-auto items-start">
                    {projects?.map((project: Project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <div className="mt-16">
                    <h3 className="text-2xl font-bold mb-8 text-white text-center">
                        Ask Me About These Projects
                    </h3>
                    <ProjectChatbot />
                </div>
            </div>
        </section>
    );
};