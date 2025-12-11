import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import '../styles/style.css'

const ContactHome = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section
    ref={sectionRef}
    className= {`Contacthome contactFade ${isVisible ? "visible" : ""}`}>
      <div className='contact-semiCircle'>
        <div className={`contact-content ${isVisible ? "visible" : ""}`}>
          <h1>Talk To Our Staff </h1>
          <p>Trouble choosing your bouquet? Talk to our friendly customer service who can help you
            along your journey to finding your dream bouquet. We are a long line of passionate florists and believe that everyone has their right bouquet.
          </p>
          <Link to="/contact" className="contactButton">LET'S TALK</Link>
        </div>
      </div>
    </section>
  )
}

export default ContactHome;