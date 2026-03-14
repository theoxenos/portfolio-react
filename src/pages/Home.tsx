import {Link} from 'react-router';
import {Anchor} from 'react-bootstrap';
import ParagraphBlock from '../components/ParagraphBlock.tsx';

const Home = () => (
    <div className="mt-5 text-nord-6">
        <h1>Hello, I am <span className="text-nord-7">Andreas</span></h1>
        <span className="d-flex gap-3">
            <h5 className="text-nord-4">An aspiring Web Developer</h5>
            <a
                href="/20260220_CVAndreas.pdf"
                download="20260220_CVAndreas.pdf"
                className="text-decoration-none cursor-pointer"
            >
                <i className="bi bi-download"></i> CV
            </a>
        </span>
        <ParagraphBlock>
            <p>
                At this point, I am still learning the ropes of web development.
                I have experience with HTML, CSS, JavaScript, Typescript and .NET.
                I am constantly seeking to expand my knowledge and skills.
                My preference goes to working with C# and .NET, but I am always looking for new challenges to take
                on.
            </p>
            <p>
                The current project I'm working on is a full stack budgeting application using React, .NET, and SQL
                Server.
                To see the code and learn more about the project, visit the&nbsp;
                <Anchor href="https://github.com/theoxenos/FortunaPrimigenia" rel="noopener noreferrer">
                    GitHub repository
                </Anchor>
                . Or visit the <Link to="/projects" className="text-decoration-none">Projects</Link> page.
            </p>
        </ParagraphBlock>
    </div>
);

export default Home;
