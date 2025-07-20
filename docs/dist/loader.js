export class DocumentLoader {
    constructor(source) {
        this.cache = new Map();
        this.source = source;
    }
    async loadAll() {
        return this.source.documents;
    }
    async loadDocument(doc) {
        // Check cache first
        if (this.cache.has(doc.id)) {
            return this.cache.get(doc.id);
        }
        let content = '';
        if (doc.content) {
            // Content provided directly
            content = doc.content;
        }
        else if (doc.file) {
            // Load from file
            content = await this.loadFromSource(doc.file);
        }
        this.cache.set(doc.id, content);
        return content;
    }
    async loadFromSource(path) {
        switch (this.source.type) {
            case 'local':
                return this.loadLocal(path);
            case 'url':
                return this.loadFromUrl(path);
            case 'github':
                return this.loadFromGithub(path);
            case 'content':
                // Content should be provided in doc.content
                return '';
            default:
                throw new Error(`Unknown source type: ${this.source.type}`);
        }
    }
    async loadLocal(path) {
        // In a real implementation, this would use fs or a bundler
        // For browser usage, files need to be bundled or served
        const fullPath = this.source.basePath ? `${this.source.basePath}/${path}` : path;
        try {
            const response = await fetch(fullPath);
            if (!response.ok) {
                throw new Error(`Failed to load ${path}: ${response.statusText}`);
            }
            return await response.text();
        }
        catch (error) {
            throw new Error(`Failed to load local file ${path}: ${error}`);
        }
    }
    async loadFromUrl(path) {
        const url = this.source.baseUrl ? `${this.source.baseUrl}/${path}` : path;
        try {
            const response = await fetch(url, {
                headers: this.source.headers || {}
            });
            if (!response.ok) {
                throw new Error(`Failed to load ${url}: ${response.statusText}`);
            }
            return await response.text();
        }
        catch (error) {
            throw new Error(`Failed to load from URL ${url}: ${error}`);
        }
    }
    async loadFromGithub(path) {
        // Parse GitHub URL format: owner/repo/path
        const parts = path.split('/');
        if (parts.length < 3) {
            throw new Error('Invalid GitHub path format. Expected: owner/repo/path/to/file');
        }
        const [owner, repo, ...filePath] = parts;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath.join('/')}`;
        try {
            const response = await fetch(apiUrl, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    ...(this.source.headers || {})
                }
            });
            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.statusText}`);
            }
            const data = await response.json();
            // Decode base64 content
            if (data.content) {
                return atob(data.content);
            }
            else {
                throw new Error('No content found in GitHub response');
            }
        }
        catch (error) {
            throw new Error(`Failed to load from GitHub ${path}: ${error}`);
        }
    }
    clearCache() {
        this.cache.clear();
    }
}
