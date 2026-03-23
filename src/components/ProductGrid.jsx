import { useState, useMemo } from 'react';
import { useShop } from '../context/ShopContext';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import './ProductGrid.css';

// Sample product data
const products = [
  {
    id: 1,
    name: "Aura Noise-Cancelling Headphones",
    price: 299.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Nova Smartwatch Series X",
    price: 199.50,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600&auto=format&fit=crop",
    rating: 4.6,
    reviews: 89,
    badge: "New"
  },
  {
    id: 3,
    name: "Zenith Mechanical Keyboard",
    price: 149.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    reviews: 210,
    badge: ""
  },
  {
    id: 4,
    name: "Lumina Studio Microphone",
    price: 129.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop",
    rating: 4.5,
    reviews: 45,
    badge: "Sale"
  },
  {
    id: 5,
    name: "Quantum Ultra-Wide Monitor",
    price: 499.00,
    category: "Computing",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600&auto=format&fit=crop",
    rating: 4.7,
    reviews: 312,
    badge: ""
  },
  {
    id: 6,
    name: "Vortex Gaming Mouse",
    price: 79.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600&auto=format&fit=crop",
    rating: 4.4,
    reviews: 156,
    badge: "Bestseller"
  },
  {
    id: 7,
    name: "Eclipse Smart Speaker",
    price: 89.50,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=600&auto=format&fit=crop",
    rating: 4.2,
    reviews: 78,
    badge: "Sale"
  },
  {
    id: 8,
    name: "Horizon 4K Action Camera",
    price: 349.00,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviews: 402,
    badge: "New"
  },
  {
    id: 9,
    name: "Titan Power Bank 20000mAh",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    reviews: 531,
    badge: "Bestseller"
  },
  {
    id: 10,
    name: "Nebula Mesh WiFi System",
    price: 229.00,
    category: "Computing",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop",
    rating: 4.6,
    reviews: 112,
    badge: ""
  },
  {
    id: 11,
    name: "Orion VR Headset Pro",
    price: 399.00,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?q=80&w=600&auto=format&fit=crop",
    rating: 4.5,
    reviews: 204,
    badge: "New"
  },
  {
    id: 12,
    name: "Pulse Wireless Earbuds",
    price: 159.00,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop",
    rating: 4.3,
    reviews: 89,
    badge: "Sale"
  },
  {
    id: 13,
    name: "Echo Smart Display",
    price: 129.99,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=600&auto=format&fit=crop",
    rating: 4.7,
    reviews: 320,
    badge: ""
  },
  {
    id: 14,
    name: "Vector Pro Tablet",
    price: 599.00,
    category: "Computing",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviews: 415,
    badge: "Bestseller"
  },
  {
    id: 15,
    name: "Apex Ergonomic Chair",
    price: 249.00,
    category: "Office",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    reviews: 185,
    badge: ""
  },
  {
    id: 16,
    name: "Helix Smart Ring",
    price: 179.00,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?q=80&w=600&auto=format&fit=crop",
    rating: 4.4,
    reviews: 67,
    badge: "New"
  },
  {
    id: 17,
    name: "Prism RGB Light Panels",
    price: 119.00,
    category: "Smart Home",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
    rating: 4.6,
    reviews: 142,
    badge: "Sale"
  },
  {
    id: 18,
    name: "Focus DSLR Backpack",
    price: 89.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    rating: 4.8,
    reviews: 215,
    badge: ""
  },
  {
    id: 19,
    name: "Nexus Portable SSD 1TB",
    price: 139.99,
    category: "Computing",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=600&auto=format&fit=crop",
    rating: 4.9,
    reviews: 620,
    badge: "Bestseller"
  },
  {
    id: 20,
    name: "Blaze Electric Scooter",
    price: 450.00,
    category: "Outdoors",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=600&auto=format&fit=crop",
    rating: 4.7,
    reviews: 95,
    badge: "New"
  }
];

const ProductGrid = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { searchQuery, selectedCategory, setSelectedCategory } = useShop();

  const categories = useMemo(() => {
    const cats = [...new Set(products.map(p => p.category))];
    return ["All", ...cats.sort()];
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section className="product-section">
      <div className="container" id="products">
        <div className="section-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
            <h2 className="section-title">{searchQuery ? 'Search Results' : 'Trending Now'}</h2>
            {!searchQuery && <a href="#products" className="view-all">View All Products &rarr;</a>}
          </div>
          
          <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem', width: '100%', scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedCategory(cat)}
                style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', whiteSpace: 'nowrap' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
            <h3>No products found.</h3>
            <p>Try adjusting your search or category filter.</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div key={product.id} onClick={() => setSelectedProduct(product)} style={{cursor: 'pointer'}}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
};

export default ProductGrid;
