import { ShoppingCart, Search, Moon, Sun, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme, toggleCart }) => {
  const { cartCount, searchQuery, setSearchQuery } = useShop();
  return (
    <header className="navbar-wrapper">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/" className="logo">
              <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: '800' }}>EpicKart</span>
            </Link>
          </div>

          <div className="navbar-center hidden-mobile">
            <div className="search-bar">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search for products, brands and more..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="navbar-right">
            <button className="btn-icon theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button className="btn-icon cart-btn" aria-label="Cart" onClick={toggleCart}>
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
            <button className="btn-icon mobile-menu-btn" aria-label="Menu">
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
