document.addEventListener('DOMContentLoaded', () => {
  initActiveNavigation();
  initCollapsibleNavigation();
  initScrollSpy();
});

function normalizePath(pathname) {
  return pathname.replace(/\/$/, '/index.html');
}

function initActiveNavigation() {
  const currentPath = normalizePath(window.location.pathname);
  const currentHash = window.location.hash;

  const linksOnCurrentPage = [];

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.classList.remove('active');

    const href = link.getAttribute('href');
    if (!href) return;

    const linkUrl = new URL(href, window.location.href);
    const linkPath = normalizePath(linkUrl.pathname);
    if (linkPath !== currentPath) return;

    linksOnCurrentPage.push({ link, hash: linkUrl.hash });
  });

  if (!linksOnCurrentPage.length) return;

  // Prefer a link whose anchor hash exactly matches the current URL (for
  // pages with nested anchor-based sub-items). Otherwise fall back to the
  // first link found for this page, preserving the original behavior for
  // pages that only have a single matching link.
  const exactMatch = linksOnCurrentPage.find((entry) => entry.hash === currentHash);
  (exactMatch || linksOnCurrentPage[0]).link.classList.add('active');
}

function initCollapsibleNavigation() {
  document.querySelectorAll('[data-nav-toggle]').forEach((toggle) => {
    const groupName = toggle.dataset.navToggle;
    const panel = document.querySelector(`[data-nav-panel="${groupName}"]`);
    if (!panel) return;

    const storageKey = `nexcognit.nav.${groupName}.expanded`;
    const hasActiveLink = Boolean(panel.querySelector('.nav-link.active'));
    const storedState = readNavState(storageKey);
    const shouldExpand = hasActiveLink || storedState === 'true';

    setNavGroupExpanded(toggle, panel, shouldExpand);

    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      const nextState = !isExpanded;

      setNavGroupExpanded(toggle, panel, nextState);
      writeNavState(storageKey, nextState);
    });
  });
}

function setNavGroupExpanded(toggle, panel, isExpanded) {
  toggle.setAttribute('aria-expanded', String(isExpanded));
  panel.classList.toggle('is-expanded', isExpanded);
}

function readNavState(storageKey) {
  try {
    return localStorage.getItem(storageKey);
  } catch {
    return null;
  }
}

function writeNavState(storageKey, isExpanded) {
  try {
    localStorage.setItem(storageKey, String(isExpanded));
  } catch {
    // The navigation still works for the current page if storage is unavailable.
  }
}

// Highlights the sidebar sub-item that matches whatever section the user has
// currently scrolled to, so the sidebar stays in sync while scrolling
// through a long page (not just when clicking a link).
function initScrollSpy() {
  const currentPath = normalizePath(window.location.pathname);
  const trackedLinks = [];

  document.querySelectorAll('.nav-subnav-nested .nav-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkUrl = new URL(href, window.location.href);
    if (normalizePath(linkUrl.pathname) !== currentPath) return;

    const targetId = linkUrl.hash.replace('#', '');
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    trackedLinks.push({ link, target });
  });

  if (!trackedLinks.length) return;

  trackedLinks.sort((a, b) => a.target.offsetTop - b.target.offsetTop);

  const scrollThreshold = 140;

  function updateActiveLink() {
    let current = trackedLinks[0];

    trackedLinks.forEach((entry) => {
      const rect = entry.target.getBoundingClientRect();
      if (rect.top <= scrollThreshold) {
        current = entry;
      }
    });

    trackedLinks.forEach((entry) => entry.link.classList.remove('active'));
    current.link.classList.add('active');
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      updateActiveLink();
      ticking = false;
    });
  }, { passive: true });

  updateActiveLink();
}