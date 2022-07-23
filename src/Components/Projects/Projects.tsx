// import ProjectCard from "./ProjectCard_old";
import "./Project.css";
import nft_portfolio_image from "../../Images/nft-portfolio-tracker-showcase.png";
import ExternalLink from "../SVGs/ExternalLink";

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects qIYQfQ">
        <div className="dashes-to-title">
          <h2>Projects</h2>
        </div>

        <div className="project-grid">
          <div className="project-container">
            <div className="project-image-container">
              <div className="project-image-container-inner">
                <img src={nft_portfolio_image} />
              </div>
            </div>

            <div className="project-contents">
              <h3>NFT Portfolio Tracker</h3>
              <p>
                a React application that tracks the value of your NFT portfolio
                and shows it both in Ethereum and in fiat currency.
              </p>
              <ul className="project-tech-list underline-tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>OpenSea API</li>
                <li>Coingecko API</li>
                <li>Web3.js</li>
                <li>Heroku</li>
              </ul>

              <div className="project-links">
                <a
                  href="https://sz-nft-portfolio-tracker.herokuapp.com/"
                  title="External Link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <ExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
