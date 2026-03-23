import { X, Star, ShoppingCart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import './ProductModal.css';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { addToCart } = useShop();
  if (!product) return null;

  return (
    <>
      <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`modal-content ${isOpen ? 'open' : ''}`}>
        <button className="btn-icon close-modal" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-grid">
          <div className="modal-image-container">
            <img src={product.image} alt={product.name} className="modal-image" />
          </div>
          
          <div className="modal-details">
            <span className="product-category">{product.category}</span>
            <h2 className="modal-title">{product.name}</h2>
            
            <div className="modal-rating">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(product.rating) ? 'star-filled' : 'star-empty'} 
                  />
                ))}
              </div>
              <span className="review-count">{product.reviews} Reviews</span>
            </div>
            
            <div className="modal-price">₹{(product.price * 83).toLocaleString('en-IN')}</div>
            
            <p className="modal-desc">
              Experience the pinnacle of design and performance with the {product.name}. 
              Crafted with premium materials and engineered for those who demand the best.
            </p>
            
            <div className="modal-actions">
              <button 
                className="btn btn-primary btn-lg w-full"
                onClick={() => { addToCart(product); onClose(); }}
              >
                <ShoppingCart size={20} /> Add to Cart
              </button>
            </div>
            
            <div className="modal-features">
              <div className="feature">
                <ShieldCheck size={20} className="feature-icon" />
                <span>2 Year Warranty</span>
              </div>
              <div className="feature">
                <Truck size={20} className="feature-icon" />
                <span>Free Express Delivery</span>
              </div>
              <div className="feature">
                <RotateCcw size={20} className="feature-icon" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
