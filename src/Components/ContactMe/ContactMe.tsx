import { useRef } from "react";
import "./ContactMe.css";

export default function ContactMe() {
  const fullNameElement = useRef(null);
  const emailElement = useRef(null);
  const messageElement = useRef(null);

  return (
    <>
      <section id="contact" className="contact-me qIYQfQ">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            console.log(fullNameElement.current);
            console.log(emailElement.current);
            console.log(messageElement.current);
          }}
        >
          <div className="dashes-to-title">
            <h2>Contact Me</h2>
          </div>

          <input
            type="text"
            ref={fullNameElement}
            className="eDrgDA"
            placeholder="Full Name*"
            required
          />

          <input
            type="email"
            ref={emailElement}
            className="eDrgDA"
            placeholder="Email*"
            required
          />

          <textarea
            ref={messageElement}
            className="faEBBo"
            placeholder="Message*"
            required
          />

          <div className="button-div">
            <input className="frLzte" type="submit" value="Submit" />
          </div>
        </form>
      </section>
    </>
  );
}
