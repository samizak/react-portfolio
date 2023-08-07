import "./Project.css";
import nft_portfolio_image from "../../Images/nft-portfolio-tracker-showcase.png";
import ecommerce_site from "../../Images/ecommerce-site-showcase.jpg";
import blog_site from "../../Images/blog-showcase.jpg";
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
                  <a href="https://www.nftportfolio.app/" rel="noopener noreferrer" target="_blank">
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
                  <a href="https://www.nftportfolio.app/" title="Visit Site" rel="noopener noreferrer" target="_blank">
                    <ExternalLink />
                  </a>
                </div>
              </div>
              <p>
                A React application, requested by a client, that tracks the value of your NFT portfolio and displays the
                total portfolio value in Ethereum and in fiat currency.
                <br></br>
                <br></br>
                <span className="highlight">
                  This project is being used in the wild. Further demos can be shown upon request!
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
                  <a href="https://www.youtube.com/watch?v=VyUPQCh_T5o" rel="noopener noreferrer" target="_blank">
                    Finance Discord Bot
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
                A sophisticated and versatile Discord bot which includes 10+ commands and features, including fetching
                NFT prices from OpenSea, converting currencies and cryptocurrencies, retrieving stock and cryptocurrency
                prices in real-time, generating charts of financial markets from TradingView and much more.
                <br></br>
                <br></br>
                <span className="highlight">
                  This project is being used privately in the wild. Further demos can be shown upon request!
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
            </div>
          </div>

          <div className="project-container">
            <div className="project-image-container">
              <div className="project-image-container-inner">
                <img src={ecommerce_site} alt="Fullstack E-Commerce Store" width={600} height={400} />
              </div>
            </div>

            <div className="project-contents">
              <div className="project-title">
                <h3>
                  <a href="https://sz-opensea-floor-price.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                    Fullstack Ecommerce Store
                  </a>
                </h3>
                <div className="project-links">
                  <a
                    href="https://github.com/samizak/E-Commerce-Store"
                    title="Github Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://e-commerce-store-wa71.vercel.app/"
                    title="Visit Site"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink />
                  </a>
                </div>
              </div>

              <p>
                A fullstack E-Commerce Store created with NextJS, React, TailwindCSS and Headless UI.
                <br></br>
                <br></br>
              </p>
              <ul className="project-tech-list underline-tech-list">
                <li>TypeScript</li>
                <li>NextJS</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>MySQL</li>
                <li>Axios</li>
                <li>Headless UI</li>
                <li>React Hot Toast</li>
                <li>Lucide React</li>
              </ul>
            </div>
          </div>

          <div className="project-container">
            <div className="project-image-container">
              <div className="project-image-container-inner">
                <img src={blog_site} alt="Fullstack Blog" />
              </div>
            </div>

            <div className="project-contents">
              <div className="project-title">
                <h3>
                  <a href="#0" rel="noopener noreferrer" target="_blank">
                    Fullstack Blog
                  </a>
                </h3>
                <div className="project-links">
                  <a
                    href="https://github.com/samizak/Blog-Client"
                    title="Github Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github />
                  </a>
                </div>
              </div>

              <p>
                A fullstack Blog site which includes two intuitive front-end applications, a client blog site and a
                custom Admin CMS with rich text editor for formatting blog posts.
                <br></br>
                <br></br>
              </p>
              <ul className="project-tech-list underline-tech-list">
                <li>NextJS</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>MongoDB</li>
                <li>PassportJS</li>
                <li>JWT</li>
                <li>Bcrypt</li>
              </ul>
            </div>
          </div>
        </div>

        <OtherProjects />
      </section>
    </>
  );
}
