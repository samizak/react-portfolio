import { useRef, useEffect, useState } from "react";
import "./App.css";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function FadeInSection(props: any) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => entry.isIntersecting && setVisible(entry.isIntersecting)
      );
    });

    const { current } = domRef;
    if (!current) return;

    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function App() {
  return (
    <>
      {/* <div className="curve-container">
        <div className="curve"></div>
      </div> */}
      <Header />

      <FadeInSection>
        <section id="home" className="home qIYQfQ ">
          <div className="inner-home">
            <h1>
              Hello World<span className="wave">👋</span>!
            </h1>
            <h2>I'm Sami Zakir Ahmed, a Full Stack Software Engineer</h2>

            <div className="home-buttons">
              <a href="#contact" className="contact-me-button">
                Resume
              </a>
              <a href="#contact" className="contact-me-button">
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <section id="about" className="qIYQfQ">
          About Me
        </section>
      </FadeInSection>

      <FadeInSection>
        <Skills />
      </FadeInSection>

      <FadeInSection>
        <ContactMe />
      </FadeInSection>

      <Footer />
    </>
  );
}

export default App;
