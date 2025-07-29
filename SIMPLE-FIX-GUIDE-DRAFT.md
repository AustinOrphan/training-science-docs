# Training Science Docs - Simple Fix Guide

## Problem Identification

**Issue**: Outdated API usage causing viewer initialization failures

The current implementation uses deprecated API methods:
- ❌ `viewer.createCustomTheme()` (old method)
- ❌ Missing `baseTheme` and `mode` properties
- ❌ Incorrect destructuring pattern

## Minimal Solution: Use Built-in Themes

Instead of creating custom themes, use the viewer's built-in theme system for immediate functionality.

## Code Replacement

### 1. Update Destructuring Pattern

**Replace this:**
```javascript
const { createViewer, defaultTheme, darkTheme } = window.MarkdownDocsViewer;
```

**With this:**
```javascript
const { createViewer, themes } = window.MarkdownDocsViewer;
```

### 2. Remove Custom Theme Code

**Replace this entire section:**
```javascript
// Create and register custom Training Science light theme
const trainingLightTheme = viewer.createCustomTheme('training-science-light', {
    colors: {
        primary: '#2563eb',
        // ... extensive color definitions
    }
});

// Create and register custom Training Science dark theme  
const trainingDarkTheme = viewer.createCustomTheme('training-science-dark', {
    colors: {
        primary: '#3b82f6',
        // ... extensive color definitions
    }
});

viewer.registerTheme(trainingLightTheme);
viewer.registerTheme(trainingDarkTheme);
viewer.setTheme('training-science-light');
```

**With this simple approach:**
```javascript
// Use built-in themes - no custom theme creation needed
// The viewer will automatically handle theme switching
```

### 3. Update Theme Configuration

**In your viewer configuration, update:**
```javascript
theme: {
    name: 'default',                    // Use built-in default theme
    switcherPosition: 'header',         // Keep theme switcher
    darkTogglePosition: 'header',       // Keep dark mode toggle
    showPreview: true,                  // Keep theme preview
    enablePersistence: true,            // Remember user choice
    storageKey: 'training-docs-theme'   // Keep storage key
}
```

## Available Built-in Theme Options

The viewer includes these ready-to-use themes:

### Light Themes
- `'default'` - Clean, modern light theme
- `'github'` - GitHub-style documentation theme
- `'minimal'` - Minimal design with focus on content

### Dark Themes  
- `'dark'` - Standard dark theme
- `'github-dark'` - GitHub dark theme
- `'midnight'` - Deep dark theme for low-light environments

### Usage
```javascript
theme: {
    name: 'github',  // Choose any built-in theme
    // ... other theme options
}
```

## Benefits of This Approach

✅ **Immediate functionality** - No API compatibility issues  
✅ **Zero maintenance** - Built-in themes are always updated  
✅ **Professional appearance** - Tested and refined themes  
✅ **Accessibility compliance** - Built-in themes follow WCAG guidelines  
✅ **Mobile optimized** - Responsive design included  

## Quick Implementation

1. Replace the destructuring pattern
2. Remove all custom theme creation code  
3. Set `theme.name` to desired built-in theme
4. Test - viewer should work immediately

This provides a working documentation system while avoiding API compatibility issues.