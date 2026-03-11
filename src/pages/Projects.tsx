import { Badge, Col, Image, Row } from "react-bootstrap";
import portfolio from "../assets/projects/portfolio.png";

interface Project {
  title: string;
  description: string;
  screenshot: string;
  stack: string[];
}

const projects: Project[] = [
  {
    title: "Fortuna Primigenia",
    description:
      "A full stack budgeting application to help users manage their finances. It features transaction tracking, budget management, and insightful data visualization.",
    screenshot: portfolio, // Placeholder for now
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
        <Row
          key={index}
          className="mb-5 p-4 rounded-2 shadow bg-nord-2"
        >
          <Col xs={12} className="mb-4">
            <Image
              src={project.screenshot}
              fluid
              rounded
              className="shadow-sm border border-nord-3 w-100"
              alt={`${project.title} screenshot`}
            />
          </Col>
          <Col xs={12}>
            <h3 className="text-nord-7">{project.title}</h3>
            <div className="mb-3">
              {project.stack.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  pill
                  bg="nord-8"
                  text="nord-0"
                  className="me-2 mb-2"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <p className="text-nord-4">{project.description}</p>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Projects;