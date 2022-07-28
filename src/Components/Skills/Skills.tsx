// import CSharp from "../SVGs/CSharp";
// import CSS3 from "../SVGs/CSS3";
// import Git from "../SVGs/Git";
// import HTML5 from "../SVGs/HTML5";
// import Java from "../SVGs/Java";
// import JavaScript from "../SVGs/JavaScript";
// import Python from "../SVGs/Python";
// import ReactJS from "../SVGs/ReactJS";
// import NodeJS from "../SVGs/NodeJS";
// import TypeScript from "../SVGs/TypeScript";
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
            <p>SCSS</p>
            <p>SASS</p>
          </div>

          <div className="grid-item backend-container">
            <h3>Back-End Technology</h3>
            <p>NodeJS</p>
            <p>.NET</p>
            <p>GraphQL</p>
            <p>REST</p>
            <p>PostgreSQL</p>
            <p>MongoDB</p>
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
