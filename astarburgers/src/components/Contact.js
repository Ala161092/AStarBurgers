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
      const serviceId = "service_kkkrdwh";
      const templateId = "template_s42s6xn";
      const userId = "user_h7GBry0USa8N4h5owmvzo";
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
          <h2>Get in touch</h2>
          <p className="left-para">
          Contact our team for your personalised catering quote.
          <br/>
          No event is too big or too small.
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
          <div className="number">
          <ion-icon name="phone-portrait-outline" />
          <br/>
            <a href="tel:02078560391">02078560391</a>

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
