export type RoutingMode = 'hash' | 'memory' | 'none';
export declare class Router {
    private mode;
    private onRouteChange;
    private currentRoute;
    constructor(mode: RoutingMode, onRouteChange: (docId: string) => void);
    private handleHashChange;
    setRoute(docId: string): void;
    getCurrentRoute(): string | null;
    destroy(): void;
}
