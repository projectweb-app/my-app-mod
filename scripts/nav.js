// /scripts/nav.js

document.addEventListener('DOMContentLoaded', () => {
  // Define the HTML for the header
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
            <li><a href="/blog/guide-to-cleaning-data-lists.html">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;

  // Define the HTML for the new footer
  const footerTemplate = `
    <footer style="text-align: center; padding: 40px 20px; margin-top: 60px; border-top: 1px solid #e9ecef; color: #6c757d;">
      <div class="footer-links" style="margin-bottom: 10px;">
        <a href="/about.html" style="color: #6c757d; margin: 0 10px;">About Us</a>
        <a href="/legal/privacy.html" style="color: #6c757d; margin: 0 10px;">Privacy Policy</a>
        <a href="/contact.html" style="color: #6c757d; margin: 0 10px;">Contact Us</a>
      </div>
      <p>&copy; ${new Date().getFullYear()} MyAppMod. All Rights Reserved.</p>
    </footer>
  `;

  // Inject the header at the top of the body
  document.body.insertAdjacentHTML('afterbegin', headerTemplate);
  // Inject the footer at the end of the body
  document.body.insertAdjacentHTML('beforeend', footerTemplate);

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