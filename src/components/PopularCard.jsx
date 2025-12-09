import { useState } from "react";
import "../styles/style.css"

export default function PopularCard({ id, initialLikes = 0, likesKey }) {
  const [likes, setLikes] = useState(() => {
    return parseInt(localStorage.getItem(likesKey) || initialLikes);
  });

  const [liked, setLiked] = useState(() => localStorage.getItem(likesKey + '_liked') === 'true');

  function toggleLike() {
    const newLiked = !liked;
    setLiked(newLiked);

    let newLikes = likes + (newLiked ? 1 : -1);
    if (newLikes < 0) newLikes = 0;

    setLikes(newLikes);
    localStorage.setItem(likesKey, String(newLikes));
    localStorage.setItem(likesKey + '_liked', String(newLiked));
  }

  return (
    <div className="card">
      <div
        className="image"
        style={{ backgroundImage: "url('/mnt/data/Web Design.jpg')" }}
      />
      <button
        className={`like-btn ${liked ? 'liked' : ''}`}
        onClick={toggleLike}
      >
        ❤️ {likes}
      </button>
    </div>
  );
}
