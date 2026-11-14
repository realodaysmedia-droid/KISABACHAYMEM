(function() {
  const manifest = document.createElement('link');
  manifest.rel = 'manifest';
  manifest.href = '/manifest.json';
  document.head.appendChild(manifest);

  const icon = document.createElement('link');
  icon.rel = 'icon';
  icon.type = 'image/png';
  icon.href = '/icon.png';
  document.head.appendChild(icon);

  const appleIcon = document.createElement('link');
  appleIcon.rel = 'apple-touch-icon';
  appleIcon.href = '/icon.png';
  document.head.appendChild(appleIcon);

  const theme = document.createElement('meta');
  theme.name = 'theme-color';
  theme.content = '#000000';
  document.head.appendChild(theme);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
})();
