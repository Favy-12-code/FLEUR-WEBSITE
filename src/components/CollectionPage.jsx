import React, {useState, useRef, useEffect} from 'react'
import '../styles/CollectionPage.css';
import heroImage1 from "../assets/collectionsImg/hero-Img 1.jpg";
import heroImage2 from "../assets/collectionsImg/hero-Img 2.jpg";
import heroImage3 from "../assets/collectionsImg/hero-Img 3.jpg";
import heroImage4 from "../assets/collectionsImg/hero-Img 4.jpg";
import heroImage5 from "../assets/collectionsImg/hero-Img 5.jpg";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import '../styles/CollectionPage.css';
import { useTexture } from "@react-three/drei";



const heroImages = [
  {
    id: 1,
    type: "collection",
    title: "Gift Ideas for Every Occasion",
    subtitle: ": Thoughtful bouquets and boxes for friends, family, and loved ones",
    discount: "Up to 50% OFF",
    img: heroImage1,
  },
  {
    id: 2,
    type: "collection",
    title: "Seasonal Collection ",
    subtitle: "Curated floral designs for every season",
    discount: "Up to 70% OFF",
    img: heroImage2,
  },
  {
    id: 3,
    type: "collection",
    title: "Luxury Bouquets for Special Moments",
    subtitle: "Handcrafted elegance for weddings and celebrations.",
    discount: "Up to 60% OFF",
    img: heroImage3,
  },
  {
    id: 4,
    type: "collection",
    title: "Rarest Collection",
    subtitle: "Unique floral arrangements you won’t find elsewhere",
    discount: "Up to 55% OFF",
    img: heroImage4,
  },
  {
    id: 5,
    type: "collection",
    title: "New Arrivals – Fresh Designs",
    subtitle: "Explore the latest floral creations for your home.",
    discount: "Up to 75% OFF",
    img: heroImage5,
  },
  {
    id: 6,
    type: "product",
    title: "Wedding & Event Flowers",
    subtitle: "Elegant floral designs for your unforgettable moments.",
    discount: "20% OFF",
    img: heroImage1,
  },
  {
    id: 7,
    type: "product",
    title: "Dried & Preserved Flowers",
    subtitle: "Long-lasting beauty to enjoy all year round.",
    discount: "15% OFF",
    img: heroImage2,
  },
  {
    id: 8,
    type: "product",
    title: "Home Decor Florals",
    subtitle: "Bring life and style to your interiors with floral accents",
    discount: "25% OFF",
    img: heroImage3,
  },
  {
    id: 9,
    type: "product",
    title: "Designer Collections",
     subtitle: "Artful floral arrangements crafted for style enthusiasts",
    discount: "30% OFF",
    img: heroImage4,
  },
  {
    id: 10,
    type: "product",
    title: "Boho Floral Arrangements",
    subtitle: "Unique boho-inspired blooms to style your space.",
    discount: "50% OFF",
    img: heroImage5,
  },
];

const BackgroundSlide = ({ texture, index, currentIndex }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      // Smooth zoom and subtle parallax effect
      meshRef.current.scale.x = THREE.MathUtils.lerp(
        meshRef.current.scale.x,
        currentIndex === index ? 1.05 : 1,
        0.05
      );
      meshRef.current.scale.y = THREE.MathUtils.lerp(
        meshRef.current.scale.y,
        currentIndex === index ? 1.05 : 1,
        0.05
      );

      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        currentIndex === index ? 0 : 0,
        0.05
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[16, 9]} />
      <meshStandardMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

const CollectionPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const textures = useTexture(heroImages.map((img) => img.img));

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalRef.current);
  };

  const handleArrow = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    } else {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }
    clearInterval(intervalRef.current);
  };

  return (
    <div className="hero-container">
      {/* Left content */}
      <div className="hero-left">
        <h1 className="hero-title">{heroImages[currentIndex].title}</h1>
        <p className="hero-subtitle">{heroImages[currentIndex].subtitle}</p>
        <span className="hero-discount">{heroImages[currentIndex].discount}</span>
        <a href="https://your-shopify-link.com" className="hero-shop-btn">
          Shop Now
        </a>
      </div>

      {/* Right 3D Background */}
      <div className="hero-right">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          {textures.map((texture, i) => (
            <BackgroundSlide
              key={i}
              texture={texture}
              index={i}
              currentIndex={currentIndex}
            />
          ))}
        </Canvas>

        {/* Dots */}
        <div className="hero-dots">
          {heroImages.map((_, i) => (
            <div
              key={i}
              className={`hero-dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </div>

        {/* Arrows */}
        <button className="hero-arrow left" onClick={() => handleArrow("left")}>
          &#8592;
        </button>
        <button className="hero-arrow right" onClick={() => handleArrow("right")}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default CollectionPage