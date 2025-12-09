import React, { useState, useEffect, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import s1a from "../assets/images/s1a.jpg";
import s1b from "../assets/images/s1b.jpg";
import s1c from "../assets/images/s1c.jpg";

import s2a from "../assets/images/s2a.jpg";
import s2b from "../assets/images/s2b.jpg";
import s2c from "../assets/images/s2c.jpg";

import s3a from "../assets/images/s3a.jpg";
import s3b from "../assets/images/s3b.jpg";
import s3c from "../assets/images/s3c.jpg";
import '../styles/style.css'

const cardSets = [
  [
    { title: "Sculpted Bloom Vase", 
      desc: "A modern sculpted vase arranged with premium blooms.", 
      longDesc: 'Each arrangement features hand-selected blooms, curated color palettes, and sculptural lines, creating a piece that elevates any space with luxury and style.Ideal for homes, offices, studios, or gifting, it blends modern floral artistry with timeless design.',
      Price: "Price: $200",
      img: s1a },
    { title: "Elegant Centerpiece", 
      desc: "Statement centerpiece for dining or events..", 
      longDesc: "Handcrafted centerpiece designed to elevate dining tables, living spaces, or special events. This arrangement combines premium blooms, thoughtful color palettes, and sculptural artistry to create a statement piece that draws attention and adds a touch of refined luxury. Perfect for entertaining or gifting.",
      Price: "Price: $120",
      img: s1b },
    { title: "Cultural Earthy Vase", 
      desc: "Boho earthy dried flowers with cultural flair.",
      longDesc: "Inspired by traditional motifs, this dried flower arrangement combines earthy textures and warm tones for a boho-chic statement. Perfect for living rooms, studios, or creative spaces.",
      Price: "Price: $120",
      img: s1c },
  ],
  [
    { title: "Dried Pampas", 
      desc: "Soft earthy pampas designs.",
      longDesc: "Airy and elegant, this pampas grass arrangement brings soft, neutral textures to any space. Perfect for homes, studios, or events, it creates a sophisticated, organic vibe while maintaining a sense of modern luxury.",
      Price: "Price: $90",
      img: s2a },
    { title: "Floral Decor", 
      desc: "Luxury floral decor for stylish interiors.", 
      longDesc: "Transform living spaces with a luxurious floral arrangement that combines premium blooms, balanced composition, and sophisticated design. Ideal for adding soft luxury to interiors, enhancing your home’s ambiance, and leaving a lasting impression on guests.",
      Price: "Price: $130",
      img: s2b },
    { title: "Minimalist Floral", 
      desc: "Minimalist floral arrangement for modern spaces.", 
      longDesc: "A sleek, contemporary vase featuring carefully curated blooms in soft, complementary tones. Its clean, minimalist design enhances modern interiors, offices, or studios while maintaining a sense of sophistication and style. A subtle yet luxurious addition to any space.",
      Price: "Price: $180",
      img: s2c },
  ],
  [
    { title: "Executive Floral", 
      desc: "Luxury floral decor for offices and businesses.",
      longDesc: "Premium floral arrangements designed to enhance offices, reception areas, and corporate spaces. These pieces create a professional yet inviting atmosphere, elevating your brand image while adding style and freshness to your workspace.",
      Price: 'Price: $100',
      img: s3a },
    { title: "Premade Bouquets", 
      desc: "Elegant bouquet for gifting and celebrations.", 
      longDesc: "Thoughtfully arranged bouquets perfect for birthdays, anniversaries, or special moments. Each arrangement conveys elegance and emotion, making your gift unforgettable. Designed to delight the recipient and create a lasting memory.",
      Price: 'Price: $70',
      img: s3b
    },
    { title: "Event Floral", 
      desc: "Custom florals for weddings and events.",
      longDesc: "Custom floral designs for weddings, galas, and special events. From aisle décor to centerpieces, each arrangement is created to complement your theme and elevate the atmosphere. Combining elegance, creativity, and premium blooms, these pieces leave a lasting impression on guests.",
      Price: 'Price: Starting at $300',
      img: s3c 
    },
  ]
];

const ServiceCard = () => {
  const [setIndex, setSetIndex] = useState(0);
  const [modalItem, setModalItem] = useState(null);
  const timerRef = useRef(null);
  const userInteracting = useRef(false);
  const resumeTimeout = useRef(null);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);
  const navigate = useNavigate();


  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setSetIndex((prev) => (prev + 1) % cardSets.length);
    }, 5000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  useEffect(() => {
    startTimer();
    return () => {
      stopTimer();
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

   const handleArrowClick = (direction) => {
    stopTimer();
    userInteracting.current = true;

    if (direction === "left") {
      setSetIndex((prev) => (prev - 1 + cardSets.length) % cardSets.length);
    } else {
      setSetIndex((prev) => (prev + 1) % cardSets.length);
    }

    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      userInteracting.current = false;
      startTimer();
    }, 5000);
  };

  const handleCardClick = (card) => {
    stopTimer();      
    setModalItem(card);
  };

  const handleCloseModal = () => {
    setModalItem(null);
    startTimer();     
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth / cardSets.length;
    const idx = Math.round(container.scrollLeft / scrollWidth);
    setSetIndex(idx);

    stopTimer();
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      startTimer();
    }, 3000); 
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

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  useEffect(() => {
    if (isVisible) {
      cardSets[setIndex].forEach((_, idx) => {
        setTimeout(() => {
          setCardsVisible((prev) => [...prev, idx]);
        }, idx * 200); 
      });
    }
  }, [isVisible, setIndex]);

  setTimeout(() => {
    const modalBox = document.querySelector(".modal-box");
    if (modalBox) {
      modalBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, 50)

  return (
    <section ref={sectionRef} className= {`services-section fade-wrapper ${isVisible ? "visible" : ""}`}>
      <div className="services-header ">
        <p>THIS IS WHAT WE DO</p>
        <h2 className="services-title">Our Services</h2>
      </div>

      <div className="services-container ">

        <div className="serviceArrow left-arrow" onClick={() => handleArrowClick("left")}>
          <i className="fas fa-angle-left"></i>
        </div>

        {cardSets[setIndex].map((card, index) => (
          <div
            key={index}
            className={`service-card ${cardsVisible.includes(index) ? "visible" : ""}`}
            onClick={() => handleCardClick(card) }
          >
            <div className="imgContainer">
              <img src={card.img} className="service-img" />
            </div>

            <div className="servicesContent ">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <Link className="read-more-btn">Read More</Link>
            </div>
          </div>
        ))}

        <div className="serviceArrow right-arrow" onClick={() => handleArrowClick("right")}>
          <i className="fas fa-angle-right"></i>
        </div>
      </div>

      <div className="dots-container">
        {cardSets.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === setIndex ? "active" : ""}`}
            onClick={() => {
              stopTimer();
              setSetIndex(idx);
              if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
              resumeTimeout.current = setTimeout(() => startTimer(), 5000);
            }}
          ></span>
        ))}
      </div>

      {/* Modal */}
      {modalItem && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalItem(null)} className="modalClose-btn">
              <i className="fas fa-times"></i>
            </button>
            <img src={modalItem.img} alt="" />
            <div className="rightModalItem">
              <h3 className="modal-title">{modalItem.title}</h3>
              <p className="modal-short">{modalItem.desc}</p>
              <p className="modal-long">{modalItem.longDesc}</p>
              <p className="modal-price">{modalItem.Price}</p>
              <button 
              className="modal-cta"
              onClick={() => {
                  navigate("/contact");
                  setTimeout(() => {
                    const el = document.getElementById("Contactus");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 80);
                }}
              >Enquire</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceCard;
