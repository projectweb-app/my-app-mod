// /scripts/nav.js

document.addEventListener('DOMContentLoaded', () => {
  // Define the HTML for the header in a template literal
  const headerTemplate = `
    <header class="global-header">
      <div class="header-container">
        <a href="/" class="brand-logo">MyAppMod</a>
        <nav class="main-nav">
          <ul>
            <li><a href="/remove-duplicate-lines/">Remove Duplicates</a></li>
            <li><a href="/sort-lines-alphabetically/">Sort Lines</a></li>
            <li><a href="/comma-to-line/">Comma <> Line</a></li>
            <li><a href="/case-converter/">Case Converter</a></li>
            <li><a href="/add-prefix-suffix/">Add Prefix/Suffix</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  // Inject the header at the top of the body
  document.body.insertAdjacentHTML('afterbegin', headerTemplate);

  // Highlight the active page link
  const currentPagePath = window.location.pathname;
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPagePath === linkPath) {
      link.classList.add('active-link');
    }
  });
});