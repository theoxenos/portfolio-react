import {Container, Nav, Anchor} from "react-bootstrap";

const App = () => (
    <Container className="p-3 vh-100">
        <div
            className="rounded-pill bg-nord-1 text-nord-6 py-3"
            style={{margin: '0 auto', width: '400px'}}
            aria-label="Main navigation">
            <ul className="d-flex justify-content-center align-items-center gap-5 h-100 mb-0 list-unstyled">
                <li className="d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-house-fill fs-5" aria-hidden="true"></i>
                    <Nav.Link className="fs-6 p-0" href="/">Home</Nav.Link>
                </li>
                <li className="d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-briefcase-fill fs-5" aria-hidden="true"></i>
                    <Nav.Link className="fs-6 p-0" href="/projects">Projects</Nav.Link>
                </li>
                <li className="d-flex flex-column justify-content-center align-items-center">
                    <i className="bi bi-info-circle-fill fs-5" aria-hidden="true"></i>
                    <Nav.Link className="fs-6 p-0" href="/about">About</Nav.Link>
                </li>
            </ul>
        </div>

        <div className="mt-5">
            <h1 className="text-nord-6">Hello, I am <span className="text-nord-7">Andreas</span></h1>
            <h5 className="text-nord-4">An aspiring Web Developer</h5>
            <div className="mt-3 p-2 text-white border-1 border-black rounded-2 shadow bg-nord-2">
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
                    . Or visit the <Anchor href="/projects">Projects page</Anchor>
                </p>
            </div>
        </div>
    </Container>
);

export default App
