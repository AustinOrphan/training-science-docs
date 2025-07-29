# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static documentation site for training science research containing 40+ peer-reviewed sources covering physiological concepts (VDOT, Critical Speed, HRV), training methodology (periodization, polarized training), and injury prevention. The site is built using the markdown-docs-viewer library and deployed at https://austinorphan.com/training-science-docs/.

## Development Commands

### Local Development
- `python3 -m http.server 8000` - Serve locally for testing (from root directory)
- Open `http://localhost:8000/` - Unified viewer auto-detects environment

### Viewer Library Development (if working on /viewer submodule)
- `cd viewer && npm run dev` - Start Vite development server on port 5000
- `cd viewer && npm run build` - Build library (creates `dist/index.umd.cjs`)
- `cd viewer && npm test` - Run all tests
- `cd viewer && npm run lint` - Lint TypeScript files

### Content Management
All markdown files are in the repository root and automatically served via GitHub raw URLs to the live documentation viewer.

## Architecture Overview

This repository follows a simplified static site pattern:

### Content Architecture
- **Core documentation**: 5 main markdown files in repository root
  - `training-system-whitepaper.md` - Academic overview
  - `training-science-references.md` - Research sources by topic  
  - `training-implementation-guide.md` - Science-to-code mapping
  - `training-calculations-reference.md` - Developer formulas
  - `training-bibliography.md` - Complete citations
- **Supporting content**: README.md, ai-disclaimer.md, collaboration-templates/
- **Organization folders**: planning/, resources/, archive/
- **Content delivery**: GitHub raw URLs serve content to live viewer

### Deployment Architecture  
- **Unified viewer**: `/index.html` (auto-detects dev/prod environment)
  - Development mode: Uses local files via `type: 'local'`
  - Production mode: Uses GitHub raw URLs via `type: 'url'`
- **Git submodule**: `/viewer/` contains the viewer library source
- **Direct loading**: Both environments load viewer from `viewer/dist/index.umd.cjs`
- **Legacy redirects**: Old URLs (`/docs-viewer.html`, `/docs/index.html`) redirect to `/index.html`

### Development Model
1. **Content development**: Edit markdown files in root, changes auto-deploy
2. **Viewer development**: Work in `/viewer/` submodule, build creates `dist/index.umd.cjs`
3. **No manual copying**: Viewer is loaded directly from submodule build output

### Folder Organization
- **`planning/`**: Project management files (roadmaps, guides, trackers, specifications)
- **`resources/`**: Research resources and data files
- **`archive/`**: Files moved for manual review or potential removal
- **`collaboration-templates/`**: Legal and partnership documentation
- **`docs/`**: Production deployment files
- **`viewer/`**: Git submodule for the documentation viewer library

## Document Configuration

The viewer is configured to load 6 documents in two categories:

### Category: Introduction
- `README.md` → "Project Overview" 

### Category: Core Documents  
- `training-system-whitepaper.md` → "Training System Whitepaper"
- `training-science-references.md` → "Scientific References" 
- `training-implementation-guide.md` → "Implementation Guide"
- `training-calculations-reference.md` → "Calculations Reference"
- `training-bibliography.md` → "Complete Bibliography"

Document source configuration:
```javascript
source: {
    type: 'url',
    baseUrl: 'https://raw.githubusercontent.com/AustinOrphan/training-science-docs/main'
}
```

## Theme Switching Implementation

The site uses the markdown-docs-viewer's built-in theme system:

```javascript
theme: {
    name: 'default',
    switcherPosition: 'header',      // Shows theme switcher in header
    darkTogglePosition: 'header',    // Shows dark mode toggle in header
    showPreview: true,               // Shows theme preview
    showDescription: false,          // Don't show theme descriptions
    allowCustomThemes: true,         // Allow custom theme creation
    enablePersistence: true,         // Remember theme choice
    storageKey: 'training-docs-theme'
}
```

Custom "training-science" theme with blue accent colors is registered via:

```javascript
const trainingTheme = viewer.createCustomTheme('training-science', {
    colors: {
        primary: '#2563eb',
        textPrimary: '#1f2937',
        background: '#f8fafc',
        surface: '#ffffff',
        border: '#e2e8f0',
        code: '#7c3aed',
        codeBackground: '#f3f4f6'
    }
});
viewer.registerTheme(trainingTheme);
```

## UMD Build Usage

When using the markdown-docs-viewer UMD build:

1. **Global access**: Use `window.MarkdownDocsViewer` not just `MarkdownDocsViewer`
2. **Dependencies**: Load marked, marked-highlight, and highlight.js from CDN before the viewer
3. **Highlight.js fix**: Ensure `window.hljs = hljs` for proper dependency detection
4. **Document source**: Use GitHub raw URLs for reliable document loading

## Known Issues

- highlight.js dependency detection fails in UMD builds (reported as Issue #30 in viewer repo)
- Accessibility issue with theme switcher aria-hidden (reported as Issue #31 in viewer repo)
- Basic syntax highlighting works despite dependency warnings

## Mobile Configuration

The viewer includes comprehensive mobile support:

```javascript
mobile: {
    enabled: true,
    navigation: {
        swipeGestures: true,
        collapseBehavior: 'overlay',
        showBackdrop: true,
        closeOnOutsideClick: true
    },
    gestures: {
        swipeToNavigate: true,
        swipeThreshold: 50
    },
    typography: {
        baseFontSize: {
            xs: 14, sm: 15, md: 16
        }
    }
}
```

## Content Guidelines

This documentation follows academic standards:
- All claims must include peer-reviewed sources
- Maintain objective, evidence-based tone  
- Include DOI links where available
- Follow proper citation formatting
- Focus on scientific accuracy over marketing

## Updating Content Process

1. **Edit markdown files** in repository root
2. **Commit and push** changes to main branch
3. **Live site updates automatically** via GitHub raw URLs
4. **No build step required** for content changes

## Common Pitfalls

1. **Don't assume CDN packages exist** - The markdown-docs-viewer isn't published to npm despite the README suggesting it
2. **Path detection**: The unified viewer auto-detects environment based on URL path
3. **Dependency loading order**: highlight.js must load before the viewer for proper detection
4. **Local vs live paths**: Development uses `type: 'local'`, production uses `type: 'url'` with GitHub raw URLs
5. **Academic rigor**: All content changes must maintain scientific accuracy and include proper citations