import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "../styles/ContactPage.css";

export default function Contactpage() {
  const images = [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    "https://images.unsplash.com/photo-1526045478516-99145907023c",
    "https://images.unsplash.com/photo-1509043759401-136742328bb3",
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  ];

  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function generateInquiryID() {
    return "FS-" + Math.floor(Math.random() * 900000 + 100000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const inquiryID = generateInquiryID();
    const timestamp = new Date().toLocaleString();

    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      subject: formData.subject,
      message: formData.message,
      inquiry_id: inquiryID,
      timestamp: timestamp,
    };

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_OWNER_TEMPLATE_ID",
      templateParams,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => console.log("Shop email sent!"),
      (error) => console.log("Error sending shop email:", error)
    );

    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_CUSTOMER_TEMPLATE_ID",
      templateParams,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => console.log("Customer auto-reply sent!"),
      (error) => console.log("Error sending auto-reply:", error)
    );

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-wrapper">
      <div className="header-section">
        <h1 className="brand-name">Fleur Studio</h1>
        <div className="contact-paragraph">
          <p className="tagline">Send an Inquiry </p>
          <p className="description">
            Whether you're looking for dried pampas, luxury bouquets, preserved florals, or custom home décor pieces, our team is here to bring your floral vision to life.
          </p>
        </div>
      </div>

      <div className="contact-contents">
        <div className="image-slider">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Fleur Studio"
              className={`fade-image ${i === index ? "active" : ""}`}
            />
          ))}
        </div> 

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-formContent">
            <p className="form-pretitle">GET IN TOUCH</p>
            <h2 className="form-title">We'd love to hear from you!</h2>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your Name:" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Your Email:" value={formData.email} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Subject:" value={formData.subject} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" placeholder="Enter a message..."  value={formData.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          Your message has been sent successfully! 🌸
        </div>
      )}
    </div>
    
  );
}
