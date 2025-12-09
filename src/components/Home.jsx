import { useNavigate, Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import "../styles/style.css";
import heroImage from '../assets/images/bgPic.jpg'
import GiftHome from "./GiftHome";
import PopularProductsHome from "./PopularProductsHome";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <section className="hero-section" id="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="hero-color-overlay" />

        <div className="hero-semicircle-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Custom Dried Flower Bouquets</h1>
            <p className="hero-subtitle">Free delivery on orders over $79</p>

            <div className="hero-buttons">
              <button
                className="btn-dark"
                onClick={() => {
                  navigate("/collections");
                  setTimeout(() => {
                    const el = document.getElementById("popular");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 80);
                }}
              >
                SHOP
              </button>

            </div>
          </div>
        </div>
        
        <div className="hero-footer-wrapper">
          <div className="hero-social">
            <a href="https://www.instagram.com/fleu_rstudio?igsh=MXJhZmMxOWJyeTNhcg=="><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a
              href="tel:+123456789"
              onClick={(e) => {
                if (!/Mobi|Android/i.test(navigator.userAgent)) {
                  e.preventDefault();
                  alert("Call us at +123456789");
                }
              }}
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>

          <Link to="/collections" className="hero-teaser">
            DRIED PAMPAS COLLECTION <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

       <ServiceCard />
       <GiftHome />
       <PopularProductsHome />


      {/* STAFF CTA */}
      <section className="staff-section" id="contact">
        <div className="staff-box">
          <h3 className="section-title">Talk To Our Staff</h3>
          <p className="section-sub">
            Need guidance choosing your bouquet? Our team can help.
          </p>
          <div className="mt-4">
            <Link to="/contact#contact-form" className="btn-dark">
              Let's Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
