import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Have a project in mind? We’d love to hear from you.
        </p>
        <form
          action="https://formspree.io/f/mgoovbry" // Replace with your Formspree form ID
          method="POST"
          className="contact-form"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Contact Form Message – NovaDigital"
          />
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              required
              className="form-input"
            />
            <label htmlFor="name" className="form-label">Full Name</label>
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
              className="form-input"
            />
            <label htmlFor="email" className="form-label">Email Address</label>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company Name (Optional)"
              className="form-input"
            />
            <label htmlFor="company" className="form-label">Company Name</label>
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Mobile Number"
              required
              className="form-input"
            />
            <label htmlFor="mobile" className="form-label">Mobile Number</label>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              required
              className="form-textarea"
            ></textarea>
            <label htmlFor="message" className="form-label">Your Message</label>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
