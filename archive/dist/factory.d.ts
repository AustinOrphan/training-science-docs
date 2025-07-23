import { MarkdownDocsViewer } from './viewer';
import { DocumentationConfig } from './types';
/**
 * Factory function to create a new documentation viewer instance
 */
export declare function createViewer(config: DocumentationConfig): MarkdownDocsViewer;
/**
 * Initialize viewer with minimal configuration
 */
export declare function quickStart(container: string | HTMLElement, documents: any[]): MarkdownDocsViewer;
