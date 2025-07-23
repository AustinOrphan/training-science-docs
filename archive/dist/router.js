export class Router {
    constructor(mode, onRouteChange) {
        this.currentRoute = '';
        this.mode = mode;
        this.onRouteChange = onRouteChange;
        if (mode === 'hash') {
            window.addEventListener('hashchange', this.handleHashChange.bind(this));
            this.handleHashChange();
        }
    }
    handleHashChange() {
        const hash = window.location.hash.slice(1);
        if (hash && hash !== this.currentRoute) {
            this.currentRoute = hash;
            this.onRouteChange(hash);
        }
    }
    setRoute(docId) {
        this.currentRoute = docId;
        if (this.mode === 'hash') {
            window.location.hash = docId;
        }
    }
    getCurrentRoute() {
        if (this.mode === 'hash') {
            return window.location.hash.slice(1) || null;
        }
        return this.currentRoute || null;
    }
    destroy() {
        if (this.mode === 'hash') {
            window.removeEventListener('hashchange', this.handleHashChange.bind(this));
        }
    }
}
