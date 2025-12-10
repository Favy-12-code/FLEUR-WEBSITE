import React, { useState, useEffect, useRef } from 'react';
import '../styles/style.css';
import { Link } from 'react-router-dom';
import gift1 from '../assets/images/giftsImg/gift1.jpg';
import gift2 from '../assets/images/giftsImg/gift2.jpg';
import gift3 from '../assets/images/giftsImg/gift4.jpg';
import gift4 from '../assets/images/giftsImg/gift4.jpg';
import gift5 from '../assets/images/giftsImg/gift5.jpg';

const GiftHome = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    gift1,
    gift2,
    gift3,
    gift4,
    gift5
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
  
  return (
    <section ref={sectionRef} className= {`gift-section fade-left ${isVisible ? "visible" : ""}`}>
      <div className={`gift-content slide-up ${isVisible ? "visible" : ""}`}>
        <p className='giftSubheading'>REMEMBER YOUR LOVED ONES</p>
        <h1>Gifts Ideas That Last Longer</h1>
        <p className='giftDescription'>
          Who doesn’t love gifts that stay beautiful for a long time? Unlike fresh flowers that fade quickly, our dried arrangements, pampas, and handcrafted décor maintain their elegance season after season. Each piece is thoughtfully designed to preserve its beauty, turning your gesture into a lasting part of their home. At Fleur Studio, durability and artistry come together to create gifts that remain meaningful long after the moment has passed.
        </p>
          <Link to="/collections#gifts-collection" className='giftButton'>
            LET'S GO
          </Link>
      </div>
      <div className={`gift-image-container slide-right ${isVisible ? "visible" : ""}`}>
        <img src={images[currentImage]} alt="Gift" className="gift-image" />
      </div>
    </section>
  )
}

export default GiftHome;