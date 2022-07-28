import "./Project.css";
import nft_portfolio_image from "../../Images/nft-portfolio-tracker-showcase.png";
import opensea_nft_floor_price from "../../Images/opensea-nft-floor-price.png";
import password_generator from "../../Images/password-generator.png";
import todo_app from "../../Images/todo-app-showcase.png";
import portfolio from "../../Images/portfolio.png";
import url_shortener from "../../Images/url-shortener-showcase.png";

import ExternalLink from "../SVGs/ExternalLink";
import Github from "../SVGs/Github";
import Youtube from "../SVGs/Youtube";

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
                    href="https://sz-nft-portfolio-tracker.herokuapp.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    NFT Portfolio Tracker
                  </a>
                </h3>
                <div className="project-links">
                  <a
                    href="https://www.youtube.com/watch?v=7n7F3ATXpR8"
                    title="Youtube Link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Youtube />
                  </a>
                  <a
                    href="https://sz-nft-portfolio-tracker.herokuapp.com/"
                    title="Visit Site"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink />
                  </a>
                </div>
              </div>
              <p>
                A React application, requested by a friend, that tracks the
                value of your NFT portfolio and displays the total portfolio
                value in Ethereum and in fiat currency.
                <br></br>
                <br></br>
                <span className="highlight technology-title">Technology</span>
                <br></br>
                This website uses NodeJS as backend to handle external APIs, the
                OpenSea API was used for fetching NFTs, Web3.js was used for
                validating Ethereum addresses or Ethereum Name Services (ENS)
                and the Coingecko API was used for fetching the Ethereum price
                in different fiat currencies.
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
                the queried NFT on OpenSea.
                <br></br>
                <br></br>
                <span className="highlight technology-title">Technology</span>
                <br></br>
                Puppeteer was used for scraping the Floor NFT (
                <span className="highlight">The cheapest NFT for sale</span>) on
                OpenSea, the OpenSea API was used for fetching additional
                information about the NFT and the Coingecko API was used for
                fetching the Ethereum price in different fiat currencies.
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
                  <a href="" rel="noopener noreferrer" target="_blank">
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
                    href=""
                    title="Visit Site"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ExternalLink />
                  </a>
                </div>
              </div>

              <p>
                My current Portfolio website created in React.
                <br></br>
                <br></br>
                <span className="highlight technology-title">Technology</span>
                <br></br>
                The website was created purely using HTML, CSS and Typescript,
                without the use of any additional packages. This website was
                hosted on Netlify.
              </p>
              <ul className="project-tech-list underline-tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Netlify</li>
              </ul>
            </div>
          </div>

          <div className="project-container">
            <div className="project-image-container">
              <div className="project-image-container-inner">
                <img src={url_shortener} alt="URL Shortener" />
              </div>
            </div>

            <div className="project-contents">
              <div className="project-title">
                <h3>
                  <a
                    href="https://sz-short.herokuapp.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    URL Shortener Service
                  </a>
                </h3>
                <div className="project-links">
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
              <p>
                A URL shortener service designed in React that uses hooks to
                shrink lengthy URLs.
                <br></br>
                <br></br>
                <span className="highlight technology-title">Technology</span>
                <br></br>
                The website was created using React with the MERN Stack and
                styled using Bootstrap 5 and CSS.
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
            </div>
          </div>

          <div className="project-container">
            <div className="project-image-container">
              <div className="project-image-container-inner">
                <img src={password_generator} alt="Random Password Generator" />
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
                    Random Password Generator
                  </a>
                </h3>
                <div className="project-links">
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
            </div>
          </div>

          <div className="project-container">
            <div className="project-image-container">
              <div className="project-image-container-inner">
                <img src={todo_app} alt="To Do App" />
              </div>
            </div>

            <div className="project-contents">
              <div className="project-title">
                <h3>
                  <a
                    href="https://sz-react-todo-app.netlify.app/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    To Do App
                  </a>
                </h3>
                <div className="project-links">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
