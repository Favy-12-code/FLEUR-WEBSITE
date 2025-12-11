import { useNavigate, Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import "../styles/style.css";
import heroImage from '../assets/images/bgPic.jpg'
import GiftHome from "./GiftHome";
import PopularProductsHome from "./PopularProductsHome";
import ContactHome from "./ContactHome";

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
            <a href="https://x.com/Fleurstudio0101?t=8a818QdFtIuDoveLyChKlA&s=09"><i className="fab fa-twitter"></i></a>
            <a href="https://www.facebook.com/share/1Abn7C8MS7/"><i className="fab fa-facebook-f"></i></a>
            <a
              href="tel:+234913438458"
              onClick={(e) => {
                if (!/Mobi|Android/i.test(navigator.userAgent)) {
                  e.preventDefault();
                  navigator.clipboard.writeText("+234 913 438 458");
                  alert("Phone number copied: +234 913 438 458");
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
       <ContactHome />


     
    </div>
  );
}
