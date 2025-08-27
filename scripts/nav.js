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
        </ul>
      </nav>
    </div>
  </header>
`;

// Function to inject the header at the top of the body
function loadHeader() {
  // Use document.body.insertAdjacentHTML for efficient injection
  document.body.insertAdjacentHTML('afterbegin', headerTemplate);
}

// Run the function as soon as the DOM content is loaded
document.addEventListener('DOMContentLoaded', loadHeader);