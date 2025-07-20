import { MarkdownDocsViewer } from './viewer';
/**
 * Factory function to create a new documentation viewer instance
 */
export function createViewer(config) {
    return new MarkdownDocsViewer(config);
}
/**
 * Initialize viewer with minimal configuration
 */
export function quickStart(container, documents) {
    return createViewer({
        container,
        source: {
            type: 'content',
            documents
        }
    });
}
