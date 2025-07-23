import { Document, DocumentSource } from './types';
export declare class DocumentLoader {
    private source;
    private cache;
    constructor(source: DocumentSource);
    loadAll(): Promise<Document[]>;
    loadDocument(doc: Document): Promise<string>;
    private loadFromSource;
    private loadLocal;
    private loadFromUrl;
    private loadFromGithub;
    clearCache(): void;
}
