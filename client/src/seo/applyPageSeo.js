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

  document.title = seo.title;
  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: seo.description
  });
  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: seo.robots || 'index, follow'
  });
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
  upsertCanonical(canonicalUrl);
}
