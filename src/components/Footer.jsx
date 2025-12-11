import React, { useState , useRef, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
   const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

 const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:fleurstudio.01.0@gmail.com?subject=Newsletter Subscription&body=Please subscribe me with this email: ${email}`;
      setEmail(""); 
    }
 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } 
    );

    if (footerRef.current) observer.observe(footerRef.current);
  }, []);

  return (
    <footer 
    ref={footerRef}
    className={`footer-main footerFade ${isVisible ? "visible" : ""}`}>
      <div className="footer-top">
        <div 
          ref={footerRef}
          className={`footer-container footer-Right ${isVisible ? "visible" : ""}`}>
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
              <li><Link to="/about#work">Our Story</Link></li>
              <li><Link to="/about#services">Mission</Link></li>
              <li><Link to="/about#privacy">Our Team</Link></li>
              <li><Link to="/about#terms">Our Services</Link></li>
              <li><Link to="/about#press">Press Enquiries</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>COLLECTIONS</h4>
            <ul>
              <li><Link to="/collections#seasonal">New Arrivals</Link></li>
              <li><Link to="/collections#pampas">Popular Items</Link></li>
              <li><Link to="/collections#custom">Gift Ideas</Link></li>
              <li><Link to="/collections#lavender">Luxury Bouquets</Link></li>
              <li><Link to="/collections#seasonal">Home Decor</Link></li>
              
            </ul>
          </div>

           <div className="footer-links">
            <h4>CONTACT US</h4>
            <ul>
              <li><Link to="/contact#payment">Get In touch</Link></li>
              <li><Link to="/contact#shipping">Visit Us</Link></li>
              <li><Link to="/contact#return">Customer support</Link></li>
              <li><Link to="/contact#faq">Wholesale & collab</Link></li>
              
            </ul>
          </div>

          <div className="footer-links">
            <ul>
              <li>
                <a
                  href="https://wa.me/2348087033769?text=Hello%20Fleur%20Studio,%20I%20would%20like%20to%20inquire%20about%20your%20flowers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="tel:+234913438458"
                  onClick={(e) => {
                    if (!/Mobi|Android/i.test(navigator.userAgent)) {
                      e.preventDefault();
                      navigator.clipboard.writeText("+234 913 438 458");
                      alert("Phone number copied: +234 913 438 458");
                    }
                  }}
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  +234 913 438 458
                </a>
              </li>

              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=fleurstudio.01.0@gmail.com&su=Hello%20Fleur&body=Hello%20Fleur%20Studio,%20I%20would%20like%20more%20information%20about%20your%20flower%20arrangements%20and%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fleurstudio.01.0@gmail.com
                </a>
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

      <div 
        ref={footerRef}
        className={`footer-bottom footer-up ${isVisible ? "visible" : ""}`}>
        <div className="footer-container">
          <div>© FLEUR 2025. All rights reserved.</div>
          <div>
            <span className="footer-social-bottom">
              <a href="https://www.instagram.com/fleu_rstudio?igsh=MXJhZmMxOWJyeTNhcg==" aria-label="instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://x.com/Fleurstudio0101?t=8a818QdFtIuDoveLyChKlA&s=09" aria-label="twitter"><i className="fab fa-twitter"></i></a>
              <a href="https://www.facebook.com/share/1Abn7C8MS7/" aria-label="facebook"><i className="fab fa-facebook-f"></i></a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
