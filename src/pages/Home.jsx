import { useSEO, productListSchema, organizationSchema, websiteSchema } from '../utils/seo';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import SEOContent from '../components/SEOContent';
import AdsSection from '../components/AdsSection';

// Products list for structured data — mirrors ProductGrid data
const productsMeta = [
  { id: 1, name: "Aura Noise-Cancelling Headphones", price: 299.99, category: "Audio", image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600", rating: 4.8, reviews: 124 },
  { id: 2, name: "Nova Smartwatch Series X", price: 199.50, category: "Wearables", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=600", rating: 4.6, reviews: 89 },
  { id: 3, name: "Zenith Mechanical Keyboard", price: 149.00, category: "Accessories", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=600", rating: 4.9, reviews: 210 },
  { id: 4, name: "Lumina Studio Microphone", price: 129.99, category: "Audio", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600", rating: 4.5, reviews: 45 },
  { id: 5, name: "Quantum Ultra-Wide Monitor", price: 499.00, category: "Computing", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=600", rating: 4.7, reviews: 312 },
  { id: 6, name: "Vortex Gaming Mouse", price: 79.99, category: "Gaming", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=600", rating: 4.4, reviews: 156 },
  { id: 7, name: "Eclipse Smart Speaker", price: 89.50, category: "Smart Home", image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=600", rating: 4.2, reviews: 78 },
  { id: 8, name: "Horizon 4K Action Camera", price: 349.00, category: "Photography", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=600", rating: 4.8, reviews: 402 },
  { id: 9, name: "Titan Power Bank 20000mAh", price: 49.99, category: "Accessories", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600", rating: 4.9, reviews: 531 },
  { id: 10, name: "Nexus Portable SSD 1TB", price: 139.99, category: "Computing", image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=600", rating: 4.9, reviews: 620 },
];

const Home = () => {
  useSEO({
    title: 'EpicKart | Buy Premium Tech Gadgets & Accessories Online in India',
    description: 'Shop 200+ premium tech gadgets, gaming gear, noise-cancelling headphones, smartwatches, wireless earbuds & smart home devices at EpicKart. Fast delivery across India. Best prices guaranteed.',
    keywords: 'buy premium tech gadgets online, best tech accessories store india, online gadget store, buy noise cancelling headphones, best gaming mouse india, buy smartwatch online, premium wireless earbuds, VR headset buy india, smart home devices, buy portable SSD india, EpicKart',
    canonical: 'https://www.epickart.in/',
    jsonLd: [
      organizationSchema,
      websiteSchema,
      productListSchema(productsMeta),
    ],
  });

  return (
    <>
      <Hero />
      <ProductGrid />
      <AdsSection />
      <SEOContent />
    </>
  );
};

export default Home;
