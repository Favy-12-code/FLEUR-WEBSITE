import React from "react";
import "../styles/contact.css"; // import your CSS file

function ContactPage() {
  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <p>We'd love to hear from you.</p>

      <section id="contact-form-section" className="contact-grid">
        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent (demo)");
          }}
          className="contact-form"
        >
          <label>Name</label>
          <input required type="text" />

          <label>Email</label>
          <input required type="email" />

          <label>Message</label>
          <textarea required />

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Visit Us</h3>
          <p>Address, opening hours, phone</p>

          <div className="contact-section">
            <h4>Orders</h4>
            <p>Order help & tracking</p>
          </div>

          <div className="contact-section">
            <h4>Support</h4>
            <p>support@fleur.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
