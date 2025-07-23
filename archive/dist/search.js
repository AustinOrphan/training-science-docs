export function createSearch(options) {
    return `
    <div class="mdv-search">
      <input 
        type="text" 
        class="mdv-search-input" 
        placeholder="${options.placeholder || 'Search documentation...'}"
        aria-label="Search documentation"
      />
      <div class="mdv-search-results"></div>
    </div>
  `;
}
