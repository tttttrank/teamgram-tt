const { pathname, hostname, href } = window.location;

if (pathname.startsWith('/z')) {
  window.location.href = href.replace('/z', '/a');
}

if (
  (hostname === 'weba.tadpole.chat' || hostname === 'webz.tadpole.chat') && !localStorage.getItem('tt-global-state')
) {
  window.location.href = 'https://web.tadpole.chat/a';
}
