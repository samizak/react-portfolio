import "./OtherProjects.css";

import ExternalLink from "../../SVGs/ExternalLink";
import Github from "../../SVGs/Github";

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
                  href="https://sz-opensea-floor-price.herokuapp.com/"
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
                  href="https://sz-opensea-floor-price.herokuapp.com/"
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
                  href="https://sz-opensea-floor-price.herokuapp.com/"
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

          <div className="project-card">test</div>
          <div className="project-card">test</div>
          <div className="project-card">test</div>
        </div>
      </div>
    </>
  );
}
