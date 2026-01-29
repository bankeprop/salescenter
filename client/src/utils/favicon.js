export function setFavicon(iconUrl) {
  if (!iconUrl) return;

  const resolvedUrl = (() => {
    try {
      return new URL(iconUrl, window.location.origin).href;
    } catch {
      return iconUrl;
    }
  })();

  // Bust cache to force browsers (esp. mobile) to refetch
  const cacheBustedUrl = `${resolvedUrl}${resolvedUrl.includes("?") ? "&" : "?"}v=${Date.now()}`;

  // Remove existing icon links to ensure browsers pick up the new one
  document
    .querySelectorAll("link[rel*='icon'], link[rel='apple-touch-icon']")
    .forEach((node) => node.parentNode.removeChild(node));

  const createLink = (rel, attrs = {}) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = cacheBustedUrl;
    Object.entries(attrs).forEach(([k, v]) => v !== undefined && link.setAttribute(k, v));
    document.head.appendChild(link);
  };

  // Standard favicons
  createLink("icon", { type: "image/png", sizes: "32x32" });
  createLink("shortcut icon", { type: "image/png", sizes: "32x32" });
  createLink("icon", { type: "image/png", sizes: "192x192" });
  // iOS touch icon
  createLink("apple-touch-icon", { sizes: "180x180" });
}

export function resetFavicon() {
  setFavicon("/favicon.ico");
}
