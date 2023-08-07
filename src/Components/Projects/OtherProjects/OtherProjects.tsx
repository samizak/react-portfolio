import "./OtherProjects.css";

import ExternalLink from "../../SVGs/ExternalLink";
import Github from "../../SVGs/Github";
import Youtube from "../../SVGs/Youtube";

export default function OtherProjects() {
  return (
    <>
      <div className="other-projects">
        <h3>Other Noteworthy Projects</h3>

        <div className="project-card-grid">
          <div className="project-card">
            <div className="project-card-title ">
              <h3>
                <a href="https://www.youtube.com/watch?v=Q5ndaoKq1B8" rel="noopener noreferrer" target="_blank">
                  Twitter Clone
                </a>
              </h3>
            </div>

            <p>
              A fullstack Twitter clone application created with NextJS, React, TailwindCSS and Prisma.
              <br></br>
              <br></br>
            </p>

            <ul className="project-tech-list underline-tech-list">
              <li>TypeScript</li>
              <li>NextJS</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>MongoDB</li>
              <li>Prisma</li>
              <li>NextAuth</li>
              <li>Zustand</li>
              <li>Bcrypt</li>
              <li>SWR</li>
              <li>Axios</li>
              <li>React-icons</li>
            </ul>

            <div className="card-links project-links">
              <a
                href="https://github.com/samizak/Twitter-Clone"
                title="Github Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github />
              </a>

              <a
                href="https://twitter-clone-nine-blush.vercel.app/"
                title="Visit Site"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink />
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-title">
              <h3>
                <a href="https://www.youtube.com/watch?v=Q5ndaoKq1B8" rel="noopener noreferrer" target="_blank">
                  Netflix Clone
                </a>
              </h3>
            </div>

            <p>
              A fullstack Netflix clone application created with NextJS, React, TailwindCSS and Prisma.
              <br></br>
              <br></br>
            </p>

            <ul className="project-tech-list underline-tech-list">
              <li>TypeScript</li>
              <li>NextJS</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>MongoDB</li>
              <li>Prisma</li>
              <li>NextAuth</li>
              <li>Zustand</li>
              <li>Bcrypt</li>
              <li>SWR</li>
              <li>Axios</li>
              <li>React-icons</li>
            </ul>

            <div className="card-links project-links">
              <a
                href="https://github.com/samizak/Netflix-Clone"
                title="Github Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github />
              </a>

              <a
                href="https://netflix-clone-neon-theta.vercel.app/auth"
                title="Visit Site"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink />
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-title ">
              <h3>
                <a href="https://www.youtube.com/watch?v=ef_E_0BR4fg" rel="noopener noreferrer" target="_blank">
                  Mini messaging board
                </a>
              </h3>
            </div>

            <p>
              A fullstack mini messaging board application created with React, HTML, CSS and MongoDB.
              <br></br>
              <br></br>
            </p>

            <ul className="project-tech-list underline-tech-list">
              <li>NodeJS</li>
              <li>Typescript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>

            <div className="card-links project-links">
              <a
                href="https://github.com/samizak/Odin-Mini-Message-Board"
                title="Github Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github />
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-title ">
              <h3>
                <a href="https://sz-short.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                  URL Shortener Service
                </a>
              </h3>
            </div>

            <p>
              A fullstack URL shortener service, using React with the MERN Stack, that uses hooks to shrink lengthy
              URLs.
            </p>

            <ul className="project-tech-list underline-tech-list">
              <li>React</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap 5</li>
              <li>NodeJS</li>
              <li>Express</li>
              <li>Mongoose</li>
              <li>Heroku</li>
            </ul>

            <div className="card-links project-links">
              <a
                href="https://www.youtube.com/watch?v=4gcjXGn2mu0"
                title="Youtube Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Youtube />
              </a>

              <a
                href="https://github.com/samizak/react-url-shortener"
                title="Github Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github />
              </a>

              <a href="https://sz-short.herokuapp.com/" title="Visit Site" rel="noopener noreferrer" target="_blank">
                <ExternalLink />
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-title ">
              <h3>
                <a href="https://sz-react-password-generator.netlify.app/" rel="noopener noreferrer" target="_blank">
                  Random Password Generator
                </a>
              </h3>
            </div>

            <p>A password generator app that uses React with hooks to generate secure, random passwords.</p>

            <ul className="project-tech-list underline-tech-list">
              <li>React</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Netlify</li>
            </ul>

            <div className="card-links project-links">
              <a
                href="https://github.com/samizak/react-password-generator"
                title="Github Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github />
              </a>

              <a
                href="https://sz-react-password-generator.netlify.app/"
                title="Visit Site"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink />
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-title ">
              <h3>
                <a href="https://sz-react-todo-app.netlify.app/" rel="noopener noreferrer" target="_blank">
                  To Do App
                </a>
              </h3>
            </div>

            <p>
              A To Do App designed for staying organized with simplicity in mind. The website was created with React
              using hooks.
            </p>

            <ul className="project-tech-list underline-tech-list">
              <li>React</li>
              <li>Typescript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Netlify</li>
            </ul>

            <div className="card-links project-links">
              <a
                href="https://github.com/samizak/React-Todo-App"
                title="Github Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github />
              </a>

              <a
                href="https://sz-react-todo-app.netlify.app/"
                title="Visit Site"
                rel="noopener noreferrer"
                target="_blank"
              >
                <ExternalLink />
              </a>
            </div>
          </div>
        </div>

        <div className="more-projects">
          <a
            className="more-projects-button"
            href="https://github.com/samizak?tab=repositories"
            rel="noopener noreferrer"
            target="_blank"
          >
            View More Projects
          </a>
        </div>
      </div>
    </>
  );
}
