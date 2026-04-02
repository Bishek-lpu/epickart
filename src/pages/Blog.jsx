import { Link } from 'react-router-dom';
import { useSEO, breadcrumbSchema } from '../utils/seo';
import { blogPosts } from '../data/blogPosts';
import HilltopAd from '../components/HilltopAd';
import './Blog.css';

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'EpicKart Tech Blog',
  description:
    'Expert reviews, buying guides, and tips for premium tech gadgets, gaming gear, audio equipment, wearables, and smart home devices.',
  url: 'https://www.epickart.in/blog',
  publisher: {
    '@type': 'Organization',
    name: 'EpicKart',
    url: 'https://www.epickart.in',
  },
};

const Blog = () => {
  useSEO({
    title: 'Tech Tips & Buying Guides | EpicKart Blog',
    description:
      'Explore expert tech buying guides, product comparisons, and tips from EpicKart. We cover headphones, smartwatches, gaming gear, smart home, SSDs, and more.',
    keywords:
      'tech blog india, best gadgets 2026, buying guide headphones india, smartwatch review 2026, gaming accessories guide, smart home setup india, portable SSD vs HDD',
    canonical: 'https://www.epickart.in/blog',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
      ]),
      blogListSchema,
    ],
  });

  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <div className="blog-page">
      {/* Hero */}
      <div className="blog-hero">
        <div className="container">
          <p className="blog-eyebrow">EpicKart Blog</p>
          <h1 className="blog-hero-title">
            Tech Tips &amp; <span className="gradient-text">Buying Guides</span>
          </h1>
          <p className="blog-hero-subtitle">
            Expert advice to help you pick the perfect tech. Unbiased, well-researched, and written
            for real buyers.
          </p>
        </div>
      </div>

      <div className="container blog-container">
        {/* Featured Article */}
        <section aria-label="Featured article" className="blog-featured">
          <Link to={`/blog/${featured.slug}`} className="featured-card glass-card">
            <div className="featured-image-wrap">
              <img
                src={featured.coverImage}
                alt={featured.title}
                className="featured-image"
                loading="eager"
              />
              <span className="featured-badge">Featured</span>
            </div>
            <div className="featured-body">
              <div className="post-meta">
                <span className="post-category">{featured.category}</span>
                <span className="post-dot">·</span>
                <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                <span className="post-dot">·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="featured-title">{featured.title}</h2>
              <p className="featured-excerpt">{featured.excerpt}</p>
              <span className="read-more-btn">Read Article →</span>
            </div>
          </Link>
        </section>

        {/* Hilltop Ad – 300×100 mobile only */}
        <div className="blog-ad-section">
          <HilltopAd id="hilltop-ad-blog-mobile" variant="mobile" />
        </div>

        {/* All Articles Grid */}
        <section aria-label="All blog articles" className="blog-grid-section">
          <h2 className="section-label">All Articles</h2>
          <div className="blog-grid">
            {rest.map((post) => (
              <article key={post.slug} className="blog-card glass-card">
                <Link to={`/blog/${post.slug}`} className="blog-card-link" aria-label={post.title}>
                  <div className="blog-card-image-wrap">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="blog-card-image"
                      loading="lazy"
                    />
                    <span className="blog-category-badge">{post.category}</span>
                  </div>
                  <div className="blog-card-body">
                    <div className="post-meta">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span className="post-dot">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <span className="read-more-link">Read more →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Hilltop Ad – 300×250 desktop + mobile banner */}
        <div className="blog-desktop-ad-section">
          <HilltopAd id="hilltop-ad-blog-desktop" variant="desktop" />
        </div>
      </div>
    </div>
  );
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default Blog;
