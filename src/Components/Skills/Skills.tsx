import "./Skills.css";

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills qIYQfQ">
        <div className="dashes-to-title">
          <h2>Skills</h2>
        </div>

        <div className="skills-container">
          <div className="grid-item frontend-container">
            <h3>Front-End Technology</h3>
            <p>ReactJS</p>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>React Native</p>
            <p>NPM</p>
            <p>Yarn</p>
            <p>Bootstrap</p>
            <p>Material-UI</p>
            <p>SCSS/SASS</p>
            <p>CSS-in-JS</p>
            <p>Tailwind CSS</p>
          </div>

          <div className="grid-item backend-container">
            <h3>Back-End Technology</h3>
            <p>NodeJS</p>
            <p>.NET</p>
            <p>GraphQL</p>
            <p>REST</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
            <p>ExpressJS</p>
            <p>Redis</p>
          </div>

          <div className="grid-item language-container">
            <h3>Languages</h3>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>C#</p>
            <p>Java</p>
            <p>Python</p>
          </div>
        </div>
      </section>
    </>
  );
}
