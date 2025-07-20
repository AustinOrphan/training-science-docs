import { marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import { defaultTheme } from './themes';
import { generateStyles } from './styles';
import { createNavigation } from './navigation';
import { createSearch } from './search';
import { DocumentLoader } from './loader';
import { Router } from './router';
export class MarkdownDocsViewer {
    constructor(config) {
        this.router = null;
        this.styles = null;
        this.config = {
            theme: defaultTheme,
            search: { enabled: true },
            navigation: {
                showCategories: true,
                showTags: false,
                collapsible: true,
                showDescription: true
            },
            render: {
                syntaxHighlighting: true,
                copyCodeButton: true,
                linkTarget: '_self'
            },
            responsive: true,
            routing: 'hash',
            ...config
        };
        this.state = {
            currentDocument: null,
            documents: [],
            searchQuery: '',
            searchResults: [],
            loading: false,
            error: null,
            sidebarOpen: false
        };
        this.container = typeof config.container === 'string'
            ? document.querySelector(config.container)
            : config.container;
        if (!this.container) {
            throw new Error('Container element not found');
        }
        this.loader = new DocumentLoader(this.config.source);
        this.init();
    }
    async init() {
        try {
            this.state.loading = true;
            // Configure marked
            this.configureMarked();
            // Apply theme
            this.applyTheme(this.config.theme);
            // Load documents
            await this.loadDocuments();
            // Setup routing
            if (this.config.routing !== 'none') {
                this.router = new Router(this.config.routing, (docId) => {
                    this.loadDocument(docId);
                });
            }
            // Render UI
            this.render();
            // Load initial document
            const initialDoc = this.router?.getCurrentRoute() || this.state.documents[0]?.id;
            if (initialDoc) {
                await this.loadDocument(initialDoc);
            }
            this.state.loading = false;
        }
        catch (error) {
            this.handleError(error);
        }
    }
    configureMarked() {
        if (this.config.render?.syntaxHighlighting) {
            marked.use(markedHighlight({
                langPrefix: 'hljs language-',
                highlight(code, lang) {
                    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                    return hljs.highlight(code, { language }).value;
                }
            }));
        }
        marked.setOptions({
            gfm: true,
            breaks: true
        });
    }
    applyTheme(theme) {
        // Remove existing styles
        if (this.styles) {
            this.styles.remove();
        }
        // Generate and apply new styles
        this.styles = document.createElement('style');
        this.styles.textContent = generateStyles(theme, this.config);
        document.head.appendChild(this.styles);
    }
    async loadDocuments() {
        const documents = await this.loader.loadAll();
        this.state.documents = documents;
    }
    render() {
        this.container.innerHTML = `
      <div class="mdv-app">
        ${this.renderHeader()}
        <div class="mdv-layout">
          ${this.renderSidebar()}
          ${this.renderContent()}
        </div>
        ${this.config.footer ? this.renderFooter() : ''}
      </div>
    `;
        this.attachEventListeners();
    }
    renderHeader() {
        return `
      <header class="mdv-header">
        <button class="mdv-mobile-toggle" aria-label="Toggle navigation">☰</button>
        ${this.config.logo ? `<img src="${this.config.logo}" alt="Logo" class="mdv-logo">` : ''}
        <h1 class="mdv-title">${this.config.title || 'Documentation'}</h1>
      </header>
    `;
    }
    renderSidebar() {
        const navigation = createNavigation(this.state.documents, this.state.currentDocument, this.config.navigation);
        const search = this.config.search?.enabled
            ? createSearch(this.config.search)
            : '';
        return `
      <aside class="mdv-sidebar ${this.state.sidebarOpen ? 'open' : ''}">
        ${search}
        <nav class="mdv-navigation">
          ${navigation}
        </nav>
      </aside>
    `;
    }
    renderContent() {
        if (this.state.loading) {
            return '<main class="mdv-content"><div class="mdv-loading">Loading...</div></main>';
        }
        if (this.state.error) {
            return `<main class="mdv-content"><div class="mdv-error">${this.state.error.message}</div></main>`;
        }
        if (!this.state.currentDocument) {
            return '<main class="mdv-content"><div class="mdv-welcome">Select a document to begin</div></main>';
        }
        return `
      <main class="mdv-content">
        <article class="mdv-document">
          <h1 class="mdv-document-title">${this.state.currentDocument.title}</h1>
          <div class="mdv-document-content">
            ${this.renderMarkdown(this.state.currentDocument.content || '')}
          </div>
        </article>
      </main>
    `;
    }
    renderFooter() {
        return `<footer class="mdv-footer">${this.config.footer}</footer>`;
    }
    renderMarkdown(content) {
        let html = marked(content);
        // Add copy buttons to code blocks if enabled
        if (this.config.render?.copyCodeButton) {
            html = html.replace(/<pre><code/g, '<div class="mdv-code-block"><button class="mdv-copy-button">Copy</button><pre><code');
            html = html.replace(/<\/code><\/pre>/g, '</code></pre></div>');
        }
        // Apply link target
        if (this.config.render?.linkTarget === '_blank') {
            html = html.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');
        }
        return html;
    }
    attachEventListeners() {
        // Mobile toggle
        const toggle = this.container.querySelector('.mdv-mobile-toggle');
        toggle?.addEventListener('click', () => {
            this.state.sidebarOpen = !this.state.sidebarOpen;
            this.updateSidebar();
        });
        // Navigation links
        this.container.querySelectorAll('.mdv-nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const docId = link.getAttribute('data-doc-id');
                if (docId) {
                    this.loadDocument(docId);
                }
            });
        });
        // Search
        const searchInput = this.container.querySelector('.mdv-search-input');
        searchInput?.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });
        // Copy buttons
        this.container.querySelectorAll('.mdv-copy-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const codeBlock = e.target.nextElementSibling?.querySelector('code');
                if (codeBlock) {
                    navigator.clipboard.writeText(codeBlock.textContent || '');
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                }
            });
        });
    }
    updateSidebar() {
        const sidebar = this.container.querySelector('.mdv-sidebar');
        if (sidebar) {
            sidebar.classList.toggle('open', this.state.sidebarOpen);
        }
    }
    async loadDocument(docId) {
        try {
            const doc = this.state.documents.find(d => d.id === docId);
            if (!doc) {
                throw new Error(`Document ${docId} not found`);
            }
            this.state.loading = true;
            this.render();
            // Load content if not already loaded
            if (!doc.content && doc.file) {
                doc.content = await this.loader.loadDocument(doc);
            }
            this.state.currentDocument = doc;
            this.state.loading = false;
            if (this.router) {
                this.router.setRoute(docId);
            }
            if (this.config.onDocumentLoad) {
                this.config.onDocumentLoad(doc);
            }
            this.render();
            // Scroll to top
            this.container.querySelector('.mdv-content')?.scrollTo(0, 0);
            // Close mobile sidebar
            if (window.innerWidth <= 768) {
                this.state.sidebarOpen = false;
                this.updateSidebar();
            }
        }
        catch (error) {
            this.handleError(error);
        }
    }
    handleSearch(query) {
        this.state.searchQuery = query;
        if (!query.trim()) {
            this.state.searchResults = [];
            this.render();
            return;
        }
        // Simple search implementation
        const results = this.state.documents.filter(doc => {
            const searchIn = [
                doc.title,
                doc.description || '',
                doc.content || '',
                ...(doc.tags || [])
            ].join(' ').toLowerCase();
            return searchIn.includes(query.toLowerCase());
        });
        this.state.searchResults = results.slice(0, this.config.search?.maxResults || 10);
        this.render();
    }
    handleError(error) {
        this.state.error = error;
        this.state.loading = false;
        if (this.config.onError) {
            this.config.onError(error);
        }
        this.render();
    }
    async refresh() {
        await this.loadDocuments();
        this.render();
    }
    setTheme(theme) {
        this.config.theme = theme;
        this.applyTheme(theme);
    }
    destroy() {
        if (this.styles) {
            this.styles.remove();
        }
        if (this.router) {
            this.router.destroy();
        }
        this.container.innerHTML = '';
    }
}
