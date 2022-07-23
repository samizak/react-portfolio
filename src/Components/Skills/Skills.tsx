import CSharp from "../SVGs/CSharp";
import CSS3 from "../SVGs/CSS3";
import Git from "../SVGs/Git";
import HTML5 from "../SVGs/HTML5";
import Java from "../SVGs/Java";
import JavaScript from "../SVGs/JavaScript";
import Python from "../SVGs/Python";
import ReactJS from "../SVGs/ReactJS";
import NodeJS from "../SVGs/NodeJS";
import TypeScript from "../SVGs/TypeScript";
import "./Skills.css";

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills qIYQfQ">
        <div className="dashes-to-title">
          <h2>Skills</h2>
        </div>

        <div className="skills-container">
          <div className="skills-inner">
            <div className="skill-icon">
              <CSharp />
            </div>
            <h4>c#</h4>
          </div>
          <div className="skills-inner">
            <div className="skill-icon">
              <NodeJS />
            </div>

            <h4>NodeJS</h4>
          </div>
          <div className="skills-inner">
            <div className="skill-icon">
              <TypeScript />
            </div>
            <h4>typescript</h4>
          </div>
          <div className="skills-inner">
            <div className="skill-icon">
              <JavaScript />
            </div>
            <h4>javascript</h4>
          </div>
          <div className="skills-inner">
            <div className="skill-icon">
              <CSS3 />
            </div>
            <h4>CSS3</h4>
          </div>
          <div className="skills-inner">
            <div className="skill-icon">
              <HTML5 />
            </div>
            <h4>HTML5</h4>
          </div>

          <div className="skills-inner">
            <div className="skill-icon">
              <ReactJS />
            </div>
            <h4>ReactJS</h4>
          </div>
          <div className="skills-inner">
            <div className="skill-icon">
              <Python />
            </div>
            <h4>Python</h4>
          </div>

          <div className="skills-inner">
            <div className="skill-icon">
              <Git />
            </div>
            <h4>Git</h4>
          </div>

          <div className="skills-inner">
            <div className="skill-icon">
              <Java />
            </div>
            <h4>Java</h4>
          </div>
        </div>
      </section>
    </>
  );
}
