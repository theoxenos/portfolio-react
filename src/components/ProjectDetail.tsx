import {Badge, Col, Row, Image} from 'react-bootstrap';
import type {Project} from '../types.ts';

const ProjectDetail = ({project}: { project: Project }) => {

    return (
        <Row className="mb-5 p-4 rounded-2 shadow bg-nord-2">
            <Col xs={12} className="mb-4">
                <Image src={project.screenshot} 
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
                        <Badge key={techIndex} pill bg="nord-8" text="nord-0" className="me-2 mb-2">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <p className="text-nord-4">{project.description}</p>
            </Col>
        </Row>
    );
};

export default ProjectDetail;