import { marked as c } from "marked";
import { markedHighlight as m } from "marked-highlight";
import h from "highlight.js";
const d = {
  name: "default",
  colors: {
    primary: "#3b82f6",
    secondary: "#10b981",
    background: "#ffffff",
    surface: "#f3f4f6",
    textPrimary: "#111827",
    textSecondary: "#6b7280",
    border: "#e5e7eb",
    codeBackground: "#f3f4f6",
    link: "#3b82f6",
    linkHover: "#2563eb",
    error: "#ef4444",
    warning: "#f59e0b",
    success: "#10b981"
  },
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    code: '"Fira Code", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace'
  },
  spacing: {
    unit: 8,
    containerMaxWidth: "1200px",
    sidebarWidth: "320px"
  },
  borderRadius: "0.5rem"
}, D = {
  name: "dark",
  colors: {
    primary: "#3b82f6",
    secondary: "#10b981",
    background: "#0f172a",
    surface: "#1e293b",
    textPrimary: "#f1f5f9",
    textSecondary: "#94a3b8",
    border: "#334155",
    codeBackground: "#1a202c",
    link: "#3b82f6",
    linkHover: "#60a5fa",
    error: "#ef4444",
    warning: "#f59e0b",
    success: "#10b981"
  },
  fonts: d.fonts,
  spacing: d.spacing,
  borderRadius: d.borderRadius
};
function u(n, e) {
  const { colors: t, fonts: o, spacing: i, borderRadius: a } = n, r = i.unit;
  return `
    /* Base Styles */
    .mdv-app {
      font-family: ${o.body};
      color: ${t.textPrimary};
      background-color: ${t.background};
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .mdv-app * {
      box-sizing: border-box;
    }

    /* Header */
    .mdv-header {
      background-color: ${t.surface};
      border-bottom: 1px solid ${t.border};
      padding: ${r * 2}px ${r * 3}px;
      display: flex;
      align-items: center;
      gap: ${r * 2}px;
    }

    .mdv-mobile-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: ${t.textPrimary};
      padding: ${r}px;
    }

    .mdv-logo {
      height: 32px;
      width: auto;
    }

    .mdv-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${t.primary};
      margin: 0;
    }

    /* Layout */
    .mdv-layout {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    /* Sidebar */
    .mdv-sidebar {
      width: ${i.sidebarWidth};
      background-color: ${t.surface};
      border-right: 1px solid ${t.border};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    /* Search */
    .mdv-search {
      padding: ${r * 2}px;
      border-bottom: 1px solid ${t.border};
    }

    .mdv-search-input {
      width: 100%;
      padding: ${r * 1.5}px ${r * 2}px;
      background-color: ${t.background};
      border: 1px solid ${t.border};
      border-radius: ${a};
      color: ${t.textPrimary};
      font-size: 0.875rem;
      transition: border-color 0.2s;
    }

    .mdv-search-input:focus {
      outline: none;
      border-color: ${t.primary};
      box-shadow: 0 0 0 3px ${t.primary}33;
    }

    /* Navigation */
    .mdv-navigation {
      flex: 1;
      overflow-y: auto;
      padding: ${r}px 0;
    }

    .mdv-nav-list,
    .mdv-nav-sublist {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mdv-nav-group {
      margin-bottom: ${r}px;
    }

    .mdv-nav-category {
      padding: ${r}px ${r * 2}px;
      font-weight: 600;
      color: ${t.textSecondary};
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    .mdv-nav-category.collapsible:hover {
      color: ${t.textPrimary};
    }

    .mdv-collapse-icon {
      transition: transform 0.2s;
    }

    .mdv-nav-item {
      margin: ${r * 0.5}px ${r}px;
    }

    .mdv-nav-link {
      display: block;
      padding: ${r * 1.5}px ${r * 2}px;
      color: ${t.textSecondary};
      text-decoration: none;
      border-radius: ${a};
      transition: all 0.2s;
    }

    .mdv-nav-link:hover {
      background-color: ${t.background};
      color: ${t.textPrimary};
      transform: translateX(4px);
    }

    .mdv-nav-link.active {
      background-color: ${t.primary};
      color: white;
    }

    .mdv-nav-title {
      font-weight: 500;
      display: block;
    }

    .mdv-nav-description {
      font-size: 0.75rem;
      margin-top: ${r * 0.5}px;
      opacity: 0.8;
    }

    .mdv-nav-tags {
      display: flex;
      flex-wrap: wrap;
      gap: ${r * 0.5}px;
      margin-top: ${r * 0.5}px;
    }

    .mdv-tag {
      font-size: 0.625rem;
      padding: ${r * 0.25}px ${r * 0.75}px;
      background-color: ${t.primary}22;
      color: ${t.primary};
      border-radius: ${a};
    }

    /* Content */
    .mdv-content {
      flex: 1;
      overflow-y: auto;
      background-color: ${t.background};
    }

    .mdv-document {
      max-width: ${i.containerMaxWidth};
      margin: 0 auto;
      padding: ${r * 4}px;
    }

    .mdv-document-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: ${r * 4}px;
      color: ${t.textPrimary};
      font-family: ${o.heading};
    }

    /* Markdown Content */
    .mdv-document-content {
      font-size: 1rem;
      line-height: 1.7;
      color: ${t.textSecondary};
    }

    .mdv-document-content h1,
    .mdv-document-content h2,
    .mdv-document-content h3,
    .mdv-document-content h4,
    .mdv-document-content h5,
    .mdv-document-content h6 {
      font-family: ${o.heading};
      font-weight: 600;
      margin-top: ${r * 3}px;
      margin-bottom: ${r * 2}px;
      color: ${t.textPrimary};
    }

    .mdv-document-content h1 { font-size: 2rem; }
    .mdv-document-content h2 { font-size: 1.5rem; }
    .mdv-document-content h3 { font-size: 1.25rem; }
    .mdv-document-content h4 { font-size: 1.125rem; }

    .mdv-document-content p {
      margin-bottom: ${r * 2}px;
    }

    .mdv-document-content a {
      color: ${t.link};
      text-decoration: none;
      transition: color 0.2s;
    }

    .mdv-document-content a:hover {
      color: ${t.linkHover};
      text-decoration: underline;
    }

    .mdv-document-content ul,
    .mdv-document-content ol {
      margin-bottom: ${r * 2}px;
      padding-left: ${r * 4}px;
    }

    .mdv-document-content li {
      margin-bottom: ${r}px;
    }

    .mdv-document-content code {
      font-family: ${o.code};
      font-size: 0.875em;
      padding: ${r * 0.25}px ${r * 0.75}px;
      background-color: ${t.codeBackground};
      border-radius: ${a};
    }

    .mdv-code-block {
      position: relative;
      margin-bottom: ${r * 2}px;
    }

    .mdv-document-content pre {
      background-color: ${t.codeBackground};
      padding: ${r * 2}px;
      border-radius: ${a};
      overflow-x: auto;
      margin: 0;
    }

    .mdv-document-content pre code {
      background: none;
      padding: 0;
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .mdv-copy-button {
      position: absolute;
      top: ${r}px;
      right: ${r}px;
      padding: ${r * 0.5}px ${r * 1.5}px;
      background-color: ${t.primary};
      color: white;
      border: none;
      border-radius: ${a};
      font-size: 0.75rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .mdv-copy-button:hover {
      background-color: ${t.secondary};
    }

    .mdv-document-content blockquote {
      border-left: 4px solid ${t.primary};
      padding-left: ${r * 2}px;
      margin: ${r * 2}px 0;
      color: ${t.textSecondary};
      font-style: italic;
    }

    .mdv-document-content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: ${r * 2}px;
    }

    .mdv-document-content th,
    .mdv-document-content td {
      padding: ${r * 1.5}px;
      text-align: left;
      border-bottom: 1px solid ${t.border};
    }

    .mdv-document-content th {
      background-color: ${t.surface};
      font-weight: 600;
      color: ${t.textPrimary};
    }

    .mdv-document-content hr {
      border: none;
      border-top: 1px solid ${t.border};
      margin: ${r * 4}px 0;
    }

    /* States */
    .mdv-loading,
    .mdv-error,
    .mdv-welcome {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 1.125rem;
      color: ${t.textSecondary};
    }

    .mdv-error {
      color: ${t.error};
    }

    /* Footer */
    .mdv-footer {
      background-color: ${t.surface};
      border-top: 1px solid ${t.border};
      padding: ${r * 2}px ${r * 3}px;
      text-align: center;
      color: ${t.textSecondary};
      font-size: 0.875rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .mdv-mobile-toggle {
        display: block;
      }

      .mdv-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 1000;
        transform: translateX(-100%);
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
      }

      .mdv-sidebar.open {
        transform: translateX(0);
      }

      .mdv-document {
        padding: ${r * 2}px;
      }

      .mdv-document-title {
        font-size: 2rem;
      }
    }

    /* Scrollbar */
    .mdv-navigation::-webkit-scrollbar,
    .mdv-content::-webkit-scrollbar {
      width: 8px;
    }

    .mdv-navigation::-webkit-scrollbar-track,
    .mdv-content::-webkit-scrollbar-track {
      background: ${t.background};
    }

    .mdv-navigation::-webkit-scrollbar-thumb,
    .mdv-content::-webkit-scrollbar-thumb {
      background: ${t.border};
      border-radius: 4px;
    }

    .mdv-navigation::-webkit-scrollbar-thumb:hover,
    .mdv-content::-webkit-scrollbar-thumb:hover {
      background: ${t.textSecondary};
    }

    /* Syntax highlighting overrides */
    .hljs {
      background: transparent !important;
      color: ${t.textPrimary} !important;
    }

    /* Custom CSS */
    ${n.customCSS || ""}
  `;
}
function p(n, e, t) {
  const o = t.showCategories ? g(n) : { "All Documents": n };
  return `
    <ul class="mdv-nav-list">
      ${Object.entries(o).map(([a, r]) => ({
    category: a,
    documents: f(r, t.sortBy || "order")
  })).map((a) => v(a, e, t)).join("")}
    </ul>
  `;
}
function g(n) {
  return n.reduce((e, t) => {
    const o = t.category || "Uncategorized";
    return e[o] || (e[o] = []), e[o].push(t), e;
  }, {});
}
function f(n, e) {
  return [...n].sort((t, o) => {
    switch (e) {
      case "title":
        return t.title.localeCompare(o.title);
      case "order":
        return (t.order || 999) - (o.order || 999);
      default:
        return 0;
    }
  });
}
function v(n, e, t) {
  const o = t.collapsible && n.documents.length > 1;
  return `
    <li class="mdv-nav-group">
      ${n.category !== "All Documents" ? `
        <div class="mdv-nav-category ${o ? "collapsible" : ""}">
          ${n.category}
          ${o ? '<span class="mdv-collapse-icon">▼</span>' : ""}
        </div>
      ` : ""}
      <ul class="mdv-nav-sublist">
        ${n.documents.map((i) => b(i, e, t)).join("")}
      </ul>
    </li>
  `;
}
function b(n, e, t) {
  const o = (e == null ? void 0 : e.id) === n.id, i = t.showTags && n.tags ? $(n.tags) : "", a = t.showDescription && n.description ? `<div class="mdv-nav-description">${n.description}</div>` : "";
  return `
    <li class="mdv-nav-item">
      <a href="#${n.id}" 
         class="mdv-nav-link ${o ? "active" : ""}"
         data-doc-id="${n.id}">
        <span class="mdv-nav-title">${n.title}</span>
        ${a}
        ${i}
      </a>
    </li>
  `;
}
function $(n) {
  return `
    <div class="mdv-nav-tags">
      ${n.map((e) => `<span class="mdv-tag">${e}</span>`).join("")}
    </div>
  `;
}
function x(n) {
  return `
    <div class="mdv-search">
      <input 
        type="text" 
        class="mdv-search-input" 
        placeholder="${n.placeholder || "Search documentation..."}"
        aria-label="Search documentation"
      />
      <div class="mdv-search-results"></div>
    </div>
  `;
}
class y {
  constructor(e) {
    this.cache = /* @__PURE__ */ new Map(), this.source = e;
  }
  async loadAll() {
    return this.source.documents;
  }
  async loadDocument(e) {
    if (this.cache.has(e.id))
      return this.cache.get(e.id);
    let t = "";
    return e.content ? t = e.content : e.file && (t = await this.loadFromSource(e.file)), this.cache.set(e.id, t), t;
  }
  async loadFromSource(e) {
    switch (this.source.type) {
      case "local":
        return this.loadLocal(e);
      case "url":
        return this.loadFromUrl(e);
      case "github":
        return this.loadFromGithub(e);
      case "content":
        return "";
      default:
        throw new Error(`Unknown source type: ${this.source.type}`);
    }
  }
  async loadLocal(e) {
    const t = this.source.basePath ? `${this.source.basePath}/${e}` : e;
    try {
      const o = await fetch(t);
      if (!o.ok)
        throw new Error(`Failed to load ${e}: ${o.statusText}`);
      return await o.text();
    } catch (o) {
      throw new Error(`Failed to load local file ${e}: ${o}`);
    }
  }
  async loadFromUrl(e) {
    const t = this.source.baseUrl ? `${this.source.baseUrl}/${e}` : e;
    try {
      const o = await fetch(t, {
        headers: this.source.headers || {}
      });
      if (!o.ok)
        throw new Error(`Failed to load ${t}: ${o.statusText}`);
      return await o.text();
    } catch (o) {
      throw new Error(`Failed to load from URL ${t}: ${o}`);
    }
  }
  async loadFromGithub(e) {
    const t = e.split("/");
    if (t.length < 3)
      throw new Error("Invalid GitHub path format. Expected: owner/repo/path/to/file");
    const [o, i, ...a] = t, r = `https://api.github.com/repos/${o}/${i}/contents/${a.join("/")}`;
    try {
      const s = await fetch(r, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...this.source.headers || {}
        }
      });
      if (!s.ok)
        throw new Error(`GitHub API error: ${s.statusText}`);
      const l = await s.json();
      if (l.content)
        return atob(l.content);
      throw new Error("No content found in GitHub response");
    } catch (s) {
      throw new Error(`Failed to load from GitHub ${e}: ${s}`);
    }
  }
  clearCache() {
    this.cache.clear();
  }
}
class w {
  constructor(e, t) {
    this.currentRoute = "", this.mode = e, this.onRouteChange = t, e === "hash" && (window.addEventListener("hashchange", this.handleHashChange.bind(this)), this.handleHashChange());
  }
  handleHashChange() {
    const e = window.location.hash.slice(1);
    e && e !== this.currentRoute && (this.currentRoute = e, this.onRouteChange(e));
  }
  setRoute(e) {
    this.currentRoute = e, this.mode === "hash" && (window.location.hash = e);
  }
  getCurrentRoute() {
    return this.mode === "hash" ? window.location.hash.slice(1) || null : this.currentRoute || null;
  }
  destroy() {
    this.mode === "hash" && window.removeEventListener("hashchange", this.handleHashChange.bind(this));
  }
}
class k {
  constructor(e) {
    if (this.router = null, this.styles = null, this.config = {
      theme: d,
      search: { enabled: !0 },
      navigation: {
        showCategories: !0,
        showTags: !1,
        collapsible: !0,
        showDescription: !0
      },
      render: {
        syntaxHighlighting: !0,
        copyCodeButton: !0,
        linkTarget: "_self"
      },
      responsive: !0,
      routing: "hash",
      ...e
    }, this.state = {
      currentDocument: null,
      documents: [],
      searchQuery: "",
      searchResults: [],
      loading: !1,
      error: null,
      sidebarOpen: !1
    }, this.container = typeof e.container == "string" ? document.querySelector(e.container) : e.container, !this.container)
      throw new Error("Container element not found");
    this.loader = new y(this.config.source), this.init();
  }
  async init() {
    var e, t;
    try {
      this.state.loading = !0, this.configureMarked(), this.applyTheme(this.config.theme), await this.loadDocuments(), this.config.routing !== "none" && (this.router = new w(this.config.routing, (i) => {
        this.loadDocument(i);
      })), this.render();
      const o = ((e = this.router) == null ? void 0 : e.getCurrentRoute()) || ((t = this.state.documents[0]) == null ? void 0 : t.id);
      o && await this.loadDocument(o), this.state.loading = !1;
    } catch (o) {
      this.handleError(o);
    }
  }
  configureMarked() {
    var e;
    (e = this.config.render) != null && e.syntaxHighlighting && c.use(m({
      langPrefix: "hljs language-",
      highlight(t, o) {
        const i = h.getLanguage(o) ? o : "plaintext";
        return h.highlight(t, { language: i }).value;
      }
    })), c.setOptions({
      gfm: !0,
      breaks: !0
    });
  }
  applyTheme(e) {
    this.styles && this.styles.remove(), this.styles = document.createElement("style"), this.styles.textContent = u(e, this.config), document.head.appendChild(this.styles);
  }
  async loadDocuments() {
    const e = await this.loader.loadAll();
    this.state.documents = e;
  }
  render() {
    this.container.innerHTML = `
      <div class="mdv-app">
        ${this.renderHeader()}
        <div class="mdv-layout">
          ${this.renderSidebar()}
          ${this.renderContent()}
        </div>
        ${this.config.footer ? this.renderFooter() : ""}
      </div>
    `, this.attachEventListeners();
  }
  renderHeader() {
    return `
      <header class="mdv-header">
        <button class="mdv-mobile-toggle" aria-label="Toggle navigation">☰</button>
        ${this.config.logo ? `<img src="${this.config.logo}" alt="Logo" class="mdv-logo">` : ""}
        <h1 class="mdv-title">${this.config.title || "Documentation"}</h1>
      </header>
    `;
  }
  renderSidebar() {
    var o;
    const e = p(
      this.state.documents,
      this.state.currentDocument,
      this.config.navigation
    ), t = (o = this.config.search) != null && o.enabled ? x(this.config.search) : "";
    return `
      <aside class="mdv-sidebar ${this.state.sidebarOpen ? "open" : ""}">
        ${t}
        <nav class="mdv-navigation">
          ${e}
        </nav>
      </aside>
    `;
  }
  renderContent() {
    return this.state.loading ? '<main class="mdv-content"><div class="mdv-loading">Loading...</div></main>' : this.state.error ? `<main class="mdv-content"><div class="mdv-error">${this.state.error.message}</div></main>` : this.state.currentDocument ? `
      <main class="mdv-content">
        <article class="mdv-document">
          <h1 class="mdv-document-title">${this.state.currentDocument.title}</h1>
          <div class="mdv-document-content">
            ${this.renderMarkdown(this.state.currentDocument.content || "")}
          </div>
        </article>
      </main>
    ` : '<main class="mdv-content"><div class="mdv-welcome">Select a document to begin</div></main>';
  }
  renderFooter() {
    return `<footer class="mdv-footer">${this.config.footer}</footer>`;
  }
  renderMarkdown(e) {
    var o, i;
    let t = c(e);
    return (o = this.config.render) != null && o.copyCodeButton && (t = t.replace(/<pre><code/g, '<div class="mdv-code-block"><button class="mdv-copy-button">Copy</button><pre><code'), t = t.replace(/<\/code><\/pre>/g, "</code></pre></div>")), ((i = this.config.render) == null ? void 0 : i.linkTarget) === "_blank" && (t = t.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ')), t;
  }
  attachEventListeners() {
    const e = this.container.querySelector(".mdv-mobile-toggle");
    e == null || e.addEventListener("click", () => {
      this.state.sidebarOpen = !this.state.sidebarOpen, this.updateSidebar();
    }), this.container.querySelectorAll(".mdv-nav-link").forEach((o) => {
      o.addEventListener("click", (i) => {
        i.preventDefault();
        const a = o.getAttribute("data-doc-id");
        a && this.loadDocument(a);
      });
    });
    const t = this.container.querySelector(".mdv-search-input");
    t == null || t.addEventListener("input", (o) => {
      this.handleSearch(o.target.value);
    }), this.container.querySelectorAll(".mdv-copy-button").forEach((o) => {
      o.addEventListener("click", (i) => {
        var r;
        const a = (r = i.target.nextElementSibling) == null ? void 0 : r.querySelector("code");
        a && (navigator.clipboard.writeText(a.textContent || ""), o.textContent = "Copied!", setTimeout(() => {
          o.textContent = "Copy";
        }, 2e3));
      });
    });
  }
  updateSidebar() {
    const e = this.container.querySelector(".mdv-sidebar");
    e && e.classList.toggle("open", this.state.sidebarOpen);
  }
  async loadDocument(e) {
    var t;
    try {
      const o = this.state.documents.find((i) => i.id === e);
      if (!o)
        throw new Error(`Document ${e} not found`);
      this.state.loading = !0, this.render(), !o.content && o.file && (o.content = await this.loader.loadDocument(o)), this.state.currentDocument = o, this.state.loading = !1, this.router && this.router.setRoute(e), this.config.onDocumentLoad && this.config.onDocumentLoad(o), this.render(), (t = this.container.querySelector(".mdv-content")) == null || t.scrollTo(0, 0), window.innerWidth <= 768 && (this.state.sidebarOpen = !1, this.updateSidebar());
    } catch (o) {
      this.handleError(o);
    }
  }
  handleSearch(e) {
    var o;
    if (this.state.searchQuery = e, !e.trim()) {
      this.state.searchResults = [], this.render();
      return;
    }
    const t = this.state.documents.filter((i) => [
      i.title,
      i.description || "",
      i.content || "",
      ...i.tags || []
    ].join(" ").toLowerCase().includes(e.toLowerCase()));
    this.state.searchResults = t.slice(0, ((o = this.config.search) == null ? void 0 : o.maxResults) || 10), this.render();
  }
  handleError(e) {
    this.state.error = e, this.state.loading = !1, this.config.onError && this.config.onError(e), this.render();
  }
  async refresh() {
    await this.loadDocuments(), this.render();
  }
  setTheme(e) {
    this.config.theme = e, this.applyTheme(e);
  }
  destroy() {
    this.styles && this.styles.remove(), this.router && this.router.destroy(), this.container.innerHTML = "";
  }
}
function R(n) {
  return new k(n);
}
export {
  k as MarkdownDocsViewer,
  R as createViewer,
  D as darkTheme,
  d as defaultTheme
};
//# sourceMappingURL=index.es.js.map
