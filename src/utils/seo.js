/**
 * useSEO — EpicKart's dynamic SEO management hook
 *
 * Usage:
 *   useSEO({
 *     title: 'Page Title | EpicKart',
 *     description: '...',
 *     keywords: '...',
 *     canonical: 'https://www.epickart.in/page',
 *     ogImage: 'https://...',
 *     jsonLd: { ... },
 *   });
 */

import { useEffect } from 'react';

const SITE_NAME = 'EpicKart';
const SITE_URL = 'https://www.epickart.in';
const DEFAULT_OG_IMAGE = 'https://www.epickart.in/og-image.jpg';
const DEFAULT_TWITTER_HANDLE = '@epickart';

/**
 * Sets or updates a <meta> tag by name or property attribute.
 */
function setMeta(attributeName, attributeValue, content) {
  let el = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attributeName, attributeValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Sets or updates a <link> tag by rel attribute.
 */
function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Injects or updates a JSON-LD <script> tag.
 * Uses a data-id attribute to allow multiple schemas per page.
 */
function setJsonLd(id, data) {
  let el = document.querySelector(`script[type="application/ld+json"][data-id="${id}"]`);
  if (!el) {
    el = document.createElement('script');
    el.setAttribute('type', 'application/ld+json');
    el.setAttribute('data-id', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data, null, 2);
}

/**
 * Removes a JSON-LD <script> tag by id.
 */
function removeJsonLd(id) {
  const el = document.querySelector(`script[type="application/ld+json"][data-id="${id}"]`);
  if (el) el.remove();
}

/**
 * Main useSEO hook
 * @param {Object} options
 * @param {string} options.title               - Full page title
 * @param {string} options.description         - Meta description (150-160 chars)
 * @param {string} [options.keywords]          - Comma-separated keywords
 * @param {string} [options.canonical]         - Canonical URL for this page
 * @param {string} [options.ogImage]           - Open Graph image URL
 * @param {string} [options.ogType]            - OG type (default: 'website')
 * @param {Object|Array} [options.jsonLd]      - JSON-LD object or array of objects
 * @param {string} [options.twitterCard]       - 'summary' | 'summary_large_image'
 * @param {boolean} [options.noIndex]          - Add noindex directive
 */
export function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd,
  twitterCard = 'summary_large_image',
  noIndex = false,
} = {}) {
  useEffect(() => {
    // ── Title ──────────────────────────────────────────────────────────────
    if (title) {
      document.title = title;
    }

    // ── Canonical ──────────────────────────────────────────────────────────
    const canonicalUrl = canonical || `${SITE_URL}${window.location.pathname}`;
    setLink('canonical', canonicalUrl);

    // ── Basic Meta ─────────────────────────────────────────────────────────
    if (description) setMeta('name', 'description', description);
    if (keywords)    setMeta('name', 'keywords', keywords);

    // Robots
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // ── Open Graph ─────────────────────────────────────────────────────────
    if (title)       setMeta('property', 'og:title', title);
    if (description) setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', title || SITE_NAME);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_IN');

    // ── Twitter Cards ──────────────────────────────────────────────────────
    setMeta('name', 'twitter:card', twitterCard);
    setMeta('name', 'twitter:site', DEFAULT_TWITTER_HANDLE);
    setMeta('name', 'twitter:creator', DEFAULT_TWITTER_HANDLE);
    if (title)       setMeta('name', 'twitter:title', title);
    if (description) setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // ── JSON-LD Structured Data ────────────────────────────────────────────
    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema, i) => {
        setJsonLd(`page-schema-${i}`, schema);
      });
      // Remove any leftover old schemas
      let i = schemas.length;
      while (document.querySelector(`script[type="application/ld+json"][data-id="page-schema-${i}"]`)) {
        removeJsonLd(`page-schema-${i}`);
        i++;
      }
    }

    // Cleanup on unmount: remove page-level schemas
    return () => {
      if (jsonLd) {
        const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
        schemas.forEach((_, i) => removeJsonLd(`page-schema-${i}`));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, keywords, canonical, ogImage, ogType, noIndex, twitterCard]);
}

// ── Shared Schemas ──────────────────────────────────────────────────────────

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EpicKart',
  url: 'https://www.epickart.in',
  logo: 'https://www.epickart.in/favicon.svg',
  description: 'EpicKart is India\'s premier online store for premium tech gadgets, gaming gear, audio accessories, wearables, and smart home devices.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Raipur',
    addressRegion: 'Chhattisgarh',
    addressCountry: 'IN',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@epickart.in',
      availableLanguage: ['English', 'Hindi'],
    },
  ],
  sameAs: [
    'https://www.instagram.com/epickart',
    'https://www.twitter.com/epickart',
    'https://www.facebook.com/epickart',
    'https://www.youtube.com/epickart',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EpicKart',
  url: 'https://www.epickart.in',
  description: 'Shop premium tech gadgets, gaming gear, audio accessories, wearables, and smart home products online at the best prices.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.epickart.in/?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'EpicKart',
    url: 'https://www.epickart.in',
  },
};

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `https://www.epickart.in${item.path}`,
  })),
});

export const productListSchema = (products) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Trending Tech Products — EpicKart',
  description: 'Shop the best trending premium tech gadgets and accessories online at EpicKart',
  url: 'https://www.epickart.in',
  numberOfItems: products.length,
  itemListElement: products.slice(0, 10).map((product, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: product.name,
      description: `Buy ${product.name} online at EpicKart. Category: ${product.category}. Rating: ${product.rating}/5 based on ${product.reviews} reviews.`,
      image: product.image,
      url: `https://www.epickart.in/?product=${product.id}`,
      offers: {
        '@type': 'Offer',
        price: product.price.toFixed(2),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: 'EpicKart',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviews,
        bestRating: 5,
        worstRating: 1,
      },
    },
  })),
});
