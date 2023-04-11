import React from "react";
import ContactInfoItem from "./ContactInfoItem";
import ContactForm from "./ContactForm";
function ContactSection() {
  return (
    <div className="container">
      <div className="contactSection__wrapper">
        <div className="left">
          {" "}
          <ContactInfoItem />
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
