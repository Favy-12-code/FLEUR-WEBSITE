import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import '../styles/style.css'

const postUrls = [
  'https://www.instagram.com/p/DR6pkfCDAWD/',
  'https://www.instagram.com/p/DR6n6ApjAU1/',
  'https://www.instagram.com/p/DR6teU_jD76/',
  'https://www.instagram.com/p/DSAyu5VDGy3/',
];

const PopularProductsHome = () => {
  return (
    <section className="popular-section">
      <div className="popular-header">
        <p>DRIED FLOWER COLLECTION</p>
        <h2>See What’s Popular</h2>
      </div>
      <div className="posts-grid">
        {postUrls.map((url, idx) => (
          <div key={idx} className="post-item">
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