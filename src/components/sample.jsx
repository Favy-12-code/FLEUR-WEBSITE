// HeroSection.jsx
import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const heroSlides = [
  { 
    id: 1, 
    title: "Luxury Collection 1", 
    subtitle: "Discover elegance in every detail", 
    img: "/images/hero1.jpg" 
  },
  { 
    id: 2, 
    title: "Luxury Collection 2", 
    subtitle: "Crafted for your style", 
    img: "/images/hero2.jpg" 
  },
  { 
    id: 3, 
    title: "Luxury Collection 3", 
    subtitle: "Where beauty meets design", 
    img: "/images/hero3.jpg" 
  },
  { 
    id: 4, 
    title: "Luxury Collection 4", 
    subtitle: "Elevate your living space", 
    img: "/images/hero4.jpg" 
  },
  { 
    id: 5, 
    title: "Luxury Collection 5", 
    subtitle: "Timeless pieces for you", 
    img: "/images/hero5.jpg" 
  },
  { 
    id: 6, 
    title: "Luxury Collection 6", 
    subtitle: "Exclusive designs", 
    img: "/images/hero6.jpg" 
  },
  { 
    id: 7, 
    title: "Luxury Collection 7", 
    subtitle: "Artistry in every piece", 
    img: "/images/hero7.jpg" 
  },
  { 
    id: 8, 
    title: "Luxury Collection 8", 
    subtitle: "Designed to impress", 
    img: "/images/hero8.jpg" 
  },
  { 
    id: 9, 
    title: "Luxury Collection 9", 
    subtitle: "For the modern connoisseur", 
    img: "/images/hero9.jpg" 
  },
  { 
    id: 10, 
    title: "Luxury Collection 10", 
    subtitle: "Where luxury meets lifestyle", 
    img: "/images/hero10.jpg" 
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000); // change slide every 4s

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div 
      className="hero-section" 
      style={{ backgroundImage: `url(${slide.img})` }}
    >
      <div className="hero-content">
        <h1>{slide.title}</h1>
        <p>{slide.subtitle}</p>
      </div>
    </div>
  );
}
