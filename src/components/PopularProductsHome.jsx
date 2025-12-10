import React, {useRef, useState, useEffect} from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import '../styles/style.css'

const postUrls = [
  'https://www.instagram.com/p/DR6pkfCDAWD/',
  'https://www.instagram.com/p/DR6n6ApjAU1/',
  'https://www.instagram.com/p/DR6teU_jD76/',
  'https://www.instagram.com/p/DSAyu5VDGy3/',
];

const PopularProductsHome = () => {
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
    className= {`popular-section productFade ${isVisible ? "visible" : ""}`}>
      <div className="popular-header">
        <p>DRIED FLOWER COLLECTION</p>
        <h2>See What’s Popular</h2>
      </div>
      <div className="posts-grid">
        {postUrls.map((url, idx) => (
          <div key={idx} className={`post-item productUp ${isVisible ? "visible" : ""}`}>
            <div className='postEmbed-wrapper'>
              <InstagramEmbed url={url} width={260.5} captioned />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PopularProductsHome