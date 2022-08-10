import { useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

export default function ContactForm() {
  const fullNameElement = useRef(null);
  const emailElement = useRef(null);
  const subjectElement = useRef(null);
  const messageElement = useRef(null);

  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState(false);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;

    setErrors(!form.checkValidity());

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  //   return (
  //     <>
  //       <form
  //         onSubmit={(e) => {
  //           e.preventDefault();

  //           console.log(fullNameElement.current);
  //           console.log(emailElement.current);
  //           console.log(subjectElement.current);
  //           console.log(messageElement.current);
  //         }}
  //       >
  //         <div className="inline-details">
  //           <div className="input-container">
  //             <input type="name" ref={fullNameElement} placeholder="Full Name*" />
  //             <span className="underline-form" />
  //           </div>

  //           <div className="input-container">
  //             <input type="email" ref={emailElement} placeholder="Email*" />
  //             <span className="underline-form" />
  //           </div>
  //         </div>

  //         <div className="input-container">
  //           <input type="text" ref={subjectElement} placeholder="Subject*" />
  //           <span className="underline-form" />
  //         </div>

  //         <div className="input-container">
  //           <textarea ref={messageElement} placeholder="Message*" />
  //           <span className="underline-form" />
  //         </div>

  //         <div className="button-div">
  //           <input type="submit" value="Submit" />
  //         </div>
  //       </form>
  //     </>
  //   );

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="inline-details">
          <Form.Group as={Col}>
            <Form.Control type="text" placeholder="Full name" required />

            <Form.Control.Feedback type="invalid">
              Please enter your full name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Control type="email" placeholder="Email" required />

            <Form.Control.Feedback type="invalid">
              Please enter a valid email.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group as={Col} w="100">
          <Form.Control type="text" placeholder="Subject" required />

          <Form.Control.Feedback type="invalid">
            Please enter a subject.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} w="100">
          <Form.Control
            type="text"
            as="textarea"
            rows={8}
            placeholder="Message"
            required
          />

          <Form.Control.Feedback type="invalid">
            Please enter a valid message.
          </Form.Control.Feedback>
        </Form.Group>

        <div className="button-div">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </>
  );
}
