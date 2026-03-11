import portfolio from "../assets/projects/portfolio.png";
import type {Project} from "../types.ts";
import ProjectDetail from "../components/ProjectDetail.tsx";

const projects: Project[] = [
    {
        title: "Fortuna Primigenia",
        description:
            "A full stack budgeting application to help users manage their finances. It features transaction tracking, budget management, and insightful data visualization.",
        screenshot: portfolio,
        stack: ["React", ".NET", "SQL Server", "TypeScript", "Bootstrap", "C#"],
    },
    {
        title: "Portfolio website",
        description:
            "A personal portfolio website to showcase my projects and skills. Designed with a focus on simplicity and responsiveness using the Nord color palette.",
        screenshot: portfolio,
        stack: ["React", "Vite", "TypeScript", "Bootstrap", "Nord"],
    },
];

const Projects = () => {
    return (
        <div className="mt-5">
            <h1 className="text-nord-6 mb-4">Projects</h1>
            {projects.map((project, index) => (
                <ProjectDetail project={project} key={index}/>
            ))}
        </div>
    );
};

export default Projects;