(function(d,$){typeof exports=="object"&&typeof module<"u"?$(exports,require("marked"),require("marked-highlight"),require("highlight.js")):typeof define=="function"&&define.amd?define(["exports","marked","marked-highlight","highlight.js"],$):(d=typeof globalThis<"u"?globalThis:d||self,$(d.MarkdownDocsViewer={},d.marked,d.markedHighlight,d.hljs))})(this,function(d,$,P,C){"use strict";const oe={github:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',code:'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'},material:{body:'Roboto, "Helvetica Neue", Arial, sans-serif',heading:'Roboto, "Helvetica Neue", Arial, sans-serif',code:'"Roboto Mono", Consolas, Monaco, monospace'},vscode:{body:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',heading:'"Segoe UI Semibold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',code:'Consolas, "Courier New", monospace'},nord:{body:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"JetBrains Mono", "Fira Code", Consolas, Monaco, monospace'},dracula:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"Fira Code", "JetBrains Mono", Consolas, Monaco, monospace'},solarized:{body:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"Source Code Pro", Consolas, Monaco, monospace'},monokai:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"Monaco", "Menlo", "Ubuntu Mono", Consolas, monospace'},ayu:{body:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"Fira Code", "Source Code Pro", Consolas, Monaco, monospace'},catppuccin:{body:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"JetBrains Mono", "Fira Code", Consolas, Monaco, monospace'},tokyo:{body:'"Hiragino Sans", "Yu Gothic UI", "Segoe UI", -apple-system, sans-serif',heading:'"Hiragino Sans", "Yu Gothic UI", "Segoe UI", -apple-system, sans-serif',code:'"SFMono-Regular", "Consolas", "Liberation Mono", Monaco, monospace'},default:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',code:'"Fira Code", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace'}},W={default:{light:{primary:"#3b82f6",secondary:"#10b981",background:"#ffffff",surface:"#f3f4f6",text:"#111827",textPrimary:"#111827",textLight:"#6b7280",textSecondary:"#6b7280",border:"#e5e7eb",code:"#8b5cf6",codeBackground:"#f3f4f6",link:"#3b82f6",linkHover:"#2563eb",error:"#ef4444",warning:"#f59e0b",success:"#10b981"},dark:{primary:"#60a5fa",secondary:"#34d399",background:"#0f172a",surface:"#1e293b",text:"#f1f5f9",textPrimary:"#f1f5f9",textLight:"#94a3b8",textSecondary:"#94a3b8",border:"#334155",code:"#a78bfa",codeBackground:"#1a202c",link:"#60a5fa",linkHover:"#93c5fd",error:"#f87171",warning:"#fbbf24",success:"#34d399"}},github:{light:{primary:"#0969da",secondary:"#1a7f37",background:"#ffffff",surface:"#f6f8fa",text:"#1f2328",textPrimary:"#1f2328",textLight:"#656d76",textSecondary:"#656d76",border:"#d0d7de",code:"#0550ae",codeBackground:"#f6f8fa",link:"#0969da",linkHover:"#0860ca",error:"#d1242f",warning:"#9a6700",success:"#1a7f37"},dark:{primary:"#4493f8",secondary:"#3fb950",background:"#0d1117",surface:"#161b22",text:"#e6edf3",textPrimary:"#e6edf3",textLight:"#7d8590",textSecondary:"#7d8590",border:"#30363d",code:"#79c0ff",codeBackground:"#161b22",link:"#4493f8",linkHover:"#58a6ff",error:"#f85149",warning:"#d29922",success:"#3fb950"}},material:{light:{primary:"#1976d2",secondary:"#00897b",background:"#ffffff",surface:"#f5f5f5",text:"#212121",textPrimary:"#212121",textLight:"#757575",textSecondary:"#757575",border:"#e0e0e0",code:"#673ab7",codeBackground:"#f5f5f5",link:"#1976d2",linkHover:"#1565c0",error:"#d32f2f",warning:"#f57c00",success:"#388e3c"},dark:{primary:"#42a5f5",secondary:"#26a69a",background:"#121212",surface:"#1e1e1e",text:"#ffffff",textPrimary:"#ffffff",textLight:"#b3b3b3",textSecondary:"#b3b3b3",border:"#2e2e2e",code:"#ab47bc",codeBackground:"#1e1e1e",link:"#42a5f5",linkHover:"#64b5f6",error:"#f44336",warning:"#ff9800",success:"#4caf50"}},vscode:{light:{primary:"#0078d4",secondary:"#00bcf2",background:"#ffffff",surface:"#f3f3f3",text:"#323130",textPrimary:"#323130",textLight:"#605e5c",textSecondary:"#605e5c",border:"#c8c6c4",code:"#d83b01",codeBackground:"#f3f2f1",link:"#0078d4",linkHover:"#106ebe",error:"#d13438",warning:"#ff8c00",success:"#107c10"},dark:{primary:"#0078d4",secondary:"#00bcf2",background:"#1e1e1e",surface:"#252526",text:"#cccccc",textPrimary:"#cccccc",textLight:"#969696",textSecondary:"#969696",border:"#3c3c3c",code:"#569cd6",codeBackground:"#1e1e1e",link:"#3794ff",linkHover:"#1f7ce6",error:"#f14c4c",warning:"#ff8c00",success:"#89d185"}},nord:{light:{primary:"#5e81ac",secondary:"#88c0d0",background:"#eceff4",surface:"#e5e9f0",text:"#2e3440",textPrimary:"#2e3440",textLight:"#4c566a",textSecondary:"#4c566a",border:"#d8dee9",code:"#b48ead",codeBackground:"#e5e9f0",link:"#5e81ac",linkHover:"#81a1c1",error:"#bf616a",warning:"#ebcb8b",success:"#a3be8c"},dark:{primary:"#88c0d0",secondary:"#8fbcbb",background:"#2e3440",surface:"#3b4252",text:"#eceff4",textPrimary:"#eceff4",textLight:"#d8dee9",textSecondary:"#d8dee9",border:"#4c566a",code:"#b48ead",codeBackground:"#3b4252",link:"#88c0d0",linkHover:"#8fbcbb",error:"#bf616a",warning:"#ebcb8b",success:"#a3be8c"}},dracula:{light:{primary:"#6272a4",secondary:"#8be9fd",background:"#f8f8f2",surface:"#f0f0f0",text:"#282a36",textPrimary:"#282a36",textLight:"#6272a4",textSecondary:"#6272a4",border:"#e0e0e0",code:"#bd93f9",codeBackground:"#f0f0f0",link:"#6272a4",linkHover:"#44475a",error:"#ff5555",warning:"#ffb86c",success:"#50fa7b"},dark:{primary:"#bd93f9",secondary:"#8be9fd",background:"#282a36",surface:"#44475a",text:"#f8f8f2",textPrimary:"#f8f8f2",textLight:"#6272a4",textSecondary:"#6272a4",border:"#6272a4",code:"#ff79c6",codeBackground:"#44475a",link:"#8be9fd",linkHover:"#50fa7b",error:"#ff5555",warning:"#ffb86c",success:"#50fa7b"}},solarized:{light:{primary:"#268bd2",secondary:"#2aa198",background:"#fdf6e3",surface:"#eee8d5",text:"#586e75",textPrimary:"#073642",textLight:"#586e75",textSecondary:"#586e75",border:"#93a1a1",code:"#d33682",codeBackground:"#eee8d5",link:"#268bd2",linkHover:"#2aa198",error:"#dc322f",warning:"#b58900",success:"#859900"},dark:{primary:"#268bd2",secondary:"#2aa198",background:"#002b36",surface:"#073642",text:"#839496",textPrimary:"#93a1a1",textLight:"#657b83",textSecondary:"#586e75",border:"#586e75",code:"#d33682",codeBackground:"#073642",link:"#268bd2",linkHover:"#2aa198",error:"#dc322f",warning:"#b58900",success:"#859900"}},monokai:{light:{primary:"#f92672",secondary:"#a6e22e",background:"#fafafa",surface:"#f0f0f0",text:"#272822",textPrimary:"#272822",textLight:"#75715e",textSecondary:"#75715e",border:"#e0e0e0",code:"#ae81ff",codeBackground:"#f0f0f0",link:"#f92672",linkHover:"#fd971f",error:"#f92672",warning:"#fd971f",success:"#a6e22e"},dark:{primary:"#f92672",secondary:"#a6e22e",background:"#272822",surface:"#3e3d32",text:"#f8f8f2",textPrimary:"#f8f8f2",textLight:"#75715e",textSecondary:"#75715e",border:"#49483e",code:"#ae81ff",codeBackground:"#3e3d32",link:"#66d9ef",linkHover:"#a6e22e",error:"#f92672",warning:"#fd971f",success:"#a6e22e"}},ayu:{light:{primary:"#399ee6",secondary:"#86b300",background:"#fafafa",surface:"#f3f4f5",text:"#5c6166",textPrimary:"#5c6166",textLight:"#5c6166",textSecondary:"#5c6166",border:"#e7eaed",code:"#a37acc",codeBackground:"#f3f4f5",link:"#399ee6",linkHover:"#4cbf99",error:"#f07178",warning:"#ff8f40",success:"#86b300"},dark:{primary:"#39bae6",secondary:"#95e6cb",background:"#0b0e14",surface:"#11151c",text:"#b3b1ad",textPrimary:"#e6e1cf",textLight:"#4d5566",textSecondary:"#626a73",border:"#1e232a",code:"#d4bfff",codeBackground:"#11151c",link:"#39bae6",linkHover:"#95e6cb",error:"#f28779",warning:"#ffb454",success:"#bae67e"}},catppuccin:{light:{primary:"#1e66f5",secondary:"#179299",background:"#eff1f5",surface:"#e6e9ef",text:"#4c4f69",textPrimary:"#4c4f69",textLight:"#6c6f85",textSecondary:"#6c6f85",border:"#bcc0cc",code:"#8839ef",codeBackground:"#e6e9ef",link:"#1e66f5",linkHover:"#04a5e5",error:"#d20f39",warning:"#df8e1d",success:"#40a02b"},dark:{primary:"#89b4fa",secondary:"#94e2d5",background:"#1e1e2e",surface:"#313244",text:"#cdd6f4",textPrimary:"#cdd6f4",textLight:"#a6adc8",textSecondary:"#a6adc8",border:"#45475a",code:"#cba6f7",codeBackground:"#313244",link:"#89b4fa",linkHover:"#94e2d5",error:"#f38ba8",warning:"#fab387",success:"#a6e3a1"}},tokyo:{light:{primary:"#3d59a1",secondary:"#006a83",background:"#d5d6db",surface:"#e1e2e7",text:"#0d2258",textPrimary:"#0d2258",textLight:"#5c5f69",textSecondary:"#5c5f69",border:"#a8adb7",code:"#5a4a78",codeBackground:"#e1e2e7",link:"#3d59a1",linkHover:"#634da0",error:"#8c4351",warning:"#8f5e15",success:"#485e30"},dark:{primary:"#7aa2f7",secondary:"#7dcfff",background:"#1a1b26",surface:"#24283b",text:"#c0caf5",textPrimary:"#c0caf5",textLight:"#565f89",textSecondary:"#565f89",border:"#414868",code:"#bb9af7",codeBackground:"#24283b",link:"#7aa2f7",linkHover:"#7dcfff",error:"#f7768e",warning:"#e0af68",success:"#9ece6a"}}};function K(n,e){const t=oe[n];return t?t[e]:oe.default[e]}function z(n,e){const t=W[n];if(!t)throw new Error(`Unknown theme: ${n}`);return{name:`${n}-${e}`,colors:t[e],fonts:{body:K(n,"body"),heading:K(n,"heading"),code:K(n,"code")},spacing:{unit:8,containerMaxWidth:"1200px",sidebarWidth:"320px"},borderRadius:n==="material"?"0.25rem":"0.5rem"}}function b(n){return n.replace(/-(light|dark)$/,"")}function S(n){return n.endsWith("-dark")?"dark":"light"}function re(n,e,t){if(typeof n=="object"&&e===void 0&&t===void 0){const o=n;let r="default",i="light";if(o.name){const s=b(o.name);Object.keys(W).includes(s)?(r=s,i=S(o.name)):(o.name==="dark"||o.name.includes("-dark"))&&(r="default",i="dark")}const a=z(r,i);return{...a,...o,name:o.name||`${r}-${i}`,colors:{...a.colors,...o.colors||{}},fonts:{...a.fonts,...o.fonts||{}},spacing:{...a.spacing,...o.spacing||{}}}}if(typeof n=="string"&&e&&t){const o=n,r=z(o,e);return{...r,...t,name:t.name||`${o}-${e}`,colors:{...r.colors,...t.colors||{}},fonts:{...r.fonts,...t.fonts||{}},spacing:{...r.spacing,...t.spacing||{}}}}throw new Error("Invalid arguments to createCustomTheme. Use either createCustomTheme(overrides) or createCustomTheme(baseName, mode, overrides)")}const w=Object.keys(W).reduce((n,e)=>{const t=e;return n[t]={light:z(t,"light"),dark:z(t,"dark")},n},{});function ie(){const n=[];return Object.keys(w).forEach(e=>{const t=w[e];n.push(t.light),n.push(t.dark)}),n}function Pe(){return Object.keys(w)}function ne(n,e){const{colors:t,fonts:o,spacing:r,borderRadius:i}=n,a=r.unit;return`
    /* Base Styles */
    .mdv-app {
      font-family: ${o.body};
      color: ${t.textPrimary};
      background-color: ${t.background};
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .mdv-app * {
      box-sizing: border-box;
    }

    /* Header */
    .mdv-header {
      background-color: ${t.surface};
      border-bottom: 1px solid ${t.border};
      padding: ${a*2}px ${a*3}px;
      display: flex;
      align-items: center;
      gap: ${a*2}px;
      position: relative;
      min-height: 60px;
    }
    
    .mdv-header-actions {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: ${a*1.5}px;
      flex-wrap: nowrap;
    }
    
    .mdv-header-actions .mdv-theme-switcher,
    .mdv-header-actions .mdv-dark-mode-toggle {
      flex-shrink: 0;
    }
    
    .mdv-header-actions .mdv-theme-switcher .mdv-theme-trigger {
      padding: 6px 10px;
      font-size: 0.8rem;
      min-width: auto;
    }
    
    .mdv-header-actions .mdv-dark-mode-toggle {
      gap: 8px;
    }
    
    .mdv-header-actions .mdv-dark-toggle-label {
      font-size: 0.8rem;
      white-space: nowrap;
    }

    .mdv-mobile-toggle {
      display: none;
      background: ${t.primary};
      color: white;
      border: none;
      font-size: 1.25rem;
      cursor: pointer;
      padding: 0;
      width: 48px;
      height: 48px;
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    /* Ensure hamburger icon is visible */
    .mdv-mobile-toggle::before {
      content: '☰';
      display: block;
      line-height: 1;
    }

    .mdv-logo {
      height: 32px;
      width: auto;
    }

    .mdv-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${t.primary};
      margin: 0;
    }

    /* Layout */
    .mdv-layout {
      display: flex;
      flex: 1;
      overflow: hidden;
    }

    /* Sidebar */
    .mdv-sidebar {
      width: ${r.sidebarWidth};
      background-color: ${t.surface};
      border-right: 1px solid ${t.border};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: width 0.3s ease, transform 0.3s ease;
    }

    .mdv-sidebar.collapsed {
      width: 60px;
    }

    .mdv-sidebar.collapsed .mdv-search,
    .mdv-sidebar.collapsed .mdv-navigation {
      display: none;
    }

    /* Sidebar Header with Toggle */
    .mdv-sidebar-header {
      display: none; /* Hidden on mobile, shown on desktop */
      padding: ${a*1.5}px;
      border-bottom: 1px solid ${t.border};
      background-color: ${t.surface};
    }

    .mdv-desktop-sidebar-toggle {
      background: none;
      border: none;
      cursor: pointer;
      padding: ${a}px;
      border-radius: ${i};
      color: ${t.textSecondary};
      transition: all 0.2s;
      font-size: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .mdv-desktop-sidebar-toggle:hover {
      background-color: ${t.background};
      color: ${t.textPrimary};
    }

    .mdv-desktop-sidebar-toggle:focus-visible {
      outline: 2px solid ${t.primary};
      outline-offset: 2px;
    }

    .mdv-sidebar-toggle-icon {
      font-size: 1rem;
      transition: transform 0.2s;
    }

    /* Search */
    .mdv-search {
      padding: ${a*2}px;
      border-bottom: 1px solid ${t.border};
      position: relative;
    }

    .mdv-search-input {
      width: 100%;
      padding: ${a*1.5}px ${a*2}px;
      background-color: ${t.background};
      border: 1px solid ${t.border};
      border-radius: ${i};
      color: ${t.textPrimary};
      font-size: 0.875rem;
      transition: border-color 0.2s, background-color 0.2s, color 0.2s;
    }

    .mdv-search-input:focus {
      outline: none;
      border-color: ${t.primary};
      box-shadow: 0 0 0 3px ${t.primary}33;
    }

    /* Search results */
    .mdv-search-results {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: ${t.surface};
      border: 1px solid ${t.border};
      border-top: none;
      border-radius: 0 0 ${i} ${i};
      max-height: 300px;
      overflow-y: auto;
      z-index: 1000;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .mdv-search-result {
      padding: ${a*1.5}px ${a*2}px;
      border-bottom: 1px solid ${t.border};
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .mdv-search-result:last-child {
      border-bottom: none;
    }

    .mdv-search-result:hover,
    .mdv-search-result.active {
      background-color: ${t.background};
    }

    .mdv-search-result-title {
      font-weight: 500;
      color: ${t.textPrimary};
      margin-bottom: ${a*.5}px;
    }

    .mdv-search-result-description {
      font-size: 0.875rem;
      color: ${t.textSecondary};
      margin-bottom: ${a*.5}px;
    }

    .mdv-search-result-tags {
      display: flex;
      gap: ${a*.5}px;
      flex-wrap: wrap;
    }

    .mdv-search-tag {
      font-size: 0.75rem;
      padding: ${a*.25}px ${a*.5}px;
      background-color: ${t.primary}22;
      color: ${t.primary};
      border-radius: ${i};
    }

    .mdv-search-result-category {
      font-size: 0.75rem;
      color: ${t.textSecondary};
      margin-top: ${a*.5}px;
      font-style: italic;
    }

    .mdv-search-no-results {
      padding: ${a*2}px;
      text-align: center;
      color: ${t.textSecondary};
      font-style: italic;
    }

    /* Screen reader only content */
    .mdv-sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* Navigation */
    .mdv-navigation {
      flex: 1;
      overflow-y: auto;
      padding: ${a}px 0;
    }

    .mdv-nav-list,
    .mdv-nav-sublist {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mdv-nav-group {
      margin-bottom: ${a}px;
    }

    .mdv-nav-category {
      padding: ${a}px ${a*2}px;
      font-weight: 600;
      color: ${t.textSecondary};
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }

    button.mdv-nav-category {
      width: 100%;
      background: none;
      border: none;
      text-align: left;
      font-family: inherit;
      margin: 0;
      outline: none;
    }

    button.mdv-nav-category:focus-visible {
      outline: 2px solid ${t.primary};
      outline-offset: 2px;
      border-radius: ${n.borderRadius};
    }

    .mdv-nav-category.collapsible:hover {
      color: ${t.textPrimary};
    }

    .mdv-collapse-icon {
      transition: opacity 0.2s;
    }

    .mdv-nav-item {
      margin: ${a*.5}px ${a}px;
    }

    .mdv-nav-link {
      display: block;
      padding: ${a*1.5}px ${a*2}px;
      color: ${t.textSecondary};
      text-decoration: none;
      border-radius: ${i};
      transition: all 0.2s;
    }

    .mdv-nav-link:hover {
      background-color: ${t.background};
      color: ${t.textPrimary};
      transform: translateX(4px);
    }

    .mdv-nav-link.active {
      background-color: ${t.primary};
      color: white;
    }

    .mdv-nav-link:focus-visible {
      outline: 2px solid ${t.primary};
      outline-offset: 2px;
      border-radius: ${n.borderRadius};
    }

    .mdv-nav-title {
      font-weight: 500;
      display: block;
    }

    .mdv-nav-description {
      font-size: 0.75rem;
      margin-top: ${a*.5}px;
      opacity: 0.8;
    }

    .mdv-nav-tags {
      display: flex;
      flex-wrap: wrap;
      gap: ${a*.5}px;
      margin-top: ${a*.5}px;
    }

    .mdv-tag {
      font-size: 0.625rem;
      padding: ${a*.25}px ${a*.75}px;
      background-color: ${t.primary}22;
      color: ${t.primary};
      border-radius: ${i};
    }

    /* Content */
    .mdv-content {
      flex: 1;
      overflow-y: auto;
      background-color: ${t.background};
    }

    .mdv-document {
      max-width: ${r.containerMaxWidth};
      margin: 0 auto;
      padding: ${a*2}px;
    }

    .mdv-document-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: ${a*4}px;
      color: ${t.textPrimary};
      font-family: ${o.heading};
    }

    /* Markdown Content */
    .mdv-document-content {
      font-size: 1rem;
      line-height: 1.7;
      color: ${t.textSecondary};
    }

    .mdv-document-content h1,
    .mdv-document-content h2,
    .mdv-document-content h3,
    .mdv-document-content h4,
    .mdv-document-content h5,
    .mdv-document-content h6 {
      font-family: ${o.heading};
      font-weight: 600;
      margin-top: ${a*3}px;
      margin-bottom: ${a*2}px;
      color: ${t.textPrimary};
    }

    .mdv-document-content h1 { font-size: 2rem; }
    .mdv-document-content h2 { font-size: 1.5rem; }
    .mdv-document-content h3 { font-size: 1.25rem; }
    .mdv-document-content h4 { font-size: 1.125rem; }

    .mdv-document-content p {
      margin-bottom: ${a*2}px;
    }

    .mdv-document-content a {
      color: ${t.link};
      text-decoration: none;
      transition: color 0.2s;
    }

    .mdv-document-content a:hover {
      color: ${t.linkHover};
      text-decoration: underline;
    }

    .mdv-document-content a:focus-visible {
      outline: 2px solid ${t.primary};
      outline-offset: 2px;
      border-radius: 2px;
    }

    .mdv-document-content ul,
    .mdv-document-content ol {
      margin-bottom: ${a*2}px;
      padding-left: ${a*4}px;
    }

    .mdv-document-content li {
      margin-bottom: ${a}px;
    }

    .mdv-document-content code {
      font-family: ${o.code};
      font-size: 0.875em;
      padding: ${a*.25}px ${a*.75}px;
      background-color: ${t.codeBackground};
      border-radius: ${i};
    }

    .mdv-code-block {
      position: relative;
      margin-bottom: ${a*2}px;
    }

    .mdv-document-content pre {
      background-color: ${t.codeBackground};
      padding: ${a*2}px;
      border-radius: ${i};
      overflow-x: auto;
      margin: 0;
    }

    .mdv-document-content pre code {
      background: none;
      padding: 0;
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .mdv-copy-button {
      position: absolute;
      top: ${a}px;
      right: ${a}px;
      padding: ${a*.5}px ${a*1.5}px;
      background-color: ${t.primary};
      color: white;
      border: none;
      border-radius: ${i};
      font-size: 0.75rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .mdv-copy-button:hover {
      background-color: ${t.secondary};
    }

    .mdv-copy-button:focus-visible {
      outline: 2px solid white;
      outline-offset: 2px;
    }

    .mdv-document-content blockquote {
      border-left: 4px solid ${t.primary};
      padding-left: ${a*2}px;
      margin: ${a*2}px 0;
      color: ${t.textSecondary};
      font-style: italic;
    }

    .mdv-document-content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: ${a*2}px;
    }

    .mdv-document-content th,
    .mdv-document-content td {
      padding: ${a*1.5}px;
      text-align: left;
      border-bottom: 1px solid ${t.border};
    }

    .mdv-document-content th {
      background-color: ${t.surface};
      font-weight: 600;
      color: ${t.textPrimary};
    }

    .mdv-document-content hr {
      border: none;
      border-top: 1px solid ${t.border};
      margin: ${a*4}px 0;
    }

    /* States */
    .mdv-loading,
    .mdv-error,
    .mdv-welcome {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      font-size: 1.125rem;
      color: ${t.textSecondary};
    }

    .mdv-error {
      color: ${t.error};
    }

    /* Footer */
    .mdv-footer {
      background-color: ${t.surface};
      border-top: 1px solid ${t.border};
      padding: ${a*2}px ${a*3}px;
      text-align: center;
      color: ${t.textSecondary};
      font-size: 0.875rem;
    }

    /* Responsive styles will be injected by mobile-styles module */

    /* Scrollbar */
    .mdv-navigation::-webkit-scrollbar,
    .mdv-content::-webkit-scrollbar {
      width: 8px;
    }

    .mdv-navigation::-webkit-scrollbar-track,
    .mdv-content::-webkit-scrollbar-track {
      background: ${t.background};
    }

    .mdv-navigation::-webkit-scrollbar-thumb,
    .mdv-content::-webkit-scrollbar-thumb {
      background: ${t.border};
      border-radius: 4px;
    }

    .mdv-navigation::-webkit-scrollbar-thumb:hover,
    .mdv-content::-webkit-scrollbar-thumb:hover {
      background: ${t.textSecondary};
    }

    /* Syntax highlighting overrides */
    .hljs {
      background: transparent !important;
      color: ${t.textPrimary} !important;
    }

    /* Custom CSS */
    ${n.customCSS||""}
  `}function y(n){if(n==null)return"";const e=String(n),t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return e.replace(/[&<>"']/g,o=>t[o])}function E(n){if(n==null)return"";const e=String(n),t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","\n":"&#10;","\r":"&#13;","	":"&#9;"};return e.replace(/[&<>"'\n\r\t]/g,o=>t[o])}function M(n){if(!n)return"";const e=String(n).trim();return/^(#[0-9a-fA-F]{3,8}|rgb\([^)]*\)|rgba\([^)]*\)|hsl\([^)]*\)|hsla\([^)]*\)|[a-zA-Z]+)$/.test(e)?e:""}function ze(n){if(!n)return"";const e=String(n).trim();return/^[\w\s\-,'"]+$/.test(e)&&e.length<200?e:""}function ae(n){if(n==null)return"";const e=String(n).trim();return/^-?(?:\d+(?:\.\d+)?)(px|em|rem|%|vh|vw|ex|ch|vmin|vmax|cm|mm|in|pt|pc)?$/.test(e)&&e.length<20?e:""}function B(n,e="mdv-live-announcements",t="polite"){let o=document.getElementById(e);o||(o=document.createElement("div"),o.id=e,o.setAttribute("aria-live",t),o.setAttribute("aria-atomic","true"),o.className="mdv-sr-only",o.style.cssText=`
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `,document.body.appendChild(o)),o.textContent="",setTimeout(()=>{o.textContent=n},100)}function Be(n,e,t){const o=t.showCategories?Fe(n):{"All Documents":n};return`
    <nav class="mdv-navigation" role="navigation" aria-label="Documentation navigation">
      <ul class="mdv-nav-list" role="list">
        ${Object.entries(o).map(([i,a])=>({category:i,documents:Ue(a,t.sortBy||"order")})).map(i=>_e(i,e,t)).join("")}
      </ul>
    </nav>
  `}function Fe(n){return n.reduce((e,t)=>{const o=t.category||"Uncategorized";return e[o]||(e[o]=[]),e[o].push(t),e},{})}function Ue(n,e){return[...n].sort((t,o)=>{switch(e){case"title":return t.title.localeCompare(o.title);case"order":return(t.order||999)-(o.order||999);default:return 0}})}function _e(n,e,t){const o=t.collapsible&&n.documents.length>1,r=`mdv-category-${n.category.toLowerCase().replace(/[^a-z0-9]/g,"-")}`;return`
    <li class="mdv-nav-group" role="listitem">
      ${n.category!=="All Documents"?`
        ${o?`
          <button class="mdv-nav-category collapsible"
                  type="button"
                  aria-expanded="false"
                  aria-controls="${r}">
${y(n.category)}
            <span class="mdv-collapse-icon" aria-hidden="true">▶</span>
          </button>
        `:`
          <div class="mdv-nav-category">
${y(n.category)}
          </div>
        `}
      `:""}
      <ul class="mdv-nav-sublist" role="list" ${o?`id="${r}" hidden`:""}>
        ${n.documents.map(i=>qe(i,e,t)).join("")}
      </ul>
    </li>
  `}function qe(n,e,t){const o=e?.id===n.id,r=t.showTags&&n.tags?je(n.tags):"",i=t.showDescription&&n.description?`<div class="mdv-nav-description">${y(n.description)}</div>`:"";return`
    <li class="mdv-nav-item" role="listitem">
      <a href="#${y(n.id)}" 
         class="mdv-nav-link ${o?"active":""}"
         data-doc-id="${y(n.id)}"
         aria-current="${o?"page":"false"}"
         role="link">
        <span class="mdv-nav-title">${y(n.title)}</span>
        ${i}
        ${r}
      </a>
    </li>
  `}function je(n){return`
    <div class="mdv-nav-tags">
      ${n.map(e=>`<span class="mdv-tag">${y(e)}</span>`).join("")}
    </div>
  `}class se{constructor(e=50){this.capacity=Math.max(1,e),this.cache=new Map,this.accessOrder=[]}get(e){if(this.cache.has(e))return this.moveToFront(e),this.cache.get(e)}set(e,t){this.cache.has(e)?(this.cache.set(e,t),this.moveToFront(e)):(this.cache.size>=this.capacity&&this.evictLeastRecentlyUsed(),this.cache.set(e,t),this.accessOrder.unshift(e))}has(e){return this.cache.has(e)}delete(e){return this.cache.has(e)?(this.cache.delete(e),this.accessOrder=this.accessOrder.filter(t=>t!==e),!0):!1}clear(){this.cache.clear(),this.accessOrder=[]}size(){return this.cache.size}getCapacity(){return this.capacity}getMemoryUsage(){let e=0;for(const[t,o]of this.cache)e+=this.estimateSize(t)+this.estimateSize(o);return e}entries(){return this.cache.entries()}moveToFront(e){this.accessOrder=this.accessOrder.filter(t=>t!==e),this.accessOrder.unshift(e)}evictLeastRecentlyUsed(){const e=this.accessOrder.pop();e!==void 0&&this.cache.delete(e)}estimateSize(e){return typeof e=="string"?e.length*2:typeof e=="number"?8:typeof e=="object"&&e!==null?JSON.stringify(e).length*2:4}}class ce extends se{constructor(e=50,t="mdv-cache"){super(e),this.storageKey=t,this.useStorage=this.isStorageAvailable(),this.useStorage&&this.loadFromStorage()}set(e,t){super.set(e,t),this.useStorage&&this.saveToStorage()}clear(){if(super.clear(),this.useStorage)try{localStorage.removeItem(this.storageKey)}catch(e){console.warn("Failed to clear persistent cache:",e)}}isStorageAvailable(){try{const e="test";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}loadFromStorage(){try{const e=localStorage.getItem(this.storageKey);if(e){const t=JSON.parse(e);for(const[o,r]of t.entries||[])super.set(o,r)}}catch(e){console.warn("Failed to load cache from storage:",e)}}saveToStorage(){try{const e={entries:Array.from(this.entries()),timestamp:Date.now()};localStorage.setItem(this.storageKey,JSON.stringify(e))}catch(e){console.warn("Failed to save cache to storage:",e)}}}class F{constructor(){this.documents=[],this.titleIndex=new Map,this.contentIndex=new Map,this.tagIndex=new Map,this.searchCache=new Map,this.stopWords=new Set(["a","an","and","are","as","at","be","by","for","from","has","he","in","is","it","its","of","on","that","the","to","was","were","will","with","but","or","not","can"])}updateIndex(e,t){this.documents=e,this.clearIndex(),this.searchCache.clear(),e.forEach((o,r)=>{this.indexText(o.title,this.titleIndex,r),o.description&&this.indexText(o.description,this.contentIndex,r),o.tags&&o.tags.forEach(a=>{this.indexText(a,this.tagIndex,r)});const i=t.get(o.id);if(i){const a=this.cleanMarkdown(i);this.indexText(a,this.contentIndex,r)}})}search(e,t={}){const o=JSON.stringify({query:e,options:t});if(this.searchCache.has(o))return this.searchCache.get(o);const{searchInTags:r=!0,fuzzySearch:i=!1,caseSensitive:a=!1,maxResults:s=10}=t,c=a?e:e.toLowerCase(),m=this.tokenize(c),u=new Map;for(const l of m)this.stopWords.has(l)||(this.searchInIndex(l,this.titleIndex,u,3,i),this.searchInIndex(l,this.contentIndex,u,1,i),r&&this.searchInIndex(l,this.tagIndex,u,2,i));const k=Array.from(u.values()).sort((l,g)=>g.score-l.score).slice(0,s).map(l=>l.doc);return this.searchCache.set(o,k),k}clearIndex(){this.titleIndex.clear(),this.contentIndex.clear(),this.tagIndex.clear()}indexText(e,t,o){const r=this.tokenize(e.toLowerCase());for(const i of r)this.stopWords.has(i)||(t.has(i)||t.set(i,new Set),t.get(i).add(o))}tokenize(e){return e.toLowerCase().replace(/[^\w\s]/g," ").split(/\s+/).filter(t=>t.length>1)}cleanMarkdown(e){return e.replace(/```[\s\S]*?```/g,"").replace(/`[^`]+`/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[#*_~`]/g,"").replace(/\s+/g," ").trim()}searchInIndex(e,t,o,r,i){if(t.has(e))for(const a of t.get(e))this.addToResults(o,a,r);if(i){for(const[a,s]of t)if(this.fuzzyMatch(e,a))for(const c of s)this.addToResults(o,c,r*.5)}for(const[a,s]of t)if(a.startsWith(e)&&a!==e)for(const c of s)this.addToResults(o,c,r*.8)}addToResults(e,t,o){if(t<this.documents.length){const r=this.documents[t];e.has(t)?e.get(t).score+=o:e.set(t,{score:o,doc:r})}}fuzzyMatch(e,t){if(e.length===0)return!0;if(t.length===0)return!1;const o=Math.floor(Math.max(e.length,t.length)*.3);return this.levenshteinDistance(e,t)<=o}levenshteinDistance(e,t){const o=Array(t.length+1).fill(null).map(()=>Array(e.length+1).fill(null));for(let r=0;r<=e.length;r++)o[0][r]=r;for(let r=0;r<=t.length;r++)o[r][0]=r;for(let r=1;r<=t.length;r++)for(let i=1;i<=e.length;i++){const a=e[i-1]===t[r-1]?0:1;o[r][i]=Math.min(o[r][i-1]+1,o[r-1][i]+1,o[r-1][i-1]+a)}return o[t.length][e.length]}}function U(n,e){let t;return(...o)=>{const r=()=>{t=void 0,n(...o)};t&&clearTimeout(t),t=setTimeout(r,e)}}function Ge(n,e){let t;return(...o)=>{t||(n(...o),t=!0,setTimeout(()=>t=!1,e))}}class Ve{constructor(){this.observers=new Map,this.loadedElements=new WeakSet}observeElement(e,t,o={}){if(this.loadedElements.has(e))return;const r=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&!this.loadedElements.has(a.target)&&(t(),this.loadedElements.add(a.target),r.unobserve(a.target),this.observers.delete(a.target))})},{rootMargin:"50px",threshold:.1,...o});r.observe(e),this.observers.set(e,r)}unobserveElement(e){const t=this.observers.get(e);t&&(t.unobserve(e),this.observers.delete(e))}cleanup(){for(const[e,t]of this.observers)t.unobserve(e);this.observers.clear()}}class R{constructor(){this.cleanupTasks=[],this.memoryWarningThreshold=50*1024*1024}static getInstance(){return R.instance||(R.instance=new R),R.instance}addCleanupTask(e){this.cleanupTasks.push(e)}removeCleanupTask(e){const t=this.cleanupTasks.indexOf(e);t>-1&&this.cleanupTasks.splice(t,1)}cleanup(){this.cleanupTasks.forEach(e=>{try{e()}catch(t){console.warn("Cleanup task failed:",t)}}),global.gc&&global.gc()}checkMemoryUsage(){if("memory"in performance){const t=performance.memory.usedJSHeapSize;if(t>this.memoryWarningThreshold)return console.warn(`High memory usage detected: ${Math.round(t/1024/1024)}MB`),this.cleanup(),!1}return!0}getMemoryStats(){if("memory"in performance){const e=performance.memory;return{used:Math.round(e.usedJSHeapSize/1024/1024),total:Math.round(e.totalJSHeapSize/1024/1024),limit:Math.round(e.jsHeapSizeLimit/1024/1024)}}return{}}}class de{constructor(){this.metrics=new Map,this.observers=[]}startTiming(e){const t=performance.now();return()=>{const o=performance.now()-t;this.recordMetric(e,o)}}recordMetric(e,t){this.metrics.has(e)||this.metrics.set(e,[]);const o=this.metrics.get(e);o.push(t),o.length>100&&o.shift()}getMetrics(e){const t=this.metrics.get(e)||[];return t.length===0?{avg:0,min:0,max:0,count:0}:{avg:t.reduce((r,i)=>r+i,0)/t.length,min:Math.min(...t),max:Math.max(...t),count:t.length}}getAllMetrics(){const e={};for(const t of this.metrics.keys())e[t]=this.getMetrics(t);return e}clearMetrics(){this.metrics.clear()}observeResourceTiming(){if("PerformanceObserver"in window){const e=new PerformanceObserver(t=>{t.getEntries().forEach(r=>{r.entryType==="resource"&&this.recordMetric("resource-load",r.duration)})});try{e.observe({entryTypes:["resource"]}),this.observers.push(e)}catch(t){console.warn("Failed to observe resource timing:",t)}}}cleanup(){this.observers.forEach(e=>e.disconnect()),this.observers=[]}}function We(n){return`
    <div class="mdv-search" role="search">
      <label for="mdv-search-input" class="mdv-sr-only">Search documentation</label>
      <input 
        id="mdv-search-input"
        type="text" 
        class="mdv-search-input" 
        placeholder="${n.placeholder||"Search documentation..."}"
        aria-label="Search documentation"
        aria-describedby="mdv-search-instructions"
        aria-autocomplete="list"
        aria-expanded="false"
        role="combobox"
        autocomplete="off"
      />
      <div id="mdv-search-instructions" class="mdv-sr-only">
        Use arrow keys to navigate search results. Press Enter to select a result.
      </div>
      <div 
        class="mdv-search-results" 
        role="listbox" 
        aria-label="Search results"
        id="mdv-search-listbox"
      ></div>
    </div>
  `}class le{constructor(e,t,o){this.searchInput=null,this.searchResults=null,this.currentQuery="",this.options=e,this.searchIndex=new F,this.onDocumentSelect=t,this.onSearchQueryChange=o,this.debouncedSearch=U(r=>this.performSearch(r),300)}updateIndex(e,t){this.searchIndex.updateIndex(e,t)}attachToDOM(e){const t=e.querySelector(".mdv-search");t&&(this.searchInput=t.querySelector(".mdv-search-input"),this.searchResults=t.querySelector(".mdv-search-results"),this.searchInput&&(this.searchInput.addEventListener("input",this.handleSearchInput.bind(this)),this.searchInput.addEventListener("keydown",this.handleKeyDown.bind(this)),this.searchInput.addEventListener("focus",this.handleFocus.bind(this)),this.searchInput.addEventListener("blur",this.handleBlur.bind(this))),this.searchResults&&(this.searchResults.style.display="none",this.updateAriaExpanded(!1)))}handleSearchInput(e){const o=e.target.value.trim();if(this.currentQuery=o,this.onSearchQueryChange&&this.onSearchQueryChange(o),o.length===0){this.hideResults();return}o.length>=2&&this.debouncedSearch(o)}handleKeyDown(e){if(!this.searchResults)return;const t=this.searchResults.querySelectorAll(".mdv-search-result"),o=this.searchResults.querySelector(".mdv-search-result.active");switch(e.key){case"ArrowDown":e.preventDefault(),this.navigateResults(t,o,1);break;case"ArrowUp":e.preventDefault(),this.navigateResults(t,o,-1);break;case"Enter":e.preventDefault(),o?this.selectResult(o):t.length>0&&this.selectResult(t[0]);break;case"Escape":this.hideResults(),this.searchInput?.blur();break}}handleFocus(){this.currentQuery.length>=2&&this.performSearch(this.currentQuery)}handleBlur(){setTimeout(()=>{this.hideResults()},150)}navigateResults(e,t,o){if(e.length===0)return;let r=0;t?r=Array.from(e).indexOf(t)+o:o===-1&&(r=e.length-1),r<0&&(r=e.length-1),r>=e.length&&(r=0),this.updateActiveResult(r),e[r].scrollIntoView({block:"nearest"})}selectResult(e){const t=e.getAttribute("data-doc-id");if(t&&this.onDocumentSelect){const o=this.findDocumentById(t);o&&(this.onDocumentSelect(o),this.hideResults(),this.searchInput&&(this.searchInput.value="",this.currentQuery=""))}}findDocumentById(e){return{id:e,title:e}}performSearch(e){if(!this.searchResults)return;const t=this.searchIndex.search(e,{searchInTags:this.options.searchInTags,fuzzySearch:this.options.fuzzySearch,caseSensitive:this.options.caseSensitive,maxResults:this.options.maxResults||10});this.renderResults(t,e)}renderResults(e,t){if(!this.searchResults)return;if(e.length===0){this.searchResults.innerHTML=`
        <div class="mdv-search-no-results" role="status" aria-live="polite">
          No results found for "${this.escapeHtml(t)}"
        </div>
      `,this.showResults(),this.announceResults(0,t);return}const o=e.map((r,i)=>{const a=this.highlightQuery(r.title,t),s=r.description?this.highlightQuery(r.description,t):"",c=r.tags?r.tags.map(m=>`<span class="mdv-search-tag">${this.escapeHtml(m)}</span>`).join(""):"";return`
        <div 
          class="mdv-search-result ${i===0?"active":""}" 
          data-doc-id="${this.escapeHtml(r.id)}"
          role="option"
          aria-selected="${i===0?"true":"false"}"
          id="mdv-search-option-${i}"
        >
          <div class="mdv-search-result-title">${a}</div>
          ${s?`<div class="mdv-search-result-description">${s}</div>`:""}
          ${c?`<div class="mdv-search-result-tags">${c}</div>`:""}
          ${r.category?`<div class="mdv-search-result-category">${this.escapeHtml(r.category)}</div>`:""}
        </div>
      `}).join("");this.searchResults.innerHTML=o,this.searchInput&&e.length>0&&this.searchInput.setAttribute("aria-activedescendant","mdv-search-option-0"),this.searchResults.querySelectorAll(".mdv-search-result").forEach((r,i)=>{r.addEventListener("click",()=>this.selectResult(r)),r.addEventListener("mouseenter",()=>{this.updateActiveResult(i)})}),this.showResults(),this.announceResults(e.length,t)}highlightQuery(e,t){if(!t)return this.escapeHtml(e);const o=this.options.caseSensitive===!0?"g":"gi",r=new RegExp(`(${this.escapeRegex(t)})`,o);return this.escapeHtml(e).replace(r,"<mark>$1</mark>")}showResults(){this.searchResults&&(this.searchResults.style.display="block",this.updateAriaExpanded(!0))}hideResults(){this.searchResults&&(this.searchResults.style.display="none",this.updateAriaExpanded(!1),this.searchInput&&this.searchInput.removeAttribute("aria-activedescendant"))}updateAriaExpanded(e){this.searchInput&&this.searchInput.setAttribute("aria-expanded",e.toString())}updateActiveResult(e){if(!this.searchResults)return;this.searchResults.querySelectorAll(".mdv-search-result").forEach((o,r)=>{o.classList.toggle("active",r===e),o.setAttribute("aria-selected",(r===e).toString())}),this.searchInput&&this.searchInput.setAttribute("aria-activedescendant",`mdv-search-option-${e}`)}announceResults(e,t){const o=e===0?`No results found for "${t}"`:`${e} result${e===1?"":"s"} found for "${t}"`;B(o,"mdv-search-live")}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}escapeRegex(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}clearSearch(){this.searchInput&&(this.searchInput.value=""),this.currentQuery="",this.hideResults()}setDocuments(e){this.findDocumentById=t=>e.find(o=>o.id===t)||null}destroy(){this.searchInput&&(this.searchInput.removeEventListener("input",this.handleSearchInput.bind(this)),this.searchInput.removeEventListener("keydown",this.handleKeyDown.bind(this)),this.searchInput.removeEventListener("focus",this.handleFocus.bind(this)),this.searchInput.removeEventListener("blur",this.handleBlur.bind(this)))}}var f=(n=>(n.INVALID_CONFIG="INVALID_CONFIG",n.CONTAINER_NOT_FOUND="CONTAINER_NOT_FOUND",n.INVALID_SOURCE="INVALID_SOURCE",n.DOCUMENT_NOT_FOUND="DOCUMENT_NOT_FOUND",n.DOCUMENT_LOAD_FAILED="DOCUMENT_LOAD_FAILED",n.DOCUMENT_PARSE_FAILED="DOCUMENT_PARSE_FAILED",n.NETWORK_ERROR="NETWORK_ERROR",n.NETWORK_TIMEOUT="NETWORK_TIMEOUT",n.UNAUTHORIZED_ACCESS="UNAUTHORIZED_ACCESS",n.RATE_LIMITED="RATE_LIMITED",n.FILE_NOT_FOUND="FILE_NOT_FOUND",n.FILE_READ_ERROR="FILE_READ_ERROR",n.PERMISSION_DENIED="PERMISSION_DENIED",n.GITHUB_API_ERROR="GITHUB_API_ERROR",n.GITHUB_RATE_LIMIT="GITHUB_RATE_LIMIT",n.GITHUB_NOT_FOUND="GITHUB_NOT_FOUND",n.SEARCH_FAILED="SEARCH_FAILED",n.SEARCH_TIMEOUT="SEARCH_TIMEOUT",n.MARKDOWN_PARSE_ERROR="MARKDOWN_PARSE_ERROR",n.SYNTAX_HIGHLIGHT_ERROR="SYNTAX_HIGHLIGHT_ERROR",n.THEME_LOAD_ERROR="THEME_LOAD_ERROR",n.INVALID_THEME="INVALID_THEME",n.UNKNOWN_ERROR="UNKNOWN_ERROR",n.OPERATION_CANCELLED="OPERATION_CANCELLED",n.MISSING_DEPENDENCY="MISSING_DEPENDENCY",n))(f||{}),v=(n=>(n.LOW="low",n.MEDIUM="medium",n.HIGH="high",n.CRITICAL="critical",n))(v||{});class h extends Error{constructor(e,t,o,r="medium",i=!1,a={}){super(t),this.name="MarkdownDocsError",this.code=e,this.severity=r,this.userMessage=o,this.isRetryable=i,this.context={timestamp:new Date,userAgent:typeof navigator<"u"?navigator.userAgent:void 0,url:typeof window<"u"&&window.location?window.location.href:void 0,stackTrace:this.stack,...a},Object.setPrototypeOf(this,h.prototype)}toJSON(){return{name:this.name,code:this.code,message:this.message,userMessage:this.userMessage,severity:this.severity,isRetryable:this.isRetryable,context:this.context}}}class Ke extends h{constructor(e,t,o){super("INVALID_CONFIG",e,t,"high",!1,o),this.name="ConfigurationError"}}class Ye extends h{constructor(e,t,o,r=!0,i){super(e,t,o,"medium",r,i),this.name="NetworkError"}}class he extends h{constructor(e,t,o,r=!1,i){super(e,t,o,"medium",r,i),this.name="DocumentError"}}class Je extends h{constructor(e,t,o,r=!1,i){super(e,t,o,"medium",r,i),this.name="GitHubError"}}const T={containerNotFound(n){return new Ke(`Container element not found: ${n}`,"Unable to find the container element. Please check your configuration.",{operation:"initialization",additionalData:{selector:n}})},documentNotFound(n){return new he("DOCUMENT_NOT_FOUND",`Document not found: ${n}`,"The requested document could not be found.",!1,{operation:"loadDocument",documentId:n})},networkError(n,e,t){const o=e?`Network request failed: ${e} ${t}`:"Network request failed";return new Ye("NETWORK_ERROR",o,"Unable to load content due to a network error. Please check your connection and try again.",!0,{operation:"networkRequest",additionalData:{url:n,status:e,statusText:t}})},githubApiError(n,e,t){const o=e===404?"GITHUB_NOT_FOUND":e===403?"GITHUB_RATE_LIMIT":"GITHUB_API_ERROR",r=e===404?"The requested GitHub file was not found.":e===403?"GitHub API rate limit reached. Please try again later.":"Unable to load content from GitHub. Please try again later.";return new Je(o,`GitHub API error: ${t}`,r,e===403,{operation:"githubRequest",additionalData:{path:n,status:e,responseMessage:t}})},parseError(n,e){return new he("MARKDOWN_PARSE_ERROR","Failed to parse markdown content","Unable to render the document content. The document may contain invalid formatting.",!1,{operation:"parseMarkdown",originalError:e,additionalData:{contentLength:n.length}})}},_={maxAttempts:3,baseDelay:1e3,maxDelay:1e4,exponentialBackoff:!0,retryableErrorCodes:["NETWORK_ERROR","NETWORK_TIMEOUT","RATE_LIMITED","GITHUB_RATE_LIMIT"]};async function me(n,e={}){const t={..._,...e};let o;for(let r=1;r<=t.maxAttempts;r++)try{return await n()}catch(i){if(o=i,r===t.maxAttempts)break;if(i instanceof h){if(!i.isRetryable||!t.retryableErrorCodes.includes(i.code))break}else break;const a=t.exponentialBackoff?Math.min(t.baseDelay*Math.pow(2,r-1),t.maxDelay):t.baseDelay;await new Promise(s=>setTimeout(s,a))}throw o}class Y{constructor(e){this.errorHandler=e}async execute(e,t,o={}){try{return await e()}catch(r){const i=this.wrapError(r,o);return this.errorHandler&&this.errorHandler(i),t()}}wrapError(e,t){return e instanceof h?e:e instanceof Error?new h("UNKNOWN_ERROR",e.message,"An unexpected error occurred. Please try again.","medium",!1,{...t,originalError:e}):new h("UNKNOWN_ERROR","Unknown error occurred","An unexpected error occurred. Please try again.","medium",!1,{...t,originalError:e})}}class J{constructor(e=!1){this.isDevelopment=e}log(e){const t=this.getLogMethod(e.severity);this.isDevelopment?t("MarkdownDocsViewer Error:",{code:e.code,message:e.message,userMessage:e.userMessage,severity:e.severity,context:e.context,stack:e.stack}):t(`[${e.code}] ${e.userMessage}`)}debug(e,t){this.isDevelopment&&console.debug("MarkdownDocsViewer Debug:",e,t)}warn(e,t){console.warn("MarkdownDocsViewer Warning:",e,t)}error(e,t){console.error("MarkdownDocsViewer Error:",e,t)}getLogMethod(e){switch(e){case"low":return console.info;case"medium":return console.warn;case"high":case"critical":return console.error;default:return console.log}}}class Qe{constructor(e,t={},o,r=50){this.loadingPromises=new Map,this.source=e,this.retryConfig={..._,...t},this.logger=o||new J,this.errorBoundary=new Y(i=>this.logger.log(i)),this.cache=new ce(r,`mdv-cache-${this.source.type}`),this.performanceMonitor=new de,this.memoryManager=R.getInstance(),this.memoryManager.addCleanupTask(()=>{this.clearOldCacheEntries()})}async loadAll(){return this.errorBoundary.execute(async()=>(this.logger.debug("Loading all documents",{sourceType:this.source.type}),this.validateSource(),this.source.documents),()=>(this.logger.warn("Failed to load documents, returning empty array"),[]),{operation:"loadAll"})}async loadDocument(e){return this.errorBoundary.execute(async()=>{const t=this.performanceMonitor.startTiming("document-load");try{if(this.cache.has(e.id)){this.logger.debug("Loading document from cache",{documentId:e.id});const i=this.cache.get(e.id);return t(),i}if(this.loadingPromises.has(e.id)){this.logger.debug("Document already loading, waiting for existing promise",{documentId:e.id});const i=await this.loadingPromises.get(e.id);return t(),i}this.logger.debug("Loading document",{documentId:e.id,hasContent:!!e.content,hasFile:!!e.file});let o="";const r=(async()=>{if(e.content)o=e.content;else if(e.file)o=await me(()=>this.loadFromSource(e.file),this.retryConfig);else throw T.documentNotFound(e.id);return this.cache.set(e.id,o),this.logger.debug("Document loaded successfully",{documentId:e.id,contentLength:o.length,cacheSize:this.cache.size()}),this.memoryManager.checkMemoryUsage(),o})();this.loadingPromises.set(e.id,r);try{return o=await r,o}finally{this.loadingPromises.delete(e.id),t()}}catch(o){throw t(),o}},()=>(this.logger.warn("Failed to load document, returning empty content",{documentId:e.id}),""),{operation:"loadDocument",documentId:e.id})}validateSource(){if(!this.source)throw new h(f.INVALID_SOURCE,"Document source is not defined","Invalid document source configuration.",v.HIGH,!1);if(!this.source.documents||this.source.documents.length===0)throw new h(f.INVALID_SOURCE,"No documents defined in source","No documents are configured to load.",v.MEDIUM,!1);switch(this.source.type){case"local":break;case"url":this.source.baseUrl||this.logger.warn("URL source without baseUrl may cause issues with relative paths");break;case"github":break;case"content":{const e=this.source.documents.filter(t=>!t.content);e.length>0&&this.logger.warn("Content source has documents without content",{missingContentIds:e.map(t=>t.id)});break}default:throw new h(f.INVALID_SOURCE,`Unknown source type: ${this.source.type}`,"Unsupported document source type.",v.HIGH,!1)}}async loadFromSource(e){switch(this.logger.debug("Loading from source",{path:e,sourceType:this.source.type}),this.source.type){case"local":return this.loadLocal(e);case"url":return this.loadFromUrl(e);case"github":return this.loadFromGithub(e);case"content":throw new h(f.DOCUMENT_LOAD_FAILED,"Content source should not load from path","Internal error: Content source attempted to load from file path.",v.MEDIUM,!1);default:throw new h(f.INVALID_SOURCE,`Unknown source type: ${this.source.type}`,"Unsupported document source type.",v.HIGH,!1)}}async loadLocal(e){const t=this.source.basePath?`${this.source.basePath}/${e}`:e;this.logger.debug("Loading local file",{path:e,fullPath:t});try{const o=await fetch(t);if(!o.ok)throw o.status===404?T.documentNotFound(e):T.networkError(t,o.status,o.statusText);const r=await o.text();return this.logger.debug("Local file loaded successfully",{path:e,contentLength:r.length}),r}catch(o){throw o instanceof h?o:o instanceof TypeError&&o.message.includes("fetch")?T.networkError(t):new h(f.FILE_READ_ERROR,`Failed to load local file ${e}: ${o}`,"Unable to load the requested file. Please check if the file exists and is accessible.",v.MEDIUM,!0,{operation:"loadLocal",originalError:o,additionalData:{path:e,fullPath:t}})}}async loadFromUrl(e){const t=this.source.baseUrl?`${this.source.baseUrl}/${e}`:e;this.logger.debug("Loading from URL",{path:e,url:t});try{const o=await fetch(t,{headers:this.source.headers||{}});if(!o.ok)throw o.status===404?T.documentNotFound(e):o.status===403||o.status===401?new h(f.UNAUTHORIZED_ACCESS,`Unauthorized access to ${t}: ${o.statusText}`,"Access denied. Please check your credentials or permissions.",v.HIGH,!1,{operation:"loadFromUrl",additionalData:{url:t,status:o.status}}):o.status===429?new h(f.RATE_LIMITED,`Rate limited when accessing ${t}`,"Too many requests. Please wait and try again.",v.MEDIUM,!0,{operation:"loadFromUrl",additionalData:{url:t,status:o.status}}):T.networkError(t,o.status,o.statusText);const r=await o.text();return this.logger.debug("URL content loaded successfully",{url:t,contentLength:r.length}),r}catch(o){throw o instanceof h?o:o instanceof TypeError&&o.message.includes("fetch")?T.networkError(t):new h(f.NETWORK_ERROR,`Failed to load from URL ${t}: ${o}`,"Unable to load content from the specified URL. Please check your connection and try again.",v.MEDIUM,!0,{operation:"loadFromUrl",originalError:o,additionalData:{path:e,url:t}})}}async loadFromGithub(e){const t=e.split("/");if(t.length<3)throw new h(f.INVALID_CONFIG,"Invalid GitHub path format. Expected: owner/repo/branch/path/to/file","Invalid GitHub file path format.",v.HIGH,!1,{operation:"loadFromGithub",additionalData:{path:e,expectedFormat:"owner/repo/branch/path/to/file"}});const[o,r,i="main",...a]=t,s=`https://api.github.com/repos/${o}/${r}/contents/${a.join("/")}?ref=${i}`;this.logger.debug("Loading from GitHub",{path:e,owner:o,repo:r,branch:i,filePath:a.join("/"),apiUrl:s});try{const c=await fetch(s,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"MarkdownDocsViewer/1.0",...this.source.headers||{}}});if(!c.ok){if(c.status===404)throw T.githubApiError(e,404,"File not found");if(c.status===403){const l=c.headers.get("X-RateLimit-Reset");let g="GitHub API rate limit exceeded";if(l){const x=new Date(parseInt(l)*1e3);g+=`. Rate limit resets at ${x.toISOString()}`}throw T.githubApiError(e,403,g)}const k=await c.text().catch(()=>"Unknown error");throw T.githubApiError(e,c.status,k)}const m=await c.json();if(Array.isArray(m))throw new h(f.GITHUB_API_ERROR,"GitHub path points to a directory, not a file","The specified GitHub path is a directory. Please specify a file path.",v.MEDIUM,!1,{operation:"loadFromGithub",additionalData:{path:e,responseType:"directory"}});if(!m.content)throw new h(f.GITHUB_API_ERROR,"No content found in GitHub response","The requested GitHub file appears to be empty or inaccessible.",v.MEDIUM,!1,{operation:"loadFromGithub",additionalData:{path:e,data:m}});const u=atob(m.content.replace(/\s/g,""));return this.logger.debug("GitHub content loaded successfully",{path:e,contentLength:u.length,sha:m.sha}),u}catch(c){throw c instanceof h?c:c instanceof TypeError&&c.message.includes("fetch")?T.networkError(s):new h(f.GITHUB_API_ERROR,`Failed to load from GitHub ${e}: ${c}`,"Unable to load content from GitHub. Please check the file path and try again.",v.MEDIUM,!0,{operation:"loadFromGithub",originalError:c,additionalData:{path:e,apiUrl:s,owner:o,repo:r,branch:i}})}}clearCache(){this.logger.debug("Clearing document cache",{cacheSize:this.cache.size()}),this.cache.clear()}getCacheSize(){return this.cache.size()}isCached(e){return this.cache.has(e)}getCacheStats(){return{size:this.cache.size(),capacity:this.cache.getCapacity(),memoryUsage:this.cache.getMemoryUsage()}}getPerformanceMetrics(){return this.performanceMonitor.getAllMetrics()}clearOldCacheEntries(){this.logger.debug("Memory cleanup triggered, cache will evict LRU entries as needed")}updateRetryConfig(e){this.retryConfig={...this.retryConfig,...e},this.logger.debug("Updated retry configuration",{retryConfig:this.retryConfig})}destroy(){this.cache.clear(),this.loadingPromises.clear(),this.performanceMonitor.cleanup(),this.logger.debug("DocumentLoader destroyed and cleaned up")}async preloadDocuments(e){const t=this.performanceMonitor.startTiming("preload-documents");try{const o=this.source.documents.filter(r=>e.includes(r.id)&&!this.cache.has(r.id));if(o.length>0){this.logger.debug("Preloading documents",{count:o.length,docIds:e});const r=3;for(let i=0;i<o.length;i+=r){const a=o.slice(i,i+r);await Promise.allSettled(a.map(s=>this.loadDocument(s)))}}}finally{t()}}}class Xe{constructor(e,t){this.currentRoute="",this.boundHashChangeHandler=null,this.mode=e,this.onRouteChange=t,e==="hash"&&(this.boundHashChangeHandler=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.boundHashChangeHandler),this.handleHashChange())}handleHashChange(){const e=window.location.hash.slice(1);e&&e!==this.currentRoute&&(this.currentRoute=e,this.onRouteChange(e))}setRoute(e){this.currentRoute=e,this.mode==="hash"&&(window.location.hash=e)}getCurrentRoute(){return this.mode==="hash"?window.location.hash.slice(1)||null:this.currentRoute||null}destroy(){this.mode==="hash"&&this.boundHashChangeHandler&&(window.removeEventListener("hashchange",this.boundHashChangeHandler),this.boundHashChangeHandler=null)}}const p={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400},H={sm:540,md:720,lg:960,xl:1140,xxl:1320},Q={minimum:44,comfortable:48,large:56},D={baseFontSize:{xs:14,sm:15,md:16},lineHeight:{tight:1.25,normal:1.5,relaxed:1.75},headings:{h1:{xs:1.75,sm:2,md:2.5,lg:3,xl:3.5,xxl:4},h2:{xs:1.5,sm:1.75,md:2,lg:2.25,xl:2.5,xxl:2.75},h3:{xs:1.25,sm:1.5,md:1.75,lg:1.875,xl:2,xxl:2.125},h4:{xs:1.125,sm:1.25,md:1.375,lg:1.5,xl:1.625,xxl:1.75},h5:{xs:1,sm:1.125,md:1.25,lg:1.375,xl:1.5,xxl:1.625},h6:{xs:.875,sm:1,md:1.125,lg:1.25,xl:1.375,xxl:1.5}}};function Ze(){return`
    :root {
      /* Breakpoint values */
      --mdv-breakpoint-xs: ${p.xs}px;
      --mdv-breakpoint-sm: ${p.sm}px;
      --mdv-breakpoint-md: ${p.md}px;
      --mdv-breakpoint-lg: ${p.lg}px;
      --mdv-breakpoint-xl: ${p.xl}px;
      --mdv-breakpoint-xxl: ${p.xxl}px;
      
      /* Touch targets */
      --mdv-touch-target-min: ${Q.minimum}px;
      --mdv-touch-target-comfortable: ${Q.comfortable}px;
      --mdv-touch-target-large: ${Q.large}px;
      
      /* Container max-widths */
      --mdv-container-sm: ${H.sm}px;
      --mdv-container-md: ${H.md}px;
      --mdv-container-lg: ${H.lg}px;
      --mdv-container-xl: ${H.xl}px;
      --mdv-container-xxl: ${H.xxl}px;
      
      /* Base typography */
      --mdv-font-size-base: ${D.baseFontSize.md}px;
      --mdv-line-height-base: ${D.lineHeight.normal};
      
      /* Spacing scale (mobile-optimized) */
      --mdv-spacing-xs: 0.25rem;
      --mdv-spacing-sm: 0.5rem;
      --mdv-spacing-md: 1rem;
      --mdv-spacing-lg: 1.5rem;
      --mdv-spacing-xl: 2rem;
      --mdv-spacing-xxl: 3rem;
      
      /* Mobile-specific values */
      --mdv-mobile-padding: 1rem;
      --mdv-mobile-margin: 0.75rem;
      --mdv-mobile-border-radius: 8px;
      
      /* Navigation dimensions */
      --mdv-nav-width: 280px;
      --mdv-nav-width-collapsed: 60px;
      --mdv-header-height: 60px;
      --mdv-footer-height: 40px;
      
      /* Z-index scale */
      --mdv-z-dropdown: 1000;
      --mdv-z-sticky: 1020;
      --mdv-z-fixed: 1030;
      --mdv-z-modal-backdrop: 1040;
      --mdv-z-modal: 1050;
      --mdv-z-popover: 1060;
      --mdv-z-tooltip: 1070;
    }
  `}function et(){return`
    /* Mobile First - Base styles (xs: 0px and up) */
    .mdv-container {
      width: 100%;
      padding-right: var(--mdv-mobile-padding);
      padding-left: var(--mdv-mobile-padding);
      margin-right: auto;
      margin-left: auto;
    }
    
    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: ${p.sm}px) {
      .mdv-container {
        max-width: var(--mdv-container-sm);
      }
      
      :root {
        --mdv-font-size-base: ${D.baseFontSize.sm}px;
      }
      
      .mdv-mobile-toggle {
        display: none;
      }
    }
    
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: ${p.md}px) {
      .mdv-container {
        max-width: var(--mdv-container-md);
      }
      
      :root {
        --mdv-font-size-base: ${D.baseFontSize.md}px;
      }
      
      .mdv-sidebar {
        position: relative;
        transform: none;
        box-shadow: none;
        height: auto;
      }
      
      .mdv-sidebar-header {
        display: block; /* Show on desktop */
      }
      
      .mdv-content {
        margin-left: var(--mdv-nav-width);
      }
    }
    
    /* Large devices (desktops, 992px and up) */
    @media (min-width: ${p.lg}px) {
      .mdv-container {
        max-width: var(--mdv-container-lg);
      }
    }
    
    /* Extra large devices (large desktops, 1200px and up) */
    @media (min-width: ${p.xl}px) {
      .mdv-container {
        max-width: var(--mdv-container-xl);
      }
    }
    
    /* Extra extra large devices (larger desktops, 1400px and up) */
    @media (min-width: ${p.xxl}px) {
      .mdv-container {
        max-width: var(--mdv-container-xxl);
      }
    }
  `}function tt(){const n=Object.entries(D.headings).map(([e,t])=>{const o=t.xs;let r=`
    ${e} {
      font-size: ${o}rem;
      line-height: ${D.lineHeight.tight};
      margin-bottom: var(--mdv-spacing-md);
    }`;return Object.entries(t).forEach(([i,a])=>{i!=="xs"&&p[i]&&(r+=`
    @media (min-width: ${p[i]}px) {
      ${e} {
        font-size: ${a}rem;
      }
    }`)}),r}).join(`
`);return`
    /* Responsive Typography */
    body {
      font-size: var(--mdv-font-size-base);
      line-height: var(--mdv-line-height-base);
    }
    
    /* Responsive font sizes by breakpoint */
    @media (max-width: ${p.sm-1}px) {
      :root {
        --mdv-font-size-base: ${D.baseFontSize.xs}px;
      }
    }
    
    ${n}
    
    /* Responsive paragraph spacing */
    p {
      margin-bottom: var(--mdv-spacing-md);
      line-height: var(--mdv-line-height-base);
    }
    
    @media (max-width: ${p.sm-1}px) {
      p {
        line-height: ${D.lineHeight.relaxed};
      }
    }
  `}function ot(){return`
    /* Touch-friendly styles */
    .mdv-button,
    .mdv-nav-item,
    .mdv-mobile-toggle,
    .mdv-search-input,
    .mdv-toc-item {
      min-height: var(--mdv-touch-target-min);
      min-width: var(--mdv-touch-target-min);
      
      /* Prevent 300ms click delay */
      touch-action: manipulation;
      
      /* Smooth touch feedback */
      transition: background-color 0.15s ease-in-out;
    }
    
    /* Larger touch targets for primary actions */
    .mdv-button-primary,
    .mdv-mobile-toggle {
      min-height: var(--mdv-touch-target-comfortable);
      min-width: var(--mdv-touch-target-comfortable);
    }
    
    /* Extra large touch targets for critical actions */
    .mdv-button-large {
      min-height: var(--mdv-touch-target-large);
      min-width: var(--mdv-touch-target-large);
    }
    
    /* Touch feedback states */
    @media (hover: none) and (pointer: coarse) {
      .mdv-button:active,
      .mdv-nav-item:active {
        background-color: rgba(0, 0, 0, 0.1);
      }
      
      /* Remove hover states on touch devices */
      .mdv-button:hover,
      .mdv-nav-item:hover {
        background-color: initial;
      }
    }
    
    /* Focus styles for accessibility - WCAG compliant */
    .mdv-button:focus-visible,
    .mdv-nav-item:focus-visible,
    .mdv-search-input:focus-visible,
    .mdv-toc-item:focus-visible,
    .mdv-nav-link:focus-visible,
    .mdv-mobile-toggle:focus-visible {
      /* Two-color focus indicator for better visibility */
      /* Inner indicator */
      outline: 2px solid #F9F9F9;
      outline-offset: 0;
      /* Outer indicator */
      box-shadow: 0 0 0 4px #193146;
      /* Ensure proper z-index */
      position: relative;
      z-index: 1;
    }
    
    /* Alternative focus style for dark themes */
    [data-theme="dark"] .mdv-button:focus-visible,
    [data-theme="dark"] .mdv-nav-item:focus-visible,
    [data-theme="dark"] .mdv-search-input:focus-visible,
    [data-theme="dark"] .mdv-toc-item:focus-visible,
    [data-theme="dark"] .mdv-nav-link:focus-visible,
    [data-theme="dark"] .mdv-mobile-toggle:focus-visible {
      /* Inner indicator */
      outline: 2px solid #193146;
      /* Outer indicator */
      box-shadow: 0 0 0 4px #F9F9F9;
    }
    
    /* Remove default focus outline */
    .mdv-button:focus:not(:focus-visible),
    .mdv-nav-item:focus:not(:focus-visible),
    .mdv-search-input:focus:not(:focus-visible),
    .mdv-toc-item:focus:not(:focus-visible),
    .mdv-nav-link:focus:not(:focus-visible),
    .mdv-mobile-toggle:focus:not(:focus-visible) {
      outline: none;
    }
    
    /* Enhanced focus for form controls */
    .mdv-search-input:focus-visible {
      outline: 3px solid var(--mdv-primary-color);
      outline-offset: 2px;
      box-shadow: 0 0 0 5px rgba(var(--mdv-primary-rgb), 0.2);
    }
    
    /* Focus styles for links in content */
    .mdv-content a:focus-visible {
      outline: 2px solid var(--mdv-primary-color);
      outline-offset: 3px;
      background-color: rgba(var(--mdv-primary-rgb), 0.1);
      border-radius: 2px;
    }
    
    /* Prevent text selection on buttons */
    .mdv-button,
    .mdv-mobile-toggle {
      user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
    }
  `}function rt(){return`
    /* Mobile Layout Optimizations */
    
    /* Mobile navigation */
    @media (max-width: ${p.md-1}px) {
      /* Adjust header layout on mobile */
      .mdv-header {
        padding-left: calc(var(--mdv-touch-target-comfortable) + var(--mdv-spacing-lg) + var(--mdv-spacing-md));
        position: relative;
        min-height: 60px;
      }
      
      /* Mobile header actions */
      .mdv-header-actions {
        gap: var(--mdv-spacing-sm);
        padding-right: var(--mdv-spacing-sm);
      }
      
      .mdv-header-actions .mdv-dark-mode-toggle {
        gap: var(--mdv-spacing-xs);
      }
      
      /* Make dark mode toggle smaller on mobile */
      .mdv-header-actions .mdv-dark-toggle-btn {
        width: 40px;
        height: 22px;
        border-radius: 11px;
      }
      
      .mdv-header-actions .mdv-dark-toggle-track {
        border-radius: 11px;
      }
      
      .mdv-header-actions .mdv-dark-toggle-thumb {
        width: 18px;
        height: 18px;
        top: 2px;
        left: 2px;
      }
      
      .mdv-header-actions .mdv-dark-toggle-btn.dark .mdv-dark-toggle-thumb {
        transform: translateX(18px);
      }
      
      .mdv-header-actions .mdv-dark-toggle-icon svg {
        width: 10px;
        height: 10px;
      }
      
      .mdv-header-actions .mdv-dark-toggle-label {
        font-size: 0.75rem;
        display: none; /* Hide labels on small mobile screens */
      }
      
      .mdv-header-actions .mdv-theme-switcher .mdv-theme-trigger {
        padding: 6px 8px;
        font-size: 0.75rem;
        min-width: auto;
      }
      
      .mdv-header-actions .mdv-theme-switcher .mdv-theme-name {
        display: none; /* Hide theme name on mobile */
      }
      
      .mdv-mobile-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 50%;
        left: var(--mdv-spacing-md);
        transform: translateY(-50%);
        z-index: var(--mdv-z-fixed);
        background: var(--mdv-primary-color, #0969da);
        color: white;
        border: none;
        border-radius: var(--mdv-mobile-border-radius);
        cursor: pointer;
        width: var(--mdv-touch-target-comfortable);
        height: var(--mdv-touch-target-comfortable);
        font-size: 1.25rem;
        font-weight: bold;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      
      .mdv-mobile-toggle:hover {
        transform: translateY(-50%) scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }
      
      .mdv-mobile-toggle:active {
        transform: translateY(-50%) scale(0.95);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }
      
      .mdv-sidebar {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: var(--mdv-nav-width);
        z-index: var(--mdv-z-modal);
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.15);
        /* Slightly transparent background with blur for readability */
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        overflow-y: auto;
      }
      
      /* Dark theme support for sidebar */
      [data-theme="dark"] .mdv-sidebar {
        background: rgba(24, 24, 27, 0.95);
      }
      
      .mdv-sidebar.open {
        transform: translateX(0);
      }
      
      .mdv-sidebar-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        z-index: var(--mdv-z-modal-backdrop);
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
      }
      
      .mdv-sidebar-backdrop.show {
        opacity: 1;
        visibility: visible;
      }
      
      .mdv-content {
        margin-left: 0;
        padding: var(--mdv-spacing-lg) var(--mdv-mobile-padding);
        padding-top: calc(var(--mdv-touch-target-comfortable) + var(--mdv-spacing-lg) * 2);
      }
      
      .mdv-document {
        padding: 0;
      }
    }
    
    /* Tablet layout adjustments */
    @media (min-width: ${p.md}px) and (max-width: ${p.lg-1}px) {
      .mdv-sidebar {
        width: 240px;
      }
      
      .mdv-content {
        margin-left: 240px;
      }
    }
    
    /* Mobile content optimizations */
    @media (max-width: ${p.sm-1}px) {
      .mdv-document-title {
        font-size: 1.75rem;
        line-height: 1.2;
        margin-bottom: var(--mdv-spacing-lg);
      }
      
      .mdv-code-block {
        font-size: 0.875rem;
        padding: var(--mdv-spacing-md);
        border-radius: var(--mdv-mobile-border-radius);
        overflow-x: auto;
      }
      
      .mdv-table-wrapper {
        overflow-x: auto;
        margin: var(--mdv-spacing-md) 0;
      }
      
      .mdv-table {
        min-width: 600px;
      }
      
      /* Improve readability on small screens */
      .mdv-content img {
        max-width: 100%;
        height: auto;
        border-radius: var(--mdv-mobile-border-radius);
      }
      
      .mdv-content blockquote {
        margin: var(--mdv-spacing-lg) 0;
        padding: var(--mdv-spacing-md);
        border-left: 4px solid var(--mdv-primary-color);
        border-radius: 0 var(--mdv-mobile-border-radius) var(--mdv-mobile-border-radius) 0;
      }
    }
  `}function it(n){const e=Ze(),t=et(),o=tt(),r=ot(),i=rt();return`
    ${e}
    ${t}
    ${o}
    ${r}
    ${i}
  `}function q(){return typeof window>"u"?!1:window.innerWidth<p.md}function ue(){if(typeof window>"u")return"md";const n=window.innerWidth;return n>=p.xxl?"xxl":n>=p.xl?"xl":n>=p.lg?"lg":n>=p.md?"md":n>=p.sm?"sm":"xs"}function nt(){if(typeof document>"u")return;let n=document.querySelector('meta[name="viewport"]');n||(n=document.createElement("meta"),n.name="viewport",document.head.appendChild(n)),n.content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover, user-scalable=yes, maximum-scale=5"}class ge{constructor(e={}){this.container=null,this.descriptionEnhancementPromise=null,this.options={enablePersistence:!0,storageKey:"mdv-theme",...e},this.themes=new Map,this.initializeBuiltInThemesSync(),this.currentTheme=w.default.light,this.applyCSSVariables(w.default.light);const t=this.getSavedThemeName(),o=this.resolveInitialTheme(t);o&&o!==this.currentTheme&&(this.currentTheme=o,this.applyCSSVariables(o),this.options.onThemeChange&&setTimeout(()=>{this.options.onThemeChange(o)},0)),this.descriptionEnhancementPromise=this.enhanceThemeDescriptions()}initializeBuiltInThemesSync(){const e=ie();for(const t of e){const o=b(t.name),r=S(t.name),i=`${o} ${r} theme`;this.registerTheme({...t,description:i,author:"MarkdownDocsViewer",version:"1.0.0"})}}async enhanceThemeDescriptions(){const e=this.getAvailableThemes();for(const t of e){const o=b(t.name),r=S(t.name);try{const i=await this.getThemeDescription(o,r),a={...t,description:i};this.registerTheme(a)}catch(i){console.warn(`Failed to enhance description for theme ${t.name}:`,i)}}}async initializeBuiltInThemes(){const e=ie();for(const t of e){const o=b(t.name),r=S(t.name),i=await this.getThemeDescription(o,r);this.registerTheme({...t,description:i,author:"MarkdownDocsViewer",version:"1.0.0"})}}resolveInitialTheme(e){if(!e)return w.default.light;const t=this.themes.get(e);if(t)return t;const r={default:"default-light",dark:"default-dark",light:"default-light",github:"github-light",material:"material-light",dracula:"default-dark","solarized-light":"default-light","solarized-dark":"default-dark","high-contrast":"default-light"}[e];if(r){const i=this.themes.get(r);if(i)return this.saveThemeName(r),i}if(!e.includes("-light")&&!e.includes("-dark")){const i=this.themes.get(`${e}-light`);if(i)return this.saveThemeName(`${e}-light`),i;const a=this.themes.get(`${e}-dark`);if(a)return this.saveThemeName(`${e}-dark`),a}return console.warn(`Could not resolve saved theme "${e}", falling back to default`),w.default.light}async getThemeDescription(e,t){const o=await Promise.resolve().then(()=>Ct).then(a=>a.default);return{...{default:{light:"Clean and modern light theme",dark:"Clean and modern dark theme"},github:{light:"GitHub-inspired light theme",dark:"GitHub-inspired dark theme"}},...o}[e]?.[t]||`${e} ${t} theme`}registerTheme(e){this.themes.set(e.name,e)}setTheme(e){const t=this.themes.get(e);return t?(this.currentTheme=t,this.options.enablePersistence&&this.saveThemeName(e),this.applyCSSVariables(t),this.options.onThemeChange&&this.options.onThemeChange(t),t):(console.warn(`Theme "${e}" not found. Available themes:`,Array.from(this.themes.keys())),null)}getCurrentTheme(){return this.currentTheme}getAvailableThemes(){return Array.from(this.themes.values())}async waitForDescriptionEnhancement(){this.descriptionEnhancementPromise&&await this.descriptionEnhancementPromise}getTheme(e){return this.themes.get(e)}createCustomTheme(e,t){const o=this.currentTheme,r={name:e,colors:this.mergeObjects(o.colors,t.colors||{}),fonts:this.mergeObjects(o.fonts,t.fonts||{}),spacing:this.mergeObjects(o.spacing,t.spacing||{}),borderRadius:t.borderRadius||o.borderRadius,description:e.includes("dark")?`Custom dark theme based on ${b(o.name)}`:`Custom light theme based on ${b(o.name)}`,author:"User",version:"1.0.0"};return this.registerTheme(r),r}getAvailableBaseThemes(){return Pe()}getCurrentThemeInfo(){const e=this.getCurrentTheme();return{baseName:b(e.name),mode:S(e.name)}}mergeObjects(e,t){const o=Object.create(null);for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(o[r]=t[r]);return o}applyCSSVariables(e){const t=document.documentElement;if(!t||!t.style||typeof t.style.setProperty!="function"){console.warn("Cannot apply CSS variables: document.documentElement.style not available");return}Object.entries(e.colors).forEach(([o,r])=>{const i=`--mdv-color-${this.kebabCase(o)}`;t.style.setProperty(i,r);const a=this.hexToRgb(r);a&&t.style.setProperty(`${i}-rgb`,`${a.r}, ${a.g}, ${a.b}`)}),Object.entries(e.fonts).forEach(([o,r])=>{t.style.setProperty(`--mdv-font-${this.kebabCase(o)}`,r)}),t.style.setProperty("--mdv-spacing-unit",`${e.spacing.unit}px`),t.style.setProperty("--mdv-container-max-width",e.spacing.containerMaxWidth),t.style.setProperty("--mdv-sidebar-width",e.spacing.sidebarWidth),t.style.setProperty("--mdv-border-radius",e.borderRadius),t.setAttribute("data-mdv-theme",e.name)}getContrastRatio(e,t){const o=this.getLuminance(e),r=this.getLuminance(t),i=Math.max(o,r),a=Math.min(o,r);return(i+.05)/(a+.05)}isAccessible(e,t,o="AA"){const r=this.getContrastRatio(e,t);return o==="AAA"?r>=7:r>=4.5}getLuminance(e){const t=this.hexToRgb(e);if(!t)return 0;const o=t.r/255,r=t.g/255,i=t.b/255,a=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),s=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),c=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*a+.7152*s+.0722*c}hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}kebabCase(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}getSavedThemeName(){if(!this.options.enablePersistence||typeof localStorage>"u")return null;try{return localStorage.getItem(this.options.storageKey||"mdv-theme")}catch{return null}}saveThemeName(e){if(!(!this.options.enablePersistence||typeof localStorage>"u"))try{localStorage.setItem(this.options.storageKey||"mdv-theme",e)}catch(t){console.warn("Failed to save theme preference:",t)}}exportTheme(e){return JSON.stringify(e,null,2)}importTheme(e){try{const t=JSON.parse(e),o=this.createSafeTheme(t);return this.validateTheme(o),this.registerTheme(o),o}catch(t){return console.error("Failed to import theme:",t),null}}createSafeTheme(e){const t=Object.create(null),o=["name","colors","fonts","spacing","borderRadius","description","author","version"];for(const r of o)r in e&&e[r]!==void 0&&(typeof e[r]=="object"&&e[r]!==null?t[r]=this.deepCopyObject(e[r]):t[r]=e[r]);return t}deepCopyObject(e){if(e===null||typeof e!="object")return e;const t=Object.create(null);for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(o==="__proto__"||o==="constructor"||o==="prototype"||(typeof e[o]=="object"&&e[o]!==null?t[o]=this.deepCopyObject(e[o]):t[o]=e[o]));return t}validateTheme(e){if(!e.name||typeof e.name!="string")throw new Error("Theme must have a name");if(!e.colors||typeof e.colors!="object")throw new Error("Theme must have colors");const t=["primary","secondary","background","surface","text","textPrimary","textSecondary","textLight","border","code","codeBackground","link","linkHover","error","warning","success"];for(const o of t)if(!e.colors[o])throw new Error(`Theme missing required color: ${o}`)}}class pe{constructor(e,t={}){this.container=null,this.isOpen=!1,this.colorInputs=[{key:"primary",label:"Primary",description:"Main accent color",category:"primary"},{key:"secondary",label:"Secondary",description:"Secondary accent color",category:"primary"},{key:"background",label:"Background",description:"Main background color",category:"background"},{key:"surface",label:"Surface",description:"Card and panel background",category:"background"},{key:"text",label:"Text",description:"Body text color",category:"text"},{key:"textPrimary",label:"Primary Text",description:"Primary text color",category:"text"},{key:"textSecondary",label:"Secondary Text",description:"Secondary text color",category:"text"},{key:"textLight",label:"Light Text",description:"Light text color",category:"text"},{key:"border",label:"Border",description:"Border color",category:"background"},{key:"code",label:"Code Text",description:"Inline code text color",category:"text"},{key:"codeBackground",label:"Code Background",description:"Code block background",category:"background"},{key:"link",label:"Link",description:"Link color",category:"primary"},{key:"linkHover",label:"Link Hover",description:"Link hover color",category:"primary"},{key:"error",label:"Error",description:"Error state color",category:"semantic"},{key:"warning",label:"Warning",description:"Warning state color",category:"semantic"},{key:"success",label:"Success",description:"Success state color",category:"semantic"}],this.themeManager=e,this.options={allowExport:!0,allowImport:!0,showPreview:!0,showAccessibilityCheck:!0,allowModeSelection:!0,...t},this.originalTheme=e.getCurrentTheme(),this.currentMode=t.defaultMode||S(this.originalTheme.name),this.currentTheme=this.deepCloneTheme(this.originalTheme)}render(){return`
      <div class="mdv-theme-builder-overlay ${this.isOpen?"open":""}" aria-hidden="${!this.isOpen}">
        <div class="mdv-theme-builder" role="dialog" aria-labelledby="theme-builder-title">
          <div class="mdv-theme-builder-header">
            <h2 id="theme-builder-title">Custom Theme Builder</h2>
            <button class="mdv-theme-builder-close" aria-label="Close theme builder">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
              </svg>
            </button>
          </div>
          
          <div class="mdv-theme-builder-content">
            <div class="mdv-theme-builder-sidebar">
              <div class="mdv-theme-builder-section">
                <h3>Theme Information</h3>
                <div class="mdv-theme-builder-field">
                  <label for="theme-name">Theme Name</label>
                  <input type="text" id="theme-name" value="${E(b(this.currentTheme.name))}" placeholder="Enter theme name">
                </div>
              </div>
              
              ${this.options.allowModeSelection?`
              <div class="mdv-theme-builder-section">
                <h3>Theme Mode</h3>
                <div class="mdv-theme-builder-mode-selector">
                  <label class="mdv-theme-builder-mode-option">
                    <input type="radio" name="theme-mode" value="light" ${this.currentMode==="light"?"checked":""}>
                    <span class="mdv-theme-builder-mode-label">
                      <span class="mdv-theme-builder-mode-icon">☀️</span>
                      Light Mode
                    </span>
                  </label>
                  <label class="mdv-theme-builder-mode-option">
                    <input type="radio" name="theme-mode" value="dark" ${this.currentMode==="dark"?"checked":""}>
                    <span class="mdv-theme-builder-mode-label">
                      <span class="mdv-theme-builder-mode-icon">🌙</span>
                      Dark Mode
                    </span>
                  </label>
                </div>
              </div>
              `:""}
              
              <div class="mdv-theme-builder-section">
                <h3>Base Theme</h3>
                <select id="base-theme" aria-label="Select base theme">
                  ${this.themeManager.getAvailableBaseThemes().map(e=>`
                    <option value="${E(e)}" ${e===b(this.originalTheme.name)?"selected":""}>
                      ${E(e)}
                    </option>
                  `).join("")}
                </select>
              </div>
              
              <div class="mdv-theme-builder-section">
                <h3>Colors</h3>
                ${this.renderColorInputs()}
              </div>
              
              <div class="mdv-theme-builder-section">
                <h3>Typography</h3>
                ${this.renderFontInputs()}
              </div>
              
              <div class="mdv-theme-builder-section">
                <h3>Spacing & Layout</h3>
                ${this.renderSpacingInputs()}
              </div>
              
              <div class="mdv-theme-builder-section">
                <h3>Border Radius</h3>
                <div class="mdv-theme-builder-field">
                  <label for="border-radius">Border Radius</label>
                  <input type="text" id="border-radius" value="${E(ae(this.currentTheme.borderRadius))}" placeholder="e.g., 0.5rem">
                </div>
              </div>
              
              ${this.options.showAccessibilityCheck?this.renderAccessibilityCheck():""}
              
              <div class="mdv-theme-builder-actions">
                ${this.options.allowImport?`
                  <button class="mdv-theme-builder-btn mdv-theme-builder-btn-secondary" id="import-theme">
                    Import Theme
                  </button>
                `:""}
                ${this.options.allowExport?`
                  <button class="mdv-theme-builder-btn mdv-theme-builder-btn-secondary" id="export-theme">
                    Export Theme
                  </button>
                `:""}
                <button class="mdv-theme-builder-btn mdv-theme-builder-btn-secondary" id="reset-theme">
                  Reset
                </button>
                <button class="mdv-theme-builder-btn mdv-theme-builder-btn-primary" id="save-theme">
                  Save Theme
                </button>
              </div>
            </div>
            
            ${this.options.showPreview?`
              <div class="mdv-theme-builder-preview">
                <h3>Preview</h3>
                <div class="mdv-theme-builder-preview-content" id="theme-preview">
                  ${this.renderPreview()}
                </div>
              </div>
            `:""}
          </div>
        </div>
      </div>
    `}renderColorInputs(){return["primary","background","text","semantic"].map(t=>{const o=this.colorInputs.filter(r=>r.category===t);return`
        <div class="mdv-theme-builder-color-category">
          <h4>${t.charAt(0).toUpperCase()+t.slice(1)}</h4>
          ${o.map(r=>`
            <div class="mdv-theme-builder-field mdv-theme-builder-color-field">
              <label for="color-${r.key}">${r.label}</label>
              <div class="mdv-theme-builder-color-input">
                <input 
                  type="color" 
                  id="color-${r.key}" 
                  value="${E(M(this.currentTheme.colors[r.key]))}"
                  aria-label="${r.label} color"
                >
                <input 
                  type="text" 
                  id="color-text-${r.key}" 
                  value="${E(M(this.currentTheme.colors[r.key]))}"
                  placeholder="#000000"
                  aria-label="${r.label} color value"
                >
              </div>
              ${r.description?`<small>${r.description}</small>`:""}
            </div>
          `).join("")}
        </div>
      `}).join("")}renderFontInputs(){return[{key:"body",label:"Body Font",description:"Main text font family"},{key:"heading",label:"Heading Font",description:"Heading font family"},{key:"code",label:"Code Font",description:"Monospace font family"}].map(t=>`
      <div class="mdv-theme-builder-field">
        <label for="font-${t.key}">${t.label}</label>
        <input 
          type="text" 
          id="font-${t.key}" 
          value="${E(ze(this.currentTheme.fonts[t.key]))}"
          placeholder="Font family"
        >
        <small>${t.description}</small>
      </div>
    `).join("")}renderSpacingInputs(){return[{key:"unit",label:"Base Unit",description:"Base spacing unit in pixels",type:"number"},{key:"containerMaxWidth",label:"Container Max Width",description:"Maximum container width",type:"text"},{key:"sidebarWidth",label:"Sidebar Width",description:"Sidebar width",type:"text"}].map(t=>`
      <div class="mdv-theme-builder-field">
        <label for="spacing-${t.key}">${t.label}</label>
        <input 
          type="${t.type}" 
          id="spacing-${t.key}" 
          value="${E(ae(this.currentTheme.spacing[t.key]))}"
          placeholder="${t.type==="number"?"8":"e.g., 1200px"}"
        >
        <small>${t.description}</small>
      </div>
    `).join("")}renderAccessibilityCheck(){const e=this.themeManager.getContrastRatio(this.currentTheme.colors.textPrimary,this.currentTheme.colors.background),t=this.themeManager.getContrastRatio(this.currentTheme.colors.primary,this.currentTheme.colors.background);return`
      <div class="mdv-theme-builder-section">
        <h3>Accessibility Check</h3>
        <div class="mdv-theme-builder-accessibility">
          <div class="mdv-theme-builder-contrast-check">
            <span>Text/Background:</span>
            <span class="mdv-contrast-ratio ${e>=4.5?"pass":"fail"}">
              ${e.toFixed(1)}:1 ${e>=4.5?"✓":"✗"}
            </span>
          </div>
          <div class="mdv-theme-builder-contrast-check">
            <span>Primary/Background:</span>
            <span class="mdv-contrast-ratio ${t>=3?"pass":"fail"}">
              ${t.toFixed(1)}:1 ${t>=3?"✓":"✗"}
            </span>
          </div>
        </div>
      </div>
    `}renderPreview(){return`
      <div class="mdv-theme-preview-sample">
        <h1>Sample Heading</h1>
        <p>This is a sample paragraph to demonstrate how your theme will look. You can see the primary text color, background, and overall styling.</p>
        <a href="#" style="color: ${M(this.currentTheme.colors.link)}">Sample Link</a>
        <blockquote style="background: ${M(this.currentTheme.colors.surface)}; border-left: 4px solid ${M(this.currentTheme.colors.primary)};">
          This is a blockquote to show surface colors and borders.
        </blockquote>
        <code style="background: ${M(this.currentTheme.colors.codeBackground)}; color: ${M(this.currentTheme.colors.code)};">
          code example
        </code>
        <div class="mdv-preview-buttons">
          <button style="background: ${M(this.currentTheme.colors.primary)}; color: white;">Primary Button</button>
          <button style="background: ${M(this.currentTheme.colors.secondary)}; color: white;">Secondary Button</button>
        </div>
      </div>
    `}open(){this.isOpen=!0,this.updateDisplay()}close(){this.isOpen=!1,this.updateDisplay(),this.options.onClose&&this.options.onClose()}attachTo(e){this.container=e,this.setupEventListeners()}setupEventListeners(){if(!this.container)return;this.container.querySelector(".mdv-theme-builder-close")?.addEventListener("click",()=>this.close());const t=this.container.querySelector(".mdv-theme-builder-overlay");t?.addEventListener("click",l=>{l.target===t&&this.close()}),this.colorInputs.forEach(l=>{if(!this.container)return;const g=this.container.querySelector(`#color-${l.key}`),x=this.container.querySelector(`#color-text-${l.key}`);if(!g||!x){console.warn(`Color inputs not found for: ${l.key}`);return}g.addEventListener("input",A=>{const O=A.target.value;this.updateColor(l.key,O),x.value=O}),x.addEventListener("input",A=>{const O=A.target.value;this.isValidColor(O)&&(this.updateColor(l.key,O),g.value=O)})}),["body","heading","code"].forEach(l=>{if(!this.container)return;const g=this.container.querySelector(`#font-${l}`);if(!g){console.warn(`Font input not found: font-${l}`);return}g.addEventListener("input",x=>{this.updateFont(l,x.target.value)})}),["unit","containerMaxWidth","sidebarWidth"].forEach(l=>{if(!this.container)return;const g=this.container.querySelector(`#spacing-${l}`);if(!g){console.warn(`Spacing input not found: spacing-${l}`);return}g.addEventListener("input",x=>{const A=l==="unit"?parseInt(x.target.value):x.target.value;this.updateSpacing(l,A)})});const i=this.container.querySelector("#border-radius");i&&i.addEventListener("input",l=>{this.currentTheme.borderRadius=l.target.value,this.updatePreview()});const a=this.container.querySelector("#theme-name");a&&a.addEventListener("input",l=>{this.currentTheme.name=l.target.value}),this.options.allowModeSelection&&this.container.querySelectorAll('input[name="theme-mode"]').forEach(g=>{g.addEventListener("change",x=>{const A=x.target.value;this.switchMode(A)})});const s=this.container.querySelector("#base-theme");s&&s.addEventListener("change",l=>{this.loadBaseTheme(l.target.value)}),this.container.querySelector("#save-theme")?.addEventListener("click",()=>this.saveTheme()),this.container.querySelector("#reset-theme")?.addEventListener("click",()=>this.resetTheme()),this.container.querySelector("#export-theme")?.addEventListener("click",()=>this.exportTheme()),this.container.querySelector("#import-theme")?.addEventListener("click",()=>this.importTheme()),document.addEventListener("keydown",l=>{l.key==="Escape"&&this.isOpen&&this.close()})}updateColor(e,t){this.currentTheme.colors[e]=t,this.updatePreview(),this.updateAccessibilityCheck()}updateFont(e,t){this.currentTheme.fonts[e]=t,this.updatePreview()}updateSpacing(e,t){this.currentTheme.spacing[e]=t,this.updatePreview()}updatePreview(){if(!this.options.showPreview||!this.container)return;const e=this.container.querySelector("#theme-preview");e&&(e.innerHTML=this.renderPreview());const t=this.container.querySelector(".mdv-theme-builder-preview-content");t&&Object.entries(this.currentTheme.colors).forEach(([o,r])=>{t.style.setProperty(`--mdv-color-${this.kebabCase(o)}`,r)})}updateAccessibilityCheck(){if(!this.options.showAccessibilityCheck||!this.container)return;const e=this.container.querySelector(".mdv-theme-builder-accessibility");e&&(e.innerHTML=this.renderAccessibilityCheck().match(/<div class="mdv-theme-builder-accessibility">(.*?)<\/div>/s)?.[1]||"")}updateDisplay(){if(!this.container)return;const e=this.container.querySelector(".mdv-theme-builder-overlay");e&&(e.classList.toggle("open",this.isOpen),e.setAttribute("aria-hidden",(!this.isOpen).toString()))}switchMode(e){this.currentMode=e;const t=b(this.currentTheme.name);this.loadBaseTheme(t)}loadBaseTheme(e){const t=`${e}-${this.currentMode}`,o=this.themeManager.getTheme(t);if(o){const r=this.container?.querySelector("#theme-name")?.value,i=r&&r!==b(this.currentTheme.name);this.currentTheme=this.deepCloneTheme(o),i&&(this.currentTheme.name=r),this.refreshInputs(),this.updatePreview(),this.updateAccessibilityCheck()}}refreshInputs(){if(!this.container)return;this.colorInputs.forEach(t=>{if(!this.container)return;const o=this.container.querySelector(`#color-${t.key}`),r=this.container.querySelector(`#color-text-${t.key}`);o&&(o.value=this.currentTheme.colors[t.key]),r&&(r.value=this.currentTheme.colors[t.key])}),[{selector:"#theme-name",value:this.currentTheme.name},{selector:"#border-radius",value:this.currentTheme.borderRadius},{selector:"#font-body",value:this.currentTheme.fonts.body},{selector:"#font-heading",value:this.currentTheme.fonts.heading},{selector:"#font-code",value:this.currentTheme.fonts.code},{selector:"#spacing-unit",value:this.currentTheme.spacing.unit.toString()},{selector:"#spacing-containerMaxWidth",value:this.currentTheme.spacing.containerMaxWidth},{selector:"#spacing-sidebarWidth",value:this.currentTheme.spacing.sidebarWidth}].forEach(({selector:t,value:o})=>{if(!this.container)return;const r=this.container.querySelector(t);r&&(r.value=o)})}saveTheme(){const o=`${this.container?.querySelector("#theme-name")?.value||b(this.currentTheme.name)}-${this.currentMode}`,r=re(b(this.originalTheme.name),this.currentMode,{...this.currentTheme,name:o});this.themeManager.registerTheme(r),this.options.onThemeCreate&&this.options.onThemeCreate(r),this.close()}resetTheme(){this.currentTheme=this.deepCloneTheme(this.originalTheme),this.refreshInputs(),this.updatePreview(),this.updateAccessibilityCheck()}exportTheme(){const e=this.themeManager.exportTheme(this.currentTheme),t=new Blob([e],{type:"application/json"}),o=URL.createObjectURL(t),r=document.createElement("a");r.href=o,r.download=`${this.currentTheme.name}.json`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(o)}importTheme(){const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=t=>{const o=t.target.files?.[0];if(o){const r=new FileReader;r.onload=i=>{try{const a=i.target?.result,s=this.themeManager.importTheme(a);s&&(this.currentTheme=this.deepCloneTheme(s),this.refreshInputs(),this.updatePreview(),this.updateAccessibilityCheck())}catch(a){console.error("Failed to import theme:",a)}},r.readAsText(o)}},e.click()}isValidColor(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)}kebabCase(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}deepCloneTheme(e){return typeof structuredClone<"u"?structuredClone(e):JSON.parse(JSON.stringify(e))}getStyles(){return`
      .mdv-theme-builder-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: var(--mdv-z-modal, 1040);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      
      .mdv-theme-builder-overlay.open {
        opacity: 1;
        visibility: visible;
      }
      
      .mdv-theme-builder {
        position: relative;
        max-width: 1200px;
        max-height: 90vh;
        margin: 5vh auto;
        background: var(--mdv-color-surface);
        border-radius: var(--mdv-border-radius);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }
      
      .mdv-theme-builder-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 24px;
        border-bottom: 1px solid var(--mdv-color-border);
        background: var(--mdv-color-background);
      }
      
      .mdv-theme-builder-header h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--mdv-color-text);
      }
      
      .mdv-theme-builder-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        padding: 0;
        background: transparent;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        color: var(--mdv-color-text);
        transition: background 0.2s ease;
      }
      
      .mdv-theme-builder-close:hover {
        background: var(--mdv-color-surface);
      }
      
      .mdv-theme-builder-content {
        display: flex;
        flex: 1;
        min-height: 0;
      }
      
      .mdv-theme-builder-sidebar {
        width: 400px;
        padding: 24px;
        overflow-y: auto;
        border-right: 1px solid var(--mdv-color-border);
      }
      
      .mdv-theme-builder-preview {
        flex: 1;
        padding: 24px;
        overflow-y: auto;
      }
      
      .mdv-theme-builder-section {
        margin-bottom: 24px;
      }
      
      .mdv-theme-builder-section h3 {
        margin: 0 0 12px 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--mdv-color-text);
      }
      
      .mdv-theme-builder-section h4 {
        margin: 16px 0 8px 0;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--mdv-color-text);
        opacity: 0.85;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      /* Mode selector styles */
      .mdv-theme-builder-mode-selector {
        display: flex;
        gap: 8px;
      }
      
      .mdv-theme-builder-mode-option {
        flex: 1;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      
      .mdv-theme-builder-mode-option input[type="radio"] {
        display: none;
      }
      
      .mdv-theme-builder-mode-label {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 12px 16px;
        border: 2px solid var(--mdv-color-border);
        border-radius: calc(var(--mdv-border-radius) * 0.75);
        background: var(--mdv-color-background);
        color: var(--mdv-color-text);
        font-size: 0.875rem;
        font-weight: 500;
        text-align: center;
        justify-content: center;
        transition: all 0.2s ease;
      }
      
      .mdv-theme-builder-mode-option:hover .mdv-theme-builder-mode-label {
        border-color: var(--mdv-color-primary);
        background: var(--mdv-color-surface);
      }
      
      .mdv-theme-builder-mode-option input[type="radio"]:checked + .mdv-theme-builder-mode-label {
        border-color: var(--mdv-color-primary);
        background: var(--mdv-color-primary);
        color: white;
      }
      
      .mdv-theme-builder-mode-icon {
        font-size: 1rem;
      }
      
      .mdv-theme-builder-field {
        margin-bottom: 12px;
      }
      
      .mdv-theme-builder-field label {
        display: block;
        margin-bottom: 4px;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--mdv-color-text);
      }
      
      .mdv-theme-builder-field input,
      .mdv-theme-builder-field select {
        width: 100%;
        padding: 8px 12px;
        border: 1px solid var(--mdv-color-border);
        border-radius: calc(var(--mdv-border-radius) * 0.75);
        background: var(--mdv-color-background);
        font-size: 0.875rem;
        transition: border-color 0.2s ease;
      }
      
      .mdv-theme-builder-field input:focus,
      .mdv-theme-builder-field select:focus {
        outline: none;
        border-color: var(--mdv-color-primary);
      }
      
      .mdv-theme-builder-field input::placeholder {
        color: var(--mdv-color-text);
        opacity: 0.5;
      }
      
      .mdv-theme-builder-field small {
        display: block;
        margin-top: 4px;
        font-size: 0.75rem;
        color: var(--mdv-color-text);
        opacity: 0.75;
      }
      
      .mdv-theme-builder-color-field {
        margin-bottom: 16px;
      }
      
      .mdv-theme-builder-color-input {
        display: flex;
        gap: 8px;
      }
      
      .mdv-theme-builder-color-input input[type="color"] {
        width: 48px;
        height: 36px;
        padding: 2px;
        border-radius: calc(var(--mdv-border-radius) * 0.75);
        cursor: pointer;
      }
      
      .mdv-theme-builder-color-input input[type="text"] {
        flex: 1;
      }
      
      .mdv-theme-builder-accessibility {
        background: var(--mdv-color-background);
        padding: 12px;
        border-radius: calc(var(--mdv-border-radius) * 0.75);
        border: 1px solid var(--mdv-color-border);
      }
      
      .mdv-theme-builder-contrast-check {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        font-size: 0.875rem;
        color: var(--mdv-color-text);
      }
      
      .mdv-theme-builder-contrast-check:last-child {
        margin-bottom: 0;
      }
      
      .mdv-contrast-ratio.pass {
        color: var(--mdv-color-success);
        font-weight: 500;
      }
      
      .mdv-contrast-ratio.fail {
        color: var(--mdv-color-error);
        font-weight: 500;
      }
      
      .mdv-theme-builder-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 24px;
        padding-top: 24px;
        border-top: 1px solid var(--mdv-color-border);
      }
      
      .mdv-theme-builder-btn {
        padding: 8px 16px;
        border: 1px solid var(--mdv-color-border);
        border-radius: calc(var(--mdv-border-radius) * 0.75);
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .mdv-theme-builder-btn-primary {
        background: var(--mdv-color-primary);
        color: white;
        border-color: var(--mdv-color-primary);
      }
      
      .mdv-theme-builder-btn-primary:hover {
        background: var(--mdv-color-primary);
        opacity: 0.9;
      }
      
      .mdv-theme-builder-btn-secondary {
        background: var(--mdv-color-background);
        color: var(--mdv-color-text);
        border-color: var(--mdv-color-border);
      }
      
      .mdv-theme-builder-btn-secondary:hover {
        background: var(--mdv-color-surface);
      }
      
      .mdv-theme-preview-sample {
        background: var(--mdv-color-background);
        padding: 24px;
        border-radius: var(--mdv-border-radius);
        border: 1px solid var(--mdv-color-border);
      }
      
      .mdv-theme-preview-sample h1 {
        margin: 0 0 16px 0;
        color: var(--mdv-color-text-primary);
        font-family: var(--mdv-font-heading);
      }
      
      .mdv-theme-preview-sample p {
        margin: 0 0 16px 0;
        color: var(--mdv-color-text);
        font-family: var(--mdv-font-body);
        line-height: 1.6;
      }
      
      .mdv-theme-preview-sample blockquote {
        margin: 16px 0;
        padding: 12px 16px;
        border-radius: calc(var(--mdv-border-radius) * 0.75);
      }
      
      .mdv-theme-preview-sample code {
        padding: 4px 8px;
        border-radius: calc(var(--mdv-border-radius) * 0.5);
        font-family: var(--mdv-font-code);
        font-size: 0.875rem;
      }
      
      .mdv-preview-buttons {
        display: flex;
        gap: 12px;
        margin-top: 16px;
      }
      
      .mdv-preview-buttons button {
        padding: 8px 16px;
        border: none;
        border-radius: calc(var(--mdv-border-radius) * 0.75);
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
      }
      
      /* Mobile responsiveness - maintain same components with responsive layout */
      @media (max-width: 768px) {
        .mdv-theme-builder {
          margin: 0;
          max-height: 100vh;
          border-radius: 0;
        }
        
        .mdv-theme-builder-content {
          flex-direction: column;
        }
        
        .mdv-theme-builder-sidebar {
          width: 100%;
          border-right: none;
          border-bottom: 1px solid var(--mdv-color-border);
          max-height: 50vh;
          overflow-y: auto;
        }
        
        .mdv-theme-builder-preview {
          max-height: 50vh;
          border-top: 1px solid var(--mdv-color-border);
        }
        
        .mdv-theme-builder-actions {
          flex-direction: column;
          position: sticky;
          bottom: 0;
          background: var(--mdv-color-background);
          padding: 16px;
          border-top: 1px solid var(--mdv-color-border);
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .mdv-theme-builder-actions button {
          width: 100%;
        }
        
        .mdv-theme-builder-btn {
          width: 100%;
          justify-content: center;
        }
      }
    `}}const V=class V{constructor(e,t={}){this.container=null,this.isDark=!1,this.clickHandler=null,this.themeChangeHandler=null,this.themeManager=e,this.options={position:"header",showLabel:!1,lightThemeName:"default-light",darkThemeName:"default-dark",...t};const o=this.themeManager.getCurrentTheme().name;this.isDark=o.includes("-dark")}render(){const e=`mdv-dark-toggle-${++V.instanceCounter}`;return`
      <div class="mdv-dark-mode-toggle ${this.options.position==="floating"?"mdv-dark-toggle-floating":""}">
        ${this.options.showLabel?`
          <span class="mdv-dark-toggle-label">
            ${this.isDark?"Dark":"Light"} Mode
          </span>
        `:""}
        <button 
          class="mdv-dark-toggle-btn ${this.isDark?"dark":"light"}" 
          id="${e}"
          type="button"
          role="switch"
          aria-checked="${this.isDark}"
          aria-label="${this.isDark?"Switch to light mode":"Switch to dark mode"}"
          title="${this.isDark?"Switch to light mode":"Switch to dark mode"}"
        >
          <div class="mdv-dark-mode-toggle-track">
            <div class="mdv-dark-mode-toggle-thumb">
              <div class="mdv-dark-mode-icon light-icon">${this.getSunIcon()}</div>
              <div class="mdv-dark-mode-icon dark-icon">${this.getMoonIcon()}</div>
            </div>
          </div>
        </button>
      </div>
    `}getSunIcon(){return`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/>
        <path d="M12 2V6M12 18V22M22 12H18M6 12H2M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `}getMoonIcon(){return`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05Z"/>
      </svg>
    `}attachTo(e){this.container=e,this.setupEventListeners()}setupEventListeners(){if(!this.container)return;const e=this.container.querySelector(".mdv-dark-toggle-btn");if(!e)return;this.clickHandler=()=>{this.toggle()},e.addEventListener("click",this.clickHandler),this.themeChangeHandler=o=>{const a=o.detail?.theme?.name?.includes("-dark")||!1;a!==this.isDark&&(this.isDark=a,this.updateUI())},document.addEventListener("mdv-theme-changed",this.themeChangeHandler);const t=o=>{const i=o.detail?.isDark;i!==void 0&&i!==this.isDark&&(this.isDark=i,this.updateUI())};document.addEventListener("mdv-dark-mode-toggled",t)}toggle(){const t=this.themeManager.getCurrentTheme().name.replace(/-light|-dark/,""),o=this.isDark?"light":"dark",r=`${t}-${o}`,i=this.themeManager.setTheme(r);i&&(this.isDark=!this.isDark,this.updateUI(),document.dispatchEvent(new CustomEvent("mdv-dark-mode-toggled",{detail:{isDark:this.isDark,theme:i}})),this.options.onToggle&&this.options.onToggle(this.isDark,i))}updateUI(){if(!this.container)return;const e=this.container.querySelector(".mdv-dark-toggle-btn"),t=this.container.querySelector(".mdv-dark-toggle-label");e&&(e.className=`mdv-dark-toggle-btn ${this.isDark?"dark":"light"}`,e.setAttribute("aria-checked",this.isDark.toString()),e.setAttribute("aria-label",this.isDark?"Switch to light mode":"Switch to dark mode"),e.setAttribute("title",this.isDark?"Switch to light mode":"Switch to dark mode")),t&&(t.textContent=`${this.isDark?"Dark":"Light"} Mode`)}setDarkMode(e){e!==this.isDark&&this.toggle()}isDarkMode(){return this.isDark}destroy(){if(this.container&&this.clickHandler){const e=this.container.querySelector(".mdv-dark-toggle-btn");e&&e.removeEventListener("click",this.clickHandler)}this.themeChangeHandler&&document.removeEventListener("mdv-theme-changed",this.themeChangeHandler),this.container=null,this.clickHandler=null,this.themeChangeHandler=null}getStyles(){return`
      .mdv-dark-mode-toggle {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      .mdv-dark-toggle-floating {
        position: fixed;
        bottom: 80px;
        right: 20px;
        z-index: var(--mdv-z-fixed, 1030);
      }
      
      
      .mdv-dark-toggle-label {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--mdv-color-text);
        user-select: none;
      }
      
      .mdv-dark-toggle-btn {
        position: relative;
        width: 44px;
        height: 24px;
        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
        border-radius: 12px;
        transition: all 0.3s ease;
        outline: none;
      }
      
      .mdv-dark-toggle-btn:focus {
        outline: 2px solid var(--mdv-color-primary);
        outline-offset: 2px;
      }
      
      .mdv-dark-toggle-btn:focus:not(:focus-visible) {
        outline: none;
      }
      
      .mdv-dark-mode-toggle-track {
        width: 100%;
        height: 100%;
        background: var(--mdv-color-border);
        border-radius: 12px;
        position: relative;
        transition: background-color 0.3s ease;
      }
      
      .mdv-dark-toggle-btn.dark .mdv-dark-mode-toggle-track {
        background: var(--mdv-color-primary);
      }
      
      .mdv-dark-toggle-btn:hover .mdv-dark-mode-toggle-track {
        background: var(--mdv-color-text);
        opacity: 0.3;
      }
      
      .mdv-dark-toggle-btn.dark:hover .mdv-dark-mode-toggle-track {
        background: var(--mdv-color-primary);
        filter: brightness(1.1);
      }
      
      .mdv-dark-mode-toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        background: var(--mdv-color-surface);
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
      }
      
      .mdv-dark-toggle-btn.dark .mdv-dark-mode-toggle-thumb {
        transform: translateX(20px);
      }
      
      .mdv-dark-mode-icon {
        position: absolute;
        transition: opacity 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .mdv-dark-mode-icon svg {
        width: 14px;
        height: 14px;
        color: var(--mdv-color-text);
      }
      
      .mdv-dark-toggle-btn.light .light-icon {
        opacity: 1;
      }
      
      .mdv-dark-toggle-btn.light .dark-icon {
        opacity: 0;
      }
      
      .mdv-dark-toggle-btn.dark .light-icon {
        opacity: 0;
      }
      
      .mdv-dark-toggle-btn.dark .dark-icon {
        opacity: 1;
      }
      
      /* Mobile styles */
      @media (max-width: 768px) {
        .mdv-dark-toggle-floating {
          bottom: 20px;
          right: 16px;
        }
        
        .mdv-dark-mode-toggle {
          gap: 8px;
        }
        
        .mdv-dark-toggle-label {
          font-size: 0.8rem;
        }
      }
      
      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .mdv-dark-toggle-track {
          border: 2px solid var(--mdv-color-text);
        }
        
        .mdv-dark-toggle-thumb {
          border: 1px solid var(--mdv-color-text);
        }
      }
      
      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .mdv-dark-toggle-btn,
        .mdv-dark-toggle-track,
        .mdv-dark-toggle-thumb,
        .mdv-dark-toggle-icon {
          transition: none;
        }
      }
    `}};V.instanceCounter=0;let N=V;function at(n){const e=b(n),o=S(n)==="light"?"dark":"light";return`${e}-${o}`}const fe=768,st=100;class ve{constructor(e,t={}){this.container=null,this.isOpen=!1,this.themeBuilder=null,this.focusTrapHandler=null,this.documentClickHandler=null,this.themeManager=e,this.options={position:"header",showPreview:!0,showDescription:!0,allowCustomThemes:!0,showDarkModeToggle:!0,darkModeTogglePosition:"inline",customThemeAccess:"everyone",...t},this.darkModeToggle=new N(e,{showLabel:!1,onToggle:(o,r)=>{this.options.onThemeChange&&this.options.onThemeChange(r),this.options.onModeChange&&this.options.onModeChange(o?"dark":"light")}})}render(){const e=this.themeManager.getCurrentTheme(),t=this.themeManager.getAvailableThemes(),o=b(e.name),r=S(e.name),i=this.groupThemesByBaseName(t);return`
      <div class="mdv-theme-switcher ${this.options.position==="floating"?"mdv-theme-switcher-floating":""}" role="region" aria-label="Theme selector">
        ${this.options.showDarkModeToggle&&this.options.darkModeTogglePosition==="separate"?this.renderDarkModeToggle(r):""}
        <button 
          class="mdv-theme-trigger" 
          aria-label="Change theme" 
          aria-expanded="${this.isOpen}"
          aria-haspopup="menu"
        >
          ${this.getThemeIcon(o,r)}
          <span class="mdv-theme-name">${o}</span>
          <span class="mdv-dropdown-arrow" aria-hidden="true">▼</span>
        </button>
        <div 
          class="mdv-theme-dropdown ${this.isOpen?"open":""}" 
          role="menu"
          aria-hidden="${!this.isOpen}"
          aria-labelledby="theme-dropdown-label"
        >
          <div class="mdv-theme-dropdown-header">
            <h3 id="theme-dropdown-label">Choose Theme</h3>
            <div class="mdv-theme-header-actions">
              ${this.options.showDarkModeToggle&&this.options.darkModeTogglePosition==="inline"?this.renderDarkModeToggle(r):""}
              ${this.shouldShowCustomThemeButton()?`
                <button class="mdv-theme-custom-btn" aria-label="Create custom theme">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                    <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z"/>
                  </svg>
                </button>
              `:""}
            </div>
          </div>
          <div class="mdv-theme-list" role="none">
            ${Object.entries(i).map(([a,s])=>this.renderThemeGroup(a,s,o===a)).join("")}
          </div>
        </div>
      </div>
    `}shouldShowCustomThemeButton(){if(!this.options.allowCustomThemes)return!1;const e=this.options.customThemeAccess;return e==="none"?!1:e==="everyone"?!0:typeof e=="function"?e():!0}renderDarkModeToggle(e){return this.darkModeToggle.render()}groupThemesByBaseName(e){const t={};return e.forEach(o=>{const r=b(o.name);t[r]||(t[r]=[]),t[r].push(o)}),t}renderThemeGroup(e,t,o){const r=t.find(i=>S(i.name)==="light")||t[0];return this.renderThemeOption(r,o)}renderThemeOption(e,t){const o=b(e.name);return`
      <button 
        class="mdv-theme-option ${t?"active":""}" 
        data-theme="${o}"
        role="menuitem"
        aria-label="Switch to ${o} theme"
        aria-current="${t?"true":"false"}"
        tabindex="${t?"0":"-1"}"
      >
        <div class="mdv-theme-option-content">
          <div class="mdv-theme-option-info">
            <span class="mdv-theme-option-name">${E(o)}</span>
            ${this.options.showDescription&&e.description?`
              <span class="mdv-theme-option-description">${E(e.description)}</span>
            `:""}
          </div>
          ${this.options.showPreview?this.renderThemePreview(e):""}
        </div>
      </button>
    `}renderThemePreview(e){return`
      <div class="mdv-theme-preview" aria-hidden="true">
        <div class="mdv-theme-preview-colors">
          <div 
            class="mdv-theme-preview-color" 
            style="background-color: ${e.colors.background}"
            title="Background"
          ></div>
          <div 
            class="mdv-theme-preview-color" 
            style="background-color: ${e.colors.primary}"
            title="Primary"
          ></div>
          <div 
            class="mdv-theme-preview-color" 
            style="background-color: ${e.colors.secondary}"
            title="Secondary"
          ></div>
          <div 
            class="mdv-theme-preview-color" 
            style="background-color: ${e.colors.surface}"
            title="Surface"
          ></div>
        </div>
      </div>
    `}getThemeIcon(e,t){const o={default:"🎨",github:"🐙",material:"🎨"},r={light:"☀️",dark:"🌙"};return t&&this.options.showDarkModeToggle?r[t]:o[e]||"🎨"}attachTo(e){this.container=e,this.setupEventListeners()}setupEventListeners(){if(!this.container)return;const e=this.container.querySelector(".mdv-dark-mode-toggle");e&&this.darkModeToggle.attachTo(e),this.container.querySelector(".mdv-theme-trigger")?.addEventListener("click",r=>{r.stopPropagation(),this.toggleDropdown()}),this.container.addEventListener("click",r=>{const a=r.target.closest(".mdv-theme-option");if(a&&a.dataset.theme){this.selectTheme(a.dataset.theme);return}}),this.container.querySelector(".mdv-theme-custom-btn")?.addEventListener("click",r=>{r.stopPropagation(),this.openCustomThemeBuilder()}),this.documentClickHandler=r=>{this.container?.contains(r.target)||this.closeDropdown()},this.container.addEventListener("keydown",r=>{this.handleKeyboardNavigation(r)}),this.isMobile()&&this.setupMobileInteractions()}setupMobileInteractions(){this.createMobileBackdrop(),this.setupSwipeToClose()}createMobileBackdrop(){let e=document.querySelector(".mdv-theme-backdrop");return e||(e=document.createElement("div"),e.className="mdv-theme-backdrop",document.body.appendChild(e)),e.addEventListener("click",()=>{this.closeDropdown()}),e}setupSwipeToClose(){const e=this.container?.querySelector(".mdv-theme-dropdown");if(!e)return;let t=0,o=0,r=!1;const i=c=>{c.touches.length===1&&(t=c.touches[0].clientY,o=t,r=!0,e.style.transition="none")},a=c=>{if(!r||c.touches.length!==1)return;o=c.touches[0].clientY;const m=o-t;m>0&&(e.style.transform=`translateY(${m}px)`)},s=()=>{if(!r)return;r=!1,e.style.transition="";const c=o-t;c>st||c>e.offsetHeight*.3?this.closeDropdown():e.style.transform=""};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchmove",a,{passive:!0}),e.addEventListener("touchend",s,{passive:!0}),e.addEventListener("touchcancel",s,{passive:!0})}toggleDarkMode(){const e=this.themeManager.getCurrentTheme(),t=at(e.name),o=this.themeManager.setTheme(t);if(o){const r=S(o.name);this.updateUI(),this.options.onModeChange&&this.options.onModeChange(r),this.options.onThemeChange&&this.options.onThemeChange(o)}}toggleDropdown(){this.isOpen=!this.isOpen,this.updateDropdownState(),this.isOpen?(this.focusFirstMenuItem(),this.setupFocusTrap(),this.isMobile()&&this.showMobileBackdrop(),this.documentClickHandler&&requestAnimationFrame(()=>{document.addEventListener("click",this.documentClickHandler)})):(this.removeFocusTrap(),this.isMobile()&&this.hideMobileBackdrop(),this.documentClickHandler&&document.removeEventListener("click",this.documentClickHandler))}closeDropdown(){this.container?.querySelector(".mdv-theme-trigger")?.focus(),this.isOpen=!1,this.updateDropdownState(),this.removeFocusTrap(),this.isMobile()&&this.hideMobileBackdrop(),this.documentClickHandler&&document.removeEventListener("click",this.documentClickHandler)}updateDropdownState(){const e=this.container?.querySelector(".mdv-theme-dropdown"),t=this.container?.querySelector(".mdv-theme-trigger");e&&(e.classList.toggle("open",this.isOpen),e.setAttribute("aria-hidden",(!this.isOpen).toString())),t&&t.setAttribute("aria-expanded",this.isOpen.toString())}selectTheme(e){const t=this.themeManager.getCurrentTheme(),o=S(t.name),r=`${e}-${o}`,i=this.themeManager.setTheme(r);i&&(this.updateUI(),this.closeDropdown(),this.options.onThemeChange&&this.options.onThemeChange(i))}updateUI(){if(!this.container)return;const e=this.themeManager.getCurrentTheme(),t=b(e.name),o=S(e.name),r=this.container.querySelector(".mdv-theme-trigger");if(r){const a=r.querySelector(".mdv-theme-name");if(a){const s=this.getThemeIcon(t,o),c=r.firstChild;c&&c.nodeType===Node.TEXT_NODE?c.textContent=s:r.insertBefore(document.createTextNode(s),r.firstChild),a.textContent=t}else{const s=r.querySelector(".mdv-dropdown-arrow");r.innerHTML=`
          ${this.getThemeIcon(t,o)}
          <span class="mdv-theme-name">${t}</span>
          ${s?s.outerHTML:'<span class="mdv-dropdown-arrow" aria-hidden="true">▼</span>'}
        `}}const i=this.container.querySelector(".mdv-dark-mode-toggle");i&&(i.className=`mdv-dark-mode-toggle ${o}`,i.setAttribute("aria-label",`Toggle ${o==="light"?"dark":"light"} mode`)),this.container.querySelectorAll(".mdv-theme-option").forEach(a=>{const s=a.getAttribute("data-theme")===t;a.classList.toggle("active",s),a.setAttribute("aria-current",s.toString())}),this.options.showDarkModeToggle&&this.options.darkModeTogglePosition==="separate"&&this.updateSeparateDarkModeToggle(o)}updateSeparateDarkModeToggle(e){const t=this.container?.parentElement?.querySelector(".mdv-theme-switcher .mdv-dark-mode-toggle");t&&(t.className=`mdv-dark-mode-toggle ${e}`,t.setAttribute("aria-label",`Toggle ${e==="light"?"dark":"light"} mode`))}handleKeyboardNavigation(e){if(!this.isOpen)return;const t=Array.from(this.container?.querySelectorAll(".mdv-theme-option")||[]),o=t.findIndex(i=>i.classList.contains("active"));let r=o;switch(e.key){case"ArrowDown":e.preventDefault(),r=(o+1)%t.length;break;case"ArrowUp":e.preventDefault(),r=o===0?t.length-1:o-1;break;case"Enter":case" ":{e.preventDefault();const i=document.activeElement;i?.dataset.theme&&this.selectTheme(i.dataset.theme);return}case"Escape":e.preventDefault(),this.closeDropdown();return}r!==o&&t[r]?.focus()}focusFirstMenuItem(){this.container?.querySelector(".mdv-theme-option")?.focus()}setupFocusTrap(){if(!this.container)return;const e=this.container.querySelectorAll(".mdv-theme-option, .mdv-dark-mode-toggle, .mdv-theme-custom-btn");if(e.length===0)return;const t=e[0],o=e[e.length-1];this.focusTrapHandler=r=>{r.key==="Tab"&&(r.shiftKey?document.activeElement===t&&(r.preventDefault(),o.focus()):document.activeElement===o&&(r.preventDefault(),t.focus()))},document.addEventListener("keydown",this.focusTrapHandler)}removeFocusTrap(){this.focusTrapHandler&&(document.removeEventListener("keydown",this.focusTrapHandler),this.focusTrapHandler=null)}openCustomThemeBuilder(){if(!this.themeBuilder){this.themeBuilder=new pe(this.themeManager,{onThemeCreate:o=>{this.selectTheme(o.name)},onClose:()=>{this.themeBuilder=null}});const e=document.createElement("div");e.className="mdv-theme-builder-container",e.innerHTML=this.themeBuilder.render(),document.body.appendChild(e);const t="mdv-theme-builder-styles";if(!document.getElementById(t)){const o=document.createElement("style");o.id=t,o.textContent=this.themeBuilder.getStyles(),document.head.appendChild(o)}this.themeBuilder.attachTo(e)}this.themeBuilder.open(),this.closeDropdown()}isMobile(){return typeof window<"u"&&window.innerWidth<fe}showMobileBackdrop(){const e=document.querySelector(".mdv-theme-backdrop");e&&(e.classList.add("show"),document.body.style.overflow="hidden")}hideMobileBackdrop(){const e=document.querySelector(".mdv-theme-backdrop");e&&(e.classList.remove("show"),document.body.style.overflow="")}destroy(){this.closeDropdown(),this.themeBuilder&&(this.themeBuilder=null),this.hideMobileBackdrop();const e=document.querySelector(".mdv-theme-backdrop");e&&e.remove(),this.container?.remove(),this.container=null,this.isOpen=!1}getStyles(){return`
      .mdv-theme-switcher {
        position: relative;
      }
      
      .mdv-theme-switcher-floating {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: var(--mdv-z-fixed, 1030);
      }
      
      .mdv-theme-trigger {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        background: var(--mdv-color-surface);
        border: 1px solid var(--mdv-color-border);
        border-radius: var(--mdv-border-radius);
        color: var(--mdv-color-text);
        cursor: pointer;
        font-size: 0.875rem;
        transition: all 0.2s ease;
      }
      
      .mdv-theme-trigger:hover {
        background: var(--mdv-color-background);
        box-shadow: 0 2px 4px rgba(var(--mdv-color-text-rgb, 0, 0, 0), 0.1);
      }
      
      .mdv-theme-trigger:focus {
        outline: 2px solid var(--mdv-color-primary);
        outline-offset: 2px;
        background: var(--mdv-color-background);
      }
      
      .mdv-theme-trigger:focus:not(:focus-visible) {
        outline: none;
      }
      
      .mdv-theme-name {
        text-transform: capitalize;
        color: var(--mdv-color-text);
      }
      
      .mdv-theme-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 8px;
        background: var(--mdv-color-surface);
        border: 1px solid var(--mdv-color-border);
        border-radius: var(--mdv-border-radius);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        min-width: 280px;
        max-height: 400px;
        overflow: hidden;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.2s ease;
        z-index: var(--mdv-z-popover, 1060);
      }
      
      .mdv-theme-dropdown.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      
      .mdv-theme-dropdown-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        border-bottom: 1px solid var(--mdv-color-border);
      }
      
      .mdv-theme-dropdown-header h3 {
        margin: 0;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--mdv-color-text);
      }
      
      .mdv-theme-custom-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        padding: 0;
        background: transparent;
        border: none;
        border-radius: 4px;
        color: var(--mdv-color-text);
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .mdv-theme-custom-btn:hover {
        background: var(--mdv-color-background);
        color: var(--mdv-color-primary);
      }
      
      .mdv-theme-custom-btn:focus {
        outline: 2px solid var(--mdv-color-primary);
        outline-offset: 2px;
        background: var(--mdv-color-background);
        color: var(--mdv-color-primary);
      }
      
      .mdv-theme-custom-btn:focus:not(:focus-visible) {
        outline: none;
      }
      
      .mdv-theme-list {
        max-height: 320px;
        overflow-y: auto;
        padding: 8px;
      }
      
      .mdv-theme-option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px;
        margin-bottom: 4px;
        background: transparent;
        border: 1px solid transparent;
        border-radius: calc(var(--mdv-border-radius) * 0.75);
        color: var(--mdv-color-text);
        cursor: pointer;
        text-align: left;
        transition: all 0.2s ease;
      }
      
      .mdv-theme-option:hover {
        background: var(--mdv-color-background);
        border-color: var(--mdv-color-border);
      }
      
      .mdv-theme-option:focus {
        outline: 2px solid var(--mdv-color-primary);
        outline-offset: 2px;
        background: var(--mdv-color-background);
        border-color: var(--mdv-color-primary);
      }
      
      .mdv-theme-option:focus:not(:focus-visible) {
        outline: none;
      }
      
      .mdv-theme-option.active:focus {
        outline: 2px solid rgba(255, 255, 255, 0.8);
        outline-offset: 2px;
        background: var(--mdv-color-primary);
        border-color: var(--mdv-color-primary);
      }
      
      .mdv-theme-option.active {
        background: var(--mdv-color-primary);
        color: white;
        border-color: var(--mdv-color-primary);
      }
      
      .mdv-theme-option-content {
        display: flex;
        align-items: center;
        gap: 12px;
        flex: 1;
      }
      
      .mdv-theme-option-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
      }
      
      .mdv-theme-option-name {
        font-weight: 500;
        text-transform: capitalize;
      }
      
      .mdv-theme-option-description {
        font-size: 0.75rem;
        opacity: 0.8;
      }
      
      .mdv-theme-option.active .mdv-theme-option-description {
        opacity: 0.9;
      }
      
      .mdv-theme-preview {
        display: flex;
        gap: 2px;
      }
      
      .mdv-theme-preview-color {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      
      /* Dark mode toggle styles */
      .mdv-theme-header-actions {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .mdv-dark-mode-toggle {
        position: relative;
        width: 44px;
        height: 24px;
        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
        border-radius: 12px;
        transition: all 0.3s ease;
      }
      
      .mdv-dark-mode-toggle-track {
        width: 100%;
        height: 100%;
        background: var(--mdv-color-border);
        border-radius: 12px;
        position: relative;
        transition: background-color 0.3s ease;
      }
      
      .mdv-dark-mode-toggle.dark .mdv-dark-mode-toggle-track {
        background: var(--mdv-color-primary);
      }
      
      .mdv-dark-mode-toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        background: var(--mdv-color-surface);
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
      }
      
      .mdv-dark-mode-toggle.dark .mdv-dark-mode-toggle-thumb {
        transform: translateX(20px);
      }
      
      .mdv-dark-mode-icon {
        position: absolute;
        transition: opacity 0.3s ease;
      }
      
      .mdv-dark-mode-toggle.light .light-icon {
        opacity: 1;
      }
      
      .mdv-dark-mode-toggle.light .dark-icon {
        opacity: 0;
      }
      
      .mdv-dark-mode-toggle.dark .light-icon {
        opacity: 0;
      }
      
      .mdv-dark-mode-toggle.dark .dark-icon {
        opacity: 1;
      }
      
      .mdv-dark-mode-toggle:hover .mdv-dark-mode-toggle-track {
        background: var(--mdv-color-text);
        opacity: 0.3;
      }
      
      .mdv-dark-mode-toggle.dark:hover .mdv-dark-mode-toggle-track {
        background: var(--mdv-color-primary);
        filter: brightness(1.1);
      }
      
      .mdv-dark-mode-toggle:focus {
        outline: 2px solid var(--mdv-color-primary);
        outline-offset: 2px;
      }
      
      .mdv-dark-mode-toggle:focus:not(:focus-visible) {
        outline: none;
      }
      
      /* Mobile styles */
      @media (max-width: ${fe}px) {
        .mdv-theme-dropdown {
          position: fixed;
          top: auto;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0;
          border-radius: var(--mdv-border-radius) var(--mdv-border-radius) 0 0;
          max-height: 85vh;
          z-index: var(--mdv-z-popover, 1060);
          animation: slideUpMobile 0.3s ease-out;
          padding-bottom: env(safe-area-inset-bottom, 0);
        }
        
        .mdv-theme-dropdown.open {
          animation: slideUpMobile 0.3s ease-out;
        }
        
        @keyframes slideUpMobile {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .mdv-theme-dropdown-header {
          padding: 16px;
          position: sticky;
          top: 0;
          background: var(--mdv-color-surface);
          z-index: 1;
          border-bottom: 1px solid var(--mdv-color-border);
        }
        
        .mdv-theme-dropdown-header h3 {
          font-size: 1rem;
        }
        
        .mdv-theme-list {
          padding: 12px;
          padding-bottom: calc(12px + env(safe-area-inset-bottom, 0));
          max-height: calc(85vh - 60px);
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior: contain;
        }
        
        .mdv-theme-option {
          padding: 16px;
          margin-bottom: 8px;
          min-height: 60px;
          touch-action: manipulation;
          position: relative;
          overflow: hidden;
        }
        
        .mdv-theme-option::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background: radial-gradient(
            circle,
            rgba(var(--mdv-color-primary-rgb, 9, 105, 218), 0.3) 0%,
            rgba(var(--mdv-color-primary-rgb, 9, 105, 218), 0.1) 50%,
            transparent 70%
          );
          border-radius: 50%;
          opacity: 0;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.2s ease-out, opacity 0.2s ease-out;
          pointer-events: none;
        }
        
        .mdv-theme-option:active {
          transform: scale(0.98);
        }
        
        .mdv-theme-option:active::after {
          transform: translate(-50%, -50%) scale(6);
          opacity: 1;
        }
        
        .mdv-theme-preview {
          gap: 4px;
        }
        
        .mdv-theme-preview-color {
          width: 20px;
          height: 20px;
          border-radius: 6px;
        }
        
        .mdv-theme-switcher-floating {
          bottom: calc(60px + env(safe-area-inset-bottom, 0));
        }
        
        /* Mobile backdrop */
        .mdv-theme-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: calc(var(--mdv-z-popover, 1060) - 1);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        
        .mdv-theme-backdrop.show {
          opacity: 1;
          visibility: visible;
        }
        
        /* Enhanced touch feedback */
        @media (hover: none) and (pointer: coarse) {
          .mdv-theme-option {
            transition: transform 0.1s ease-out, background-color 0.1s ease-out;
          }
          
          .mdv-dark-mode-toggle {
            transition: transform 0.2s ease-out;
          }
          
          .mdv-dark-mode-toggle:active {
            transform: scale(0.95);
          }
        }
      }
      
      /* Small mobile optimizations */
      @media (max-width: 400px) {
        .mdv-theme-option-name {
          font-size: 0.875rem;
        }
        
        .mdv-theme-option-description {
          font-size: 0.7rem;
        }
        
        .mdv-theme-preview-color {
          width: 16px;
          height: 16px;
        }
        
        .mdv-dark-mode-toggle {
          width: 40px;
          height: 22px;
        }
        
        .mdv-dark-mode-toggle-thumb {
          width: 18px;
          height: 18px;
        }
      }
    `}}const be=50,ct=50;class ye{constructor(e){this.router=null,this.styles=null,this.searchManager=null;try{const t=typeof process<"u"&&process?.env?.NODE_ENV==="development";this.logger=new J(t),this.errorBoundary=new Y(r=>{this.handleError(r)}),this.config=this.validateAndMergeConfig(e),this.validateDependencies(),this.state={currentDocument:null,documents:[],searchQuery:"",searchResults:[],loading:!1,error:null,sidebarOpen:!1,desktopSidebarCollapsed:this.loadDesktopSidebarState()},this.container=this.validateContainer(e.container);const o=e.errorHandling?.retryConfig?{..._,...e.errorHandling.retryConfig}:_;this.loader=new Qe(this.config.source,o,this.logger),this.themeManager=new ge({enablePersistence:this.config.theme?.enablePersistence!==!1,storageKey:this.config.theme?.storageKey||"mdv-theme",onThemeChange:r=>{this.applyTheme(r),this.config.onThemeChange&&this.config.onThemeChange(r)}}),this.themeSwitcher=new ve(this.themeManager,{position:this.config.theme?.switcherPosition||"header",showPreview:this.config.theme?.showPreview!==!1,showDescription:this.config.theme?.showDescription!==!1,allowCustomThemes:this.config.theme?.allowCustomThemes!==!1}),this.darkModeToggle=new N(this.themeManager,{position:this.config.theme?.darkTogglePosition||"header",showLabel:this.config.theme?.showDarkModeLabel!==!1,onToggle:(r,i)=>{this.config.onThemeChange&&this.config.onThemeChange(i)}}),this.config.search?.enabled!==!1&&(this.searchManager=new le(this.config.search||{enabled:!0},r=>{this.loadDocument(r.id)},r=>{this.handleSearch(r)})),this.init()}catch(t){const o=t instanceof h?t:new h("UNKNOWN_ERROR",`Initialization failed: ${t}`,"Failed to initialize the documentation viewer. Please check your configuration.","critical",!1,{operation:"initialization",originalError:t});throw this.handleError(o),o}}validateDependencies(){const e=[],t=[];if(typeof $.marked>"u"&&e.push("marked - Markdown parser is required"),typeof C>"u"?t.push("highlight.js - Syntax highlighting will be disabled"):(typeof C.highlight!="function"&&t.push("highlight.js.highlight - Some highlighting features may not work"),typeof C.highlightElement!="function"&&t.push("highlight.js.highlightElement - Auto-highlighting will be disabled")),typeof P.markedHighlight>"u"&&this.config?.render?.syntaxHighlighting&&t.push("marked-highlight - Advanced syntax highlighting will be disabled"),typeof document>"u"&&e.push("DOM environment - This library requires a browser environment"),typeof window>"u"&&e.push("Window object - Browser environment is required"),t.forEach(o=>{this.logger.warn(`Optional dependency missing: ${o}`)}),e.length>0)throw new h(f.MISSING_DEPENDENCY,`Missing required dependencies: ${e.join(", ")}`,"Some required libraries are not available. Please ensure all dependencies are properly loaded.",v.CRITICAL,!1,{operation:"validateDependencies",additionalData:{missingDependencies:e,warnings:t}});this.logger.debug("Dependency validation completed",{warnings:t.length})}validateContainer(e){let t;if(typeof e=="string"){if(t=document.querySelector(e),!t)throw T.containerNotFound(e)}else t=e;if(!(t instanceof HTMLElement))throw new h("INVALID_CONFIG","Container is not a valid HTML element","The provided container is not a valid HTML element.","high",!1,{operation:"validateContainer"});return t}validateAndMergeConfig(e){if(!e.container)throw new h("INVALID_CONFIG","Container is required","Container element is required for initialization.","critical",!1);if(!e.source)throw new h("INVALID_CONFIG","Document source is required","Document source configuration is required.","critical",!1);return{theme:w.default.light,search:{enabled:!0},navigation:{showCategories:!0,showTags:!1,collapsible:!0,showDescription:!0},render:{syntaxHighlighting:!0,copyCodeButton:!0,linkTarget:"_self"},errorHandling:{gracefulDegradation:!0,showErrorDetails:!1,enableErrorLogging:!0,retryConfig:{maxAttempts:3,baseDelay:1e3,exponentialBackoff:!0}},responsive:!0,mobile:{enabled:!0,breakpoints:p,touchTargets:{minimum:44,comfortable:48,large:56},typography:{baseFontSize:{xs:14,sm:15,md:16,lg:16,xl:16,xxl:16},lineHeight:{tight:1.25,normal:1.5,relaxed:1.75},scaleRatio:1.2},navigation:{swipeGestures:!0,collapseBehavior:"overlay",showBackdrop:!0,closeOnOutsideClick:!0},gestures:{swipeToNavigate:!0,pinchToZoom:!1,doubleTapToZoom:!1,swipeThreshold:be},layout:{containerPadding:16,contentSpacing:24,borderRadius:8},performance:{enableTouchOptimizations:!0,preventDefaultTouch:!0,optimizeScrolling:!0}},routing:"hash",...e}}async init(){await this.errorBoundary.execute(async()=>{this.state.loading=!0,this.state.error=null,this.render(),this.configureMarked();const e=this.config.theme?.name?this.themeManager.getTheme(this.config.theme.name)||this.config.theme:this.themeManager.getCurrentTheme();this.applyTheme(e),await this.loadDocuments(),this.config.routing!=="none"&&this.setupRouting(),this.render(),await this.loadInitialDocument(),this.state.loading=!1,this.render(),this.logger.debug("MarkdownDocsViewer initialized successfully",{documentCount:this.state.documents.length,hasRouter:!!this.router,theme:this.config.theme?.name})},()=>{this.state.loading=!1,this.render()},{operation:"init"})}configureMarked(){try{if(this.config.render?.syntaxHighlighting)if(typeof C<"u"&&typeof P.markedHighlight<"u"){const e=this.logger;$.marked.use(P.markedHighlight({langPrefix:"hljs language-",highlight(t,o){try{if(typeof C.getLanguage=="function"&&typeof C.highlight=="function"){const r=C.getLanguage(o)?o:"plaintext";return C.highlight(t,{language:r}).value}return t}catch{return e.warn("Syntax highlighting failed, falling back to plain text."),t}}}))}else this.logger.warn("Syntax highlighting enabled but dependencies not available",{hljs:typeof C<"u",markedHighlight:typeof P.markedHighlight<"u"});$.marked.setOptions({gfm:!0,breaks:!0})}catch(e){this.logger.warn("Failed to configure markdown parser",{error:e})}}applyTheme(e){this.errorBoundary.execute(async()=>{this.themeManager.applyCSSVariables(e),this.styles&&this.styles.remove(),this.styles=document.createElement("style");let t=ne(e,this.config);this.config.responsive&&this.config.mobile?.enabled!==!1&&(t+=it(this.config)),t+=this.themeSwitcher.getStyles(),t+=this.darkModeToggle.getStyles(),this.styles.textContent=t,document.head.appendChild(this.styles),this.config.mobile?.enabled!==!1&&nt()},()=>{this.logger.warn("Failed to apply theme, using default styles")},{operation:"applyTheme",additionalData:{themeName:e.name}})}async loadDocuments(){await this.errorBoundary.execute(async()=>{const e=await this.loader.loadAll();if(this.state.documents=e,e.length===0&&this.logger.warn("No documents loaded"),this.searchManager){const t=new Map;e.forEach(o=>{o.content&&t.set(o.id,o.content)}),this.searchManager.updateIndex(e,t)}},()=>{this.state.documents=[],this.logger.error("Failed to load documents, using empty document list")},{operation:"loadDocuments"})}setupRouting(){this.errorBoundary.execute(async()=>{this.router=new Xe(this.config.routing,e=>{this.loadDocument(e).catch(t=>{this.logger.error("Router-triggered document load failed",{docId:e,error:t})})})},()=>{this.logger.warn("Failed to setup routing, navigation will work without URL updates")},{operation:"setupRouting"})}async loadInitialDocument(){await this.errorBoundary.execute(async()=>{const e=this.router?.getCurrentRoute()||this.state.documents[0]?.id;e&&await this.loadDocument(e)},()=>{this.logger.debug("No initial document to load")},{operation:"loadInitialDocument"})}render(){this.errorBoundary.execute(async()=>{this.container.innerHTML=`
          <div class="mdv-app">
            ${this.renderHeader()}
            <div class="mdv-layout">
              ${this.renderSidebar()}
              ${this.renderContent()}
            </div>
            ${this.config.footer?this.renderFooter():""}
          </div>
        `,this.attachEventListeners()},()=>{this.container.innerHTML='<div class="mdv-error">Failed to render viewer interface.</div>'},{operation:"render"})}renderHeader(){const e=(this.config.theme?.switcherPosition||"header")==="header",t=(this.config.theme?.darkTogglePosition||"header")==="header",o=[];return t&&o.push(this.darkModeToggle.render()),e&&o.push(this.themeSwitcher.render()),`
      <header class="mdv-header">
        <button class="mdv-mobile-toggle" aria-label="Toggle navigation"></button>
        ${this.config.logo?`<img src="${this.config.logo}" alt="Logo" class="mdv-logo">`:""}
        <h1 class="mdv-title">${this.config.title||"Documentation"}</h1>
        ${o.length>0?`<div class="mdv-header-actions">${o.join("")}</div>`:""}
      </header>
    `}renderSidebar(){const e=Be(this.state.documents,this.state.currentDocument,this.config.navigation),t=this.config.search?.enabled?We(this.config.search):"",o=this.state.sidebarOpen?"open":"",r=this.state.desktopSidebarCollapsed?"collapsed":"";return`
      <aside class="mdv-sidebar ${o} ${r}">
        <div class="mdv-sidebar-header">
          <button class="mdv-desktop-sidebar-toggle" aria-label="Toggle navigation sidebar" title="Toggle sidebar">
            <span class="mdv-sidebar-toggle-icon">${this.state.desktopSidebarCollapsed?"◀":"▶"}</span>
          </button>
        </div>
        ${t}
        <nav class="mdv-navigation">
          ${e}
        </nav>
      </aside>
    `}renderContent(){return this.state.loading?`
        <main class="mdv-content">
          <div class="mdv-loading">
            <div class="mdv-loading-spinner"></div>
            <p>Loading documentation...</p>
          </div>
        </main>
      `:this.state.error?this.renderError(this.state.error):this.state.currentDocument?`
      <main class="mdv-content">
        <article class="mdv-document">
          <h1 class="mdv-document-title">${this.state.currentDocument.title}</h1>
          ${this.state.currentDocument.description?`<p class="mdv-document-description">${this.state.currentDocument.description}</p>`:""}
          <div class="mdv-document-content">
            ${this.renderMarkdown(this.state.currentDocument.content||"")}
          </div>
        </article>
      </main>
    `:`
        <main class="mdv-content">
          <div class="mdv-welcome">
            <h2>Welcome to the Documentation</h2>
            <p>Select a document from the sidebar to begin reading.</p>
          </div>
        </main>
      `}renderError(e){const t=e instanceof h,o=this.config.errorHandling?.showErrorDetails;let r="An unexpected error occurred.",i="",a="";return t?(r=e.userMessage,e.isRetryable&&(a='<button class="mdv-retry-button">Try Again</button>'),o&&(i=`
          <details class="mdv-error-details">
            <summary>Error Details</summary>
            <pre><code>${JSON.stringify(e.toJSON(),null,2)}</code></pre>
          </details>
        `)):o&&(i=`
          <details class="mdv-error-details">
            <summary>Error Details</summary>
            <pre><code>${e.stack||e.message}</code></pre>
          </details>
        `),`
      <main class="mdv-content">
        <div class="mdv-error">
          <div class="mdv-error-icon">⚠️</div>
          <h2>Oops! Something went wrong</h2>
          <p class="mdv-error-message">${r}</p>
          ${a}
          ${i}
        </div>
      </main>
    `}renderFooter(){return`<footer class="mdv-footer">${this.config.footer}</footer>`}renderMarkdown(e){try{let t=$.marked(e);return this.config.render?.copyCodeButton&&(t=t.replace(/<pre><code/g,'<div class="mdv-code-block"><button class="mdv-copy-button">Copy</button><pre><code'),t=t.replace(/<\/code><\/pre>/g,"</code></pre></div>")),this.config.render?.linkTarget==="_blank"&&(t=t.replace(/<a /g,'<a target="_blank" rel="noopener noreferrer" ')),t}catch(t){return this.logger.error("Failed to render markdown, showing raw content",{error:t}),`<pre>${e}</pre>`}}attachEventListeners(){this.errorBoundary.execute(async()=>{this.container.querySelector(".mdv-mobile-toggle")?.addEventListener("click",()=>{this.state.sidebarOpen=!this.state.sidebarOpen,this.updateSidebar()}),this.container.querySelector(".mdv-desktop-sidebar-toggle")?.addEventListener("click",()=>{this.state.desktopSidebarCollapsed=!this.state.desktopSidebarCollapsed,this.saveDesktopSidebarState(this.state.desktopSidebarCollapsed),this.updateDesktopSidebar()}),document.addEventListener("keydown",i=>{i.ctrlKey&&i.key==="b"&&!i.shiftKey&&!i.altKey&&!i.metaKey&&(i.preventDefault(),this.state.desktopSidebarCollapsed=!this.state.desktopSidebarCollapsed,this.saveDesktopSidebarState(this.state.desktopSidebarCollapsed),this.updateDesktopSidebar())}),this.setupMobileInteractions(),this.updateDesktopSidebar();const o=this.container.querySelector(".mdv-theme-switcher");o&&this.themeSwitcher.attachTo(o);const r=this.container.querySelector(".mdv-dark-mode-toggle");r&&this.darkModeToggle.attachTo(r),this.container.querySelectorAll(".mdv-nav-link").forEach(i=>{i.addEventListener("click",a=>{a.preventDefault();const s=i.getAttribute("data-doc-id");s&&this.loadDocument(s).catch(c=>{this.logger.error("Navigation click failed",{docId:s,error:c})})}),i.addEventListener("keydown",a=>{this.handleNavigationKeydown(a,i)})}),this.container.querySelectorAll(".mdv-nav-category.collapsible").forEach(i=>{i.addEventListener("click",()=>{this.toggleCategory(i)}),i.addEventListener("keydown",a=>{this.handleCategoryKeydown(a,i)})}),this.restoreNavigationState(),this.config.search?.enabled!==!1&&this.searchManager&&this.searchManager.attachToDOM(this.container),this.container.querySelectorAll(".mdv-copy-button").forEach(i=>{i.addEventListener("click",async a=>{try{const s=a.target.nextElementSibling?.querySelector("code");s&&navigator.clipboard&&(await navigator.clipboard.writeText(s.textContent||""),i.textContent="Copied!",setTimeout(()=>{i.textContent="Copy"},2e3))}catch(s){this.logger.warn("Copy to clipboard failed",{error:s}),i.textContent="Copy failed",setTimeout(()=>{i.textContent="Copy"},2e3)}})}),this.container.querySelectorAll(".mdv-retry-button").forEach(i=>{i.addEventListener("click",()=>{window.location.reload()})})},()=>{this.logger.warn("Failed to attach some event listeners")},{operation:"attachEventListeners"})}updateSidebar(){const e=this.container.querySelector(".mdv-sidebar"),t=this.container.querySelector(".mdv-sidebar-backdrop");e&&e.classList.toggle("open",this.state.sidebarOpen),t&&t.classList.toggle("show",this.state.sidebarOpen),e&&e.setAttribute("aria-hidden",this.state.sidebarOpen?"false":"true"),q()&&document.body&&document.body.style&&(document.body.style.overflow=this.state.sidebarOpen?"hidden":"")}updateDesktopSidebar(){const e=this.container.querySelector(".mdv-sidebar"),t=this.container.querySelector(".mdv-sidebar-toggle-icon");e&&e.classList.toggle("collapsed",this.state.desktopSidebarCollapsed),t&&(t.textContent=this.state.desktopSidebarCollapsed?"◀":"▶");const o=this.container.querySelector(".mdv-desktop-sidebar-toggle");o&&(o.setAttribute("aria-label",this.state.desktopSidebarCollapsed?"Expand navigation sidebar":"Collapse navigation sidebar"),o.setAttribute("title",this.state.desktopSidebarCollapsed?"Expand sidebar":"Collapse sidebar"))}setupMobileInteractions(){this.config.mobile?.enabled&&this.errorBoundary.execute(async()=>{this.setupSidebarBackdrop(),this.config.mobile?.gestures?.swipeToNavigate&&this.setupSwipeGestures(),this.config.mobile?.performance?.enableTouchOptimizations&&this.setupTouchOptimizations(),this.setupResponsiveHandlers()},()=>{this.logger.warn("Failed to setup mobile interactions")},{operation:"setupMobileInteractions"})}setupSidebarBackdrop(){if(!this.config.mobile?.navigation?.showBackdrop)return;let e=this.container.querySelector(".mdv-sidebar-backdrop");e||(e=document.createElement("div"),e.className="mdv-sidebar-backdrop",this.container.appendChild(e)),this.config.mobile.navigation?.closeOnOutsideClick&&e.addEventListener("click",()=>{this.state.sidebarOpen=!1,this.updateSidebar()})}setupSwipeGestures(){let e=0,t=0,o=!1;const r=this.config.mobile?.gestures?.swipeThreshold||be,i=this.container.querySelector(".mdv-sidebar"),a=this.container.querySelector(".mdv-content");if(!i||!a)return;const s=u=>{u.touches.length===1&&(e=u.touches[0].clientX,t=u.touches[0].clientY,o=!1)},c=u=>{if(u.touches.length===1&&!o){const k=u.touches[0].clientX-e,l=u.touches[0].clientY-t;Math.abs(k)>Math.abs(l)&&Math.abs(k)>10&&(o=!0,this.config.mobile?.performance?.preventDefaultTouch&&u.preventDefault())}},m=u=>{if(o&&u.changedTouches.length===1){const k=u.changedTouches[0].clientX-e;q()&&(k>r&&e<ct&&!this.state.sidebarOpen?(this.state.sidebarOpen=!0,this.updateSidebar()):k<-r&&this.state.sidebarOpen&&(this.state.sidebarOpen=!1,this.updateSidebar()))}o=!1};a.addEventListener("touchstart",s,{passive:!0}),a.addEventListener("touchmove",c,{passive:!1}),a.addEventListener("touchend",m,{passive:!0}),i.addEventListener("touchstart",s,{passive:!0}),i.addEventListener("touchmove",c,{passive:!1}),i.addEventListener("touchend",m,{passive:!0})}setupTouchOptimizations(){this.container.querySelectorAll(".mdv-button, .mdv-nav-item, .mdv-mobile-toggle, .mdv-search-input, .mdv-toc-item").forEach(t=>{const o=t;o&&o.style&&(o.style.touchAction="manipulation")}),this.config.mobile?.performance?.optimizeScrolling&&this.container.querySelectorAll(".mdv-navigation, .mdv-content").forEach(o=>{const r=o;r&&r.style&&(r.style.setProperty("-webkit-overflow-scrolling","touch"),r.style.overscrollBehavior="contain")})}setupResponsiveHandlers(){const e=()=>{const o=ue();o!=="xs"&&o!=="sm"&&this.state.sidebarOpen&&(this.state.sidebarOpen=!1,this.updateSidebar()),this.updateResponsiveUI()};let t;window.addEventListener("resize",()=>{clearTimeout(t),t=window.setTimeout(e,150)},{passive:!0}),window.addEventListener("orientationchange",()=>{setTimeout(e,100)},{passive:!0})}updateResponsiveUI(){const e=ue(),t=this.container;Object.keys(p).forEach(r=>{t.classList.remove(`mdv-breakpoint-${r}`)}),t.classList.add(`mdv-breakpoint-${e}`);const o=t.querySelector(".mdv-mobile-toggle");o&&o.style&&(o.style.display=q()?"flex":"none")}async loadDocument(e){await this.errorBoundary.execute(async()=>{const t=this.state.documents.find(o=>o.id===e);if(!t)throw T.documentNotFound(e);if(this.state.loading=!0,this.state.error=null,this.render(),!t.content&&t.file&&(t.content=await this.loader.loadDocument(t)),this.state.currentDocument=t,this.state.loading=!1,this.searchManager&&t.content){const o=new Map([[t.id,t.content]]);this.searchManager.updateIndex(this.state.documents,o)}this.router&&this.router.setRoute(e),this.config.onDocumentLoad&&this.config.onDocumentLoad(t),this.render(),this.container.querySelector(".mdv-content")?.scrollTo(0,0),q()&&(this.state.sidebarOpen=!1,this.updateSidebar()),this.logger.debug("Document loaded successfully",{docId:e})},()=>{this.state.loading=!1,this.render()},{operation:"loadDocument",documentId:e})}handleNavigationKeydown(e,t){const o=Array.from(this.container.querySelectorAll(".mdv-nav-link")),r=o.indexOf(t);let i;switch(e.key){case"ArrowDown":e.preventDefault(),i=(r+1)%o.length;break;case"ArrowUp":e.preventDefault(),i=r===0?o.length-1:r-1;break;case"Home":e.preventDefault(),i=0;break;case"End":e.preventDefault(),i=o.length-1;break;case"Enter":case" ":e.preventDefault(),t.click();return;default:return}i!==r&&o[i]&&(o[i].focus(),this.announceNavigationChange(o[i]))}handleCategoryKeydown(e,t){switch(e.key){case"Enter":case" ":e.preventDefault(),this.toggleCategory(t);break;case"ArrowDown":{e.preventDefault();const o=t.nextElementSibling;o&&!o.hidden&&o.querySelector(".mdv-nav-link")?.focus();break}}}toggleCategory(e){const t=e.nextElementSibling,o=e.querySelector(".mdv-collapse-icon");if(t){const i=!(e.getAttribute("aria-expanded")==="true");e.setAttribute("aria-expanded",i.toString()),t.hidden=!i,o&&(o.textContent=i?"▼":"▶"),this.saveNavigationState(e,i);const a=`${e.textContent?.trim()} ${i?"expanded":"collapsed"}`;B(a,"mdv-nav-announcements")}}saveNavigationState(e,t){const r=`mdv-nav-${(e.textContent?.trim()||"").toLowerCase().replace(/[^a-z0-9]/g,"-")}`;try{t?localStorage.setItem(r,"expanded"):localStorage.removeItem(r)}catch{}}restoreNavigationState(){this.container.querySelectorAll(".mdv-nav-category.collapsible").forEach(e=>{const t=e,r=`mdv-nav-${(t.textContent?.trim()||"").toLowerCase().replace(/[^a-z0-9]/g,"-")}`;try{localStorage.getItem(r)==="expanded"&&this.toggleCategory(t)}catch{}})}loadDesktopSidebarState(){try{return localStorage.getItem("mdv-desktop-sidebar-collapsed")==="true"}catch{return!1}}saveDesktopSidebarState(e){try{e?localStorage.setItem("mdv-desktop-sidebar-collapsed","true"):localStorage.removeItem("mdv-desktop-sidebar-collapsed")}catch{}}announceNavigationChange(e){const t=e.textContent?.trim()||"";B(`Focused: ${t}`,"mdv-nav-announcements")}handleSearch(e){if(this.state.searchQuery=e,!e.trim()){this.state.searchResults=[];return}try{const t=this.state.documents.filter(o=>{try{return[o.title,o.description||"",o.content||"",...o.tags||[]].join(" ").toLowerCase().includes(e.toLowerCase())}catch(r){return this.logger.warn("Error during document search",{docId:o.id,error:r}),!1}});this.state.searchResults=t.slice(0,this.config.search?.maxResults||10)}catch(t){this.logger.error("Search operation failed",{query:e,error:t}),this.state.searchResults=[]}}handleError(e){if(this.state&&(this.state.error=e,this.state.loading=!1),this.logger?this.logger.log(e):console.error("MarkdownDocsViewer Error:",e),this.config?.onError)try{this.config.onError(e)}catch(t){this.logger?this.logger.error("Error in user error handler",{handlerError:t}):console.error("Error in user error handler:",t)}this.state&&this.container&&this.render()}async refresh(){await this.errorBoundary.execute(async()=>{this.loader.clearCache(),await this.loadDocuments(),this.render()},()=>{this.logger.error("Failed to refresh documents")},{operation:"refresh"})}async reload(){return this.refresh()}setTheme(e){if(typeof e=="string"){const t=this.themeManager.setTheme(e);t&&(this.config.theme=t)}else{if(e.name&&this.themeManager.getTheme(e.name))this.themeManager.setTheme(e.name);else{const t=`temp-${Date.now()}`;this.themeManager.registerTheme({...e,name:t}),this.themeManager.setTheme(t)}this.config.theme=e}}getAvailableThemes(){return this.themeManager.getAvailableThemes()}registerTheme(e){this.themeManager.registerTheme(e)}createCustomTheme(e,t){return this.themeManager.createCustomTheme(e,t)}getDocument(e){return this.state.documents.find(t=>t.id===e)||null}getAllDocuments(){return[...this.state.documents]}async search(e){return new Promise(t=>{this.handleSearch(e),t([...this.state.searchResults])})}async destroy(){try{this.styles&&this.styles.remove(),this.router&&this.router.destroy(),this.themeSwitcher&&typeof this.themeSwitcher.destroy=="function"&&this.themeSwitcher.destroy(),this.searchManager&&typeof this.searchManager.destroy=="function"&&this.searchManager.destroy(),this.darkModeToggle&&typeof this.darkModeToggle.destroy=="function"&&this.darkModeToggle.destroy(),this.container.innerHTML="",this.logger.debug("MarkdownDocsViewer destroyed")}catch(e){this.logger.warn("Error during cleanup",{error:e})}}getState(){return{...this.state}}getConfig(){return{...this.config}}getDocuments(){return[...this.state.documents]}async getDocumentContent(e){if(e.content)return e.content;if(e.file){const t=await this.loader.loadDocument(e);return e.content=t,t}return""}getTheme(){return this.config.theme}getThemeStyles(){return ne(this.config.theme,this.config)}}function X(n){return new ye(n)}function dt(n,e){return X({container:n,source:{type:"content",documents:e}})}const xe={title:"Documentation",theme:"default-light",source:{path:"./docs",type:"auto",exclude:["**/node_modules/**","**/.*","**/_*","**/draft*"]},navigation:{autoSort:!0,showCategories:!0,collapsible:!0,showTags:!1,showDescription:!0},search:{enabled:!0,placeholder:"Search documentation...",fuzzySearch:!0,caseSensitive:!1},branding:{footer:"Generated with Markdown Docs Viewer"},features:{tableOfContents:!0,codeHighlighting:!0,darkMode:!0,print:!0,export:!1},performance:{lazyLoading:!0,cacheSize:50,prefetchNext:!0}},lt=["docs-config.json","docs.config.json",".docs.json","markdown-docs.json"];class j{constructor(){this.config={...xe}}async loadConfig(e){return e?await this.loadConfigFile(e):await this.autoDiscoverConfig(),this.validateConfig(),this.config}async autoDiscoverConfig(){for(const e of lt)try{const t=await fetch(e,{method:"HEAD"});if(t&&t.ok){await this.loadConfigFile(e),this.configPath=e,console.log(`📋 Loaded config from: ${e}`);return}}catch{}console.log("📋 No config file found, using defaults")}async loadConfigFile(e){try{const t=await fetch(e);if(!t||!t.ok)throw new Error(`Failed to load config: ${t?.status||"Network error"} ${t?.statusText||"No response"}`);const o=await t.json();this.config=this.mergeConfig(xe,o)}catch(t){console.warn(`Failed to load config from ${e}:`,t),console.log("Using default configuration")}}mergeConfig(e,t){const o={...e};for(const[r,i]of Object.entries(t))i!==null&&typeof i=="object"&&!Array.isArray(i)?o[r]={...e[r]||{},...i}:o[r]=i;return o}validateConfig(){this.config.title||(this.config.title="Documentation"),this.config.source?.path||(this.config.source=this.config.source||{},this.config.source.path="./docs"),this.config.source.path&&!this.config.source.path.startsWith("./")&&!this.config.source.path.startsWith("/")&&(this.config.source.path=`./${this.config.source.path}`),this.config.theme&&!this.config.theme.includes("-")&&(this.config.theme=`${this.config.theme}-light`)}toDocumentationConfig(){const e=this.config;return{title:e.title,source:{type:e.source?.type==="auto"?"local":e.source?.type||"local",basePath:e.source?.path||"./docs",documents:[]},theme:e.theme,navigation:{showCategories:e.navigation?.showCategories??!0,collapsible:e.navigation?.collapsible??!0,showTags:e.navigation?.showTags??!1,showDescription:e.navigation?.showDescription??!0,sortBy:e.navigation?.autoSort?"order":"title"},search:{enabled:e.search?.enabled??!0,placeholder:e.search?.placeholder||"Search documentation...",fuzzySearch:e.search?.fuzzySearch??!0,caseSensitive:e.search?.caseSensitive??!1},performance:{lazyLoading:{enabled:e.performance?.lazyLoading??!0},cacheSize:e.performance?.cacheSize??50,preloadStrategy:e.performance?.prefetchNext?"adjacent":"none"}}}getConfig(){return this.config}getConfigPath(){return this.configPath}static generateSampleConfig(){return JSON.stringify({title:"My Documentation",theme:"github-light",source:{path:"./docs",exclude:["**/drafts/**","**/_*"]},navigation:{autoSort:!0,showCategories:!0,collapsible:!0},search:{enabled:!0,placeholder:"Search docs...",fuzzySearch:!0},branding:{logo:"./assets/logo.png",footer:"Copyright © 2025 My Company"},features:{tableOfContents:!0,codeHighlighting:!0,darkMode:!0,export:!0}},null,2)}}async function ht(n){return new j().loadConfig(n)}class Z{constructor(e){this.options={basePath:e.basePath,exclude:e.exclude||["**/node_modules/**","**/.*","**/_*"],titleStrategy:e.titleStrategy||"heading",sortStrategy:e.sortStrategy||"alphabetical",categoryStrategy:e.categoryStrategy||"folder"}}async discoverFiles(){try{const e=new Promise((o,r)=>{setTimeout(()=>r(new Error("File discovery timeout")),3e4)}),t=this.performDiscovery();return await Promise.race([t,e])}catch(e){return console.warn("Auto-discovery failed:",e),[]}}async performDiscovery(){const e=await this.scanDirectory(this.options.basePath),t=await Promise.all(e.map(o=>this.processFile(o)));return this.sortDocuments(t.filter(o=>o!==null))}async scanDirectory(e){const t=["README.md","index.md","getting-started.md","installation.md","configuration.md","api.md","examples.md","troubleshooting.md","changelog.md","contributing.md"],o=["","guides/","api/","reference/","tutorials/","examples/"],r=[];for(const i of o)for(const a of t){const s=`${e}/${i}${a}`.replace(/\/+/g,"/");try{const c=await fetch(s,{method:"HEAD"});c&&c.ok&&r.push({path:s,name:a,category:i?i.replace("/",""):"root"})}catch{}}return r}async processFile(e){try{const t=await fetch(e.path);if(!t||!t.ok)return null;const o=await t.text(),r=this.extractTitle(o,e.name),i=this.extractCategory(e),a=this.extractOrder(o,e.name);return{id:this.generateId(e.path),title:r,file:e.path,content:o,category:i!=="root"?i:void 0,order:a,tags:this.extractTags(o),description:this.extractDescription(o)}}catch(t){return console.warn(`Failed to process file ${e.path}:`,t),null}}extractTitle(e,t){switch(this.options.titleStrategy){case"heading":{const o=e.match(/^#\s+(.+)$/m);if(o)return o[1].trim();break}case"frontmatter":{const o=e.match(/^---\n([\s\S]*?)\n---/);if(o){const i=o[1].match(/^title:\s*(.+)$/m);if(i)return i[1].trim().replace(/['"]/g,"")}const r=e.match(/^#\s+(.+)$/m);if(r)return r[1].trim();break}}return this.filenameToTitle(t)}filenameToTitle(e){return e.replace(/\.md$/,"").replace(/[-_]/g," ").replace(/\b\w/g,t=>t.toUpperCase()).replace(/^Readme$/i,"Overview")}extractCategory(e){switch(this.options.categoryStrategy){case"folder":return e.category||"root";case"frontmatter":return e.category||"root";case"none":default:return"root"}}extractOrder(e,t){const o=e.match(/^---\n([\s\S]*?)\n---/);if(o){const i=o[1].match(/^order:\s*(\d+)$/m);if(i)return parseInt(i[1])}const r=t.match(/^(\d+)[-_.]/);if(r)return parseInt(r[1])}extractTags(e){const t=e.match(/^---\n([\s\S]*?)\n---/);if(t){const o=t[1].match(/^tags:\s*\[(.*?)\]$/m);if(o)return o[1].split(",").map(r=>r.trim().replace(/['"]/g,""))}}extractDescription(e){const t=e.match(/^---\n([\s\S]*?)\n---/);if(t){const a=t[1].match(/^description:\s*(.+)$/m);if(a)return a[1].trim().replace(/['"]/g,"")}const i=e.replace(/^---\n[\s\S]*?\n---\n/,"").replace(/^#.*\n/,"").match(/^([^#\n].+?)(?:\n\n|\n#|$)/);if(i)return i[1].trim().substring(0,200)+(i[1].length>200?"...":"")}generateId(e){return e.replace(/^.*\//,"").replace(/\.md$/,"").replace(/[^a-z0-9]/gi,"-").toLowerCase()}sortDocuments(e){switch(this.options.sortStrategy){case"alphabetical":return e.sort((t,o)=>t.order!==void 0&&o.order!==void 0?t.order-o.order:t.order!==void 0?-1:o.order!==void 0?1:t.title.localeCompare(o.title));case"date":return e;case"custom":return e.sort((t,o)=>t.order!==void 0&&o.order!==void 0?t.order-o.order:t.order!==void 0?-1:o.order!==void 0?1:0);default:return e}}}async function mt(n="./docs"){return new Z({basePath:n}).discoverFiles()}let I=null;async function G(n={}){try{console.log("🚀 Initializing Markdown Docs Viewer...");const e=new j,t=await e.loadConfig(n.configPath);n.docsPath&&(t.source.path=n.docsPath),n.theme&&(t.theme=n.theme),n.title&&(t.title=n.title),console.log(`📋 Configuration loaded - Title: "${t.title}", Theme: "${t.theme}"`);let o=[];(t.source?.type==="auto"||!t.source?.type)&&(console.log(`📁 Auto-discovering documents in: ${t.source?.path}`),o=await new Z({basePath:t.source?.path||"./docs",exclude:t.source?.exclude}).discoverFiles(),console.log(`📚 Found ${o.length} documents`));const r={...e.toDocumentationConfig(),source:{type:"content",documents:o}};if(t.theme){const[s,c]=t.theme.split("-"),m=w[s];m&&(r.theme=m[c]||m.light)}let i;if(n.container)if(typeof n.container=="string"){const s=document.querySelector(n.container);if(!s){const c=new Error(`Container element "${n.container}" not found`);throw console.error("❌ Failed to initialize:",c),c}i=s}else i=n.container;else i=document.getElementById("docs")||document.getElementById("documentation")||document.querySelector(".docs")||document.querySelector(".documentation")||document.body;console.log(`🎯 Creating viewer in container: ${i.tagName}${i.id?"#"+i.id:""}${i.className?"."+i.className.split(" ").join("."):""}`);const a=X({container:i,...r});return I=a,console.log("✅ Markdown Docs Viewer initialized successfully!"),console.log("📖 Available commands:"),console.log("  - MarkdownDocsViewer.getViewer() - Get current viewer instance"),console.log("  - MarkdownDocsViewer.reload() - Reload documents"),console.log("  - MarkdownDocsViewer.setTheme(theme) - Change theme"),o.length===0&&(console.warn("⚠️  No documents found. Make sure your markdown files are in the correct location."),console.log(`   Looking in: ${t.source?.path}`),console.log("   Try adding a README.md file to get started.")),a}catch(e){console.error("❌ Failed to initialize Markdown Docs Viewer:",e);let t=null;try{n.container?typeof n.container=="string"?(t=document.querySelector(n.container),t||(t=document.body)):t=n.container:t=document.getElementById("docs")||document.body}catch{t=document.body}if(t&&(t.innerHTML=`
        <div style="padding: 20px; color: #d73a49; background: #ffeef0; border: 1px solid #f97583; border-radius: 4px;">
          <h3>Viewer Creation Failed</h3>
          <p><strong>Error:</strong> ${y(e.message||String(e))}</p>
          <p>Please check your configuration and try again.</p>
        </div>
      `),typeof process<"u"&&process.env?.NODE_ENV==="test"){const r={container:t||document.createElement("div"),destroy:()=>Promise.resolve(),refresh:()=>Promise.resolve(),setTheme:()=>{},getTheme:()=>({}),getState:()=>({currentDocument:null,documents:[],searchQuery:"",searchResults:[],loading:!1,error:e,sidebarOpen:!1,desktopSidebarCollapsed:!1}),getConfig:()=>({container:t||document.createElement("div"),source:{type:"content",documents:[]}})};return I=r,r}else{const r={get(a,s){return s==="container"?t:s==="destroy"?()=>Promise.resolve():s==="refresh"?()=>Promise.resolve():s==="setTheme"?()=>{}:()=>{}}},i=new Proxy({},r);return I=i,i}}}function ke(){return I}async function we(n={}){return I&&await I.destroy(),G(n)}function Te(n){if(!I){console.warn("No viewer instance found. Call init() first.");return}const[e,t]=n.split("-"),o=w[e];if(o){const r=o[t]||o.light;I.setTheme(r)}else console.warn(`Theme "${n}" not found. Available themes:`,Object.keys(w))}function Se(){const n=[];return Object.keys(w).forEach(e=>{n.push(`${e}-light`,`${e}-dark`)}),n}function $e(){return j.generateSampleConfig()}function ut(n){typeof window>"u"||typeof document>"u"||(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n())}function gt(){return typeof process<"u"&&process.env?.NODE_ENV==="test"||typeof process<"u"&&(process.env?.VITEST==="true"||process.env?.VITEST_WORKER_ID!==void 0||process.env?.VITE_TEST==="true")||typeof process<"u"&&process.env?.JEST_WORKER_ID!==void 0||typeof global<"u"&&(global.describe!==void 0||global.it!==void 0||global.test!==void 0)||typeof window<"u"&&(window.describe!==void 0||window.it!==void 0)||typeof navigator<"u"&&navigator.webdriver||typeof window<"u"&&window.location?.href?.includes("localhost")||typeof process<"u"&&process.title?.includes("node")&&process.argv?.some(n=>n.includes("vitest")||n.includes("jest")||n.includes("test"))}ut(()=>{if(gt()){console.debug("Zero-config auto-init skipped: test environment detected");return}if(window.MarkdownDocsViewer?.autoInit===!1)return;document.getElementById("docs")&&!I&&(console.log("🔄 Auto-initializing Markdown Docs Viewer..."),G().catch(()=>{console.log("Auto-initialization failed, manual init() call required.")}))});const pt={init:G,getViewer:ke,reload:we,setTheme:Te,getAvailableThemes:Se,generateConfig:$e,themes:w,autoInit:!0};function L(n){if(typeof n!="string")return"";const e=document.createElement("div");return e.textContent=n,e.innerHTML}function ft(n){if(typeof n!="string")return"";const e=document.createElement("div");e.innerHTML=n;const t=new Set(["p","br","strong","b","em","i","u","code","pre","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","table","thead","tbody","tr","td","th","a","img","hr","div","span"]),o=new Map([["a",new Set(["href","title"])],["img",new Set(["src","alt","title","width","height"])],["*",new Set(["id","class"])]]);function r(s){const c=s.tagName.toLowerCase();if(!t.has(c))return null;const m=document.createElement(c),u=o.get(c)||new Set,k=o.get("*")||new Set;for(const l of s.attributes){const g=l.name.toLowerCase();if(!g.startsWith("on")&&(u.has(g)||k.has(g))){let x=l.value;if((g==="href"||g==="src")&&(x=i(x),!x))continue;m.setAttribute(g,x)}}for(const l of Array.from(s.childNodes))if(l.nodeType===Node.TEXT_NODE)m.appendChild(document.createTextNode(l.textContent||""));else if(l.nodeType===Node.ELEMENT_NODE){const g=r(l);g&&m.appendChild(g)}return m}function i(s){if(!s||typeof s!="string")return"";const c=s.trim().toLowerCase(),m=["javascript:","data:","vbscript:","livescript:","mocha:","about:","file:","ftp:","jar:","view-source:"];for(const u of m)if(c.startsWith(u))return"";return c.startsWith("http://")||c.startsWith("https://")||c.startsWith("mailto:")||c.startsWith("#")||c.startsWith("/")||c.startsWith("./")||c.startsWith("../")||!c.includes(":")?s.trim():""}const a=document.createElement("div");for(const s of Array.from(e.childNodes))if(s.nodeType===Node.TEXT_NODE)a.appendChild(document.createTextNode(s.textContent||""));else if(s.nodeType===Node.ELEMENT_NODE){const c=r(s);c&&a.appendChild(c)}return a.innerHTML}class vt{constructor(e){this.html2pdfAvailable=!1,this.viewer=e,this.checkDependencies()}checkDependencies(){typeof window<"u"&&window.html2pdf&&(this.html2pdfAvailable=!0)}async export(e){switch(e.format){case"pdf":return this.exportPDF(e);case"html":return this.exportHTML(e);default:throw new h(f.INVALID_CONFIG,`Unsupported export format: ${e.format}`,"The specified export format is not supported.",v.HIGH,!1,{operation:"export",additionalData:{format:e.format}})}}async exportPDF(e){if(!this.html2pdfAvailable)throw new h(f.MISSING_DEPENDENCY,"html2pdf.js is required for PDF export. Please include it in your project.","PDF export requires the html2pdf.js library to be included in your project.",v.HIGH,!1,{operation:"exportPDF",additionalData:{dependency:"html2pdf.js"}});const t=await this.generateExportHTML(e),o=document.createElement("div");o.innerHTML=t,o.style.position="absolute",o.style.left="-9999px",o.style.width="210mm",document.body.appendChild(o);try{const r={margin:e.pdfOptions?.margin||10,filename:e.filename||"documentation.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0,logging:!1},jsPDF:{unit:"mm",format:e.pdfOptions?.format||"a4",orientation:e.pdfOptions?.orientation||"portrait"},pagebreak:{mode:["avoid-all","css","legacy"]}},i=window.html2pdf;return await i().set(r).from(o).outputPdf("blob")}finally{document.body.removeChild(o)}}async exportHTML(e){const t=await this.generateExportHTML(e);return e.embedAssets?this.embedAssets(t):t}async generateExportHTML(e){const t=await this.getDocumentsToExport(e),o=this.viewer.getTheme();let r=`<!DOCTYPE html>
<html lang="${L(e.locale||"en")}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${L(e.title||"Documentation Export")}</title>
  <style>
    ${this.getExportStyles(o)}
    ${e.includeTheme?this.viewer.getThemeStyles():""}
    
    /* Print styles */
    @media print {
      .page-break {
        page-break-before: always;
      }
      
      .no-print {
        display: none !important;
      }
      
      body {
        font-size: 12pt;
        line-height: 1.5;
      }
      
      h1, h2, h3, h4, h5, h6 {
        page-break-after: avoid;
      }
      
      pre, blockquote, table {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body class="export-body">`;e.includeTOC&&(r+=this.generateTableOfContents(t));for(let i=0;i<t.length;i++){const a=t[i],s=await this.viewer.getDocumentContent(a),c=await $.marked(s);r+=`
  <article class="exported-document ${i>0?"page-break":""}" id="doc-${L(a.id)}">
    <h1>${L(a.title)}</h1>
    ${a.description?`<p class="doc-description">${L(a.description)}</p>`:""}
    ${a.tags?.length?`<div class="doc-tags">${a.tags.map(m=>`<span class="tag">${L(m)}</span>`).join("")}</div>`:""}
    <div class="doc-content">
      ${ft(c)}
    </div>
  </article>`}return r+=`
</body>
</html>`,r}async getDocumentsToExport(e){const t=this.viewer.getDocuments();return!e.documentIds||e.documentIds.length===0?t:t.filter(o=>e.documentIds.includes(o.id))}generateTableOfContents(e){let t=`
  <nav class="export-toc page-break">
    <h1>Table of Contents</h1>
    <ol>`;for(const o of e)t+=`
      <li><a href="#doc-${L(o.id)}">${L(o.title)}</a></li>`;return t+=`
    </ol>
  </nav>`,t}getExportStyles(e){return`
    body {
      font-family: ${e.fonts.body};
      color: ${e.colors.textPrimary};
      background: ${e.colors.background};
      margin: 0;
      padding: 20px;
      line-height: 1.6;
    }
    
    .export-body {
      max-width: 800px;
      margin: 0 auto;
    }
    
    .exported-document {
      margin-bottom: 50px;
    }
    
    h1, h2, h3, h4, h5, h6 {
      font-family: ${e.fonts.heading};
      color: ${e.colors.textPrimary};
      margin-top: 24px;
      margin-bottom: 16px;
    }
    
    h1 { font-size: 2.5em; border-bottom: 2px solid ${e.colors.border}; padding-bottom: 10px; }
    h2 { font-size: 2em; }
    h3 { font-size: 1.5em; }
    h4 { font-size: 1.25em; }
    h5 { font-size: 1.1em; }
    h6 { font-size: 1em; }
    
    code {
      font-family: ${e.fonts.code};
      background: ${e.colors.codeBackground};
      padding: 2px 4px;
      border-radius: 3px;
      font-size: 0.9em;
    }
    
    pre {
      background: ${e.colors.codeBackground};
      border: 1px solid ${e.colors.border};
      border-radius: ${e.borderRadius};
      padding: 16px;
      overflow-x: auto;
    }
    
    pre code {
      background: none;
      padding: 0;
    }
    
    blockquote {
      border-left: 4px solid ${e.colors.primary};
      margin: 16px 0;
      padding-left: 16px;
      color: ${e.colors.textSecondary};
    }
    
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 16px 0;
    }
    
    th, td {
      border: 1px solid ${e.colors.border};
      padding: 8px 12px;
      text-align: left;
    }
    
    th {
      background: ${e.colors.surface};
      font-weight: bold;
    }
    
    a {
      color: ${e.colors.link};
      text-decoration: none;
    }
    
    a:hover {
      color: ${e.colors.linkHover};
      text-decoration: underline;
    }
    
    .doc-description {
      font-style: italic;
      color: ${e.colors.textSecondary};
      margin-bottom: 16px;
    }
    
    .doc-tags {
      margin-bottom: 20px;
    }
    
    .tag {
      display: inline-block;
      background: ${e.colors.surface};
      border: 1px solid ${e.colors.border};
      border-radius: ${e.borderRadius};
      padding: 4px 8px;
      margin-right: 8px;
      font-size: 0.85em;
    }
    
    .export-toc {
      margin-bottom: 50px;
    }
    
    .export-toc ol {
      list-style: decimal;
      padding-left: 20px;
    }
    
    .export-toc li {
      margin: 8px 0;
    }
    
    img {
      max-width: 100%;
      height: auto;
    }
    
    hr {
      border: none;
      border-top: 1px solid ${e.colors.border};
      margin: 24px 0;
    }
    `}async embedAssets(e){return e}isPDFExportAvailable(){return this.html2pdfAvailable}getExportCapabilities(){return{pdf:this.html2pdfAvailable,html:!0,formats:["html",...this.html2pdfAvailable?["pdf"]:[]]}}}function bt(n={}){return{format:"html",includeTheme:!0,includeTOC:!0,embedAssets:!1,...n}}class yt{constructor(e){this.config=e,this.currentLocale=e.locale,this.messages=e.messages,this.fallbackLocale=e.fallbackLocale||"en",this.validateConfig()}validateConfig(){if(!this.messages[this.currentLocale]&&(console.warn(`No messages found for locale "${this.currentLocale}", falling back to "${this.fallbackLocale}"`),!this.messages[this.fallbackLocale]))throw new h(f.INVALID_CONFIG,`No messages found for locale "${this.currentLocale}" or fallback locale "${this.fallbackLocale}"`,"No translation messages found for the specified locale or fallback locale.",v.HIGH,!1,{operation:"validateI18nConfig",additionalData:{locale:this.currentLocale,fallbackLocale:this.fallbackLocale}})}t(e,t){const o=this.getMessage(e);return o?t?this.interpolate(o,t):o:(console.warn(`Missing translation for key: ${e}`),e)}getMessage(e){const t=e.split(".");let o=this.messages[this.currentLocale];for(const r of t)if(o&&typeof o=="object"&&r in o)o=o[r];else{o=void 0;break}if(o===void 0&&this.fallbackLocale!==this.currentLocale){o=this.messages[this.fallbackLocale];for(const r of t)if(o&&typeof o=="object"&&r in o)o=o[r];else return}return typeof o=="string"?o:void 0}interpolate(e,t){return e.replace(/\{(\w+)\}/g,(o,r)=>t[r]!==void 0?String(t[r]):o)}setLocale(e){if(!this.messages[e])throw new h(f.INVALID_CONFIG,`No messages found for locale "${e}"`,"The specified locale is not available.",v.HIGH,!1,{operation:"setLocale",additionalData:{locale:e}});this.currentLocale=e}getLocale(){return this.currentLocale}getAvailableLocales(){return Object.keys(this.messages)}hasLocale(e){return e in this.messages}addLocale(e,t){this.messages[e]=t}extendLocale(e,t){this.messages[e]||(this.messages[e]={}),this.messages[e]=this.deepMerge(this.messages[e],t)}deepMerge(e,t){const o={...e};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(typeof t[r]=="object"&&t[r]!==null&&!Array.isArray(t[r])?o[r]=this.deepMerge(e[r]||{},t[r]):o[r]=t[r]);return o}}const ee={app:{title:"Documentation",loading:"Loading documentation...",error:"An error occurred",retry:"Try Again",welcome:"Welcome to the Documentation",selectDocument:"Select a document from the sidebar to begin reading."},navigation:{toggleMenu:"Toggle navigation",search:"Search",searchPlaceholder:"Search documentation...",categories:"Categories",tags:"Tags",noResults:"No results found"},document:{copyCode:"Copy",codeCopied:"Copied!",copyFailed:"Copy failed",tableOfContents:"Table of Contents",backToTop:"Back to top"},export:{title:"Export Documentation",format:"Format",pdf:"PDF",html:"HTML",selectDocuments:"Select documents to export",selectAll:"Select All",deselectAll:"Deselect All",exportButton:"Export",exporting:"Exporting...",exportSuccess:"Export completed successfully",exportError:"Export failed",options:{includeTheme:"Include theme styles",includeTOC:"Include table of contents",embedAssets:"Embed assets (images, etc.)"}},errors:{documentNotFound:"Document not found",loadError:"Failed to load document",networkError:"Network error occurred",unknown:"An unexpected error occurred"}};function xt(n={}){const e=n.messages||{};return e.en?e.en=Ee(ee,e.en):e.en=ee,{locale:"en",fallbackLocale:"en",...n,messages:e}}function Ee(n,e){const t={...n};for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){const r=n[o],i=e[o];typeof i=="object"&&typeof r=="object"&&!Array.isArray(i)&&!Array.isArray(r)?t[o]=Ee(r,i):t[o]=i}return t}function kt(n,e){return{[n]:e}}class wt{constructor(e={}){this.headings=[],this.activeId=null,this.options={enabled:!0,maxDepth:3,sticky:!0,scrollSpy:!0,collapsible:!1,position:"right",...e}}generate(e){if(!this.options.enabled)return[];this.headings=[];let t=[];try{t=$.marked.lexer(e)}catch{console.warn("`marked.lexer` failed, falling back to manual heading parsing.");const o=e.split(`
`);for(const r of o)if(r.startsWith("#")){const i=r.match(/^#{1,6}/);if(i){const a=i[0].length,s=r.slice(a).trim();if(s.length>0){const c=a,m=s,u=this.generateId(m);this.headings.push({level:c,text:m,id:u,children:[]})}}}return this.buildTree()}return this.extractHeadings(t),this.buildTree()}extractHeadings(e){for(const t of e)if(t.type==="heading"&&t.depth<=this.options.maxDepth){const o=this.generateId(t.text);this.headings.push({id:o,text:t.text,level:t.depth,children:[]})}}buildTree(){const e=[],t=[];for(const o of this.headings){for(;t.length>0&&t[t.length-1].level>=o.level;)t.pop();t.length===0?e.push(o):t[t.length-1].children.push(o),t.push(o)}return e}generateId(e){const t=e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();let o=1,r=t;for(;this.headings.some(i=>i.id===r);)r=`${t}-${o}`,o++;return r}render(){if(!this.options.enabled||this.headings.length===0)return"";const e=this.options.position,t=this.options.sticky?"mdv-toc-sticky":"",o=this.options.collapsible?"mdv-toc-collapsible":"";return`
      <nav class="mdv-toc mdv-toc-${e} ${t} ${o}" role="navigation" aria-label="Table of contents">
        <h2 class="mdv-toc-title" id="toc-heading">Table of Contents</h2>
        ${this.renderTree(this.buildTree())}
        <div class="mdv-sr-only" aria-live="polite" id="toc-announcements"></div>
      </nav>
    `}renderTree(e,t=1){if(e.length===0)return"";const o=e.map(r=>{const i=r.children.length>0,a=r.id===this.activeId?"mdv-toc-active":"";return`
        <li class="mdv-toc-item mdv-toc-level-${t} ${a}" role="listitem">
          <a href="#${r.id}" 
             class="mdv-toc-link" 
             data-toc-id="${r.id}"
             aria-current="${r.id===this.activeId?"location":"false"}"
             role="link">
            ${r.text}
          </a>
          ${i?this.renderTree(r.children,t+1):""}
        </li>
      `}).join("");return`<ul class="mdv-toc-list mdv-toc-list-${t}" role="list">${o}</ul>`}initScrollSpy(e){if(!this.options.scrollSpy||!this.options.enabled)return;const t=[];this.headings.forEach(i=>{const a=e.querySelector(`#${i.id}`);a&&t.push(a)});const o=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&this.setActiveHeading(a.target.id)})},{rootMargin:"-20% 0% -70% 0%",threshold:0});t.forEach(i=>{o.observe(i)});let r;e.addEventListener("scroll",()=>{clearTimeout(r),r=setTimeout(()=>{this.updateActiveHeading(e,t)},100)},{passive:!0})}updateActiveHeading(e,t){let o=null;for(const r of t){const i=r.getBoundingClientRect(),a=e.getBoundingClientRect();if(i.top-a.top<=100)o=r;else break}o&&this.setActiveHeading(o.id)}setActiveHeading(e){const t=this.activeId;this.activeId=e,document.querySelectorAll(".mdv-toc-link").forEach(o=>{const r=o.getAttribute("data-toc-id")===e;if(o.classList.toggle("mdv-toc-active",r),o.setAttribute("aria-current",r?"location":"false"),r){const i=o.closest(".mdv-toc");if(i&&this.options.sticky){const a=o.getBoundingClientRect(),s=i.getBoundingClientRect();(a.top<s.top||a.bottom>s.bottom)&&o.scrollIntoView({behavior:"smooth",block:"center"})}t!==e&&this.announceActiveHeading(o.textContent||"")}})}announceActiveHeading(e){const t=`Current section: ${e}`;document.getElementById("toc-announcements")&&B(t,"toc-announcements")}static getStyles(){return`
      .mdv-toc {
        padding: 1rem;
        background: var(--mdv-surface);
        border-radius: var(--mdv-border-radius);
        max-height: calc(100vh - 200px);
        overflow-y: auto;
      }

      .mdv-toc-sticky {
        position: sticky;
        top: 1rem;
      }

      .mdv-toc-right {
        float: right;
        margin-left: 2rem;
        width: 250px;
      }

      .mdv-toc-left {
        float: left;
        margin-right: 2rem;
        width: 250px;
      }

      .mdv-toc-inline {
        margin: 2rem 0;
      }

      .mdv-toc-title {
        font-size: 1.1rem;
        font-weight: 600;
        margin: 0 0 1rem 0;
        color: var(--mdv-text-primary);
      }

      .mdv-toc-list {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .mdv-toc-list-2,
      .mdv-toc-list-3 {
        padding-left: 1rem;
      }

      .mdv-toc-item {
        margin: 0.25rem 0;
      }

      .mdv-toc-link {
        display: block;
        padding: 0.25rem 0.5rem;
        color: var(--mdv-text-secondary);
        text-decoration: none;
        border-radius: 0.25rem;
        transition: all 0.2s ease;
        font-size: 0.875rem;
      }

      .mdv-toc-link:hover {
        color: var(--mdv-primary);
        background: var(--mdv-background);
      }

      .mdv-toc-link.mdv-toc-active {
        color: var(--mdv-primary);
        font-weight: 500;
        background: var(--mdv-background);
      }

      .mdv-toc-level-2 .mdv-toc-link {
        font-size: 0.813rem;
      }

      .mdv-toc-level-3 .mdv-toc-link {
        font-size: 0.75rem;
      }

      /* Collapsible TOC */
      .mdv-toc-collapsible .mdv-toc-item.has-children > .mdv-toc-link::before {
        content: '▸';
        display: inline-block;
        margin-right: 0.25rem;
        transition: transform 0.2s ease;
      }

      .mdv-toc-collapsible .mdv-toc-item.has-children.expanded > .mdv-toc-link::before {
        transform: rotate(90deg);
      }

      .mdv-toc-collapsible .mdv-toc-item.has-children:not(.expanded) > .mdv-toc-list {
        display: none;
      }

      /* Mobile styles */
      @media (max-width: 1200px) {
        .mdv-toc-right,
        .mdv-toc-left {
          float: none;
          width: 100%;
          margin: 2rem 0;
        }
      }

      /* Print styles */
      @media print {
        .mdv-toc {
          display: none;
        }
      }
    `}}function Tt(n){const t=new DOMParser().parseFromString(n,"text/html"),o=t.querySelectorAll("h1, h2, h3, h4, h5, h6"),r=new Set;return o.forEach(i=>{if(!i.id){const a=i.textContent.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();let s=1,c=a;for(;r.has(c);)c=`${a}-${s}`,s++;r.add(c),i.id=c}}),t.body.innerHTML}class St{constructor(e,t={}){this.searchHistory=[],this.documents=e,this.options={enabled:!0,caseSensitive:!1,fuzzySearch:!1,searchInTags:!0,maxResults:10,highlighting:!0,searchHistory:!0,maxHistoryItems:10,...t},this.searchIndex=new F,this.buildIndex(),this.debouncedSearch=U(o=>this.performSearch(o),300),this.loadSearchHistory()}buildIndex(){const e=new Map;this.documents.forEach(t=>{t.content&&e.set(t.id,t.content)}),this.searchIndex.updateIndex(this.documents,e)}performSearch(e){const t=this.search(e);return this.addToHistory(e,t.length),t}search(e){if(!e.trim())return[];let o=this.searchIndex.search(e).map((r,i)=>({document:r,score:1-i*.1,highlights:this.options.highlighting?this.generateHighlights(r,e):[]}));return o=this.applyFilters(o),o.sort((r,i)=>i.score-r.score),o=o.slice(0,this.options.maxResults),this.options.searchHistory&&this.addToHistory(e,o.length),o}searchDebounced(e,t){this.debouncedSearch=U(()=>{const o=this.search(e);t(o)},300),this.debouncedSearch(e)}applyFilters(e){if(!this.options.filters)return e;const{categories:t,tags:o,dateRange:r}=this.options.filters;return e.filter(i=>{const a=i.document;if(t&&t.length>0&&(!a.category||!t.includes(a.category))||o&&o.length>0&&(!a.tags||!a.tags.some(s=>o.includes(s))))return!1;if(r&&a.date){const s=new Date(a.date);if(r.from&&s<r.from||r.to&&s>r.to)return!1}return!0})}generateHighlights(e,t){const o=[],r=t.toLowerCase().split(/\s+/),i=(a,s)=>{const c=a.toLowerCase();r.forEach(m=>{let u=c.indexOf(m);for(;u!==-1;){const k=Math.max(0,u-50),l=Math.min(a.length,u+m.length+50),g=a.substring(k,l);o.push({field:s,text:g,position:u}),u=c.indexOf(m,u+1)}})};return i(e.title,"title"),e.description&&i(e.description,"description"),e.content&&o.length<5&&i(e.content,"content"),e.tags&&this.options.searchInTags&&i(e.tags.join(" "),"tags"),o.slice(0,5)}getSearchHistory(){return[...this.searchHistory]}clearSearchHistory(){this.searchHistory=[],this.saveSearchHistory()}addToHistory(e,t){this.searchHistory=this.searchHistory.filter(o=>o.query!==e),this.searchHistory.unshift({query:e,timestamp:new Date,resultCount:t}),this.searchHistory.length>this.options.maxHistoryItems&&(this.searchHistory=this.searchHistory.slice(0,this.options.maxHistoryItems)),this.saveSearchHistory()}loadSearchHistory(){if(!(typeof window>"u"||!this.options.searchHistory))try{const e=localStorage.getItem("mdv-search-history");if(e){const t=JSON.parse(e);this.searchHistory=t.map(o=>({...o,timestamp:new Date(o.timestamp)}))}}catch(e){console.warn("Failed to load search history:",e)}}saveSearchHistory(){if(!(typeof window>"u"||!this.options.searchHistory))try{localStorage.setItem("mdv-search-history",JSON.stringify(this.searchHistory))}catch(e){console.warn("Failed to save search history:",e)}}getSuggestions(e){const t=[],o=e.toLowerCase();return this.searchHistory.forEach(r=>{r.query.toLowerCase().includes(o)&&t.push(r.query)}),this.documents.forEach(r=>{r.title.toLowerCase().includes(o)&&!t.includes(r.title)&&t.push(r.title)}),t.slice(0,5)}updateDocuments(e){this.documents=e,this.searchIndex=new F,this.buildIndex()}static renderSearchUI(e){return`
      <div class="mdv-advanced-search">
        <div class="mdv-search-input-wrapper">
          <input 
            type="search" 
            class="mdv-search-input" 
            placeholder="${e.placeholder||"Search documentation..."}"
            autocomplete="off"
          >
          <button class="mdv-search-clear" aria-label="Clear search">×</button>
          <div class="mdv-search-suggestions"></div>
        </div>
        
        ${e.filters?`
          <div class="mdv-search-filters">
            <button class="mdv-filter-toggle">Filters</button>
            <div class="mdv-filter-panel">
              ${e.filters.categories?`
                <div class="mdv-filter-group">
                  <label>Categories</label>
                  <select multiple class="mdv-filter-categories">
                    ${e.filters.categories.map(t=>`<option value="${y(t)}">${y(t)}</option>`).join("")}
                  </select>
                </div>
              `:""}
              
              ${e.filters.tags?`
                <div class="mdv-filter-group">
                  <label>Tags</label>
                  <select multiple class="mdv-filter-tags">
                    ${e.filters.tags.map(t=>`<option value="${y(t)}">${y(t)}</option>`).join("")}
                  </select>
                </div>
              `:""}
            </div>
          </div>
        `:""}
        
        <div class="mdv-search-results"></div>
      </div>
    `}static renderSearchResult(e){const t=e.document;return`
      <div class="mdv-search-result" data-doc-id="${y(t.id)}">
        <h3 class="mdv-search-result-title">
          ${e.highlights.find(o=>o.field==="title")?te(t.title,e.highlights.find(o=>o.field==="title").text):y(t.title)}
        </h3>
        
        ${t.description?`
          <p class="mdv-search-result-description">
            ${e.highlights.find(o=>o.field==="description")?te(t.description,e.highlights.find(o=>o.field==="description").text):y(t.description)}
          </p>
        `:""}
        
        ${e.highlights.filter(o=>o.field==="content").map(o=>`
          <p class="mdv-search-result-excerpt">
            ...${te(o.text,o.text)}...
          </p>
        `).join("")}
        
        <div class="mdv-search-result-meta">
          ${t.category?`<span class="mdv-search-result-category">${y(t.category)}</span>`:""}
          ${t.tags?.map(o=>`<span class="mdv-search-result-tag">${y(o)}</span>`).join("")||""}
        </div>
      </div>
    `}}function te(n,e){const t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`(${t})`,"gi");return n.replace(o,"<mark>$1</mark>")}function Ce(n){return`
    @media print {
      /* Reset page margins and setup */
      @page {
        margin: 2cm;
        size: A4;
      }

      @page :first {
        margin-top: 3cm;
      }

      /* Hide UI elements */
      .mdv-header,
      .mdv-sidebar,
      .mdv-mobile-toggle,
      .mdv-footer,
      .mdv-copy-button,
      .mdv-search,
      .mdv-navigation,
      .mdv-toc-right,
      .mdv-toc-left,
      .mdv-advanced-search,
      .no-print {
        display: none !important;
      }

      /* Reset layout */
      .mdv-app {
        display: block !important;
        width: 100% !important;
        height: auto !important;
        overflow: visible !important;
      }

      .mdv-layout {
        display: block !important;
        grid-template-columns: none !important;
      }

      .mdv-content {
        width: 100% !important;
        max-width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        height: auto !important;
        overflow: visible !important;
      }

      .mdv-document {
        max-width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      /* Typography adjustments */
      body {
        font-size: 11pt !important;
        line-height: 1.6 !important;
        color: #000 !important;
        background: #fff !important;
      }

      h1, h2, h3, h4, h5, h6 {
        color: #000 !important;
        page-break-after: avoid;
        page-break-inside: avoid;
        margin-top: 1.5em !important;
        margin-bottom: 0.5em !important;
      }

      h1 {
        font-size: 20pt !important;
        border-bottom: 2pt solid #000 !important;
        padding-bottom: 0.5em !important;
      }

      h2 {
        font-size: 16pt !important;
      }

      h3 {
        font-size: 14pt !important;
      }

      h4 {
        font-size: 12pt !important;
      }

      h5, h6 {
        font-size: 11pt !important;
      }

      p, li {
        font-size: 11pt !important;
        line-height: 1.6 !important;
        orphans: 3;
        widows: 3;
      }

      /* Links */
      a {
        color: #000 !important;
        text-decoration: underline !important;
      }

      /* Show link URLs */
      a[href^="http"]:after,
      a[href^="https"]:after {
        content: " (" attr(href) ")";
        font-size: 9pt;
        color: #666;
        word-wrap: break-word;
      }

      /* Don't show URLs for internal links */
      a[href^="#"]:after,
      a[href^="javascript:"]:after {
        content: "";
      }

      /* Code blocks */
      pre, code {
        font-family: "Courier New", Courier, monospace !important;
        font-size: 10pt !important;
        background: #f5f5f5 !important;
        color: #000 !important;
        border: 1pt solid #ddd !important;
        page-break-inside: avoid;
      }

      pre {
        padding: 1em !important;
        margin: 1em 0 !important;
        white-space: pre-wrap !important;
        word-wrap: break-word !important;
        overflow-wrap: break-word !important;
        max-width: 100% !important;
      }

      code {
        padding: 0.2em 0.4em !important;
      }

      /* Tables */
      table {
        border-collapse: collapse !important;
        width: 100% !important;
        page-break-inside: avoid;
        margin: 1em 0 !important;
      }

      th, td {
        border: 1pt solid #000 !important;
        padding: 0.5em !important;
        font-size: 10pt !important;
      }

      th {
        background: #f0f0f0 !important;
        font-weight: bold !important;
      }

      /* Images */
      img {
        max-width: 100% !important;
        height: auto !important;
        page-break-inside: avoid;
        display: block;
        margin: 1em auto !important;
      }

      /* Blockquotes */
      blockquote {
        border-left: 3pt solid #666 !important;
        padding-left: 1em !important;
        margin: 1em 0 !important;
        color: #333 !important;
        font-style: italic !important;
        page-break-inside: avoid;
      }

      /* Lists */
      ul, ol {
        margin: 1em 0 !important;
        padding-left: 2em !important;
      }

      li {
        margin: 0.5em 0 !important;
        page-break-inside: avoid;
      }

      /* Horizontal rules */
      hr {
        border: none !important;
        border-top: 1pt solid #000 !important;
        margin: 2em 0 !important;
        page-break-after: avoid;
      }

      /* Page breaks */
      .page-break,
      .mdv-page-break {
        page-break-before: always;
      }

      .avoid-break {
        page-break-inside: avoid;
      }

      /* Document metadata */
      .mdv-document-title {
        font-size: 24pt !important;
        margin-bottom: 1em !important;
        page-break-after: avoid;
      }

      .mdv-document-description {
        font-size: 12pt !important;
        color: #333 !important;
        margin-bottom: 2em !important;
        page-break-after: avoid;
      }

      /* Print-specific helpers */
      .print-only {
        display: block !important;
      }

      /* TOC for print */
      .mdv-toc-inline {
        display: block !important;
        page-break-after: always;
        margin-bottom: 2em !important;
      }

      .mdv-toc-inline .mdv-toc-title {
        font-size: 18pt !important;
        margin-bottom: 1em !important;
      }

      .mdv-toc-inline .mdv-toc-link {
        color: #000 !important;
        text-decoration: none !important;
        font-size: 11pt !important;
      }

      .mdv-toc-inline .mdv-toc-link:after {
        content: leader(". ") target-counter(attr(href), page);
        font-size: 11pt !important;
      }

      /* Syntax highlighting in print */
      .hljs {
        background: #f5f5f5 !important;
        color: #000 !important;
      }

      .hljs-keyword { color: #000 !important; font-weight: bold !important; }
      .hljs-string { color: #333 !important; }
      .hljs-comment { color: #666 !important; font-style: italic !important; }
      .hljs-number { color: #333 !important; }
      .hljs-function { color: #000 !important; }
      .hljs-class { color: #000 !important; font-weight: bold !important; }

      /* Ensure content is visible */
      * {
        overflow: visible !important;
        max-height: none !important;
        height: auto !important;
      }

      /* Footer for page numbers */
      @page {
        @bottom-right {
          content: counter(page) " of " counter(pages);
          font-size: 10pt;
          color: #666;
        }
      }
    }
  `}function $t(n){const e=document.createElement("button");e.className="mdv-print-button no-print",e.textContent="Print",e.onclick=()=>window.print();const t=n.querySelector(".mdv-header");t&&t.appendChild(e),n.querySelectorAll("h1, h2").forEach((a,s)=>{s>0&&s%3===0&&a.classList.add("page-break")}),n.querySelectorAll("table").forEach(a=>{a.classList.add("avoid-break")}),n.querySelectorAll("pre").forEach(a=>{a.scrollHeight>800?a.style.pageBreakInside="auto":a.classList.add("avoid-break")})}function Et(n,e){return`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Print Preview</title>
      <style>
        ${Ce()}
        
        /* Preview-specific styles */
        body {
          margin: 0;
          padding: 20px;
          background: #f0f0f0;
        }
        
        .print-preview-page {
          background: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          margin: 0 auto 20px;
          padding: 2cm;
          width: 21cm;
          min-height: 29.7cm;
          box-sizing: border-box;
        }
        
        @media screen {
          .print-preview-controls {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border-radius: 8px;
          }
          
          .print-preview-controls button {
            display: block;
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ddd;
            background: #f5f5f5;
            cursor: pointer;
            border-radius: 4px;
          }
          
          .print-preview-controls button:hover {
            background: #e0e0e0;
          }
        }
      </style>
    </head>
    <body>
      <div class="print-preview-controls no-print">
        <button onclick="window.print()">Print</button>
        <button onclick="window.close()">Close Preview</button>
      </div>
      <div class="print-preview-page">
        ${n}
      </div>
    </body>
    </html>
  `}const Me={light:"Material Design inspired light theme",dark:"Material Design inspired dark theme"},Ie={light:"Visual Studio Code light",dark:"Visual Studio Code dark"},De={light:"Nord light - arctic inspired",dark:"Nord dark - arctic inspired"},Le={light:"Dracula light",dark:"Dracula dark"},Re={light:"Solarized light",dark:"Solarized dark"},Ae={light:"Monokai light",dark:"Monokai dark"},Oe={light:"Ayu light",dark:"Ayu dark"},He={light:"Catppuccin Latte",dark:"Catppuccin Mocha"},Ne={light:"Tokyo Night light",dark:"Tokyo Night dark"},Ct=Object.freeze(Object.defineProperty({__proto__:null,ayu:Oe,catppuccin:He,default:{material:Me,vscode:Ie,nord:De,dracula:Le,solarized:Re,monokai:Ae,ayu:Oe,catppuccin:He,tokyo:Ne},dracula:Le,material:Me,monokai:Ae,nord:De,solarized:Re,tokyo:Ne,vscode:Ie},Symbol.toStringTag,{value:"Module"}));d.AdvancedSearchManager=St,d.AutoDiscovery=Z,d.ConfigLoader=j,d.ConsoleErrorLogger=J,d.DarkModeToggle=N,d.ErrorBoundary=Y,d.ErrorCode=f,d.ErrorFactory=T,d.ErrorSeverity=v,d.ExportManager=vt,d.I18nManager=yt,d.LRUCache=se,d.LazyLoader=Ve,d.MarkdownDocsError=h,d.MarkdownDocsViewer=ye,d.MemoryManager=R,d.PerformanceMonitor=de,d.PersistentCache=ce,d.SearchIndex=F,d.SearchManager=le,d.TableOfContents=wt,d.ThemeBuilder=pe,d.ThemeManager=ge,d.ThemeSwitcher=ve,d.ZeroConfig=pt,d.addHeadingIds=Tt,d.addPrintUtilities=$t,d.autoDiscoverDocs=mt,d.createCustomTheme=re,d.createExportOptions=bt,d.createI18nConfig=xt,d.createLocaleMessages=kt,d.createViewer=X,d.debounce=U,d.defaultMessages=ee,d.generateConfig=$e,d.generatePrintPreview=Et,d.generatePrintStyles=Ce,d.getAvailableThemes=Se,d.getViewer=ke,d.init=G,d.loadConfig=ht,d.quickStart=dt,d.reload=we,d.setTheme=Te,d.themes=w,d.throttle=Ge,d.withRetry=me,Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=markdown-docs-viewer.umd.cjs.map
