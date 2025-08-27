// /scripts/nav.js

// Define the HTML for the header in a template literal
const headerTemplate = `
  <header class="global-header">
    <div class="header-container">
      <a href="/" class="brand-logo">MyAppMod</a>
      <nav class="main-nav">
        <ul>
          <li><a href="/comma-to-line/">Comma to Line Converter</a></li>
          <li><a href="/remove-duplicate-lines/">Remove Duplicate Lines</a></li>
          <li><a href="/sort-lines-alphabetically/">Sort Lines Alphabetically</a></li>
        </ul>
      </nav>
    </div>
  </header>
`;

// Function to inject the header
function loadHeader() {
  document.body.insertAdjacentHTML('afterbegin', headerTemplate);
}

// **NEW** Function to highlight the active page link
function highlightActiveLink() {
  const currentPagePath = window.location.pathname;
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {
    // Use getAttribute to get the exact href value
    const linkPath = link.getAttribute('href');
    
    // Check if the current page's path starts with the link's path
    // This handles cases like `/comma-to-line/` matching the link `/comma-to-line/`
    if (currentPagePath === linkPath) {
      link.classList.add('active-link');
    }
  });
}

// Run the functions as soon as the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  highlightActiveLink(); // Call the new function after the header is loaded
});