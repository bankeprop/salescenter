const fs = require('fs');
const path = require('path');

const seoConfig = require('../src/seo/pageSeo.json');

const buildDir = path.resolve(__dirname, '../build');
const indexPath = path.join(buildDir, 'index.html');
const siteUrl = seoConfig.siteUrl || 'https://www.sales-center.ae';

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeScriptJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

function canonicalUrl(routePath) {
  return new URL(routePath || '/', siteUrl).href;
}

function removeManagedHeadTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, '')
    .replace(/<meta\s+name=["']robots["'][^>]*>\s*/gi, '')
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, '')
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi, '')
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '')
    .replace(/<script\s+type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi, '');
}

function renderJsonLd(page, routePath) {
  const jsonLd =
    page.jsonLd || {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: page.title,
      description: page.description,
      url: canonicalUrl(routePath)
    };

  return `<script type="application/ld+json">${escapeScriptJson(jsonLd)}</script>`;
}

function renderHeadTags(page, routePath) {
  const safeTitle = escapeHtml(page.title);
  const safeDescription = escapeHtml(page.description);
  const safeRobots = escapeHtml(page.robots || 'index, follow');
  const safeCanonical = escapeHtml(canonicalUrl(routePath));
  const safeKeywords = escapeHtml(page.keywords || '');
  const safeImage = page.ogImage ? escapeHtml(new URL(page.ogImage, siteUrl).href) : '';

  return [
    `<title>${safeTitle}</title>`,
    `<meta name="description" content="${safeDescription}" />`,
    `<meta name="robots" content="${safeRobots}" />`,
    `<meta name="keywords" content="${safeKeywords}" />`,
    `<meta name="author" content="${escapeHtml(page.author || '')}" />`,
    `<meta name="publisher" content="${escapeHtml(page.publisher || '')}" />`,
    `<link rel="canonical" href="${safeCanonical}" />`,
    '<meta property="og:type" content="website" />',
    `<meta property="og:title" content="${safeTitle}" />`,
    `<meta property="og:description" content="${safeDescription}" />`,
    `<meta property="og:url" content="${safeCanonical}" />`,
    `<meta property="og:site_name" content="${escapeHtml(page.siteName || 'Sales Center')}" />`,
    `<meta property="og:locale" content="${escapeHtml(page.locale || 'en_AE')}" />`,
    safeImage ? `<meta property="og:image" content="${safeImage}" />` : '',
    safeImage ? `<meta property="og:image:alt" content="${escapeHtml(page.ogImageAlt || page.title)}" />` : '',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${safeTitle}" />`,
    `<meta name="twitter:description" content="${safeDescription}" />`,
    safeImage ? `<meta name="twitter:image" content="${safeImage}" />` : '',
    page.favicon ? `<link rel="icon" type="image/png" href="${escapeHtml(page.favicon)}" />` : '',
    page.favicon ? `<link rel="apple-touch-icon" href="${escapeHtml(page.favicon)}" />` : '',
    renderJsonLd(page, routePath)
  ].join('\n  ');
}

function renderNoScript(page) {
  const bullets = Array.isArray(page.bullets) ? page.bullets : [];
  const bulletMarkup = bullets.length
    ? `<ul>${bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
    : '';

  return `<noscript>
    <main>
      <h1>${escapeHtml(page.h1 || page.title)}</h1>
      <p>${escapeHtml(page.content || page.description)}</p>
      ${bulletMarkup}
      <p>Use the contact form on the full page to submit an inquiry.</p>
    </main>
  </noscript>`;
}

function injectSeo(template, page, routePath) {
  const cleaned = page.favicon
    ? removeManagedHeadTags(template).replace(/<link\s+rel=["'](?:shortcut icon|icon|apple-touch-icon)["'][^>]*>\s*/gi, '')
    : removeManagedHeadTags(template);
  const withLanguage = cleaned.replace(/<html\s+lang=["'][^"']*["']/, `<html lang="${escapeHtml(page.language || 'en')}"`);
  const withHead = withLanguage.replace('</head>', `  ${renderHeadTags(page, routePath)}\n</head>`);

  if (/<noscript>[\s\S]*?<\/noscript>/i.test(withHead)) {
    return withHead.replace(/<noscript>[\s\S]*?<\/noscript>/i, renderNoScript(page));
  }

  return withHead.replace('<div id="root"></div>', `${renderNoScript(page)}\n  <div id="root"></div>`);
}

function routeToFilePath(routePath) {
  if (routePath === '/') return indexPath;

  const parts = routePath
    .replace(/^\/+/, '')
    .split('/')
    .filter(Boolean);

  return path.join(buildDir, ...parts, 'index.html');
}

function writeRouteHtml(template, routePath, routeSeo) {
  const page = {
    ...seoConfig.default,
    ...routeSeo
  };
  const outputPath = routeToFilePath(routePath);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, injectSeo(template, page, routePath), 'utf8');
  console.log(`SEO pre-rendered ${routePath} -> ${path.relative(buildDir, outputPath)}`);
}

if (!fs.existsSync(indexPath)) {
  throw new Error('Build index.html was not found. Run this script after react-scripts build.');
}

const template = fs.readFileSync(indexPath, 'utf8');

writeRouteHtml(template, '/', seoConfig.default);
Object.entries(seoConfig.routes).forEach(([routePath, routeSeo]) => {
  writeRouteHtml(template, routePath, routeSeo);
});
