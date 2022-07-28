import "./Home.css";

export default function Home() {
  return (
    <>
      <section id="home" className="home qIYQfQ ">
        <div className="inner-home">
          <h1>
            Hello World<span className="wave">👋</span>!
          </h1>
          <h2>
            I'm <span className="name">Sami Zakir Ahmed</span>, a Full Stack
            Software Engineer
          </h2>

          <div className="home-buttons">
            <a href="#contact" className="home-button">
              Resume
            </a>
            <a href="#contact" className="home-button">
              Contact Me
            </a>
          </div>

          <a className="home-scroll-down" href="#about">
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
