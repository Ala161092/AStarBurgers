import React from "react";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [successfulMessage, setsuccessfulMessage] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (name && email && message) {
      // send(
      //     'service_09hnpa9',
      //     'template_0a4i31f',
      //     toSend,
      //     'user_sBqMaHIyQs01RJo9FTsWG'
      // )
      // .then((response) => {
      //     setsuccessfulMessage('Thank you, email has been sent. We will contact you shortly')
      //     console.log('Success, email has been sent', response.status, response.text)
      // })
      // .catch((error) => {
      //     setsuccessfulMessage('Error, check all details have been written correctly')
      //     console.log('Error, check all details have been written correctly', error)
      // })
      const serviceId = "service_09hnpa9";
      const templateId = "template_0a4i31f";
      const userId = "user_sBqMaHIyQs01RJo9FTsWG";
      const templateParams = {
        name,
        email,
        message,
      };
      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => console.log(response))
        .then((error) => console.log(error));
      setName("");
      setEmail("");
      setMessage("");
      setsuccessfulMessage(true);
    } else {
      alert("please fill in all fields");
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="form-wrapper" id="contact">
        <form onSubmit={onSubmit}>
          <h2>Contact Us</h2>
          <p className="left-para">
            Contact our team if you require any further information regarding
            events that we can cater for and any personalized quotes.
          </p>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Enter a valid email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            type="text"
            name="message"
            placeholder="Enter your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className="submit-btn" type="submit">
            Send Message
          </button>
          <span className={successfulMessage ? "visible" : "hidden"}>
            {" "}
            Thank you for your message, we will be in touch shortly.{" "}
          </span>
        </form>
        <div className="contact-details">
          <div>
            <ion-icon name="phone-portrait-outline" />
            <p>+44 02078560391</p>
          </div>
          <div>
            <ion-icon name="mail-outline" />
            <p>info@astarburgers.com</p>
          </div>
          <div>
            <a href="https://www.instagram.com/astarburgers_">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <p>instagram.com/astarburgers_</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
