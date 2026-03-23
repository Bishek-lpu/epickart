import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useShop();
  return (
    <div className="product-card card">
      <div className="product-image-container">
        {product.badge && <span className={`product-badge ${product.badge.toLowerCase()}`}>{product.badge}</span>}
        <button className="favorite-btn" aria-label="Add to wishlist">
          <Heart size={20} />
        </button>
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="product-overlay">
          <button 
            className="btn btn-primary add-to-cart-btn" 
            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
          >
            <ShoppingCart size={18} /> Add to Cart
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'} 
              />
            ))}
          </div>
          <span className="review-count">({product.reviews})</span>
        </div>
        
        <div className="product-price">
          ₹{(product.price * 83).toLocaleString('en-IN')}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
