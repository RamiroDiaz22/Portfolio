import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k36vjih",
        "template_s3jy7ar",
        form.current,
        "24NMMI_Gt5lcFqTfT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+54 9 11 69977456</h5>
            <a href="https://wa.me/541169977456">Send a message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail contact__option-icon />
            <h4>Email</h4>
            <h5>bravoramirodiaz@gmail.com</h5>
            <a href="mailto:bravoramirodiaz@gmail.com">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your ful Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
