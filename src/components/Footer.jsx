import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer-main">
      {/* Top footer section */}
      <div className="footer-top">
        <div className="footer-container">
          {/* Brand + subscription */}
          <div className="footer-brand">
            <div className="footer-logo">FLEUR</div>
            <p className="footer-desc">
              Custom dried flower arrangements that last.
            </p>
            <form onSubmit={handleSubscribe} className="footer-subscribe">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer-links">
            <h4>ABOUT US</h4>
            <ul>
              <li><Link to="/about#work">Work With Us</Link></li>
              <li><Link to="/about#services">Our Services</Link></li>
              <li><Link to="/about#privacy">Privacy & Policy</Link></li>
              <li><Link to="/about#terms">Terms & Conditions</Link></li>
              <li><Link to="/about#press">Press Enquiries</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>COLLECTIONS</h4>
            <ul>
              <li><Link to="/collections#seasonal">Shop</Link></li>
              <li><Link to="/collections#pampas">Dried Pampas</Link></li>
              <li><Link to="/collections#custom">Custom Bouquets</Link></li>
              <li><Link to="/collections#lavender">Lavender Line</Link></li>
              <li><Link to="/collections#seasonal">Seasonal Mix</Link></li>
              
            </ul>
          </div>

           <div className="footer-links">
            <h4>CONTACT US</h4>
            <ul>
              <li><Link to="/contact#payment">ORDERING & PAYMENT</Link></li>
              <li><Link to="/contact#shipping">SHIPPING</Link></li>
              <li><Link to="/contact#return">RETURN</Link></li>
              <li><Link to="/contact#faq">FAQ</Link></li>
              <li><Link to="/contact#guide">CARE GUIDE</Link></li>
              
            </ul>
          </div>

          <div className="footer-links">
            <ul>
              <li>
                <a 
                  href="tel:+1234567890" 
                  onClick={(e) => {
                    if(!/Mobi|Android/i.test(navigator.userAgent)) {
                      e.preventDefault();
                      alert('Call us at +1234567890');
                    }
                  }}
                >
                  +1 234 567 890
                </a>
              </li>

              <li>
                <a href="mailto:HELLO@fleur.com">HELLO@fleur.com</a>
              </li>

              <li>
                <a href="/store-locator" target="_blank" rel="noopener noreferrer">
                  Find a Store
                </a>
              </li>
            </ul>  
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <div>© FLEUR 2025. All rights reserved.</div>
          <div>
            <span className="footer-social-bottom">
              <a href="https://www.instagram.com" aria-label="instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.x.com" aria-label="twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://www.facebook.com" aria-label="facebook"><i className="fab fa-facebook-f"></i></a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
