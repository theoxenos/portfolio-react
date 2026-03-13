import ParagraphBlock from '../components/ParagraphBlock.tsx';

const About = () => {
    return (
        <div className="mt-5 text-nord-6">
            <h1>About Me</h1>
            <ParagraphBlock>
                <p>
                    Currently working at ICT Maatwerk.
                    Where I do work as web-developer using React and .NET.
                    At this moment the work consists of courses and various solo-projects.
                    Both for the purpose of improving my coding skills and so laying the groundwork for my next role.
                </p>
                <p>
                    In the meantime I also do some volunteer work at <a href="https://netwerkvoorjou.nl" target="_blank"
                                                                        rel="noopener noreferrer">Netwerk voor Jou</a>.
                    Where we help people with no money or social network.
                    We help with practical tasks like garden maintenance, cleaning and moving house.
                    I do this for almost 9 years now, and really enjoy my time there every time.
                    We all do our best and go above and beyond to help the people in need.
                </p>
            </ParagraphBlock>
            <h2>Skills</h2>
            <ParagraphBlock>
                <ul>
                    <li><strong>Linux</strong> (Arch btw) is my daily driver for a couple of years now.</li>
                    <li>From <a href="https://theodinproject.com" target="_blank" rel="noopener noreferrer">The Odin
                        Project</a> I learned the basics of <strong>web-development</strong>.
                    </li>
                    <li>After completing the advanced HTML and CSS I did the <a href="https://fullstackopen.com"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer">Full Stack
                        Open</a> course to learn the <strong>MERN</strong> stack and other dev related skills
                        like <strong>CI/CD</strong> and <strong>Docker</strong></li>
                    <li>In the meantime I'm also working on <a href="https://thecsharpacademy.com" target="_blank"
                                                               rel="noopener noreferrer">The CSharp
                        Academy</a> projects to work on my .NET skills.
                    </li>
                </ul>
            </ParagraphBlock>
        </div>
    );
};

export default About;
