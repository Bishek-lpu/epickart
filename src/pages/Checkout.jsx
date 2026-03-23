import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { cartItems, cartSubtotal, clearCart } = useShop();

  const handleCheckout = (e) => {
    e.preventDefault();
    alert("Checkout Successful! Thank you for testing Razorpay / EpicKart demo.");
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2>Your Cart is Empty</h2>
        <p style={{ margin: '1rem 0' }}>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn btn-primary">Start Shopping</Link>
      </div>
    );
  }

  const tax = cartSubtotal * 0.18; // 18% GST dummy
  const total = cartSubtotal + tax;

  return (
    <div className="container" style={{ padding: '4rem 0' }}>
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
        <ArrowLeft size={16} /> Back to Store
      </Link>
      
      <h1 className="legal-title">Checkout</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '2rem' }}>
        <div>
          <h3>Billing Details</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }} onSubmit={handleCheckout}>
            <input type="text" placeholder="Full Name" required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)' }} />
            <input type="email" placeholder="Email Address" required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)' }} />
            <textarea placeholder="Shipping Address" required style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', background: 'transparent', color: 'var(--text-primary)', minHeight: '100px' }}></textarea>
            
            <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '1rem', width: '100%' }}>
              <CheckCircle size={20} />
              Confirm & Pay ₹{(total * 83).toLocaleString('en-IN', {maximumFractionDigits: 0})}
            </button>
          </form>
        </div>
        
        <div style={{ padding: '2rem', backgroundColor: 'var(--surface-color)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
          <h3>Order Summary</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
            {cartItems.map(item => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>{item.name}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Qty: {item.quantity}</span>
                  </div>
                </div>
                <strong>₹{(item.price * item.quantity * 83).toLocaleString('en-IN', {maximumFractionDigits: 0})}</strong>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Subtotal</span>
              <span>₹{(cartSubtotal * 83).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Tax (18%)</span>
              <span>₹{(tax * 83).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '1.25rem', fontWeight: '800' }}>
              <span>Total</span>
              <span style={{ color: 'var(--brand-primary)' }}>₹{(total * 83).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
