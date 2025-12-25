export function setFavicon(iconUrl) {
  if (!iconUrl) return;

  const existing =
    document.querySelector("link[rel~='icon']") ||
    document.querySelector("link[rel='shortcut icon']");

  if (existing) {
    existing.href = iconUrl;
    return;
  }

  const link = document.createElement("link");
  link.rel = "icon";
  link.href = iconUrl;
  document.head.appendChild(link);
}

export function resetFavicon() {
  setFavicon("/favicon.ico");
}
