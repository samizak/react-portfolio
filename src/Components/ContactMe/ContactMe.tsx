import { useRef } from "react";
import "./ContactMe.css";
import "../../App.css";
import ContactForm from "./ContactForm/ContactForm";

export default function ContactMe() {
  return (
    <>
      <section id="contact" className="contact-me qIYQfQ">
        <div className="dashes-to-title">
          <h2>Contact Me</h2>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
