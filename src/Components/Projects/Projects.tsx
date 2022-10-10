import "./Project.css";
import nft_portfolio_image from "../../Images/nft-portfolio-tracker-showcase.png";
import opensea_nft_floor_price from "../../Images/opensea-nft-floor-price.png";
import portfolio from "../../Images/portfolio.png";
import tradingview_discord_bot from "../../Images/tradingview_discord_bot.png";

import ExternalLink from "../SVGs/ExternalLink";
import Github from "../SVGs/Github";
import Youtube from "../SVGs/Youtube";
import OtherProjects from "./OtherProjects/OtherProjects";

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
                <img src={nft_portfolio_image} alt="NFT Portfolio Tracker" />
              </div>
            </div>

            <div className="project-contents">
              <div className="project-title">
                <h3>
                  <a
                    href="https://www.nftportfolio.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NFT Portfolio Tracker
                  </a>
                </h3>
                <div className="project-links">
                  <a
                    href="https://www.youtube.com/watch?v=xGDd0JjUUyk"
                    title="Youtube Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Youtube />
                  </a>
                  <a
                    href="https://www.nftportfolio.app/"
                    title="Visit Site"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink />
                  </a>
                </div>
              </div>
              <p>
                A React application, requested by a client, that tracks the
                value of your NFT portfolio and displays the total portfolio
                value in Ethereum and in fiat currency.
                <br></br>
                <br></br>
                <span className="highlight">
                  This project is being used in the wild. Further demos can be
                  shown upon request!
                </span>
              </p>
              <ul className="project-tech-list underline-tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Material UI</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>OpenSea API</li>
                <li>Coingecko API</li>
                <li>Web3.js</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>

          <div className="project-container">
            <div className="project-image-container">
              <div className="project-image-container-inner">
                <img src={tradingview_discord_bot} alt="To Do App" />
              </div>
            </div>

            <div className="project-contents">
              <div className="project-title">
                <h3>
                  <a
                    href="https://www.youtube.com/watch?v=VyUPQCh_T5o"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    TradingView Discord Bot
                  </a>
                </h3>
                <div className="project-links">
                  <a
                    href="https://www.youtube.com/watch?v=VyUPQCh_T5o"
                    title="Youtube Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Youtube />
                  </a>
                </div>
              </div>

              <p>
                A Discord bot that generates and returns charts from
                TradingView. This bot also offers advanced features such as
                measuring performance of two or more securities across various
                time frames.
                <br></br>
                <br></br>
                <span className="highlight">
                  This project is being used privately in the wild. Further
                  demos can be shown upon request!
                </span>
              </p>
              <ul className="project-tech-list underline-tech-list">
                <li>NodeJS</li>
                <li>Typescript</li>
                <li>Puppeteer</li>
                <li>Axios</li>
                <li>DiscordJS</li>
              </ul>
            </div>
          </div>

          <div className="project-container">
            <div className="project-image-container">
              <div className="project-image-container-inner">
                <img
                  src={opensea_nft_floor_price}
                  alt="OpenSea NFT Floor Price Tracker"
                />
              </div>
            </div>

            <div className="project-contents">
              <div className="project-title">
                <h3>
                  <a
                    href="https://sz-opensea-floor-price.herokuapp.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    OpenSea NFT Floor Price Tracker
                  </a>
                </h3>
                <div className="project-links">
                  <a
                    href="https://www.youtube.com/watch?v=Gsh5KQ8EaeU"
                    title="Youtube Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Youtube />
                  </a>
                  <a
                    href="https://sz-opensea-floor-price.herokuapp.com/"
                    title="Visit Site"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink />
                  </a>
                </div>
              </div>

              <p>
                A React application that lets you retrieve the floor price of
                the queried NFT (
                <span className="highlight">
                  The cheapest NFT for sale for an NFT Collection
                </span>
                ) on OpenSea. This app also comes with a discord bot that
                retrieves and displays the floor price of the queried NFT.
                <br></br>
                <br></br>
                <span className="highlight">
                  Source code can be shown upon request!
                </span>
              </p>
              <ul className="project-tech-list underline-tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>OpenSea API</li>
                <li>Coingecko API</li>
                <li>Puppeteer</li>
                <li>Axios</li>
                <li>Heroku</li>
                <li>DiscordJS</li>
              </ul>
            </div>
          </div>

          <div className="project-container project-portfolio">
            <div className="project-image-container">
              <div className="project-image-container-inner">
                <img src={portfolio} alt="React Portfolio Website" />
              </div>
            </div>

            <div className="project-contents">
              <div className="project-title">
                <h3>
                  <a href="#0" rel="noopener noreferrer" target="_blank">
                    React Portfolio Website
                  </a>
                </h3>
                <div className="project-links">
                  <a
                    href="https://github.com/samizak/react-portfolio"
                    title="Github Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github />
                  </a>

                  <a
                    href="#0"
                    title="Visit Site"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink />
                  </a>
                </div>
              </div>

              <p>
                My current Portfolio website (this website) created in React,
                hosted on netlify.
                <br></br>
                <br></br>
              </p>
              <ul className="project-tech-list underline-tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap 5</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>
        </div>

        <OtherProjects />
      </section>
    </>
  );
}
