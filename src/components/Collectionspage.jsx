import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/collections.css"; 

function CollectionsPage() {
  const [modalProduct, setModalProduct] = useState(null);
  const [count, setCount] = useState(1);

  const products = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `Dried Bouquet ${i + 1}`,
    price: 49 + i,
    img: "/mnt/data/Web Design.jpg",
  }));

  function openProduct(p) {
    setModalProduct(p);
    setCount(1);
  }

  function closeModal() {
    setModalProduct(null);
  }

  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("fleur_cart") || "[]");
    cart.push({ id: product.id, title: product.title, price: product.price, qty: count });
    localStorage.setItem("fleur_cart", JSON.stringify(cart));
    alert("Added to cart (demo)");
    closeModal();
  }

  return (
    <div className="collections-page">
      <h1 className="page-title">Collections</h1>
      <p className="page-subtitle">Explore our full collections of dried florals.</p>

      <Section id="pampas" title="Dried Pampas Collection" products={products.slice(0, 8)} onQuickView={openProduct} />
      <Section id="custom" title="Custom Bouquets" products={products.slice(2, 10)} onQuickView={openProduct} />
      <Section id="lavender" title="Lavender Line" products={products.slice(3, 11)} onQuickView={openProduct} />
      <Section id="seasonal" title="Seasonal Mix" products={products} onQuickView={openProduct} />
      <Section id="popular-section" title="Popular Products" products={products.slice(0, 8)} onQuickView={openProduct} showLikes />

      {modalProduct && (
        <Modal product={modalProduct} count={count} setCount={setCount} onAddToCart={addToCart} onClose={closeModal} />
      )}
    </div>
  );
}

// Section component
function Section({ id, title, products, onQuickView, showLikes }) {
  return (
    <section id={id} className="collection-section">
      <h3 className="section-title">{title}</h3>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id + id} product={p} onQuickView={() => onQuickView(p)} showLikes={showLikes} />
        ))}
      </div>
    </section>
  );
}

// ProductCard component
function ProductCard({ product, onQuickView, showLikes }) {
  const [likes, setLikes] = useState(parseInt(localStorage.getItem(product.id + "_likes") || "0"));
  const [liked, setLiked] = useState(localStorage.getItem(product.id + "_liked") === "true");

  function toggleLike() {
    const newLiked = !liked;
    setLiked(newLiked);
    let newLikes = likes + (newLiked ? 1 : -1);
    if (newLikes < 0) newLikes = 0;
    setLikes(newLikes);
    localStorage.setItem(product.id + "_likes", newLikes);
    localStorage.setItem(product.id + "_liked", newLiked);
  }

  return (
    <div className="product-card">
      <div className="product-image" style={{ backgroundImage: `url('${product.img}')` }} onClick={onQuickView}></div>
      <h4 className="product-title">{product.title}</h4>
      <p className="product-price">${product.price}</p>
      {showLikes && (
        <button className={`like-btn ${liked ? "liked" : ""}`} onClick={toggleLike}>
          ❤️ {likes}
        </button>
      )}
      <button className="quick-view-btn" onClick={onQuickView}>Quick View</button>
    </div>
  );
}

// Modal component
function Modal({ product, count, setCount, onAddToCart, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-left" style={{ backgroundImage: `url('${product.img}')` }}></div>
        <div className="modal-right">
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <p className="description">Beautiful dried bouquet — demo description.</p>
          <div className="quantity-selector">
            <button onClick={() => setCount(c => Math.max(1, c - 1))}>-</button>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>+</button>
          </div>
          <div className="modal-actions">
            <button onClick={() => onAddToCart(product)}>Add to cart</button>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionsPage;
