import { DocumentationConfig, Theme } from './types';
export declare class MarkdownDocsViewer {
    private config;
    private state;
    private container;
    private loader;
    private router;
    private styles;
    constructor(config: DocumentationConfig);
    private init;
    private configureMarked;
    private applyTheme;
    private loadDocuments;
    private render;
    private renderHeader;
    private renderSidebar;
    private renderContent;
    private renderFooter;
    private renderMarkdown;
    private attachEventListeners;
    private updateSidebar;
    private loadDocument;
    private handleSearch;
    private handleError;
    refresh(): Promise<void>;
    setTheme(theme: Theme): void;
    destroy(): void;
}
