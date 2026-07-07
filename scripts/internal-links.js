// Mintlify renders url-frontmatter link pages with target="_blank".
// For same-origin targets (our section links in the sidebar) that is wrong:
// strip the target so the link navigates in the same browser tab.
(function () {
  function fixLinks(root) {
    root.querySelectorAll('a[target="_blank"]').forEach(function (a) {
      var href = a.getAttribute("href") || "";
      if (href.startsWith("/") && !href.startsWith("//")) {
        a.removeAttribute("target");
        a.removeAttribute("rel");
      }
    });
  }
  fixLinks(document);
  new MutationObserver(function () {
    fixLinks(document);
  }).observe(document.body, { childList: true, subtree: true });
})();
