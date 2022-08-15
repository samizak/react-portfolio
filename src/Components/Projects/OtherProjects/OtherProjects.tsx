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
                <a
                  href="https://www.youtube.com/watch?v=Q5ndaoKq1B8"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Ponzi Bot
                </a>
              </h3>
            </div>

            <p>
              A sophisticated and versatile Discord bot that can fetch NFT
              prices from OpenSea, convert currencies and cryptocurrencies,
              retrieve stock and cryptocurrency prices in real-time, generate
              charts of financial markets from TradingView and much more.
              <br></br>
              <br></br>
              <span className="highlight">
                This project is being used privately in the wild. Further demos
                can be shown upon request!
              </span>
            </p>

            <ul className="project-tech-list underline-tech-list">
              <li>NodeJS</li>
              <li>Typescript</li>
              <li>Puppeteer</li>
              <li>Axios</li>
              <li>GraphQL</li>
              <li>ChartJS</li>
              <li>DiscordJS</li>
              <li>Yahoo Finance API</li>
              <li>OpenSea API</li>
              <li>Coingecko API</li>
              <li>Axios</li>
            </ul>

            <div className="card-links project-links">
              <a
                href="https://www.youtube.com/watch?v=Q5ndaoKq1B8"
                title="Youtube Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Youtube />
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-title ">
              <h3>
                <a
                  href="https://www.youtube.com/watch?v=ef_E_0BR4fg"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Currency and Crypto conversion Discord Bot
                </a>
              </h3>
            </div>

            <p>
              A Discord bot that enables users to convert fiat currencies and
              cryptocurrencies.
              <br></br>
              <br></br>
              <span className="highlight">
                This project is being used privately in the wild. Source code
                and further demos can be shown upon request!
              </span>
            </p>

            <ul className="project-tech-list underline-tech-list">
              <li>NodeJS</li>
              <li>Typescript</li>
              <li>Axios</li>
              <li>DiscordJS</li>
            </ul>

            <div className="card-links project-links">
              <a
                href="https://www.youtube.com/watch?v=ef_E_0BR4fg"
                title="Youtube Link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Youtube />
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card-title ">
              <h3>
                <a
                  href="https://sz-react-password-generator.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Random Password Generator
                </a>
              </h3>
            </div>

            <p>
              A password generator app that uses React with hooks to generate
              secure, random passwords.
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
                <a
                  href="https://sz-react-todo-app.netlify.app/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  To Do App
                </a>
              </h3>
            </div>

            <p>
              A To Do App designed for staying organized with simplicity in
              mind. The website was created with React using hooks.
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

          <div className="project-card">
            <div className="project-card-title ">
              <h3>
                <a
                  href="https://sz-short.herokuapp.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  URL Shortener Service
                </a>
              </h3>
            </div>

            <p>
              A URL shortener service designed in React, using React with the
              MERN Stack, that uses hooks to shrink lengthy URLs.
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

              <a
                href="https://sz-short.herokuapp.com/"
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
                <a
                  href="https://github.com/samizak?tab=repositories&q=&type=public&language=c%23"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Trading Algorithms
                </a>
              </h3>
            </div>

            <p>
              Various trading algorithms created in C# for the cTrader platform
              and in Pinescript for the TradingView platform.
            </p>

            <ul className="project-tech-list underline-tech-list">
              <li>C#</li>
              <li>cTrader</li>
              <li>Pinescript</li>
              <li>TradingView</li>
            </ul>

            <div className="card-links project-links multi-links">
              <div className="project-links-inner">
                <h4>cTrader Links</h4>
                <a
                  href="https://github.com/samizak?tab=repositories&q=&type=public&language=c%23"
                  title="Github Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github />
                </a>

                <a
                  href="https://ctrader.com/users/profile/52977"
                  title="Visit Site"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink />
                </a>
              </div>

              <div className="project-links-inner">
                <h4>TradingView Links</h4>
                <a className="hide-project-link-icon">
                  <Github />
                </a>

                <a
                  href="https://www.tradingview.com/u/Botnet101/#published-scripts"
                  title="Visit Site"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink />
                </a>
              </div>
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
