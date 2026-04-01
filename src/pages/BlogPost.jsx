import { useParams, Link, Navigate } from 'react-router-dom';
import { useSEO, breadcrumbSchema } from '../utils/seo';
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(slug, 2);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'EpicKart Editorial Team',
      url: 'https://www.epickart.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'EpicKart',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.epickart.in/favicon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.epickart.in/blog/${post.slug}`,
    },
  };

  useSEO({
    title: post.metaTitle,
    description: post.metaDescription,
    canonical: `https://www.epickart.in/blog/${post.slug}`,
    ogImage: post.coverImage,
    ogType: 'article',
    jsonLd: [
      breadcrumbSchema([
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` },
      ]),
      articleSchema,
    ],
  });

  return (
    <div className="blog-post-page">
      <div className="container">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb" className="breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true" className="breadcrumb-sep">›</span>
          <Link to="/blog">Blog</Link>
          <span aria-hidden="true" className="breadcrumb-sep">›</span>
          <span aria-current="page">{post.category}</span>
        </nav>

        <article className="blog-post-layout" itemScope itemType="https://schema.org/Article">
          {/* Header */}
          <header className="blog-post-header">
            <div className="post-meta">
              <span className="post-category">{post.category}</span>
              <span className="post-dot">·</span>
              <time dateTime={post.date} itemProp="datePublished">{formatDate(post.date)}</time>
              <span className="post-dot">·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="blog-post-title" itemProp="headline">{post.title}</h1>
            <p className="blog-post-excerpt">{post.excerpt}</p>
          </header>

          {/* Cover Image */}
          <figure className="blog-post-cover">
            <img
              src={post.coverImage}
              alt={post.title}
              className="blog-post-cover-img"
              loading="eager"
              itemProp="image"
            />
          </figure>

          {/* Content */}
          <div className="blog-post-body" itemProp="articleBody">
            {post.content.map((block, i) => {
              if (block.type === 'paragraph') {
                return <p key={i}>{block.text}</p>;
              }
              if (block.type === 'heading') {
                return <h2 key={i}>{block.text}</h2>;
              }
              if (block.type === 'list') {
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="blog-post-cta glass-card">
            <div className="cta-text">
              <h3>Ready to upgrade your tech?</h3>
              <p>Browse EpicKart's curated selection of premium gadgets — handpicked and quality-tested.</p>
            </div>
            <Link to="/" className="btn btn-primary">Shop Now →</Link>
          </div>
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <section aria-label="Related articles" className="related-posts">
            <h2 className="section-label">Related Articles</h2>
            <div className="related-grid">
              {related.map((rp) => (
                <Link to={`/blog/${rp.slug}`} key={rp.slug} className="related-card glass-card">
                  <img src={rp.coverImage} alt={rp.title} loading="lazy" />
                  <div className="related-card-body">
                    <span className="post-category">{rp.category}</span>
                    <h3>{rp.title}</h3>
                    <span className="read-more-link">Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <div className="back-to-blog">
          <Link to="/blog" className="btn-ghost">← Back to Blog</Link>
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

export default BlogPost;
