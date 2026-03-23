import { X, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './CartSidebar.css';

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, cartSubtotal, updateQuantity, removeFromCart } = useShop();

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="btn-icon close-cart" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h4 className="cart-item-name">{item.name}</h4>
                <div className="cart-item-price">₹{(item.price * 83).toLocaleString('en-IN')}</div>
                
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button className="btn-icon qty-btn" onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                    <span>{item.quantity}</span>
                    <button className="btn-icon qty-btn" onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                  </div>
                  <button className="btn-icon remove-btn" onClick={() => removeFromCart(item.id)}><Trash2 size={16} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-footer">
          <div className="cart-summary">
            <span>Subtotal</span>
            <span className="cart-total">₹{(cartSubtotal * 83).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
          </div>
          <p className="shipping-note">Taxes and shipping calculated at checkout</p>
          <Link to="/checkout" className="btn btn-primary checkout-btn" onClick={onClose} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            Proceed to Checkout <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
