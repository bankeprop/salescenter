import pageSeo from './pageSeo.json';

const DEFAULT_SITE_URL = pageSeo.siteUrl || 'https://www.sales-center.ae';

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      element.setAttribute(key, value);
    }
  });

  return element;
}

function upsertCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = href;
}

function applyFavicon(href) {
  document.head
    .querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]')
    .forEach((link) => {
      link.href = href;
    });
}

function applyJsonLd(jsonLd) {
  const selector = 'script[data-page-seo="json-ld"]';
  let script = document.head.querySelector(selector);

  if (!jsonLd) {
    script?.remove();
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.pageSeo = 'json-ld';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(jsonLd).replace(/</g, '\\u003c');
}

export function getSeoForPath(pathname) {
  const normalizedPath = normalizePath(pathname);
  const routeSeo = pageSeo.routes[normalizedPath];

  if (routeSeo) {
    return {
      ...pageSeo.default,
      ...routeSeo,
      canonicalPath: normalizedPath
    };
  }

  if (normalizedPath.startsWith('/offline-listing/details/')) {
    return {
      ...pageSeo.default,
      title: 'Property Deal Details | Sales Center UAE',
      description: 'View UAE property deal details, reduced pricing, description, reference information, and direct WhatsApp inquiry options.',
      h1: 'Property Deal Details',
      content: 'View details for a selected UAE property deal, including reduced pricing, listing description, reference information, and direct inquiry options.',
      robots: 'index, follow',
      canonicalPath: normalizedPath
    };
  }

  return {
    ...pageSeo.default,
    canonicalPath: normalizedPath
  };
}

export function applyPageSeo(seo) {
  const canonicalUrl = new URL(seo.canonicalPath || '/', DEFAULT_SITE_URL).href;
  const imageUrl = seo.ogImage ? new URL(seo.ogImage, DEFAULT_SITE_URL).href : null;

  document.title = seo.title;
  document.documentElement.lang = seo.language || 'en';
  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: seo.description
  });
  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: seo.robots || 'index, follow'
  });
  upsertMeta('meta[name="keywords"]', { name: 'keywords', content: seo.keywords || '' });
  upsertMeta('meta[name="author"]', { name: 'author', content: seo.author || '' });
  upsertMeta('meta[name="publisher"]', { name: 'publisher', content: seo.publisher || '' });
  upsertMeta('meta[property="og:type"]', {
    property: 'og:type',
    content: 'website'
  });
  upsertMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: seo.title
  });
  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: seo.description
  });
  upsertMeta('meta[property="og:url"]', {
    property: 'og:url',
    content: canonicalUrl
  });
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: seo.siteName || 'Sales Center' });
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: seo.locale || 'en_AE' });
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl || '' });
  upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: seo.ogImageAlt || seo.title });
  upsertMeta('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: 'summary_large_image'
  });
  upsertMeta('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: seo.title
  });
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: seo.description
  });
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl || '' });
  upsertCanonical(canonicalUrl);
  applyFavicon(seo.favicon || '/favicon.ico');
  applyJsonLd(
    seo.jsonLd || {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      description: seo.description,
      url: canonicalUrl
    }
  );
}
