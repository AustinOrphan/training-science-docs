(function(h,T){typeof exports=="object"&&typeof module<"u"?T(exports,require("marked"),require("marked-highlight"),require("highlight.js")):typeof define=="function"&&define.amd?define(["exports","marked","marked-highlight","highlight.js"],T):(h=typeof globalThis<"u"?globalThis:h||self,T(h.MarkdownDocsViewer={},h.marked,h.markedHighlight,h.hljs))})(this,function(h,T,N,De){"use strict";const S=(a=>a&&typeof a=="object"&&"default"in a?a:{default:a})(De),X={github:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',code:'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'},material:{body:'Roboto, "Helvetica Neue", Arial, sans-serif',heading:'Roboto, "Helvetica Neue", Arial, sans-serif',code:'"Roboto Mono", Consolas, Monaco, monospace'},vscode:{body:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',heading:'"Segoe UI Semibold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',code:'Consolas, "Courier New", monospace'},nord:{body:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"JetBrains Mono", "Fira Code", Consolas, Monaco, monospace'},dracula:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"Fira Code", "JetBrains Mono", Consolas, Monaco, monospace'},solarized:{body:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"Source Code Pro", Consolas, Monaco, monospace'},monokai:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"Monaco", "Menlo", "Ubuntu Mono", Consolas, monospace'},ayu:{body:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"Fira Code", "Source Code Pro", Consolas, Monaco, monospace'},catppuccin:{body:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"JetBrains Mono", "Fira Code", Consolas, Monaco, monospace'},tokyo:{body:'"Hiragino Sans", "Yu Gothic UI", "Segoe UI", -apple-system, sans-serif',heading:'"Hiragino Sans", "Yu Gothic UI", "Segoe UI", -apple-system, sans-serif',code:'"SFMono-Regular", "Consolas", "Liberation Mono", Monaco, monospace'},default:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',code:'"Fira Code", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace'}},q={default:{light:{primary:"#3b82f6",secondary:"#10b981",background:"#ffffff",surface:"#f3f4f6",text:"#111827",textPrimary:"#111827",textLight:"#6b7280",textSecondary:"#6b7280",border:"#e5e7eb",code:"#8b5cf6",codeBackground:"#f3f4f6",link:"#3b82f6",linkHover:"#2563eb",error:"#ef4444",warning:"#f59e0b",success:"#10b981"},dark:{primary:"#60a5fa",secondary:"#34d399",background:"#0f172a",surface:"#1e293b",text:"#f1f5f9",textPrimary:"#f1f5f9",textLight:"#94a3b8",textSecondary:"#94a3b8",border:"#334155",code:"#a78bfa",codeBackground:"#1a202c",link:"#60a5fa",linkHover:"#93c5fd",error:"#f87171",warning:"#fbbf24",success:"#34d399"}},github:{light:{primary:"#0969da",secondary:"#1a7f37",background:"#ffffff",surface:"#f6f8fa",text:"#1f2328",textPrimary:"#1f2328",textLight:"#656d76",textSecondary:"#656d76",border:"#d0d7de",code:"#0550ae",codeBackground:"#f6f8fa",link:"#0969da",linkHover:"#0860ca",error:"#d1242f",warning:"#9a6700",success:"#1a7f37"},dark:{primary:"#4493f8",secondary:"#3fb950",background:"#0d1117",surface:"#161b22",text:"#e6edf3",textPrimary:"#e6edf3",textLight:"#7d8590",textSecondary:"#7d8590",border:"#30363d",code:"#79c0ff",codeBackground:"#161b22",link:"#4493f8",linkHover:"#58a6ff",error:"#f85149",warning:"#d29922",success:"#3fb950"}},material:{light:{primary:"#1976d2",secondary:"#00897b",background:"#ffffff",surface:"#f5f5f5",text:"#212121",textPrimary:"#212121",textLight:"#757575",textSecondary:"#757575",border:"#e0e0e0",code:"#673ab7",codeBackground:"#f5f5f5",link:"#1976d2",linkHover:"#1565c0",error:"#d32f2f",warning:"#f57c00",success:"#388e3c"},dark:{primary:"#42a5f5",secondary:"#26a69a",background:"#121212",surface:"#1e1e1e",text:"#ffffff",textPrimary:"#ffffff",textLight:"#b3b3b3",textSecondary:"#b3b3b3",border:"#2e2e2e",code:"#ab47bc",codeBackground:"#1e1e1e",link:"#42a5f5",linkHover:"#64b5f6",error:"#f44336",warning:"#ff9800",success:"#4caf50"}},vscode:{light:{primary:"#0078d4",secondary:"#00bcf2",background:"#ffffff",surface:"#f3f3f3",text:"#323130",textPrimary:"#323130",textLight:"#605e5c",textSecondary:"#605e5c",border:"#c8c6c4",code:"#d83b01",codeBackground:"#f3f2f1",link:"#0078d4",linkHover:"#106ebe",error:"#d13438",warning:"#ff8c00",success:"#107c10"},dark:{primary:"#0078d4",secondary:"#00bcf2",background:"#1e1e1e",surface:"#252526",text:"#cccccc",textPrimary:"#cccccc",textLight:"#969696",textSecondary:"#969696",border:"#3c3c3c",code:"#569cd6",codeBackground:"#1e1e1e",link:"#3794ff",linkHover:"#1f7ce6",error:"#f14c4c",warning:"#ff8c00",success:"#89d185"}},nord:{light:{primary:"#5e81ac",secondary:"#88c0d0",background:"#eceff4",surface:"#e5e9f0",text:"#2e3440",textPrimary:"#2e3440",textLight:"#4c566a",textSecondary:"#4c566a",border:"#d8dee9",code:"#b48ead",codeBackground:"#e5e9f0",link:"#5e81ac",linkHover:"#81a1c1",error:"#bf616a",warning:"#ebcb8b",success:"#a3be8c"},dark:{primary:"#88c0d0",secondary:"#8fbcbb",background:"#2e3440",surface:"#3b4252",text:"#eceff4",textPrimary:"#eceff4",textLight:"#d8dee9",textSecondary:"#d8dee9",border:"#4c566a",code:"#b48ead",codeBackground:"#3b4252",link:"#88c0d0",linkHover:"#8fbcbb",error:"#bf616a",warning:"#ebcb8b",success:"#a3be8c"}},dracula:{light:{primary:"#6272a4",secondary:"#8be9fd",background:"#f8f8f2",surface:"#f0f0f0",text:"#282a36",textPrimary:"#282a36",textLight:"#6272a4",textSecondary:"#6272a4",border:"#e0e0e0",code:"#bd93f9",codeBackground:"#f0f0f0",link:"#6272a4",linkHover:"#44475a",error:"#ff5555",warning:"#ffb86c",success:"#50fa7b"},dark:{primary:"#bd93f9",secondary:"#8be9fd",background:"#282a36",surface:"#44475a",text:"#f8f8f2",textPrimary:"#f8f8f2",textLight:"#6272a4",textSecondary:"#6272a4",border:"#6272a4",code:"#ff79c6",codeBackground:"#44475a",link:"#8be9fd",linkHover:"#50fa7b",error:"#ff5555",warning:"#ffb86c",success:"#50fa7b"}},solarized:{light:{primary:"#268bd2",secondary:"#2aa198",background:"#fdf6e3",surface:"#eee8d5",text:"#586e75",textPrimary:"#073642",textLight:"#586e75",textSecondary:"#586e75",border:"#93a1a1",code:"#d33682",codeBackground:"#eee8d5",link:"#268bd2",linkHover:"#2aa198",error:"#dc322f",warning:"#b58900",success:"#859900"},dark:{primary:"#268bd2",secondary:"#2aa198",background:"#002b36",surface:"#073642",text:"#839496",textPrimary:"#93a1a1",textLight:"#657b83",textSecondary:"#586e75",border:"#586e75",code:"#d33682",codeBackground:"#073642",link:"#268bd2",linkHover:"#2aa198",error:"#dc322f",warning:"#b58900",success:"#859900"}},monokai:{light:{primary:"#f92672",secondary:"#a6e22e",background:"#fafafa",surface:"#f0f0f0",text:"#272822",textPrimary:"#272822",textLight:"#75715e",textSecondary:"#75715e",border:"#e0e0e0",code:"#ae81ff",codeBackground:"#f0f0f0",link:"#f92672",linkHover:"#fd971f",error:"#f92672",warning:"#fd971f",success:"#a6e22e"},dark:{primary:"#f92672",secondary:"#a6e22e",background:"#272822",surface:"#3e3d32",text:"#f8f8f2",textPrimary:"#f8f8f2",textLight:"#75715e",textSecondary:"#75715e",border:"#49483e",code:"#ae81ff",codeBackground:"#3e3d32",link:"#66d9ef",linkHover:"#a6e22e",error:"#f92672",warning:"#fd971f",success:"#a6e22e"}},ayu:{light:{primary:"#399ee6",secondary:"#86b300",background:"#fafafa",surface:"#f3f4f5",text:"#5c6166",textPrimary:"#5c6166",textLight:"#5c6166",textSecondary:"#5c6166",border:"#e7eaed",code:"#a37acc",codeBackground:"#f3f4f5",link:"#399ee6",linkHover:"#4cbf99",error:"#f07178",warning:"#ff8f40",success:"#86b300"},dark:{primary:"#39bae6",secondary:"#95e6cb",background:"#0b0e14",surface:"#11151c",text:"#b3b1ad",textPrimary:"#e6e1cf",textLight:"#4d5566",textSecondary:"#626a73",border:"#1e232a",code:"#d4bfff",codeBackground:"#11151c",link:"#39bae6",linkHover:"#95e6cb",error:"#f28779",warning:"#ffb454",success:"#bae67e"}},catppuccin:{light:{primary:"#1e66f5",secondary:"#179299",background:"#eff1f5",surface:"#e6e9ef",text:"#4c4f69",textPrimary:"#4c4f69",textLight:"#6c6f85",textSecondary:"#6c6f85",border:"#bcc0cc",code:"#8839ef",codeBackground:"#e6e9ef",link:"#1e66f5",linkHover:"#04a5e5",error:"#d20f39",warning:"#df8e1d",success:"#40a02b"},dark:{primary:"#89b4fa",secondary:"#94e2d5",background:"#1e1e2e",surface:"#313244",text:"#cdd6f4",textPrimary:"#cdd6f4",textLight:"#a6adc8",textSecondary:"#a6adc8",border:"#45475a",code:"#cba6f7",codeBackground:"#313244",link:"#89b4fa",linkHover:"#94e2d5",error:"#f38ba8",warning:"#fab387",success:"#a6e3a1"}},tokyo:{light:{primary:"#3d59a1",secondary:"#006a83",background:"#d5d6db",surface:"#e1e2e7",text:"#0d2258",textPrimary:"#0d2258",textLight:"#5c5f69",textSecondary:"#5c5f69",border:"#a8adb7",code:"#5a4a78",codeBackground:"#e1e2e7",link:"#3d59a1",linkHover:"#634da0",error:"#8c4351",warning:"#8f5e15",success:"#485e30"},dark:{primary:"#7aa2f7",secondary:"#7dcfff",background:"#1a1b26",surface:"#24283b",text:"#c0caf5",textPrimary:"#c0caf5",textLight:"#565f89",textSecondary:"#565f89",border:"#414868",code:"#bb9af7",codeBackground:"#24283b",link:"#7aa2f7",linkHover:"#7dcfff",error:"#f7768e",warning:"#e0af68",success:"#9ece6a"}}};function G(a,e){const t=X[a];return t?t[e]:X.default[e]}function P(a,e){const t=q[a];if(!t)throw new Error(`Unknown theme: ${a}`);return{name:`${a}-${e}`,colors:t[e],fonts:{body:G(a,"body"),heading:G(a,"heading"),code:G(a,"code")},spacing:{unit:8,containerMaxWidth:"1200px",sidebarWidth:"320px"},borderRadius:a==="material"?"0.25rem":"0.5rem"}}function Le(a){return a.replace(/-(light|dark)$/,"")}function Re(a){return a.endsWith("-dark")?"dark":"light"}function Q(a,e,t){if(typeof a=="object"&&e===void 0&&t===void 0){const r=a;let o="default",i="light";if(r.name){const s=Le(r.name);Object.keys(q).includes(s)?(o=s,i=Re(r.name)):(r.name==="dark"||r.name.includes("-dark"))&&(o="default",i="dark")}const n=P(o,i);return{...n,...r,name:r.name||`${o}-${i}`,colors:{...n.colors,...r.colors||{}},fonts:{...n.fonts,...r.fonts||{}},spacing:{...n.spacing,...r.spacing||{}}}}if(typeof a=="string"&&e&&t){const r=a,o=P(r,e);return{...o,...t,name:t.name||`${r}-${e}`,colors:{...o.colors,...t.colors||{}},fonts:{...o.fonts,...t.fonts||{}},spacing:{...o.spacing,...t.spacing||{}}}}throw new Error("Invalid arguments to createCustomTheme. Use either createCustomTheme(overrides) or createCustomTheme(baseName, mode, overrides)")}const E=Object.keys(q).reduce((a,e)=>{const t=e;return a[t]={light:P(t,"light"),dark:P(t,"dark")},a},{});function Z(a,e){const{colors:t,fonts:r,spacing:o,borderRadius:i}=a,n=o.unit;return`
    /* Base Styles */
    .mdv-app {
      font-family: ${r.body};
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
      padding: ${n*2}px ${n*3}px;
      display: flex;
      align-items: center;
      gap: ${n*2}px;
      position: relative;
      min-height: 60px;
    }
    
    .mdv-header-actions {
      margin-left: auto;
      display: flex;
      align-items: center;
      gap: ${n*1.5}px;
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
      width: ${o.sidebarWidth};
      background-color: ${t.surface};
      border-right: 1px solid ${t.border};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    /* Search */
    .mdv-search {
      padding: ${n*2}px;
      border-bottom: 1px solid ${t.border};
      position: relative;
    }

    .mdv-search-input {
      width: 100%;
      padding: ${n*1.5}px ${n*2}px;
      background-color: ${t.background};
      border: 1px solid ${t.border};
      border-radius: ${i};
      color: ${t.textPrimary};
      font-size: 0.875rem;
      transition: border-color 0.2s;
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
      padding: ${n*1.5}px ${n*2}px;
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
      margin-bottom: ${n*.5}px;
    }

    .mdv-search-result-description {
      font-size: 0.875rem;
      color: ${t.textSecondary};
      margin-bottom: ${n*.5}px;
    }

    .mdv-search-result-tags {
      display: flex;
      gap: ${n*.5}px;
      flex-wrap: wrap;
    }

    .mdv-search-tag {
      font-size: 0.75rem;
      padding: ${n*.25}px ${n*.5}px;
      background-color: ${t.primary}22;
      color: ${t.primary};
      border-radius: ${i};
    }

    .mdv-search-result-category {
      font-size: 0.75rem;
      color: ${t.textSecondary};
      margin-top: ${n*.5}px;
      font-style: italic;
    }

    .mdv-search-no-results {
      padding: ${n*2}px;
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
      padding: ${n}px 0;
    }

    .mdv-nav-list,
    .mdv-nav-sublist {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .mdv-nav-group {
      margin-bottom: ${n}px;
    }

    .mdv-nav-category {
      padding: ${n}px ${n*2}px;
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
      border-radius: ${a.borderRadius};
    }

    .mdv-nav-category.collapsible:hover {
      color: ${t.textPrimary};
    }

    .mdv-collapse-icon {
      transition: transform 0.2s;
    }

    .mdv-nav-item {
      margin: ${n*.5}px ${n}px;
    }

    .mdv-nav-link {
      display: block;
      padding: ${n*1.5}px ${n*2}px;
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
      border-radius: ${a.borderRadius};
    }

    .mdv-nav-title {
      font-weight: 500;
      display: block;
    }

    .mdv-nav-description {
      font-size: 0.75rem;
      margin-top: ${n*.5}px;
      opacity: 0.8;
    }

    .mdv-nav-tags {
      display: flex;
      flex-wrap: wrap;
      gap: ${n*.5}px;
      margin-top: ${n*.5}px;
    }

    .mdv-tag {
      font-size: 0.625rem;
      padding: ${n*.25}px ${n*.75}px;
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
      max-width: ${o.containerMaxWidth};
      margin: 0 auto;
      padding: ${n*4}px;
    }

    .mdv-document-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: ${n*4}px;
      color: ${t.textPrimary};
      font-family: ${r.heading};
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
      font-family: ${r.heading};
      font-weight: 600;
      margin-top: ${n*3}px;
      margin-bottom: ${n*2}px;
      color: ${t.textPrimary};
    }

    .mdv-document-content h1 { font-size: 2rem; }
    .mdv-document-content h2 { font-size: 1.5rem; }
    .mdv-document-content h3 { font-size: 1.25rem; }
    .mdv-document-content h4 { font-size: 1.125rem; }

    .mdv-document-content p {
      margin-bottom: ${n*2}px;
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
      margin-bottom: ${n*2}px;
      padding-left: ${n*4}px;
    }

    .mdv-document-content li {
      margin-bottom: ${n}px;
    }

    .mdv-document-content code {
      font-family: ${r.code};
      font-size: 0.875em;
      padding: ${n*.25}px ${n*.75}px;
      background-color: ${t.codeBackground};
      border-radius: ${i};
    }

    .mdv-code-block {
      position: relative;
      margin-bottom: ${n*2}px;
    }

    .mdv-document-content pre {
      background-color: ${t.codeBackground};
      padding: ${n*2}px;
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
      top: ${n}px;
      right: ${n}px;
      padding: ${n*.5}px ${n*1.5}px;
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
      padding-left: ${n*2}px;
      margin: ${n*2}px 0;
      color: ${t.textSecondary};
      font-style: italic;
    }

    .mdv-document-content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: ${n*2}px;
    }

    .mdv-document-content th,
    .mdv-document-content td {
      padding: ${n*1.5}px;
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
      margin: ${n*4}px 0;
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
      padding: ${n*2}px ${n*3}px;
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
    ${a.customCSS||""}
  `}function Ae(a,e,t){const r=t.showCategories?He(a):{"All Documents":a};return`
    <nav class="mdv-navigation" role="navigation" aria-label="Documentation navigation">
      <ul class="mdv-nav-list" role="list">
        ${Object.entries(r).map(([i,n])=>({category:i,documents:Oe(n,t.sortBy||"order")})).map(i=>Ne(i,e,t)).join("")}
      </ul>
    </nav>
  `}function He(a){return a.reduce((e,t)=>{const r=t.category||"Uncategorized";return e[r]||(e[r]=[]),e[r].push(t),e},{})}function Oe(a,e){return[...a].sort((t,r)=>{switch(e){case"title":return t.title.localeCompare(r.title);case"order":return(t.order||999)-(r.order||999);default:return 0}})}function Ne(a,e,t){const r=t.collapsible&&a.documents.length>1,o=`mdv-category-${a.category.toLowerCase().replace(/[^a-z0-9]/g,"-")}`;return`
    <li class="mdv-nav-group" role="listitem">
      ${a.category!=="All Documents"?`
        ${r?`
          <button class="mdv-nav-category collapsible"
                  type="button"
                  aria-expanded="true"
                  aria-controls="${o}">
            ${a.category}
            <span class="mdv-collapse-icon" aria-hidden="true">▼</span>
          </button>
        `:`
          <div class="mdv-nav-category">
            ${a.category}
          </div>
        `}
      `:""}
      <ul class="mdv-nav-sublist" role="list" ${r?`id="${o}"`:""}>
        ${a.documents.map(i=>Pe(i,e,t)).join("")}
      </ul>
    </li>
  `}function Pe(a,e,t){const r=(e==null?void 0:e.id)===a.id,o=t.showTags&&a.tags?ze(a.tags):"",i=t.showDescription&&a.description?`<div class="mdv-nav-description">${a.description}</div>`:"";return`
    <li class="mdv-nav-item" role="listitem">
      <a href="#${a.id}" 
         class="mdv-nav-link ${r?"active":""}"
         data-doc-id="${a.id}"
         aria-current="${r?"page":"false"}"
         role="link">
        <span class="mdv-nav-title">${a.title}</span>
        ${i}
        ${o}
      </a>
    </li>
  `}function ze(a){return`
    <div class="mdv-nav-tags">
      ${a.map(e=>`<span class="mdv-tag">${e}</span>`).join("")}
    </div>
  `}class ee{constructor(e=50){this.capacity=Math.max(1,e),this.cache=new Map,this.accessOrder=[]}get(e){if(this.cache.has(e))return this.moveToFront(e),this.cache.get(e)}set(e,t){this.cache.has(e)?(this.cache.set(e,t),this.moveToFront(e)):(this.cache.size>=this.capacity&&this.evictLeastRecentlyUsed(),this.cache.set(e,t),this.accessOrder.unshift(e))}has(e){return this.cache.has(e)}delete(e){return this.cache.has(e)?(this.cache.delete(e),this.accessOrder=this.accessOrder.filter(t=>t!==e),!0):!1}clear(){this.cache.clear(),this.accessOrder=[]}size(){return this.cache.size}getCapacity(){return this.capacity}getMemoryUsage(){let e=0;for(const[t,r]of this.cache)e+=this.estimateSize(t)+this.estimateSize(r);return e}entries(){return this.cache.entries()}moveToFront(e){this.accessOrder=this.accessOrder.filter(t=>t!==e),this.accessOrder.unshift(e)}evictLeastRecentlyUsed(){const e=this.accessOrder.pop();e!==void 0&&this.cache.delete(e)}estimateSize(e){return typeof e=="string"?e.length*2:typeof e=="number"?8:typeof e=="object"&&e!==null?JSON.stringify(e).length*2:4}}class te extends ee{constructor(e=50,t="mdv-cache"){super(e),this.storageKey=t,this.useStorage=this.isStorageAvailable(),this.useStorage&&this.loadFromStorage()}set(e,t){super.set(e,t),this.useStorage&&this.saveToStorage()}clear(){if(super.clear(),this.useStorage)try{localStorage.removeItem(this.storageKey)}catch(e){console.warn("Failed to clear persistent cache:",e)}}isStorageAvailable(){try{const e="test";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}loadFromStorage(){try{const e=localStorage.getItem(this.storageKey);if(e){const t=JSON.parse(e);for(const[r,o]of t.entries||[])super.set(r,o)}}catch(e){console.warn("Failed to load cache from storage:",e)}}saveToStorage(){try{const e={entries:Array.from(this.entries()),timestamp:Date.now()};localStorage.setItem(this.storageKey,JSON.stringify(e))}catch(e){console.warn("Failed to save cache to storage:",e)}}}class z{constructor(){this.documents=[],this.titleIndex=new Map,this.contentIndex=new Map,this.tagIndex=new Map,this.searchCache=new Map,this.stopWords=new Set(["a","an","and","are","as","at","be","by","for","from","has","he","in","is","it","its","of","on","that","the","to","was","were","will","with","but","or","not","can"])}updateIndex(e,t){this.documents=e,this.clearIndex(),this.searchCache.clear(),e.forEach((r,o)=>{this.indexText(r.title,this.titleIndex,o),r.description&&this.indexText(r.description,this.contentIndex,o),r.tags&&r.tags.forEach(n=>{this.indexText(n,this.tagIndex,o)});const i=t.get(r.id);if(i){const n=this.cleanMarkdown(i);this.indexText(n,this.contentIndex,o)}})}search(e,t={}){const r=JSON.stringify({query:e,options:t});if(this.searchCache.has(r))return this.searchCache.get(r);const{searchInTags:o=!0,fuzzySearch:i=!1,caseSensitive:n=!1,maxResults:s=10}=t,d=n?e:e.toLowerCase(),l=this.tokenize(d),p=new Map;for(const c of l)this.stopWords.has(c)||(this.searchInIndex(c,this.titleIndex,p,3,i),this.searchInIndex(c,this.contentIndex,p,1,i),o&&this.searchInIndex(c,this.tagIndex,p,2,i));const y=Array.from(p.values()).sort((c,u)=>u.score-c.score).slice(0,s).map(c=>c.doc);return this.searchCache.set(r,y),y}clearIndex(){this.titleIndex.clear(),this.contentIndex.clear(),this.tagIndex.clear()}indexText(e,t,r){const o=this.tokenize(e.toLowerCase());for(const i of o)this.stopWords.has(i)||(t.has(i)||t.set(i,new Set),t.get(i).add(r))}tokenize(e){return e.toLowerCase().replace(/[^\w\s]/g," ").split(/\s+/).filter(t=>t.length>1)}cleanMarkdown(e){return e.replace(/```[\s\S]*?```/g,"").replace(/`[^`]+`/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[#*_~`]/g,"").replace(/\s+/g," ").trim()}searchInIndex(e,t,r,o,i){if(t.has(e))for(const n of t.get(e))this.addToResults(r,n,o);if(i){for(const[n,s]of t)if(this.fuzzyMatch(e,n))for(const d of s)this.addToResults(r,d,o*.5)}for(const[n,s]of t)if(n.startsWith(e)&&n!==e)for(const d of s)this.addToResults(r,d,o*.8)}addToResults(e,t,r){if(t<this.documents.length){const o=this.documents[t];e.has(t)?e.get(t).score+=r:e.set(t,{score:r,doc:o})}}fuzzyMatch(e,t){if(e.length===0)return!0;if(t.length===0)return!1;const r=Math.floor(Math.max(e.length,t.length)*.3);return this.levenshteinDistance(e,t)<=r}levenshteinDistance(e,t){const r=Array(t.length+1).fill(null).map(()=>Array(e.length+1).fill(null));for(let o=0;o<=e.length;o++)r[0][o]=o;for(let o=0;o<=t.length;o++)r[o][0]=o;for(let o=1;o<=t.length;o++)for(let i=1;i<=e.length;i++){const n=e[i-1]===t[o-1]?0:1;r[o][i]=Math.min(r[o][i-1]+1,r[o-1][i]+1,r[o-1][i-1]+n)}return r[t.length][e.length]}}function B(a,e){let t;return(...r)=>{const o=()=>{t=void 0,a(...r)};t&&clearTimeout(t),t=setTimeout(o,e)}}function Be(a,e){let t;return(...r)=>{t||(a(...r),t=!0,setTimeout(()=>t=!1,e))}}class Fe{constructor(){this.observers=new Map,this.loadedElements=new WeakSet}observeElement(e,t,r={}){if(this.loadedElements.has(e))return;const o=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&!this.loadedElements.has(n.target)&&(t(),this.loadedElements.add(n.target),o.unobserve(n.target),this.observers.delete(n.target))})},{rootMargin:"50px",threshold:.1,...r});o.observe(e),this.observers.set(e,o)}unobserveElement(e){const t=this.observers.get(e);t&&(t.unobserve(e),this.observers.delete(e))}cleanup(){for(const[e,t]of this.observers)t.unobserve(e);this.observers.clear()}}class D{constructor(){this.cleanupTasks=[],this.memoryWarningThreshold=50*1024*1024}static getInstance(){return D.instance||(D.instance=new D),D.instance}addCleanupTask(e){this.cleanupTasks.push(e)}removeCleanupTask(e){const t=this.cleanupTasks.indexOf(e);t>-1&&this.cleanupTasks.splice(t,1)}cleanup(){this.cleanupTasks.forEach(e=>{try{e()}catch(t){console.warn("Cleanup task failed:",t)}}),global.gc&&global.gc()}checkMemoryUsage(){if("memory"in performance){const t=performance.memory.usedJSHeapSize;if(t>this.memoryWarningThreshold)return console.warn(`High memory usage detected: ${Math.round(t/1024/1024)}MB`),this.cleanup(),!1}return!0}getMemoryStats(){if("memory"in performance){const e=performance.memory;return{used:Math.round(e.usedJSHeapSize/1024/1024),total:Math.round(e.totalJSHeapSize/1024/1024),limit:Math.round(e.jsHeapSizeLimit/1024/1024)}}return{}}}class re{constructor(){this.metrics=new Map,this.observers=[]}startTiming(e){const t=performance.now();return()=>{const r=performance.now()-t;this.recordMetric(e,r)}}recordMetric(e,t){this.metrics.has(e)||this.metrics.set(e,[]);const r=this.metrics.get(e);r.push(t),r.length>100&&r.shift()}getMetrics(e){const t=this.metrics.get(e)||[];return t.length===0?{avg:0,min:0,max:0,count:0}:{avg:t.reduce((o,i)=>o+i,0)/t.length,min:Math.min(...t),max:Math.max(...t),count:t.length}}getAllMetrics(){const e={};for(const t of this.metrics.keys())e[t]=this.getMetrics(t);return e}clearMetrics(){this.metrics.clear()}observeResourceTiming(){if("PerformanceObserver"in window){const e=new PerformanceObserver(t=>{t.getEntries().forEach(o=>{o.entryType==="resource"&&this.recordMetric("resource-load",o.duration)})});try{e.observe({entryTypes:["resource"]}),this.observers.push(e)}catch(t){console.warn("Failed to observe resource timing:",t)}}}cleanup(){this.observers.forEach(e=>e.disconnect()),this.observers=[]}}function $(a){if(a==null)return"";const e=String(a),t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","\n":"&#10;","\r":"&#13;","	":"&#9;"};return e.replace(/[&<>"'\n\r\t]/g,r=>t[r])}function M(a){if(!a)return"";const e=String(a).trim();return/^(#[0-9a-fA-F]{3,8}|rgb\([^)]*\)|rgba\([^)]*\)|hsl\([^)]*\)|hsla\([^)]*\)|[a-zA-Z]+)$/.test(e)?e:""}function Ue(a){if(!a)return"";const e=String(a).trim();return/^[\w\s\-,'"]+$/.test(e)&&e.length<200?e:""}function oe(a){if(a==null)return"";const e=String(a).trim();return/^-?(?:\d+(?:\.\d+)?)(px|em|rem|%|vh|vw|ex|ch|vmin|vmax|cm|mm|in|pt|pc)?$/.test(e)&&e.length<20?e:""}function F(a,e="mdv-live-announcements",t="polite"){let r=document.getElementById(e);r||(r=document.createElement("div"),r.id=e,r.setAttribute("aria-live",t),r.setAttribute("aria-atomic","true"),r.className="mdv-sr-only",r.style.cssText=`
      position: absolute;
      left: -10000px;
      width: 1px;
      height: 1px;
      overflow: hidden;
    `,document.body.appendChild(r)),r.textContent="",setTimeout(()=>{r.textContent=a},100)}function _e(a){return`
    <div class="mdv-search" role="search">
      <label for="mdv-search-input" class="mdv-sr-only">Search documentation</label>
      <input 
        id="mdv-search-input"
        type="text" 
        class="mdv-search-input" 
        placeholder="${a.placeholder||"Search documentation..."}"
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
  `}class ie{constructor(e,t,r){this.searchInput=null,this.searchResults=null,this.currentQuery="",this.options=e,this.searchIndex=new z,this.onDocumentSelect=t,this.onSearchQueryChange=r,this.debouncedSearch=B(o=>this.performSearch(o),300)}updateIndex(e,t){this.searchIndex.updateIndex(e,t)}attachToDOM(e){const t=e.querySelector(".mdv-search");t&&(this.searchInput=t.querySelector(".mdv-search-input"),this.searchResults=t.querySelector(".mdv-search-results"),this.searchInput&&(this.searchInput.addEventListener("input",this.handleSearchInput.bind(this)),this.searchInput.addEventListener("keydown",this.handleKeyDown.bind(this)),this.searchInput.addEventListener("focus",this.handleFocus.bind(this)),this.searchInput.addEventListener("blur",this.handleBlur.bind(this))),this.searchResults&&(this.searchResults.style.display="none",this.updateAriaExpanded(!1)))}handleSearchInput(e){const r=e.target.value.trim();if(this.currentQuery=r,this.onSearchQueryChange&&this.onSearchQueryChange(r),r.length===0){this.hideResults();return}r.length>=2&&this.debouncedSearch(r)}handleKeyDown(e){var o;if(!this.searchResults)return;const t=this.searchResults.querySelectorAll(".mdv-search-result"),r=this.searchResults.querySelector(".mdv-search-result.active");switch(e.key){case"ArrowDown":e.preventDefault(),this.navigateResults(t,r,1);break;case"ArrowUp":e.preventDefault(),this.navigateResults(t,r,-1);break;case"Enter":e.preventDefault(),r?this.selectResult(r):t.length>0&&this.selectResult(t[0]);break;case"Escape":this.hideResults(),(o=this.searchInput)==null||o.blur();break}}handleFocus(){this.currentQuery.length>=2&&this.performSearch(this.currentQuery)}handleBlur(){setTimeout(()=>{this.hideResults()},150)}navigateResults(e,t,r){if(e.length===0)return;let o=0;t?o=Array.from(e).indexOf(t)+r:r===-1&&(o=e.length-1),o<0&&(o=e.length-1),o>=e.length&&(o=0),this.updateActiveResult(o),e[o].scrollIntoView({block:"nearest"})}selectResult(e){const t=e.getAttribute("data-doc-id");if(t&&this.onDocumentSelect){const r=this.findDocumentById(t);r&&(this.onDocumentSelect(r),this.hideResults(),this.searchInput&&(this.searchInput.value="",this.currentQuery=""))}}findDocumentById(e){return{id:e,title:e}}performSearch(e){if(!this.searchResults)return;const t=this.searchIndex.search(e,{searchInTags:this.options.searchInTags,fuzzySearch:this.options.fuzzySearch,caseSensitive:this.options.caseSensitive,maxResults:this.options.maxResults||10});this.renderResults(t,e)}renderResults(e,t){if(!this.searchResults)return;if(e.length===0){this.searchResults.innerHTML=`
        <div class="mdv-search-no-results" role="status" aria-live="polite">
          No results found for "${this.escapeHtml(t)}"
        </div>
      `,this.showResults(),this.announceResults(0,t);return}const r=e.map((o,i)=>{const n=this.highlightQuery(o.title,t),s=o.description?this.highlightQuery(o.description,t):"",d=o.tags?o.tags.map(l=>`<span class="mdv-search-tag">${this.escapeHtml(l)}</span>`).join(""):"";return`
        <div 
          class="mdv-search-result ${i===0?"active":""}" 
          data-doc-id="${this.escapeHtml(o.id)}"
          role="option"
          aria-selected="${i===0?"true":"false"}"
          id="mdv-search-option-${i}"
        >
          <div class="mdv-search-result-title">${n}</div>
          ${s?`<div class="mdv-search-result-description">${s}</div>`:""}
          ${d?`<div class="mdv-search-result-tags">${d}</div>`:""}
          ${o.category?`<div class="mdv-search-result-category">${this.escapeHtml(o.category)}</div>`:""}
        </div>
      `}).join("");this.searchResults.innerHTML=r,this.searchInput&&e.length>0&&this.searchInput.setAttribute("aria-activedescendant","mdv-search-option-0"),this.searchResults.querySelectorAll(".mdv-search-result").forEach((o,i)=>{o.addEventListener("click",()=>this.selectResult(o)),o.addEventListener("mouseenter",()=>{this.updateActiveResult(i)})}),this.showResults(),this.announceResults(e.length,t)}highlightQuery(e,t){if(!t)return this.escapeHtml(e);const r=this.options.caseSensitive===!0?"g":"gi",o=new RegExp(`(${this.escapeRegex(t)})`,r);return this.escapeHtml(e).replace(o,"<mark>$1</mark>")}showResults(){this.searchResults&&(this.searchResults.style.display="block",this.updateAriaExpanded(!0))}hideResults(){this.searchResults&&(this.searchResults.style.display="none",this.updateAriaExpanded(!1),this.searchInput&&this.searchInput.removeAttribute("aria-activedescendant"))}updateAriaExpanded(e){this.searchInput&&this.searchInput.setAttribute("aria-expanded",e.toString())}updateActiveResult(e){if(!this.searchResults)return;this.searchResults.querySelectorAll(".mdv-search-result").forEach((r,o)=>{r.classList.toggle("active",o===e),r.setAttribute("aria-selected",(o===e).toString())}),this.searchInput&&this.searchInput.setAttribute("aria-activedescendant",`mdv-search-option-${e}`)}announceResults(e,t){const r=e===0?`No results found for "${t}"`:`${e} result${e===1?"":"s"} found for "${t}"`;F(r,"mdv-search-live")}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}escapeRegex(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}clearSearch(){this.searchInput&&(this.searchInput.value=""),this.currentQuery="",this.hideResults()}setDocuments(e){this.findDocumentById=t=>e.find(r=>r.id===t)||null}destroy(){this.searchInput&&(this.searchInput.removeEventListener("input",this.handleSearchInput.bind(this)),this.searchInput.removeEventListener("keydown",this.handleKeyDown.bind(this)),this.searchInput.removeEventListener("focus",this.handleFocus.bind(this)),this.searchInput.removeEventListener("blur",this.handleBlur.bind(this)))}}var v=(a=>(a.INVALID_CONFIG="INVALID_CONFIG",a.CONTAINER_NOT_FOUND="CONTAINER_NOT_FOUND",a.INVALID_SOURCE="INVALID_SOURCE",a.DOCUMENT_NOT_FOUND="DOCUMENT_NOT_FOUND",a.DOCUMENT_LOAD_FAILED="DOCUMENT_LOAD_FAILED",a.DOCUMENT_PARSE_FAILED="DOCUMENT_PARSE_FAILED",a.NETWORK_ERROR="NETWORK_ERROR",a.NETWORK_TIMEOUT="NETWORK_TIMEOUT",a.UNAUTHORIZED_ACCESS="UNAUTHORIZED_ACCESS",a.RATE_LIMITED="RATE_LIMITED",a.FILE_NOT_FOUND="FILE_NOT_FOUND",a.FILE_READ_ERROR="FILE_READ_ERROR",a.PERMISSION_DENIED="PERMISSION_DENIED",a.GITHUB_API_ERROR="GITHUB_API_ERROR",a.GITHUB_RATE_LIMIT="GITHUB_RATE_LIMIT",a.GITHUB_NOT_FOUND="GITHUB_NOT_FOUND",a.SEARCH_FAILED="SEARCH_FAILED",a.SEARCH_TIMEOUT="SEARCH_TIMEOUT",a.MARKDOWN_PARSE_ERROR="MARKDOWN_PARSE_ERROR",a.SYNTAX_HIGHLIGHT_ERROR="SYNTAX_HIGHLIGHT_ERROR",a.THEME_LOAD_ERROR="THEME_LOAD_ERROR",a.INVALID_THEME="INVALID_THEME",a.UNKNOWN_ERROR="UNKNOWN_ERROR",a.OPERATION_CANCELLED="OPERATION_CANCELLED",a.MISSING_DEPENDENCY="MISSING_DEPENDENCY",a))(v||{}),b=(a=>(a.LOW="low",a.MEDIUM="medium",a.HIGH="high",a.CRITICAL="critical",a))(b||{});class m extends Error{constructor(e,t,r,o="medium",i=!1,n={}){super(t),this.name="MarkdownDocsError",this.code=e,this.severity=o,this.userMessage=r,this.isRetryable=i,this.context={timestamp:new Date,userAgent:typeof navigator<"u"?navigator.userAgent:void 0,url:typeof window<"u"&&window.location?window.location.href:void 0,stackTrace:this.stack,...n},Object.setPrototypeOf(this,m.prototype)}toJSON(){return{name:this.name,code:this.code,message:this.message,userMessage:this.userMessage,severity:this.severity,isRetryable:this.isRetryable,context:this.context}}}class je extends m{constructor(e,t,r){super("INVALID_CONFIG",e,t,"high",!1,r),this.name="ConfigurationError"}}class qe extends m{constructor(e,t,r,o=!0,i){super(e,t,r,"medium",o,i),this.name="NetworkError"}}class ne extends m{constructor(e,t,r,o=!1,i){super(e,t,r,"medium",o,i),this.name="DocumentError"}}class Ge extends m{constructor(e,t,r,o=!1,i){super(e,t,r,"medium",o,i),this.name="GitHubError"}}const w={containerNotFound(a){return new je(`Container element not found: ${a}`,"Unable to find the container element. Please check your configuration.",{operation:"initialization",additionalData:{selector:a}})},documentNotFound(a){return new ne("DOCUMENT_NOT_FOUND",`Document not found: ${a}`,"The requested document could not be found.",!1,{operation:"loadDocument",documentId:a})},networkError(a,e,t){const r=e?`Network request failed: ${e} ${t}`:"Network request failed";return new qe("NETWORK_ERROR",r,"Unable to load content due to a network error. Please check your connection and try again.",!0,{operation:"networkRequest",additionalData:{url:a,status:e,statusText:t}})},githubApiError(a,e,t){const r=e===404?"GITHUB_NOT_FOUND":e===403?"GITHUB_RATE_LIMIT":"GITHUB_API_ERROR",o=e===404?"The requested GitHub file was not found.":e===403?"GitHub API rate limit reached. Please try again later.":"Unable to load content from GitHub. Please try again later.";return new Ge(r,`GitHub API error: ${t}`,o,e===403,{operation:"githubRequest",additionalData:{path:a,status:e,responseMessage:t}})},parseError(a,e){return new ne("MARKDOWN_PARSE_ERROR","Failed to parse markdown content","Unable to render the document content. The document may contain invalid formatting.",!1,{operation:"parseMarkdown",originalError:e,additionalData:{contentLength:a.length}})}},U={maxAttempts:3,baseDelay:1e3,maxDelay:1e4,exponentialBackoff:!0,retryableErrorCodes:["NETWORK_ERROR","NETWORK_TIMEOUT","RATE_LIMITED","GITHUB_RATE_LIMIT"]};async function ae(a,e={}){const t={...U,...e};let r;for(let o=1;o<=t.maxAttempts;o++)try{return await a()}catch(i){if(r=i,o===t.maxAttempts)break;if(i instanceof m){if(!i.isRetryable||!t.retryableErrorCodes.includes(i.code))break}else break;const n=t.exponentialBackoff?Math.min(t.baseDelay*Math.pow(2,o-1),t.maxDelay):t.baseDelay;await new Promise(s=>setTimeout(s,n))}throw r}class W{constructor(e){this.errorHandler=e}async execute(e,t,r={}){try{return await e()}catch(o){const i=this.wrapError(o,r);return this.errorHandler&&this.errorHandler(i),t()}}wrapError(e,t){return e instanceof m?e:e instanceof Error?new m("UNKNOWN_ERROR",e.message,"An unexpected error occurred. Please try again.","medium",!1,{...t,originalError:e}):new m("UNKNOWN_ERROR","Unknown error occurred","An unexpected error occurred. Please try again.","medium",!1,{...t,originalError:e})}}class V{constructor(e=!1){this.isDevelopment=e}log(e){const t=this.getLogMethod(e.severity);this.isDevelopment?t("MarkdownDocsViewer Error:",{code:e.code,message:e.message,userMessage:e.userMessage,severity:e.severity,context:e.context,stack:e.stack}):t(`[${e.code}] ${e.userMessage}`)}debug(e,t){this.isDevelopment&&console.debug("MarkdownDocsViewer Debug:",e,t)}warn(e,t){console.warn("MarkdownDocsViewer Warning:",e,t)}error(e,t){console.error("MarkdownDocsViewer Error:",e,t)}getLogMethod(e){switch(e){case"low":return console.info;case"medium":return console.warn;case"high":case"critical":return console.error;default:return console.log}}}class We{constructor(e,t={},r,o=50){this.loadingPromises=new Map,this.source=e,this.retryConfig={...U,...t},this.logger=r||new V,this.errorBoundary=new W(i=>this.logger.log(i)),this.cache=new te(o,`mdv-cache-${this.source.type}`),this.performanceMonitor=new re,this.memoryManager=D.getInstance(),this.memoryManager.addCleanupTask(()=>{this.clearOldCacheEntries()})}async loadAll(){return this.errorBoundary.execute(async()=>(this.logger.debug("Loading all documents",{sourceType:this.source.type}),this.validateSource(),this.source.documents),()=>(this.logger.warn("Failed to load documents, returning empty array"),[]),{operation:"loadAll"})}async loadDocument(e){return this.errorBoundary.execute(async()=>{const t=this.performanceMonitor.startTiming("document-load");try{if(this.cache.has(e.id)){this.logger.debug("Loading document from cache",{documentId:e.id});const i=this.cache.get(e.id);return t(),i}if(this.loadingPromises.has(e.id)){this.logger.debug("Document already loading, waiting for existing promise",{documentId:e.id});const i=await this.loadingPromises.get(e.id);return t(),i}this.logger.debug("Loading document",{documentId:e.id,hasContent:!!e.content,hasFile:!!e.file});let r="";const o=(async()=>{if(e.content)r=e.content;else if(e.file)r=await ae(()=>this.loadFromSource(e.file),this.retryConfig);else throw w.documentNotFound(e.id);return this.cache.set(e.id,r),this.logger.debug("Document loaded successfully",{documentId:e.id,contentLength:r.length,cacheSize:this.cache.size()}),this.memoryManager.checkMemoryUsage(),r})();this.loadingPromises.set(e.id,o);try{return r=await o,r}finally{this.loadingPromises.delete(e.id),t()}}catch(r){throw t(),r}},()=>(this.logger.warn("Failed to load document, returning empty content",{documentId:e.id}),""),{operation:"loadDocument",documentId:e.id})}validateSource(){if(!this.source)throw new m(v.INVALID_SOURCE,"Document source is not defined","Invalid document source configuration.",b.HIGH,!1);if(!this.source.documents||this.source.documents.length===0)throw new m(v.INVALID_SOURCE,"No documents defined in source","No documents are configured to load.",b.MEDIUM,!1);switch(this.source.type){case"local":break;case"url":this.source.baseUrl||this.logger.warn("URL source without baseUrl may cause issues with relative paths");break;case"github":break;case"content":{const e=this.source.documents.filter(t=>!t.content);e.length>0&&this.logger.warn("Content source has documents without content",{missingContentIds:e.map(t=>t.id)});break}default:throw new m(v.INVALID_SOURCE,`Unknown source type: ${this.source.type}`,"Unsupported document source type.",b.HIGH,!1)}}async loadFromSource(e){switch(this.logger.debug("Loading from source",{path:e,sourceType:this.source.type}),this.source.type){case"local":return this.loadLocal(e);case"url":return this.loadFromUrl(e);case"github":return this.loadFromGithub(e);case"content":throw new m(v.DOCUMENT_LOAD_FAILED,"Content source should not load from path","Internal error: Content source attempted to load from file path.",b.MEDIUM,!1);default:throw new m(v.INVALID_SOURCE,`Unknown source type: ${this.source.type}`,"Unsupported document source type.",b.HIGH,!1)}}async loadLocal(e){const t=this.source.basePath?`${this.source.basePath}/${e}`:e;this.logger.debug("Loading local file",{path:e,fullPath:t});try{const r=await fetch(t);if(!r.ok)throw r.status===404?w.documentNotFound(e):w.networkError(t,r.status,r.statusText);const o=await r.text();return this.logger.debug("Local file loaded successfully",{path:e,contentLength:o.length}),o}catch(r){throw r instanceof m?r:r instanceof TypeError&&r.message.includes("fetch")?w.networkError(t):new m(v.FILE_READ_ERROR,`Failed to load local file ${e}: ${r}`,"Unable to load the requested file. Please check if the file exists and is accessible.",b.MEDIUM,!0,{operation:"loadLocal",originalError:r,additionalData:{path:e,fullPath:t}})}}async loadFromUrl(e){const t=this.source.baseUrl?`${this.source.baseUrl}/${e}`:e;this.logger.debug("Loading from URL",{path:e,url:t});try{const r=await fetch(t,{headers:this.source.headers||{}});if(!r.ok)throw r.status===404?w.documentNotFound(e):r.status===403||r.status===401?new m(v.UNAUTHORIZED_ACCESS,`Unauthorized access to ${t}: ${r.statusText}`,"Access denied. Please check your credentials or permissions.",b.HIGH,!1,{operation:"loadFromUrl",additionalData:{url:t,status:r.status}}):r.status===429?new m(v.RATE_LIMITED,`Rate limited when accessing ${t}`,"Too many requests. Please wait and try again.",b.MEDIUM,!0,{operation:"loadFromUrl",additionalData:{url:t,status:r.status}}):w.networkError(t,r.status,r.statusText);const o=await r.text();return this.logger.debug("URL content loaded successfully",{url:t,contentLength:o.length}),o}catch(r){throw r instanceof m?r:r instanceof TypeError&&r.message.includes("fetch")?w.networkError(t):new m(v.NETWORK_ERROR,`Failed to load from URL ${t}: ${r}`,"Unable to load content from the specified URL. Please check your connection and try again.",b.MEDIUM,!0,{operation:"loadFromUrl",originalError:r,additionalData:{path:e,url:t}})}}async loadFromGithub(e){const t=e.split("/");if(t.length<3)throw new m(v.INVALID_CONFIG,"Invalid GitHub path format. Expected: owner/repo/branch/path/to/file","Invalid GitHub file path format.",b.HIGH,!1,{operation:"loadFromGithub",additionalData:{path:e,expectedFormat:"owner/repo/branch/path/to/file"}});const[r,o,i="main",...n]=t,s=`https://api.github.com/repos/${r}/${o}/contents/${n.join("/")}?ref=${i}`;this.logger.debug("Loading from GitHub",{path:e,owner:r,repo:o,branch:i,filePath:n.join("/"),apiUrl:s});try{const d=await fetch(s,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"MarkdownDocsViewer/1.0",...this.source.headers||{}}});if(!d.ok){if(d.status===404)throw w.githubApiError(e,404,"File not found");if(d.status===403){const c=d.headers.get("X-RateLimit-Reset");let u="GitHub API rate limit exceeded";if(c){const f=new Date(parseInt(c)*1e3);u+=`. Rate limit resets at ${f.toISOString()}`}throw w.githubApiError(e,403,u)}const y=await d.text().catch(()=>"Unknown error");throw w.githubApiError(e,d.status,y)}const l=await d.json();if(Array.isArray(l))throw new m(v.GITHUB_API_ERROR,"GitHub path points to a directory, not a file","The specified GitHub path is a directory. Please specify a file path.",b.MEDIUM,!1,{operation:"loadFromGithub",additionalData:{path:e,responseType:"directory"}});if(!l.content)throw new m(v.GITHUB_API_ERROR,"No content found in GitHub response","The requested GitHub file appears to be empty or inaccessible.",b.MEDIUM,!1,{operation:"loadFromGithub",additionalData:{path:e,data:l}});const p=atob(l.content.replace(/\s/g,""));return this.logger.debug("GitHub content loaded successfully",{path:e,contentLength:p.length,sha:l.sha}),p}catch(d){throw d instanceof m?d:d instanceof TypeError&&d.message.includes("fetch")?w.networkError(s):new m(v.GITHUB_API_ERROR,`Failed to load from GitHub ${e}: ${d}`,"Unable to load content from GitHub. Please check the file path and try again.",b.MEDIUM,!0,{operation:"loadFromGithub",originalError:d,additionalData:{path:e,apiUrl:s,owner:r,repo:o,branch:i}})}}clearCache(){this.logger.debug("Clearing document cache",{cacheSize:this.cache.size()}),this.cache.clear()}getCacheSize(){return this.cache.size()}isCached(e){return this.cache.has(e)}getCacheStats(){return{size:this.cache.size(),capacity:this.cache.getCapacity(),memoryUsage:this.cache.getMemoryUsage()}}getPerformanceMetrics(){return this.performanceMonitor.getAllMetrics()}clearOldCacheEntries(){this.logger.debug("Memory cleanup triggered, cache will evict LRU entries as needed")}updateRetryConfig(e){this.retryConfig={...this.retryConfig,...e},this.logger.debug("Updated retry configuration",{retryConfig:this.retryConfig})}destroy(){this.cache.clear(),this.loadingPromises.clear(),this.performanceMonitor.cleanup(),this.logger.debug("DocumentLoader destroyed and cleaned up")}async preloadDocuments(e){const t=this.performanceMonitor.startTiming("preload-documents");try{const r=this.source.documents.filter(o=>e.includes(o.id)&&!this.cache.has(o.id));if(r.length>0){this.logger.debug("Preloading documents",{count:r.length,docIds:e});const o=3;for(let i=0;i<r.length;i+=o){const n=r.slice(i,i+o);await Promise.allSettled(n.map(s=>this.loadDocument(s)))}}}finally{t()}}}class Ve{constructor(e,t){this.currentRoute="",this.boundHashChangeHandler=null,this.mode=e,this.onRouteChange=t,e==="hash"&&(this.boundHashChangeHandler=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.boundHashChangeHandler),this.handleHashChange())}handleHashChange(){const e=window.location.hash.slice(1);e&&e!==this.currentRoute&&(this.currentRoute=e,this.onRouteChange(e))}setRoute(e){this.currentRoute=e,this.mode==="hash"&&(window.location.hash=e)}getCurrentRoute(){return this.mode==="hash"?window.location.hash.slice(1)||null:this.currentRoute||null}destroy(){this.mode==="hash"&&this.boundHashChangeHandler&&(window.removeEventListener("hashchange",this.boundHashChangeHandler),this.boundHashChangeHandler=null)}}const g={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400},H={sm:540,md:720,lg:960,xl:1140,xxl:1320},K={minimum:44,comfortable:48,large:56},C={baseFontSize:{xs:14,sm:15,md:16,lg:16,xl:16,xxl:16},lineHeight:{tight:1.25,normal:1.5,relaxed:1.75},headings:{h1:{xs:1.75,sm:2,md:2.5,lg:3,xl:3.5,xxl:4},h2:{xs:1.5,sm:1.75,md:2,lg:2.25,xl:2.5,xxl:2.75},h3:{xs:1.25,sm:1.5,md:1.75,lg:1.875,xl:2,xxl:2.125},h4:{xs:1.125,sm:1.25,md:1.375,lg:1.5,xl:1.625,xxl:1.75},h5:{xs:1,sm:1.125,md:1.25,lg:1.375,xl:1.5,xxl:1.625},h6:{xs:.875,sm:1,md:1.125,lg:1.25,xl:1.375,xxl:1.5}}};function Ke(){return`
    :root {
      /* Breakpoint values */
      --mdv-breakpoint-xs: ${g.xs}px;
      --mdv-breakpoint-sm: ${g.sm}px;
      --mdv-breakpoint-md: ${g.md}px;
      --mdv-breakpoint-lg: ${g.lg}px;
      --mdv-breakpoint-xl: ${g.xl}px;
      --mdv-breakpoint-xxl: ${g.xxl}px;
      
      /* Touch targets */
      --mdv-touch-target-min: ${K.minimum}px;
      --mdv-touch-target-comfortable: ${K.comfortable}px;
      --mdv-touch-target-large: ${K.large}px;
      
      /* Container max-widths */
      --mdv-container-sm: ${H.sm}px;
      --mdv-container-md: ${H.md}px;
      --mdv-container-lg: ${H.lg}px;
      --mdv-container-xl: ${H.xl}px;
      --mdv-container-xxl: ${H.xxl}px;
      
      /* Base typography */
      --mdv-font-size-base: ${C.baseFontSize.md}px;
      --mdv-line-height-base: ${C.lineHeight.normal};
      
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
  `}function Ye(){return`
    /* Mobile First - Base styles (xs: 0px and up) */
    .mdv-container {
      width: 100%;
      padding-right: var(--mdv-mobile-padding);
      padding-left: var(--mdv-mobile-padding);
      margin-right: auto;
      margin-left: auto;
    }
    
    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: ${g.sm}px) {
      .mdv-container {
        max-width: var(--mdv-container-sm);
      }
      
      :root {
        --mdv-font-size-base: ${C.baseFontSize.sm}px;
      }
      
      .mdv-mobile-toggle {
        display: none;
      }
    }
    
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: ${g.md}px) {
      .mdv-container {
        max-width: var(--mdv-container-md);
      }
      
      :root {
        --mdv-font-size-base: ${C.baseFontSize.md}px;
      }
      
      .mdv-sidebar {
        position: relative;
        transform: none;
        box-shadow: none;
        height: auto;
      }
      
      .mdv-content {
        margin-left: var(--mdv-nav-width);
      }
    }
    
    /* Large devices (desktops, 992px and up) */
    @media (min-width: ${g.lg}px) {
      .mdv-container {
        max-width: var(--mdv-container-lg);
      }
    }
    
    /* Extra large devices (large desktops, 1200px and up) */
    @media (min-width: ${g.xl}px) {
      .mdv-container {
        max-width: var(--mdv-container-xl);
      }
    }
    
    /* Extra extra large devices (larger desktops, 1400px and up) */
    @media (min-width: ${g.xxl}px) {
      .mdv-container {
        max-width: var(--mdv-container-xxl);
      }
    }
  `}function Je(){const a=Object.entries(C.headings).map(([e,t])=>{const r=t.xs;let o=`
    ${e} {
      font-size: ${r}rem;
      line-height: ${C.lineHeight.tight};
      margin-bottom: var(--mdv-spacing-md);
    }`;return Object.entries(t).forEach(([i,n])=>{i!=="xs"&&g[i]&&(o+=`
    @media (min-width: ${g[i]}px) {
      ${e} {
        font-size: ${n}rem;
      }
    }`)}),o}).join(`
`);return`
    /* Responsive Typography */
    body {
      font-size: var(--mdv-font-size-base);
      line-height: var(--mdv-line-height-base);
    }
    
    /* Responsive font sizes by breakpoint */
    @media (max-width: ${g.sm-1}px) {
      :root {
        --mdv-font-size-base: ${C.baseFontSize.xs}px;
      }
    }
    
    ${a}
    
    /* Responsive paragraph spacing */
    p {
      margin-bottom: var(--mdv-spacing-md);
      line-height: var(--mdv-line-height-base);
    }
    
    @media (max-width: ${g.sm-1}px) {
      p {
        line-height: ${C.lineHeight.relaxed};
      }
    }
  `}function Xe(){return`
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
  `}function Qe(){return`
    /* Mobile Layout Optimizations */
    
    /* Mobile navigation */
    @media (max-width: ${g.md-1}px) {
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
    @media (min-width: ${g.md}px) and (max-width: ${g.lg-1}px) {
      .mdv-sidebar {
        width: 240px;
      }
      
      .mdv-content {
        margin-left: 240px;
      }
    }
    
    /* Mobile content optimizations */
    @media (max-width: ${g.sm-1}px) {
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
  `}function Ze(a){const e=Ke(),t=Ye(),r=Je(),o=Xe(),i=Qe();return`
    ${e}
    ${t}
    ${r}
    ${o}
    ${i}
  `}function _(){return typeof window>"u"?!1:window.innerWidth<g.md}function se(){if(typeof window>"u")return"md";const a=window.innerWidth;return a>=g.xxl?"xxl":a>=g.xl?"xl":a>=g.lg?"lg":a>=g.md?"md":a>=g.sm?"sm":"xs"}function et(){if(typeof document>"u")return;let a=document.querySelector('meta[name="viewport"]');a||(a=document.createElement("meta"),a.name="viewport",document.head.appendChild(a)),a.content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover, user-scalable=yes, maximum-scale=5"}function L(a){return a.replace(/-(light|dark)$/,"")}function j(a){return a.endsWith("-dark")?"dark":"light"}function de(){const a=[];return Object.keys(E).forEach(e=>{const t=E[e];a.push(t.light),a.push(t.dark)}),a}function tt(){return Object.keys(E)}class ce{constructor(e={}){this.container=null,this.descriptionEnhancementPromise=null,this.options={enablePersistence:!0,storageKey:"mdv-theme",...e},this.themes=new Map,this.initializeBuiltInThemesSync(),this.currentTheme=E.default.light,this.applyCSSVariables(E.default.light);const t=this.getSavedThemeName(),r=this.resolveInitialTheme(t);r&&r!==this.currentTheme&&(this.currentTheme=r,this.applyCSSVariables(r),this.options.onThemeChange&&setTimeout(()=>{this.options.onThemeChange(r)},0)),this.descriptionEnhancementPromise=this.enhanceThemeDescriptions()}initializeBuiltInThemesSync(){const e=de();for(const t of e){const r=L(t.name),o=j(t.name),i=`${r} ${o} theme`;this.registerTheme({...t,description:i,author:"MarkdownDocsViewer",version:"1.0.0"})}}async enhanceThemeDescriptions(){const e=this.getAvailableThemes();for(const t of e){const r=L(t.name),o=j(t.name);try{const i=await this.getThemeDescription(r,o),n={...t,description:i};this.registerTheme(n)}catch(i){console.warn(`Failed to enhance description for theme ${t.name}:`,i)}}}async initializeBuiltInThemes(){const e=de();for(const t of e){const r=L(t.name),o=j(t.name),i=await this.getThemeDescription(r,o);this.registerTheme({...t,description:i,author:"MarkdownDocsViewer",version:"1.0.0"})}}resolveInitialTheme(e){if(!e)return E.default.light;const t=this.themes.get(e);if(t)return t;const o={default:"default-light",dark:"default-dark",light:"default-light",github:"github-light",material:"material-light",dracula:"default-dark","solarized-light":"default-light","solarized-dark":"default-dark","high-contrast":"default-light"}[e];if(o){const i=this.themes.get(o);if(i)return this.saveThemeName(o),i}if(!e.includes("-light")&&!e.includes("-dark")){const i=this.themes.get(`${e}-light`);if(i)return this.saveThemeName(`${e}-light`),i;const n=this.themes.get(`${e}-dark`);if(n)return this.saveThemeName(`${e}-dark`),n}return console.warn(`Could not resolve saved theme "${e}", falling back to default`),E.default.light}async getThemeDescription(e,t){var n;const r=await Promise.resolve().then(()=>bt).then(s=>s.default);return((n={...{default:{light:"Clean and modern light theme",dark:"Clean and modern dark theme"},github:{light:"GitHub-inspired light theme",dark:"GitHub-inspired dark theme"}},...r}[e])==null?void 0:n[t])||`${e} ${t} theme`}registerTheme(e){this.themes.set(e.name,e)}setTheme(e){const t=this.themes.get(e);return t?(this.currentTheme=t,this.options.enablePersistence&&this.saveThemeName(e),this.applyCSSVariables(t),this.options.onThemeChange&&this.options.onThemeChange(t),t):(console.warn(`Theme "${e}" not found. Available themes:`,Array.from(this.themes.keys())),null)}getCurrentTheme(){return this.currentTheme}getAvailableThemes(){return Array.from(this.themes.values())}async waitForDescriptionEnhancement(){this.descriptionEnhancementPromise&&await this.descriptionEnhancementPromise}getTheme(e){return this.themes.get(e)}createCustomTheme(e,t){const r=this.currentTheme,o={name:e,colors:this.mergeObjects(r.colors,t.colors||{}),fonts:this.mergeObjects(r.fonts,t.fonts||{}),spacing:this.mergeObjects(r.spacing,t.spacing||{}),borderRadius:t.borderRadius||r.borderRadius,description:e.includes("dark")?`Custom dark theme based on ${L(r.name)}`:`Custom light theme based on ${L(r.name)}`,author:"User",version:"1.0.0"};return this.registerTheme(o),o}getAvailableBaseThemes(){return tt()}getCurrentThemeInfo(){const e=this.getCurrentTheme();return{baseName:L(e.name),mode:j(e.name)}}mergeObjects(e,t){const r=Object.create(null);for(const o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&o!=="__proto__"&&o!=="constructor"&&o!=="prototype"&&(r[o]=t[o]);return r}applyCSSVariables(e){const t=document.documentElement;if(!t||!t.style||typeof t.style.setProperty!="function"){console.warn("Cannot apply CSS variables: document.documentElement.style not available");return}Object.entries(e.colors).forEach(([r,o])=>{const i=`--mdv-color-${this.kebabCase(r)}`;t.style.setProperty(i,o);const n=this.hexToRgb(o);n&&t.style.setProperty(`${i}-rgb`,`${n.r}, ${n.g}, ${n.b}`)}),Object.entries(e.fonts).forEach(([r,o])=>{t.style.setProperty(`--mdv-font-${this.kebabCase(r)}`,o)}),t.style.setProperty("--mdv-spacing-unit",`${e.spacing.unit}px`),t.style.setProperty("--mdv-container-max-width",e.spacing.containerMaxWidth),t.style.setProperty("--mdv-sidebar-width",e.spacing.sidebarWidth),t.style.setProperty("--mdv-border-radius",e.borderRadius),t.setAttribute("data-mdv-theme",e.name)}getContrastRatio(e,t){const r=this.getLuminance(e),o=this.getLuminance(t),i=Math.max(r,o),n=Math.min(r,o);return(i+.05)/(n+.05)}isAccessible(e,t,r="AA"){const o=this.getContrastRatio(e,t);return r==="AAA"?o>=7:o>=4.5}getLuminance(e){const t=this.hexToRgb(e);if(!t)return 0;const r=t.r/255,o=t.g/255,i=t.b/255,n=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),s=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),d=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4);return .2126*n+.7152*s+.0722*d}hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}kebabCase(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}getSavedThemeName(){if(!this.options.enablePersistence||typeof localStorage>"u")return null;try{return localStorage.getItem(this.options.storageKey||"mdv-theme")}catch{return null}}saveThemeName(e){if(!(!this.options.enablePersistence||typeof localStorage>"u"))try{localStorage.setItem(this.options.storageKey||"mdv-theme",e)}catch(t){console.warn("Failed to save theme preference:",t)}}exportTheme(e){return JSON.stringify(e,null,2)}importTheme(e){try{const t=JSON.parse(e),r=this.createSafeTheme(t);return this.validateTheme(r),this.registerTheme(r),r}catch(t){return console.error("Failed to import theme:",t),null}}createSafeTheme(e){const t=Object.create(null),r=["name","colors","fonts","spacing","borderRadius","description","author","version"];for(const o of r)o in e&&e[o]!==void 0&&(typeof e[o]=="object"&&e[o]!==null?t[o]=this.deepCopyObject(e[o]):t[o]=e[o]);return t}deepCopyObject(e){if(e===null||typeof e!="object")return e;const t=Object.create(null);for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(r==="__proto__"||r==="constructor"||r==="prototype"||(typeof e[r]=="object"&&e[r]!==null?t[r]=this.deepCopyObject(e[r]):t[r]=e[r]));return t}validateTheme(e){if(!e.name||typeof e.name!="string")throw new Error("Theme must have a name");if(!e.colors||typeof e.colors!="object")throw new Error("Theme must have colors");const t=["primary","secondary","background","surface","text","textPrimary","textSecondary","textLight","border","code","codeBackground","link","linkHover","error","warning","success"];for(const r of t)if(!e.colors[r])throw new Error(`Theme missing required color: ${r}`)}}function R(a){return a.replace(/-(light|dark)$/,"")}function rt(a){return a.endsWith("-dark")?"dark":"light"}class le{constructor(e,t={}){this.container=null,this.isOpen=!1,this.colorInputs=[{key:"primary",label:"Primary",description:"Main accent color",category:"primary"},{key:"secondary",label:"Secondary",description:"Secondary accent color",category:"primary"},{key:"background",label:"Background",description:"Main background color",category:"background"},{key:"surface",label:"Surface",description:"Card and panel background",category:"background"},{key:"text",label:"Text",description:"Body text color",category:"text"},{key:"textPrimary",label:"Primary Text",description:"Primary text color",category:"text"},{key:"textSecondary",label:"Secondary Text",description:"Secondary text color",category:"text"},{key:"textLight",label:"Light Text",description:"Light text color",category:"text"},{key:"border",label:"Border",description:"Border color",category:"background"},{key:"code",label:"Code Text",description:"Inline code text color",category:"text"},{key:"codeBackground",label:"Code Background",description:"Code block background",category:"background"},{key:"link",label:"Link",description:"Link color",category:"primary"},{key:"linkHover",label:"Link Hover",description:"Link hover color",category:"primary"},{key:"error",label:"Error",description:"Error state color",category:"semantic"},{key:"warning",label:"Warning",description:"Warning state color",category:"semantic"},{key:"success",label:"Success",description:"Success state color",category:"semantic"}],this.themeManager=e,this.options={allowExport:!0,allowImport:!0,showPreview:!0,showAccessibilityCheck:!0,allowModeSelection:!0,...t},this.originalTheme=e.getCurrentTheme(),this.currentMode=t.defaultMode||rt(this.originalTheme.name),this.currentTheme=this.deepCloneTheme(this.originalTheme)}render(){return`
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
                  <input type="text" id="theme-name" value="${$(R(this.currentTheme.name))}" placeholder="Enter theme name">
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
                    <option value="${$(e)}" ${e===R(this.originalTheme.name)?"selected":""}>
                      ${$(e)}
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
                  <input type="text" id="border-radius" value="${$(oe(this.currentTheme.borderRadius))}" placeholder="e.g., 0.5rem">
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
    `}renderColorInputs(){return["primary","background","text","semantic"].map(t=>{const r=this.colorInputs.filter(o=>o.category===t);return`
        <div class="mdv-theme-builder-color-category">
          <h4>${t.charAt(0).toUpperCase()+t.slice(1)}</h4>
          ${r.map(o=>`
            <div class="mdv-theme-builder-field mdv-theme-builder-color-field">
              <label for="color-${o.key}">${o.label}</label>
              <div class="mdv-theme-builder-color-input">
                <input 
                  type="color" 
                  id="color-${o.key}" 
                  value="${$(M(this.currentTheme.colors[o.key]))}"
                  aria-label="${o.label} color"
                >
                <input 
                  type="text" 
                  id="color-text-${o.key}" 
                  value="${$(M(this.currentTheme.colors[o.key]))}"
                  placeholder="#000000"
                  aria-label="${o.label} color value"
                >
              </div>
              ${o.description?`<small>${o.description}</small>`:""}
            </div>
          `).join("")}
        </div>
      `}).join("")}renderFontInputs(){return[{key:"body",label:"Body Font",description:"Main text font family"},{key:"heading",label:"Heading Font",description:"Heading font family"},{key:"code",label:"Code Font",description:"Monospace font family"}].map(t=>`
      <div class="mdv-theme-builder-field">
        <label for="font-${t.key}">${t.label}</label>
        <input 
          type="text" 
          id="font-${t.key}" 
          value="${$(Ue(this.currentTheme.fonts[t.key]))}"
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
          value="${$(oe(this.currentTheme.spacing[t.key]))}"
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
    `}open(){this.isOpen=!0,this.updateDisplay()}close(){this.isOpen=!1,this.updateDisplay(),this.options.onClose&&this.options.onClose()}attachTo(e){this.container=e,this.setupEventListeners()}setupEventListeners(){if(!this.container)return;const e=this.container.querySelector(".mdv-theme-builder-close");e==null||e.addEventListener("click",()=>this.close());const t=this.container.querySelector(".mdv-theme-builder-overlay");t==null||t.addEventListener("click",c=>{c.target===t&&this.close()}),this.colorInputs.forEach(c=>{if(!this.container)return;const u=this.container.querySelector(`#color-${c.key}`),f=this.container.querySelector(`#color-text-${c.key}`);if(!u||!f){console.warn(`Color inputs not found for: ${c.key}`);return}u.addEventListener("input",k=>{const x=k.target.value;this.updateColor(c.key,x),f.value=x}),f.addEventListener("input",k=>{const x=k.target.value;this.isValidColor(x)&&(this.updateColor(c.key,x),u.value=x)})}),["body","heading","code"].forEach(c=>{if(!this.container)return;const u=this.container.querySelector(`#font-${c}`);if(!u){console.warn(`Font input not found: font-${c}`);return}u.addEventListener("input",f=>{this.updateFont(c,f.target.value)})}),["unit","containerMaxWidth","sidebarWidth"].forEach(c=>{if(!this.container)return;const u=this.container.querySelector(`#spacing-${c}`);if(!u){console.warn(`Spacing input not found: spacing-${c}`);return}u.addEventListener("input",f=>{const k=c==="unit"?parseInt(f.target.value):f.target.value;this.updateSpacing(c,k)})});const i=this.container.querySelector("#border-radius");i&&i.addEventListener("input",c=>{this.currentTheme.borderRadius=c.target.value,this.updatePreview()});const n=this.container.querySelector("#theme-name");n&&n.addEventListener("input",c=>{this.currentTheme.name=c.target.value}),this.options.allowModeSelection&&this.container.querySelectorAll('input[name="theme-mode"]').forEach(u=>{u.addEventListener("change",f=>{const k=f.target.value;this.switchMode(k)})});const s=this.container.querySelector("#base-theme");s&&s.addEventListener("change",c=>{this.loadBaseTheme(c.target.value)});const d=this.container.querySelector("#save-theme");d==null||d.addEventListener("click",()=>this.saveTheme());const l=this.container.querySelector("#reset-theme");l==null||l.addEventListener("click",()=>this.resetTheme());const p=this.container.querySelector("#export-theme");p==null||p.addEventListener("click",()=>this.exportTheme());const y=this.container.querySelector("#import-theme");y==null||y.addEventListener("click",()=>this.importTheme()),document.addEventListener("keydown",c=>{c.key==="Escape"&&this.isOpen&&this.close()})}updateColor(e,t){this.currentTheme.colors[e]=t,this.updatePreview(),this.updateAccessibilityCheck()}updateFont(e,t){this.currentTheme.fonts[e]=t,this.updatePreview()}updateSpacing(e,t){this.currentTheme.spacing[e]=t,this.updatePreview()}updatePreview(){if(!this.options.showPreview||!this.container)return;const e=this.container.querySelector("#theme-preview");e&&(e.innerHTML=this.renderPreview());const t=this.container.querySelector(".mdv-theme-builder-preview-content");t&&Object.entries(this.currentTheme.colors).forEach(([r,o])=>{t.style.setProperty(`--mdv-color-${this.kebabCase(r)}`,o)})}updateAccessibilityCheck(){var t;if(!this.options.showAccessibilityCheck||!this.container)return;const e=this.container.querySelector(".mdv-theme-builder-accessibility");e&&(e.innerHTML=((t=this.renderAccessibilityCheck().match(/<div class="mdv-theme-builder-accessibility">(.*?)<\/div>/s))==null?void 0:t[1])||"")}updateDisplay(){if(!this.container)return;const e=this.container.querySelector(".mdv-theme-builder-overlay");e&&(e.classList.toggle("open",this.isOpen),e.setAttribute("aria-hidden",(!this.isOpen).toString()))}switchMode(e){this.currentMode=e;const t=R(this.currentTheme.name);this.loadBaseTheme(t)}loadBaseTheme(e){var o,i;const t=`${e}-${this.currentMode}`,r=this.themeManager.getTheme(t);if(r){const n=(i=(o=this.container)==null?void 0:o.querySelector("#theme-name"))==null?void 0:i.value,s=n&&n!==R(this.currentTheme.name);this.currentTheme=this.deepCloneTheme(r),s&&(this.currentTheme.name=n),this.refreshInputs(),this.updatePreview(),this.updateAccessibilityCheck()}}refreshInputs(){if(!this.container)return;this.colorInputs.forEach(t=>{if(!this.container)return;const r=this.container.querySelector(`#color-${t.key}`),o=this.container.querySelector(`#color-text-${t.key}`);r&&(r.value=this.currentTheme.colors[t.key]),o&&(o.value=this.currentTheme.colors[t.key])}),[{selector:"#theme-name",value:this.currentTheme.name},{selector:"#border-radius",value:this.currentTheme.borderRadius},{selector:"#font-body",value:this.currentTheme.fonts.body},{selector:"#font-heading",value:this.currentTheme.fonts.heading},{selector:"#font-code",value:this.currentTheme.fonts.code},{selector:"#spacing-unit",value:this.currentTheme.spacing.unit.toString()},{selector:"#spacing-containerMaxWidth",value:this.currentTheme.spacing.containerMaxWidth},{selector:"#spacing-sidebarWidth",value:this.currentTheme.spacing.sidebarWidth}].forEach(({selector:t,value:r})=>{if(!this.container)return;const o=this.container.querySelector(t);o&&(o.value=r)})}saveTheme(){var i;const e=(i=this.container)==null?void 0:i.querySelector("#theme-name"),r=`${(e==null?void 0:e.value)||R(this.currentTheme.name)}-${this.currentMode}`,o=Q(R(this.originalTheme.name),this.currentMode,{...this.currentTheme,name:r});this.themeManager.registerTheme(o),this.options.onThemeCreate&&this.options.onThemeCreate(o),this.close()}resetTheme(){this.currentTheme=this.deepCloneTheme(this.originalTheme),this.refreshInputs(),this.updatePreview(),this.updateAccessibilityCheck()}exportTheme(){const e=this.themeManager.exportTheme(this.currentTheme),t=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download=`${this.currentTheme.name}.json`,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(r)}importTheme(){const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=t=>{var o;const r=(o=t.target.files)==null?void 0:o[0];if(r){const i=new FileReader;i.onload=n=>{var s;try{const d=(s=n.target)==null?void 0:s.result,l=this.themeManager.importTheme(d);l&&(this.currentTheme=this.deepCloneTheme(l),this.refreshInputs(),this.updatePreview(),this.updateAccessibilityCheck())}catch(d){console.error("Failed to import theme:",d)}},i.readAsText(r)}},e.click()}isValidColor(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)}kebabCase(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}deepCloneTheme(e){return typeof structuredClone<"u"?structuredClone(e):JSON.parse(JSON.stringify(e))}getStyles(){return`
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
    `}}function O(a){return a.replace(/-(light|dark)$/,"")}function A(a){return a.endsWith("-dark")?"dark":"light"}function ot(a){const e=O(a),r=A(a)==="light"?"dark":"light";return`${e}-${r}`}const he=768,it=100;class me{constructor(e,t={}){this.container=null,this.isOpen=!1,this.themeBuilder=null,this.focusTrapHandler=null,this.documentClickHandler=null,this.themeManager=e,this.options={position:"header",showPreview:!0,showDescription:!0,allowCustomThemes:!0,showDarkModeToggle:!0,darkModeTogglePosition:"inline",customThemeAccess:"everyone",...t}}render(){const e=this.themeManager.getCurrentTheme(),t=this.themeManager.getAvailableThemes(),r=O(e.name),o=A(e.name),i=this.groupThemesByBaseName(t);return`
      <div class="mdv-theme-switcher ${this.options.position==="floating"?"mdv-theme-switcher-floating":""}" role="region" aria-label="Theme selector">
        ${this.options.showDarkModeToggle&&this.options.darkModeTogglePosition==="separate"?this.renderDarkModeToggle(o):""}
        <button 
          class="mdv-theme-trigger" 
          aria-label="Change theme" 
          aria-expanded="${this.isOpen}"
          aria-haspopup="menu"
        >
          ${this.getThemeIcon(r,o)}
          <span class="mdv-theme-name">${r}</span>
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
              ${this.options.showDarkModeToggle&&this.options.darkModeTogglePosition==="inline"?this.renderDarkModeToggle(o):""}
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
            ${Object.entries(i).map(([n,s])=>this.renderThemeGroup(n,s,r===n)).join("")}
          </div>
        </div>
      </div>
    `}shouldShowCustomThemeButton(){if(!this.options.allowCustomThemes)return!1;const e=this.options.customThemeAccess;return e==="none"?!1:e==="everyone"?!0:typeof e=="function"?e():!0}renderDarkModeToggle(e){return`
      <button 
        class="mdv-dark-mode-toggle ${e}" 
        aria-label="Toggle ${e==="light"?"dark":"light"} mode"
      >
        <div class="mdv-dark-mode-toggle-track">
          <div class="mdv-dark-mode-toggle-thumb">
            <span class="mdv-dark-mode-icon light-icon">☀️</span>
            <span class="mdv-dark-mode-icon dark-icon">🌙</span>
          </div>
        </div>
      </button>
    `}groupThemesByBaseName(e){const t={};return e.forEach(r=>{const o=O(r.name);t[o]||(t[o]=[]),t[o].push(r)}),t}renderThemeGroup(e,t,r){const o=t.find(i=>A(i.name)==="light")||t[0];return this.renderThemeOption(o,r)}renderThemeOption(e,t){const r=O(e.name);return`
      <button 
        class="mdv-theme-option ${t?"active":""}" 
        data-theme="${r}"
        role="menuitem"
        aria-label="Switch to ${r} theme"
        aria-current="${t?"true":"false"}"
        tabindex="${t?"0":"-1"}"
      >
        <div class="mdv-theme-option-content">
          <div class="mdv-theme-option-info">
            <span class="mdv-theme-option-name">${$(r)}</span>
            ${this.options.showDescription&&e.description?`
              <span class="mdv-theme-option-description">${$(e.description)}</span>
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
    `}getThemeIcon(e,t){const r={default:"🎨",github:"🐙",material:"🎨"},o={light:"☀️",dark:"🌙"};return t&&this.options.showDarkModeToggle?o[t]:r[e]||"🎨"}attachTo(e){this.container=e,this.setupEventListeners()}setupEventListeners(){if(!this.container)return;const e=this.container.querySelector(".mdv-theme-trigger");e==null||e.addEventListener("click",r=>{r.stopPropagation(),this.toggleDropdown()}),this.container.addEventListener("click",r=>{const o=r.target,i=o.closest(".mdv-theme-option");if(i&&i.dataset.theme){this.selectTheme(i.dataset.theme);return}if(o.closest(".mdv-dark-mode-toggle")){r.stopPropagation(),this.toggleDarkMode();return}});const t=this.container.querySelector(".mdv-theme-custom-btn");t==null||t.addEventListener("click",r=>{r.stopPropagation(),this.openCustomThemeBuilder()}),this.documentClickHandler=r=>{var o;(o=this.container)!=null&&o.contains(r.target)||this.closeDropdown()},this.container.addEventListener("keydown",r=>{this.handleKeyboardNavigation(r)}),this.isMobile()&&this.setupMobileInteractions()}setupMobileInteractions(){this.createMobileBackdrop(),this.setupSwipeToClose()}createMobileBackdrop(){let e=document.querySelector(".mdv-theme-backdrop");return e||(e=document.createElement("div"),e.className="mdv-theme-backdrop",document.body.appendChild(e)),e.addEventListener("click",()=>{this.closeDropdown()}),e}setupSwipeToClose(){var d;const e=(d=this.container)==null?void 0:d.querySelector(".mdv-theme-dropdown");if(!e)return;let t=0,r=0,o=!1;const i=l=>{l.touches.length===1&&(t=l.touches[0].clientY,r=t,o=!0,e.style.transition="none")},n=l=>{if(!o||l.touches.length!==1)return;r=l.touches[0].clientY;const p=r-t;p>0&&(e.style.transform=`translateY(${p}px)`)},s=()=>{if(!o)return;o=!1,e.style.transition="";const l=r-t;l>it||l>e.offsetHeight*.3?this.closeDropdown():e.style.transform=""};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchmove",n,{passive:!0}),e.addEventListener("touchend",s,{passive:!0}),e.addEventListener("touchcancel",s,{passive:!0})}toggleDarkMode(){const e=this.themeManager.getCurrentTheme(),t=ot(e.name),r=this.themeManager.setTheme(t);if(r){const o=A(r.name);this.updateUI(),this.options.onModeChange&&this.options.onModeChange(o),this.options.onThemeChange&&this.options.onThemeChange(r)}}toggleDropdown(){this.isOpen=!this.isOpen,this.updateDropdownState(),this.isOpen?(this.focusFirstMenuItem(),this.setupFocusTrap(),this.isMobile()&&this.showMobileBackdrop(),this.documentClickHandler&&requestAnimationFrame(()=>{document.addEventListener("click",this.documentClickHandler)})):(this.removeFocusTrap(),this.isMobile()&&this.hideMobileBackdrop(),this.documentClickHandler&&document.removeEventListener("click",this.documentClickHandler))}closeDropdown(){var t;this.isOpen=!1,this.updateDropdownState(),this.removeFocusTrap(),this.isMobile()&&this.hideMobileBackdrop(),this.documentClickHandler&&document.removeEventListener("click",this.documentClickHandler);const e=(t=this.container)==null?void 0:t.querySelector(".mdv-theme-trigger");e==null||e.focus()}updateDropdownState(){var r,o;const e=(r=this.container)==null?void 0:r.querySelector(".mdv-theme-dropdown"),t=(o=this.container)==null?void 0:o.querySelector(".mdv-theme-trigger");e&&(e.classList.toggle("open",this.isOpen),e.setAttribute("aria-hidden",(!this.isOpen).toString())),t&&t.setAttribute("aria-expanded",this.isOpen.toString())}selectTheme(e){const t=this.themeManager.getCurrentTheme(),r=A(t.name),o=`${e}-${r}`,i=this.themeManager.setTheme(o);i&&(this.updateUI(),this.closeDropdown(),this.options.onThemeChange&&this.options.onThemeChange(i))}updateUI(){if(!this.container)return;const e=this.themeManager.getCurrentTheme(),t=O(e.name),r=A(e.name),o=this.container.querySelector(".mdv-theme-trigger");if(o){const n=o.querySelector(".mdv-theme-name");if(n){const s=this.getThemeIcon(t,r),d=o.firstChild;d&&d.nodeType===Node.TEXT_NODE?d.textContent=s:o.insertBefore(document.createTextNode(s),o.firstChild),n.textContent=t}else{const s=o.querySelector(".mdv-dropdown-arrow");o.innerHTML=`
          ${this.getThemeIcon(t,r)}
          <span class="mdv-theme-name">${t}</span>
          ${s?s.outerHTML:'<span class="mdv-dropdown-arrow" aria-hidden="true">▼</span>'}
        `}}const i=this.container.querySelector(".mdv-dark-mode-toggle");i&&(i.className=`mdv-dark-mode-toggle ${r}`,i.setAttribute("aria-label",`Toggle ${r==="light"?"dark":"light"} mode`)),this.container.querySelectorAll(".mdv-theme-option").forEach(n=>{const s=n.getAttribute("data-theme")===t;n.classList.toggle("active",s),n.setAttribute("aria-current",s.toString())}),this.options.showDarkModeToggle&&this.options.darkModeTogglePosition==="separate"&&this.updateSeparateDarkModeToggle(r)}updateSeparateDarkModeToggle(e){var r,o;const t=(o=(r=this.container)==null?void 0:r.parentElement)==null?void 0:o.querySelector(".mdv-theme-switcher .mdv-dark-mode-toggle");t&&(t.className=`mdv-dark-mode-toggle ${e}`,t.setAttribute("aria-label",`Toggle ${e==="light"?"dark":"light"} mode`))}handleKeyboardNavigation(e){var i,n;if(!this.isOpen)return;const t=Array.from(((i=this.container)==null?void 0:i.querySelectorAll(".mdv-theme-option"))||[]),r=t.findIndex(s=>s.classList.contains("active"));let o=r;switch(e.key){case"ArrowDown":e.preventDefault(),o=(r+1)%t.length;break;case"ArrowUp":e.preventDefault(),o=r===0?t.length-1:r-1;break;case"Enter":case" ":{e.preventDefault();const s=document.activeElement;s!=null&&s.dataset.theme&&this.selectTheme(s.dataset.theme);return}case"Escape":e.preventDefault(),this.closeDropdown();return}o!==r&&((n=t[o])==null||n.focus())}focusFirstMenuItem(){var t;const e=(t=this.container)==null?void 0:t.querySelector(".mdv-theme-option");e==null||e.focus()}setupFocusTrap(){if(!this.container)return;const e=this.container.querySelectorAll(".mdv-theme-option, .mdv-dark-mode-toggle, .mdv-theme-custom-btn");if(e.length===0)return;const t=e[0],r=e[e.length-1];this.focusTrapHandler=o=>{o.key==="Tab"&&(o.shiftKey?document.activeElement===t&&(o.preventDefault(),r.focus()):document.activeElement===r&&(o.preventDefault(),t.focus()))},document.addEventListener("keydown",this.focusTrapHandler)}removeFocusTrap(){this.focusTrapHandler&&(document.removeEventListener("keydown",this.focusTrapHandler),this.focusTrapHandler=null)}openCustomThemeBuilder(){if(!this.themeBuilder){this.themeBuilder=new le(this.themeManager,{onThemeCreate:r=>{this.selectTheme(r.name)},onClose:()=>{this.themeBuilder=null}});const e=document.createElement("div");e.className="mdv-theme-builder-container",e.innerHTML=this.themeBuilder.render(),document.body.appendChild(e);const t="mdv-theme-builder-styles";if(!document.getElementById(t)){const r=document.createElement("style");r.id=t,r.textContent=this.themeBuilder.getStyles(),document.head.appendChild(r)}this.themeBuilder.attachTo(e)}this.themeBuilder.open(),this.closeDropdown()}isMobile(){return typeof window<"u"&&window.innerWidth<he}showMobileBackdrop(){const e=document.querySelector(".mdv-theme-backdrop");e&&(e.classList.add("show"),document.body.style.overflow="hidden")}hideMobileBackdrop(){const e=document.querySelector(".mdv-theme-backdrop");e&&(e.classList.remove("show"),document.body.style.overflow="")}destroy(){this.closeDropdown(),this.themeBuilder&&(this.themeBuilder=null),this.hideMobileBackdrop();const e=document.querySelector(".mdv-theme-backdrop");e&&e.remove(),this.container=null,this.isOpen=!1}getStyles(){return`
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
      @media (max-width: ${he}px) {
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
    `}}const ue=class Ie{constructor(e,t={}){this.container=null,this.isDark=!1,this.clickHandler=null,this.themeChangeHandler=null,this.themeManager=e,this.options={position:"header",showLabel:!0,compact:!1,lightThemeName:"default-light",darkThemeName:"default-dark",...t};const r=this.themeManager.getCurrentTheme().name;this.isDark=r.includes("-dark")}render(){const e=`mdv-dark-toggle-${++Ie.instanceCounter}`;return`
      <div class="mdv-dark-mode-toggle ${this.options.position==="floating"?"mdv-dark-toggle-floating":""} ${this.options.compact?"mdv-dark-toggle-compact":""}">
        ${this.options.showLabel&&!this.options.compact?`
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
          <div class="mdv-dark-toggle-track">
            <div class="mdv-dark-toggle-thumb">
              <div class="mdv-dark-toggle-icon">
                ${this.isDark?this.getMoonIcon():this.getSunIcon()}
              </div>
            </div>
          </div>
        </button>
      </div>
    `}getSunIcon(){return`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"></circle>
        <path d="m12 1v6m0 14v6M4.22 4.22l4.24 4.24m8.48 8.48l4.24 4.24m-19.9-12h6m14 0h6M6.46 17.54l-4.24 4.24M17.54 6.46l4.24-4.24"></path>
      </svg>
    `}getMoonIcon(){return`
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    `}attachTo(e){this.container=e,this.setupEventListeners()}setupEventListeners(){if(!this.container)return;const e=this.container.querySelector(".mdv-dark-toggle-btn");e&&(this.clickHandler=()=>{this.toggle()},e.addEventListener("click",this.clickHandler),this.themeChangeHandler=t=>{var n,s;const i=((s=(n=t.detail)==null?void 0:n.theme)==null?void 0:s.name)===this.options.darkThemeName;i!==this.isDark&&(this.isDark=i,this.updateUI())},document.addEventListener("mdv-theme-changed",this.themeChangeHandler))}toggle(){const t=this.themeManager.getCurrentTheme().name.replace(/-light|-dark/,""),r=this.isDark?"light":"dark",o=`${t}-${r}`,i=this.themeManager.setTheme(o);i&&(this.isDark=!this.isDark,this.updateUI(),document.dispatchEvent(new CustomEvent("mdv-dark-mode-toggled",{detail:{isDark:this.isDark,theme:i}})),this.options.onToggle&&this.options.onToggle(this.isDark,i))}updateUI(){if(!this.container)return;const e=this.container.querySelector(".mdv-dark-toggle-btn"),t=this.container.querySelector(".mdv-dark-toggle-label"),r=this.container.querySelector(".mdv-dark-toggle-icon");e&&(e.className=`mdv-dark-toggle-btn ${this.isDark?"dark":"light"}`,e.setAttribute("aria-checked",this.isDark.toString()),e.setAttribute("aria-label",this.isDark?"Switch to light mode":"Switch to dark mode"),e.setAttribute("title",this.isDark?"Switch to light mode":"Switch to dark mode")),t&&(t.textContent=`${this.isDark?"Dark":"Light"} Mode`),r&&(r.innerHTML=this.isDark?this.getMoonIcon():this.getSunIcon())}setDarkMode(e){e!==this.isDark&&this.toggle()}isDarkMode(){return this.isDark}destroy(){if(this.container&&this.clickHandler){const e=this.container.querySelector(".mdv-dark-toggle-btn");e&&e.removeEventListener("click",this.clickHandler)}this.themeChangeHandler&&document.removeEventListener("mdv-theme-changed",this.themeChangeHandler),this.container=null,this.clickHandler=null,this.themeChangeHandler=null}getStyles(){return`
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
      
      .mdv-dark-toggle-compact {
        gap: 8px;
      }
      
      .mdv-dark-toggle-label {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--mdv-color-text);
        user-select: none;
      }
      
      .mdv-dark-toggle-btn {
        position: relative;
        width: 52px;
        height: 28px;
        padding: 0;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 14px;
        outline: none;
      }
      
      .mdv-dark-toggle-btn:focus-visible {
        box-shadow: 0 0 0 2px var(--mdv-color-primary);
      }
      
      .mdv-dark-toggle-compact .mdv-dark-toggle-btn {
        width: 44px;
        height: 24px;
        border-radius: 12px;
      }
      
      .mdv-dark-toggle-track {
        width: 100%;
        height: 100%;
        background: var(--mdv-color-border);
        border-radius: 14px;
        position: relative;
        transition: background-color 0.2s ease;
      }
      
      .mdv-dark-toggle-btn.dark .mdv-dark-toggle-track {
        background: var(--mdv-color-primary);
      }
      
      .mdv-dark-toggle-compact .mdv-dark-toggle-track {
        border-radius: 12px;
      }
      
      .mdv-dark-toggle-thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 24px;
        height: 24px;
        background: var(--mdv-color-surface);
        border-radius: 50%;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      .mdv-dark-toggle-btn.dark .mdv-dark-toggle-thumb {
        transform: translateX(24px);
        background: var(--mdv-color-surface);
      }
      
      .mdv-dark-toggle-compact .mdv-dark-toggle-thumb {
        width: 20px;
        height: 20px;
      }
      
      .mdv-dark-toggle-compact .mdv-dark-toggle-btn.dark .mdv-dark-toggle-thumb {
        transform: translateX(20px);
      }
      
      .mdv-dark-toggle-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--mdv-color-text);
        transition: all 0.2s ease;
      }
      
      .mdv-dark-toggle-btn.light .mdv-dark-toggle-icon {
        color: #fbbf24; /* Yellow sun */
      }
      
      .mdv-dark-toggle-btn.dark .mdv-dark-toggle-icon {
        color: #60a5fa; /* Blue moon */
      }
      
      .mdv-dark-toggle-btn:hover .mdv-dark-toggle-track {
        background: var(--mdv-color-text);
        opacity: 0.3;
      }
      
      .mdv-dark-toggle-btn.dark:hover .mdv-dark-toggle-track {
        background: var(--mdv-color-primary);
        opacity: 0.8;
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
    `}};ue.instanceCounter=0;let pe=ue;const ge=50,nt=50;class fe{constructor(e){var t,r,o,i,n,s,d,l,p,y,c,u;this.router=null,this.styles=null,this.searchManager=null;try{const f=typeof process<"u"&&((t=process==null?void 0:process.env)==null?void 0:t.NODE_ENV)==="development";this.logger=new V(f),this.errorBoundary=new W(x=>{this.handleError(x)}),this.config=this.validateAndMergeConfig(e),this.validateDependencies(),this.state={currentDocument:null,documents:[],searchQuery:"",searchResults:[],loading:!1,error:null,sidebarOpen:!1},this.container=this.validateContainer(e.container);const k=(r=e.errorHandling)!=null&&r.retryConfig?{...U,...e.errorHandling.retryConfig}:U;this.loader=new We(this.config.source,k,this.logger),this.themeManager=new ce({enablePersistence:((o=this.config.theme)==null?void 0:o.enablePersistence)!==!1,storageKey:((i=this.config.theme)==null?void 0:i.storageKey)||"mdv-theme",onThemeChange:x=>{this.applyTheme(x),this.config.onThemeChange&&this.config.onThemeChange(x)}}),this.themeSwitcher=new me(this.themeManager,{position:((n=this.config.theme)==null?void 0:n.switcherPosition)||"header",showPreview:((s=this.config.theme)==null?void 0:s.showPreview)!==!1,showDescription:((d=this.config.theme)==null?void 0:d.showDescription)!==!1,allowCustomThemes:((l=this.config.theme)==null?void 0:l.allowCustomThemes)!==!1}),this.darkModeToggle=new pe(this.themeManager,{position:((p=this.config.theme)==null?void 0:p.darkTogglePosition)||"header",showLabel:((y=this.config.theme)==null?void 0:y.showDarkModeLabel)!==!1,compact:((c=this.config.theme)==null?void 0:c.compactDarkToggle)===!0,onToggle:(x,yt)=>{this.config.onThemeChange&&this.config.onThemeChange(yt)}}),((u=this.config.search)==null?void 0:u.enabled)!==!1&&(this.searchManager=new ie(this.config.search||{enabled:!0},x=>{this.loadDocument(x.id)},x=>{this.handleSearch(x)})),this.init()}catch(f){const k=f instanceof m?f:new m("UNKNOWN_ERROR",`Initialization failed: ${f}`,"Failed to initialize the documentation viewer. Please check your configuration.","critical",!1,{operation:"initialization",originalError:f});throw this.handleError(k),k}}validateDependencies(){var r,o;const e=[],t=[];if(typeof T.marked>"u"&&e.push("marked - Markdown parser is required"),typeof S.default>"u"?t.push("highlight.js - Syntax highlighting will be disabled"):(typeof S.default.highlight!="function"&&t.push("highlight.js.highlight - Some highlighting features may not work"),typeof S.default.highlightElement!="function"&&t.push("highlight.js.highlightElement - Auto-highlighting will be disabled")),typeof N.markedHighlight>"u"&&((o=(r=this.config)==null?void 0:r.render)!=null&&o.syntaxHighlighting)&&t.push("marked-highlight - Advanced syntax highlighting will be disabled"),typeof document>"u"&&e.push("DOM environment - This library requires a browser environment"),typeof window>"u"&&e.push("Window object - Browser environment is required"),t.forEach(i=>{this.logger.warn(`Optional dependency missing: ${i}`)}),e.length>0)throw new m(v.MISSING_DEPENDENCY,`Missing required dependencies: ${e.join(", ")}`,"Some required libraries are not available. Please ensure all dependencies are properly loaded.",b.CRITICAL,!1,{operation:"validateDependencies",additionalData:{missingDependencies:e,warnings:t}});this.logger.debug("Dependency validation completed",{warnings:t.length})}validateContainer(e){let t;if(typeof e=="string"){if(t=document.querySelector(e),!t)throw w.containerNotFound(e)}else t=e;if(!(t instanceof HTMLElement))throw new m("INVALID_CONFIG","Container is not a valid HTML element","The provided container is not a valid HTML element.","high",!1,{operation:"validateContainer"});return t}validateAndMergeConfig(e){if(!e.container)throw new m("INVALID_CONFIG","Container is required","Container element is required for initialization.","critical",!1);if(!e.source)throw new m("INVALID_CONFIG","Document source is required","Document source configuration is required.","critical",!1);return{theme:E.default.light,search:{enabled:!0},navigation:{showCategories:!0,showTags:!1,collapsible:!0,showDescription:!0},render:{syntaxHighlighting:!0,copyCodeButton:!0,linkTarget:"_self"},errorHandling:{gracefulDegradation:!0,showErrorDetails:!1,enableErrorLogging:!0,retryConfig:{maxAttempts:3,baseDelay:1e3,exponentialBackoff:!0}},responsive:!0,mobile:{enabled:!0,breakpoints:g,touchTargets:{minimum:44,comfortable:48,large:56},typography:{baseFontSize:{xs:14,sm:15,md:16,lg:16,xl:16,xxl:16},lineHeight:{tight:1.25,normal:1.5,relaxed:1.75},scaleRatio:1.2},navigation:{swipeGestures:!0,collapseBehavior:"overlay",showBackdrop:!0,closeOnOutsideClick:!0},gestures:{swipeToNavigate:!0,pinchToZoom:!1,doubleTapToZoom:!1,swipeThreshold:ge},layout:{containerPadding:16,contentSpacing:24,borderRadius:8},performance:{enableTouchOptimizations:!0,preventDefaultTouch:!0,optimizeScrolling:!0}},routing:"hash",...e}}async init(){await this.errorBoundary.execute(async()=>{var t,r;this.state.loading=!0,this.state.error=null,this.render(),this.configureMarked();const e=(t=this.config.theme)!=null&&t.name?this.themeManager.getTheme(this.config.theme.name)||this.config.theme:this.themeManager.getCurrentTheme();this.applyTheme(e),await this.loadDocuments(),this.config.routing!=="none"&&this.setupRouting(),this.render(),await this.loadInitialDocument(),this.state.loading=!1,this.render(),this.logger.debug("MarkdownDocsViewer initialized successfully",{documentCount:this.state.documents.length,hasRouter:!!this.router,theme:(r=this.config.theme)==null?void 0:r.name})},()=>{this.state.loading=!1,this.render()},{operation:"init"})}configureMarked(){var e;try{if((e=this.config.render)!=null&&e.syntaxHighlighting)if(typeof S.default<"u"&&typeof N.markedHighlight<"u"){const t=this.logger;T.marked.use(N.markedHighlight({langPrefix:"hljs language-",highlight(r,o){try{if(typeof S.default.getLanguage=="function"&&typeof S.default.highlight=="function"){const i=S.default.getLanguage(o)?o:"plaintext";return S.default.highlight(r,{language:i}).value}return r}catch{return t.warn("Syntax highlighting failed, falling back to plain text."),r}}}))}else this.logger.warn("Syntax highlighting enabled but dependencies not available",{hljs:typeof S.default<"u",markedHighlight:typeof N.markedHighlight<"u"});T.marked.setOptions({gfm:!0,breaks:!0})}catch(t){this.logger.warn("Failed to configure markdown parser",{error:t})}}applyTheme(e){this.errorBoundary.execute(async()=>{var r,o;this.themeManager.applyCSSVariables(e),this.styles&&this.styles.remove(),this.styles=document.createElement("style");let t=Z(e,this.config);this.config.responsive&&((r=this.config.mobile)==null?void 0:r.enabled)!==!1&&(t+=Ze(this.config)),t+=this.themeSwitcher.getStyles(),t+=this.darkModeToggle.getStyles(),this.styles.textContent=t,document.head.appendChild(this.styles),((o=this.config.mobile)==null?void 0:o.enabled)!==!1&&et()},()=>{this.logger.warn("Failed to apply theme, using default styles")},{operation:"applyTheme",additionalData:{themeName:e.name}})}async loadDocuments(){await this.errorBoundary.execute(async()=>{const e=await this.loader.loadAll();this.state.documents=e,e.length===0&&this.logger.warn("No documents loaded"),this.searchManager&&this.searchManager.updateIndex(e,new Map)},()=>{this.state.documents=[],this.logger.error("Failed to load documents, using empty document list")},{operation:"loadDocuments"})}setupRouting(){this.errorBoundary.execute(async()=>{this.router=new Ve(this.config.routing,e=>{this.loadDocument(e).catch(t=>{this.logger.error("Router-triggered document load failed",{docId:e,error:t})})})},()=>{this.logger.warn("Failed to setup routing, navigation will work without URL updates")},{operation:"setupRouting"})}async loadInitialDocument(){await this.errorBoundary.execute(async()=>{var t,r;const e=((t=this.router)==null?void 0:t.getCurrentRoute())||((r=this.state.documents[0])==null?void 0:r.id);e&&await this.loadDocument(e)},()=>{this.logger.debug("No initial document to load")},{operation:"loadInitialDocument"})}render(){this.errorBoundary.execute(async()=>{this.container.innerHTML=`
          <div class="mdv-app">
            ${this.renderHeader()}
            <div class="mdv-layout">
              ${this.renderSidebar()}
              ${this.renderContent()}
            </div>
            ${this.config.footer?this.renderFooter():""}
          </div>
        `,this.attachEventListeners()},()=>{this.container.innerHTML='<div class="mdv-error">Failed to render viewer interface.</div>'},{operation:"render"})}renderHeader(){var o,i;const e=(((o=this.config.theme)==null?void 0:o.switcherPosition)||"header")==="header",t=(((i=this.config.theme)==null?void 0:i.darkTogglePosition)||"header")==="header",r=[];return t&&r.push(this.darkModeToggle.render()),e&&r.push(this.themeSwitcher.render()),`
      <header class="mdv-header">
        <button class="mdv-mobile-toggle" aria-label="Toggle navigation"></button>
        ${this.config.logo?`<img src="${this.config.logo}" alt="Logo" class="mdv-logo">`:""}
        <h1 class="mdv-title">${this.config.title||"Documentation"}</h1>
        ${r.length>0?`<div class="mdv-header-actions">${r.join("")}</div>`:""}
      </header>
    `}renderSidebar(){var r;const e=Ae(this.state.documents,this.state.currentDocument,this.config.navigation),t=(r=this.config.search)!=null&&r.enabled?_e(this.config.search):"";return`
      <aside class="mdv-sidebar ${this.state.sidebarOpen?"open":""}">
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
      `}renderError(e){var s;const t=e instanceof m,r=(s=this.config.errorHandling)==null?void 0:s.showErrorDetails;let o="An unexpected error occurred.",i="",n="";return t?(o=e.userMessage,e.isRetryable&&(n='<button class="mdv-retry-button">Try Again</button>'),r&&(i=`
          <details class="mdv-error-details">
            <summary>Error Details</summary>
            <pre><code>${JSON.stringify(e.toJSON(),null,2)}</code></pre>
          </details>
        `)):r&&(i=`
          <details class="mdv-error-details">
            <summary>Error Details</summary>
            <pre><code>${e.stack||e.message}</code></pre>
          </details>
        `),`
      <main class="mdv-content">
        <div class="mdv-error">
          <div class="mdv-error-icon">⚠️</div>
          <h2>Oops! Something went wrong</h2>
          <p class="mdv-error-message">${o}</p>
          ${n}
          ${i}
        </div>
      </main>
    `}renderFooter(){return`<footer class="mdv-footer">${this.config.footer}</footer>`}renderMarkdown(e){var t,r;try{let o=T.marked(e);return(t=this.config.render)!=null&&t.copyCodeButton&&(o=o.replace(/<pre><code/g,'<div class="mdv-code-block"><button class="mdv-copy-button">Copy</button><pre><code'),o=o.replace(/<\/code><\/pre>/g,"</code></pre></div>")),((r=this.config.render)==null?void 0:r.linkTarget)==="_blank"&&(o=o.replace(/<a /g,'<a target="_blank" rel="noopener noreferrer" ')),o}catch(o){return this.logger.error("Failed to render markdown, showing raw content",{error:o}),`<pre>${e}</pre>`}}attachEventListeners(){this.errorBoundary.execute(async()=>{var o;const e=this.container.querySelector(".mdv-mobile-toggle");e==null||e.addEventListener("click",()=>{this.state.sidebarOpen=!this.state.sidebarOpen,this.updateSidebar()}),this.setupMobileInteractions();const t=this.container.querySelector(".mdv-theme-switcher");t&&this.themeSwitcher.attachTo(t);const r=this.container.querySelector(".mdv-dark-mode-toggle");r&&this.darkModeToggle.attachTo(r),this.container.querySelectorAll(".mdv-nav-link").forEach(i=>{i.addEventListener("click",n=>{n.preventDefault();const s=i.getAttribute("data-doc-id");s&&this.loadDocument(s).catch(d=>{this.logger.error("Navigation click failed",{docId:s,error:d})})}),i.addEventListener("keydown",n=>{this.handleNavigationKeydown(n,i)})}),this.container.querySelectorAll(".mdv-nav-category.collapsible").forEach(i=>{i.addEventListener("click",()=>{this.toggleCategory(i)}),i.addEventListener("keydown",n=>{this.handleCategoryKeydown(n,i)})}),((o=this.config.search)==null?void 0:o.enabled)!==!1&&this.searchManager&&this.searchManager.attachToDOM(this.container),this.container.querySelectorAll(".mdv-copy-button").forEach(i=>{i.addEventListener("click",async n=>{var s;try{const d=(s=n.target.nextElementSibling)==null?void 0:s.querySelector("code");d&&navigator.clipboard&&(await navigator.clipboard.writeText(d.textContent||""),i.textContent="Copied!",setTimeout(()=>{i.textContent="Copy"},2e3))}catch(d){this.logger.warn("Copy to clipboard failed",{error:d}),i.textContent="Copy failed",setTimeout(()=>{i.textContent="Copy"},2e3)}})}),this.container.querySelectorAll(".mdv-retry-button").forEach(i=>{i.addEventListener("click",()=>{window.location.reload()})})},()=>{this.logger.warn("Failed to attach some event listeners")},{operation:"attachEventListeners"})}updateSidebar(){const e=this.container.querySelector(".mdv-sidebar"),t=this.container.querySelector(".mdv-sidebar-backdrop");e&&e.classList.toggle("open",this.state.sidebarOpen),t&&t.classList.toggle("show",this.state.sidebarOpen),e&&e.setAttribute("aria-hidden",this.state.sidebarOpen?"false":"true"),_()&&document.body&&document.body.style&&(document.body.style.overflow=this.state.sidebarOpen?"hidden":"")}setupMobileInteractions(){var e;(e=this.config.mobile)!=null&&e.enabled&&this.errorBoundary.execute(async()=>{var t,r,o,i;this.setupSidebarBackdrop(),(r=(t=this.config.mobile)==null?void 0:t.gestures)!=null&&r.swipeToNavigate&&this.setupSwipeGestures(),(i=(o=this.config.mobile)==null?void 0:o.performance)!=null&&i.enableTouchOptimizations&&this.setupTouchOptimizations(),this.setupResponsiveHandlers()},()=>{this.logger.warn("Failed to setup mobile interactions")},{operation:"setupMobileInteractions"})}setupSidebarBackdrop(){var t,r,o;if(!((r=(t=this.config.mobile)==null?void 0:t.navigation)!=null&&r.showBackdrop))return;let e=this.container.querySelector(".mdv-sidebar-backdrop");e||(e=document.createElement("div"),e.className="mdv-sidebar-backdrop",this.container.appendChild(e)),(o=this.config.mobile.navigation)!=null&&o.closeOnOutsideClick&&e.addEventListener("click",()=>{this.state.sidebarOpen=!1,this.updateSidebar()})}setupSwipeGestures(){var p,y;let e=0,t=0,r=!1;const o=((y=(p=this.config.mobile)==null?void 0:p.gestures)==null?void 0:y.swipeThreshold)||ge,i=this.container.querySelector(".mdv-sidebar"),n=this.container.querySelector(".mdv-content");if(!i||!n)return;const s=c=>{c.touches.length===1&&(e=c.touches[0].clientX,t=c.touches[0].clientY,r=!1)},d=c=>{var u,f;if(c.touches.length===1&&!r){const k=c.touches[0].clientX-e,x=c.touches[0].clientY-t;Math.abs(k)>Math.abs(x)&&Math.abs(k)>10&&(r=!0,(f=(u=this.config.mobile)==null?void 0:u.performance)!=null&&f.preventDefaultTouch&&c.preventDefault())}},l=c=>{if(r&&c.changedTouches.length===1){const u=c.changedTouches[0].clientX-e;_()&&(u>o&&e<nt&&!this.state.sidebarOpen?(this.state.sidebarOpen=!0,this.updateSidebar()):u<-o&&this.state.sidebarOpen&&(this.state.sidebarOpen=!1,this.updateSidebar()))}r=!1};n.addEventListener("touchstart",s,{passive:!0}),n.addEventListener("touchmove",d,{passive:!1}),n.addEventListener("touchend",l,{passive:!0}),i.addEventListener("touchstart",s,{passive:!0}),i.addEventListener("touchmove",d,{passive:!1}),i.addEventListener("touchend",l,{passive:!0})}setupTouchOptimizations(){var t,r;this.container.querySelectorAll(".mdv-button, .mdv-nav-item, .mdv-mobile-toggle, .mdv-search-input, .mdv-toc-item").forEach(o=>{const i=o;i&&i.style&&(i.style.touchAction="manipulation")}),(r=(t=this.config.mobile)==null?void 0:t.performance)!=null&&r.optimizeScrolling&&this.container.querySelectorAll(".mdv-navigation, .mdv-content").forEach(i=>{const n=i;n&&n.style&&(n.style.setProperty("-webkit-overflow-scrolling","touch"),n.style.overscrollBehavior="contain")})}setupResponsiveHandlers(){const e=()=>{const r=se();r!=="xs"&&r!=="sm"&&this.state.sidebarOpen&&(this.state.sidebarOpen=!1,this.updateSidebar()),this.updateResponsiveUI()};let t;window.addEventListener("resize",()=>{clearTimeout(t),t=window.setTimeout(e,150)},{passive:!0}),window.addEventListener("orientationchange",()=>{setTimeout(e,100)},{passive:!0})}updateResponsiveUI(){const e=se(),t=this.container;Object.keys(g).forEach(o=>{t.classList.remove(`mdv-breakpoint-${o}`)}),t.classList.add(`mdv-breakpoint-${e}`);const r=t.querySelector(".mdv-mobile-toggle");r&&r.style&&(r.style.display=_()?"flex":"none")}async loadDocument(e){await this.errorBoundary.execute(async()=>{var r;const t=this.state.documents.find(o=>o.id===e);if(!t)throw w.documentNotFound(e);if(this.state.loading=!0,this.state.error=null,this.render(),!t.content&&t.file&&(t.content=await this.loader.loadDocument(t)),this.state.currentDocument=t,this.state.loading=!1,this.searchManager&&t.content){const o=new Map([[t.id,t.content]]);this.searchManager.updateIndex(this.state.documents,o)}this.router&&this.router.setRoute(e),this.config.onDocumentLoad&&this.config.onDocumentLoad(t),this.render(),(r=this.container.querySelector(".mdv-content"))==null||r.scrollTo(0,0),_()&&(this.state.sidebarOpen=!1,this.updateSidebar()),this.logger.debug("Document loaded successfully",{docId:e})},()=>{this.state.loading=!1,this.render()},{operation:"loadDocument",documentId:e})}handleNavigationKeydown(e,t){const r=Array.from(this.container.querySelectorAll(".mdv-nav-link")),o=r.indexOf(t);let i=o;switch(e.key){case"ArrowDown":e.preventDefault(),i=(o+1)%r.length;break;case"ArrowUp":e.preventDefault(),i=o===0?r.length-1:o-1;break;case"Home":e.preventDefault(),i=0;break;case"End":e.preventDefault(),i=r.length-1;break;case"Enter":case" ":e.preventDefault(),t.click();return;default:return}i!==o&&r[i]&&(r[i].focus(),this.announceNavigationChange(r[i]))}handleCategoryKeydown(e,t){switch(e.key){case"Enter":case" ":e.preventDefault(),this.toggleCategory(t);break;case"ArrowDown":{e.preventDefault();const r=t.nextElementSibling;if(r&&!r.hidden){const o=r.querySelector(".mdv-nav-link");o==null||o.focus()}break}}}toggleCategory(e){var o;const t=e.nextElementSibling,r=e.querySelector(".mdv-collapse-icon");if(t){const n=!(e.getAttribute("aria-expanded")==="true");e.setAttribute("aria-expanded",n.toString()),t.hidden=!n,r&&(r.style.transform=n?"rotate(0deg)":"rotate(-90deg)");const s=`${(o=e.textContent)==null?void 0:o.trim()} ${n?"expanded":"collapsed"}`;F(s,"mdv-nav-announcements")}}announceNavigationChange(e){var r;const t=((r=e.textContent)==null?void 0:r.trim())||"";F(`Focused: ${t}`,"mdv-nav-announcements")}handleSearch(e){var t;if(this.state.searchQuery=e,!e.trim()){this.state.searchResults=[],this.render();return}try{const r=this.state.documents.filter(o=>{try{return[o.title,o.description||"",o.content||"",...o.tags||[]].join(" ").toLowerCase().includes(e.toLowerCase())}catch(i){return this.logger.warn("Error during document search",{docId:o.id,error:i}),!1}});this.state.searchResults=r.slice(0,((t=this.config.search)==null?void 0:t.maxResults)||10),this.render()}catch(r){this.logger.error("Search operation failed",{query:e,error:r}),this.state.searchResults=[]}}handleError(e){var t;if(this.state&&(this.state.error=e,this.state.loading=!1),this.logger?this.logger.log(e):console.error("MarkdownDocsViewer Error:",e),(t=this.config)!=null&&t.onError)try{this.config.onError(e)}catch(r){this.logger?this.logger.error("Error in user error handler",{handlerError:r}):console.error("Error in user error handler:",r)}this.state&&this.container&&this.render()}async refresh(){await this.errorBoundary.execute(async()=>{this.loader.clearCache(),await this.loadDocuments(),this.render()},()=>{this.logger.error("Failed to refresh documents")},{operation:"refresh"})}setTheme(e){if(typeof e=="string"){const t=this.themeManager.setTheme(e);t&&(this.config.theme=t)}else{if(e.name&&this.themeManager.getTheme(e.name))this.themeManager.setTheme(e.name);else{const t=`temp-${Date.now()}`;this.themeManager.registerTheme({...e,name:t}),this.themeManager.setTheme(t)}this.config.theme=e}}getAvailableThemes(){return this.themeManager.getAvailableThemes()}registerTheme(e){this.themeManager.registerTheme(e)}createCustomTheme(e,t){return this.themeManager.createCustomTheme(e,t)}getDocument(e){return this.state.documents.find(t=>t.id===e)||null}getAllDocuments(){return[...this.state.documents]}async search(e){return new Promise(t=>{this.handleSearch(e),t([...this.state.searchResults])})}destroy(){try{this.styles&&this.styles.remove(),this.router&&this.router.destroy(),this.themeSwitcher&&typeof this.themeSwitcher.destroy=="function"&&this.themeSwitcher.destroy(),this.searchManager&&typeof this.searchManager.destroy=="function"&&this.searchManager.destroy(),this.darkModeToggle&&typeof this.darkModeToggle.destroy=="function"&&this.darkModeToggle.destroy(),this.container.innerHTML="",this.logger.debug("MarkdownDocsViewer destroyed")}catch(e){this.logger.warn("Error during cleanup",{error:e})}}getState(){return{...this.state}}getConfig(){return{...this.config}}getDocuments(){return[...this.state.documents]}async getDocumentContent(e){if(e.content)return e.content;if(e.file){const t=await this.loader.loadDocument(e);return e.content=t,t}return""}getTheme(){return this.config.theme}getThemeStyles(){return Z(this.config.theme,this.config)}}function ve(a){return new fe(a)}function at(a,e){return ve({container:a,source:{type:"content",documents:e}})}function I(a){if(typeof a!="string")return"";const e=document.createElement("div");return e.textContent=a,e.innerHTML}function st(a){if(typeof a!="string")return"";const e=document.createElement("div");e.innerHTML=a;const t=new Set(["p","br","strong","b","em","i","u","code","pre","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","table","thead","tbody","tr","td","th","a","img","hr","div","span"]),r=new Map([["a",new Set(["href","title"])],["img",new Set(["src","alt","title","width","height"])],["*",new Set(["id","class"])]]);function o(s){const d=s.tagName.toLowerCase();if(!t.has(d))return null;const l=document.createElement(d),p=r.get(d)||new Set,y=r.get("*")||new Set;for(const c of s.attributes){const u=c.name.toLowerCase();if(!u.startsWith("on")&&(p.has(u)||y.has(u))){let f=c.value;if((u==="href"||u==="src")&&(f=i(f),!f))continue;l.setAttribute(u,f)}}for(const c of Array.from(s.childNodes))if(c.nodeType===Node.TEXT_NODE)l.appendChild(document.createTextNode(c.textContent||""));else if(c.nodeType===Node.ELEMENT_NODE){const u=o(c);u&&l.appendChild(u)}return l}function i(s){if(!s||typeof s!="string")return"";const d=s.trim().toLowerCase(),l=["javascript:","data:","vbscript:","livescript:","mocha:","about:","file:","ftp:","jar:","view-source:"];for(const p of l)if(d.startsWith(p))return"";return d.startsWith("http://")||d.startsWith("https://")||d.startsWith("mailto:")||d.startsWith("#")||d.startsWith("/")||d.startsWith("./")||d.startsWith("../")||!d.includes(":")?s.trim():""}const n=document.createElement("div");for(const s of Array.from(e.childNodes))if(s.nodeType===Node.TEXT_NODE)n.appendChild(document.createTextNode(s.textContent||""));else if(s.nodeType===Node.ELEMENT_NODE){const d=o(s);d&&n.appendChild(d)}return n.innerHTML}class dt{constructor(e){this.html2pdfAvailable=!1,this.viewer=e,this.checkDependencies()}checkDependencies(){typeof window<"u"&&window.html2pdf&&(this.html2pdfAvailable=!0)}async export(e){switch(e.format){case"pdf":return this.exportPDF(e);case"html":return this.exportHTML(e);default:throw new m(v.INVALID_CONFIG,`Unsupported export format: ${e.format}`,"The specified export format is not supported.",b.HIGH,!1,{operation:"export",additionalData:{format:e.format}})}}async exportPDF(e){var o,i,n;if(!this.html2pdfAvailable)throw new m(v.MISSING_DEPENDENCY,"html2pdf.js is required for PDF export. Please include it in your project.","PDF export requires the html2pdf.js library to be included in your project.",b.HIGH,!1,{operation:"exportPDF",additionalData:{dependency:"html2pdf.js"}});const t=await this.generateExportHTML(e),r=document.createElement("div");r.innerHTML=t,r.style.position="absolute",r.style.left="-9999px",r.style.width="210mm",document.body.appendChild(r);try{const s={margin:((o=e.pdfOptions)==null?void 0:o.margin)||10,filename:e.filename||"documentation.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0,logging:!1},jsPDF:{unit:"mm",format:((i=e.pdfOptions)==null?void 0:i.format)||"a4",orientation:((n=e.pdfOptions)==null?void 0:n.orientation)||"portrait"},pagebreak:{mode:["avoid-all","css","legacy"]}},d=window.html2pdf;return await d().set(s).from(r).outputPdf("blob")}finally{document.body.removeChild(r)}}async exportHTML(e){const t=await this.generateExportHTML(e);return e.embedAssets?this.embedAssets(t):t}async generateExportHTML(e){var i;const t=await this.getDocumentsToExport(e),r=this.viewer.getTheme();let o=`<!DOCTYPE html>
<html lang="${I(e.locale||"en")}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${I(e.title||"Documentation Export")}</title>
  <style>
    ${this.getExportStyles(r)}
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
<body class="export-body">`;e.includeTOC&&(o+=this.generateTableOfContents(t));for(let n=0;n<t.length;n++){const s=t[n],d=await this.viewer.getDocumentContent(s),l=await T.marked(d);o+=`
  <article class="exported-document ${n>0?"page-break":""}" id="doc-${I(s.id)}">
    <h1>${I(s.title)}</h1>
    ${s.description?`<p class="doc-description">${I(s.description)}</p>`:""}
    ${(i=s.tags)!=null&&i.length?`<div class="doc-tags">${s.tags.map(p=>`<span class="tag">${I(p)}</span>`).join("")}</div>`:""}
    <div class="doc-content">
      ${st(l)}
    </div>
  </article>`}return o+=`
</body>
</html>`,o}async getDocumentsToExport(e){const t=this.viewer.getDocuments();return!e.documentIds||e.documentIds.length===0?t:t.filter(r=>e.documentIds.includes(r.id))}generateTableOfContents(e){let t=`
  <nav class="export-toc page-break">
    <h1>Table of Contents</h1>
    <ol>`;for(const r of e)t+=`
      <li><a href="#doc-${I(r.id)}">${I(r.title)}</a></li>`;return t+=`
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
    `}async embedAssets(e){return e}isPDFExportAvailable(){return this.html2pdfAvailable}getExportCapabilities(){return{pdf:this.html2pdfAvailable,html:!0,formats:["html",...this.html2pdfAvailable?["pdf"]:[]]}}}function ct(a={}){return{format:"html",includeTheme:!0,includeTOC:!0,embedAssets:!1,...a}}class lt{constructor(e){this.config=e,this.currentLocale=e.locale,this.messages=e.messages,this.fallbackLocale=e.fallbackLocale||"en",this.validateConfig()}validateConfig(){if(!this.messages[this.currentLocale]&&(console.warn(`No messages found for locale "${this.currentLocale}", falling back to "${this.fallbackLocale}"`),!this.messages[this.fallbackLocale]))throw new m(v.INVALID_CONFIG,`No messages found for locale "${this.currentLocale}" or fallback locale "${this.fallbackLocale}"`,"No translation messages found for the specified locale or fallback locale.",b.HIGH,!1,{operation:"validateI18nConfig",additionalData:{locale:this.currentLocale,fallbackLocale:this.fallbackLocale}})}t(e,t){const r=this.getMessage(e);return r?t?this.interpolate(r,t):r:(console.warn(`Missing translation for key: ${e}`),e)}getMessage(e){const t=e.split(".");let r=this.messages[this.currentLocale];for(const o of t)if(r&&typeof r=="object"&&o in r)r=r[o];else{r=void 0;break}if(r===void 0&&this.fallbackLocale!==this.currentLocale){r=this.messages[this.fallbackLocale];for(const o of t)if(r&&typeof r=="object"&&o in r)r=r[o];else return}return typeof r=="string"?r:void 0}interpolate(e,t){return e.replace(/\{(\w+)\}/g,(r,o)=>t[o]!==void 0?String(t[o]):r)}setLocale(e){if(!this.messages[e])throw new m(v.INVALID_CONFIG,`No messages found for locale "${e}"`,"The specified locale is not available.",b.HIGH,!1,{operation:"setLocale",additionalData:{locale:e}});this.currentLocale=e}getLocale(){return this.currentLocale}getAvailableLocales(){return Object.keys(this.messages)}hasLocale(e){return e in this.messages}addLocale(e,t){this.messages[e]=t}extendLocale(e,t){this.messages[e]||(this.messages[e]={}),this.messages[e]=this.deepMerge(this.messages[e],t)}deepMerge(e,t){const r={...e};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(typeof t[o]=="object"&&t[o]!==null&&!Array.isArray(t[o])?r[o]=this.deepMerge(e[o]||{},t[o]):r[o]=t[o]);return r}}const Y={app:{title:"Documentation",loading:"Loading documentation...",error:"An error occurred",retry:"Try Again",welcome:"Welcome to the Documentation",selectDocument:"Select a document from the sidebar to begin reading."},navigation:{toggleMenu:"Toggle navigation",search:"Search",searchPlaceholder:"Search documentation...",categories:"Categories",tags:"Tags",noResults:"No results found"},document:{copyCode:"Copy",codeCopied:"Copied!",copyFailed:"Copy failed",tableOfContents:"Table of Contents",backToTop:"Back to top"},export:{title:"Export Documentation",format:"Format",pdf:"PDF",html:"HTML",selectDocuments:"Select documents to export",selectAll:"Select All",deselectAll:"Deselect All",exportButton:"Export",exporting:"Exporting...",exportSuccess:"Export completed successfully",exportError:"Export failed",options:{includeTheme:"Include theme styles",includeTOC:"Include table of contents",embedAssets:"Embed assets (images, etc.)"}},errors:{documentNotFound:"Document not found",loadError:"Failed to load document",networkError:"Network error occurred",unknown:"An unexpected error occurred"}};function ht(a={}){const e=a.messages||{};return e.en?e.en=be(Y,e.en):e.en=Y,{locale:"en",fallbackLocale:"en",...a,messages:e}}function be(a,e){const t={...a};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const o=a[r],i=e[r];typeof i=="object"&&typeof o=="object"&&!Array.isArray(i)&&!Array.isArray(o)?t[r]=be(o,i):t[r]=i}return t}function mt(a,e){return{[a]:e}}class ut{constructor(e={}){this.headings=[],this.activeId=null,this.options={enabled:!0,maxDepth:3,sticky:!0,scrollSpy:!0,collapsible:!1,position:"right",...e}}generate(e){if(!this.options.enabled)return[];this.headings=[];let t=[];try{t=T.marked.lexer(e)}catch{console.warn("`marked.lexer` failed, falling back to manual heading parsing.");const r=e.split(`
`);for(const o of r)if(o.startsWith("#")){const i=o.match(/^#{1,6}/);if(i){const n=i[0].length,s=o.slice(n).trim();if(s.length>0){const d=n,l=s,p=this.generateId(l);this.headings.push({level:d,text:l,id:p,children:[]})}}}return this.buildTree()}return this.extractHeadings(t),this.buildTree()}extractHeadings(e){for(const t of e)if(t.type==="heading"&&t.depth<=this.options.maxDepth){const r=this.generateId(t.text);this.headings.push({id:r,text:t.text,level:t.depth,children:[]})}}buildTree(){const e=[],t=[];for(const r of this.headings){for(;t.length>0&&t[t.length-1].level>=r.level;)t.pop();t.length===0?e.push(r):t[t.length-1].children.push(r),t.push(r)}return e}generateId(e){const t=e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();let r=1,o=t;for(;this.headings.some(i=>i.id===o);)o=`${t}-${r}`,r++;return o}render(){if(!this.options.enabled||this.headings.length===0)return"";const e=this.options.position,t=this.options.sticky?"mdv-toc-sticky":"",r=this.options.collapsible?"mdv-toc-collapsible":"";return`
      <nav class="mdv-toc mdv-toc-${e} ${t} ${r}" role="navigation" aria-label="Table of contents">
        <h2 class="mdv-toc-title" id="toc-heading">Table of Contents</h2>
        ${this.renderTree(this.buildTree())}
        <div class="mdv-sr-only" aria-live="polite" id="toc-announcements"></div>
      </nav>
    `}renderTree(e,t=1){if(e.length===0)return"";const r=e.map(o=>{const i=o.children.length>0,n=o.id===this.activeId?"mdv-toc-active":"";return`
        <li class="mdv-toc-item mdv-toc-level-${t} ${n}" role="listitem">
          <a href="#${o.id}" 
             class="mdv-toc-link" 
             data-toc-id="${o.id}"
             aria-current="${o.id===this.activeId?"location":"false"}"
             role="link">
            ${o.text}
          </a>
          ${i?this.renderTree(o.children,t+1):""}
        </li>
      `}).join("");return`<ul class="mdv-toc-list mdv-toc-list-${t}" role="list">${r}</ul>`}initScrollSpy(e){if(!this.options.scrollSpy||!this.options.enabled)return;const t=[];this.headings.forEach(i=>{const n=e.querySelector(`#${i.id}`);n&&t.push(n)});const r=new IntersectionObserver(i=>{i.forEach(n=>{n.isIntersecting&&this.setActiveHeading(n.target.id)})},{rootMargin:"-20% 0% -70% 0%",threshold:0});t.forEach(i=>{r.observe(i)});let o;e.addEventListener("scroll",()=>{clearTimeout(o),o=setTimeout(()=>{this.updateActiveHeading(e,t)},100)},{passive:!0})}updateActiveHeading(e,t){let r=null;for(const o of t){const i=o.getBoundingClientRect(),n=e.getBoundingClientRect();if(i.top-n.top<=100)r=o;else break}r&&this.setActiveHeading(r.id)}setActiveHeading(e){const t=this.activeId;this.activeId=e,document.querySelectorAll(".mdv-toc-link").forEach(r=>{const o=r.getAttribute("data-toc-id")===e;if(r.classList.toggle("mdv-toc-active",o),r.setAttribute("aria-current",o?"location":"false"),o){const i=r.closest(".mdv-toc");if(i&&this.options.sticky){const n=r.getBoundingClientRect(),s=i.getBoundingClientRect();(n.top<s.top||n.bottom>s.bottom)&&r.scrollIntoView({behavior:"smooth",block:"center"})}t!==e&&this.announceActiveHeading(r.textContent||"")}})}announceActiveHeading(e){const t=`Current section: ${e}`;document.getElementById("toc-announcements")&&F(t,"toc-announcements")}static getStyles(){return`
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
    `}}function pt(a){const t=new DOMParser().parseFromString(a,"text/html"),r=t.querySelectorAll("h1, h2, h3, h4, h5, h6"),o=new Set;return r.forEach(i=>{if(!i.id){const n=i.textContent.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();let s=1,d=n;for(;o.has(d);)d=`${n}-${s}`,s++;o.add(d),i.id=d}}),t.body.innerHTML}class gt{constructor(e,t={}){this.searchHistory=[],this.documents=e,this.options={enabled:!0,caseSensitive:!1,fuzzySearch:!1,searchInTags:!0,maxResults:10,highlighting:!0,searchHistory:!0,maxHistoryItems:10,...t},this.searchIndex=new z,this.buildIndex(),this.debouncedSearch=B(r=>this.performSearch(r),300),this.loadSearchHistory()}buildIndex(){const e=new Map;this.documents.forEach(t=>{t.content&&e.set(t.id,t.content)}),this.searchIndex.updateIndex(this.documents,e)}performSearch(e){const t=this.search(e);return this.addToHistory(e,t.length),t}search(e){if(!e.trim())return[];let r=this.searchIndex.search(e).map((o,i)=>({document:o,score:1-i*.1,highlights:this.options.highlighting?this.generateHighlights(o,e):[]}));return r=this.applyFilters(r),r.sort((o,i)=>i.score-o.score),r=r.slice(0,this.options.maxResults),this.options.searchHistory&&this.addToHistory(e,r.length),r}searchDebounced(e,t){this.debouncedSearch=B(()=>{const r=this.search(e);t(r)},300),this.debouncedSearch(e)}applyFilters(e){if(!this.options.filters)return e;const{categories:t,tags:r,dateRange:o}=this.options.filters;return e.filter(i=>{const n=i.document;if(t&&t.length>0&&(!n.category||!t.includes(n.category))||r&&r.length>0&&(!n.tags||!n.tags.some(s=>r.includes(s))))return!1;if(o&&n.date){const s=new Date(n.date);if(o.from&&s<o.from||o.to&&s>o.to)return!1}return!0})}generateHighlights(e,t){const r=[],o=t.toLowerCase().split(/\s+/),i=(n,s)=>{const d=n.toLowerCase();o.forEach(l=>{let p=d.indexOf(l);for(;p!==-1;){const y=Math.max(0,p-50),c=Math.min(n.length,p+l.length+50),u=n.substring(y,c);r.push({field:s,text:u,position:p}),p=d.indexOf(l,p+1)}})};return i(e.title,"title"),e.description&&i(e.description,"description"),e.content&&r.length<5&&i(e.content,"content"),e.tags&&this.options.searchInTags&&i(e.tags.join(" "),"tags"),r.slice(0,5)}getSearchHistory(){return[...this.searchHistory]}clearSearchHistory(){this.searchHistory=[],this.saveSearchHistory()}addToHistory(e,t){this.searchHistory=this.searchHistory.filter(r=>r.query!==e),this.searchHistory.unshift({query:e,timestamp:new Date,resultCount:t}),this.searchHistory.length>this.options.maxHistoryItems&&(this.searchHistory=this.searchHistory.slice(0,this.options.maxHistoryItems)),this.saveSearchHistory()}loadSearchHistory(){if(!(typeof window>"u"||!this.options.searchHistory))try{const e=localStorage.getItem("mdv-search-history");if(e){const t=JSON.parse(e);this.searchHistory=t.map(r=>({...r,timestamp:new Date(r.timestamp)}))}}catch(e){console.warn("Failed to load search history:",e)}}saveSearchHistory(){if(!(typeof window>"u"||!this.options.searchHistory))try{localStorage.setItem("mdv-search-history",JSON.stringify(this.searchHistory))}catch(e){console.warn("Failed to save search history:",e)}}getSuggestions(e){const t=[],r=e.toLowerCase();return this.searchHistory.forEach(o=>{o.query.toLowerCase().includes(r)&&t.push(o.query)}),this.documents.forEach(o=>{o.title.toLowerCase().includes(r)&&!t.includes(o.title)&&t.push(o.title)}),t.slice(0,5)}updateDocuments(e){this.documents=e,this.searchIndex=new z,this.buildIndex()}static renderSearchUI(e){return`
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
                    ${e.filters.categories.map(t=>`<option value="${t}">${t}</option>`).join("")}
                  </select>
                </div>
              `:""}
              
              ${e.filters.tags?`
                <div class="mdv-filter-group">
                  <label>Tags</label>
                  <select multiple class="mdv-filter-tags">
                    ${e.filters.tags.map(t=>`<option value="${t}">${t}</option>`).join("")}
                  </select>
                </div>
              `:""}
            </div>
          </div>
        `:""}
        
        <div class="mdv-search-results"></div>
      </div>
    `}static renderSearchResult(e){var r;const t=e.document;return`
      <div class="mdv-search-result" data-doc-id="${t.id}">
        <h3 class="mdv-search-result-title">
          ${e.highlights.find(o=>o.field==="title")?J(t.title,e.highlights.find(o=>o.field==="title").text):t.title}
        </h3>
        
        ${t.description?`
          <p class="mdv-search-result-description">
            ${e.highlights.find(o=>o.field==="description")?J(t.description,e.highlights.find(o=>o.field==="description").text):t.description}
          </p>
        `:""}
        
        ${e.highlights.filter(o=>o.field==="content").map(o=>`
          <p class="mdv-search-result-excerpt">
            ...${J(o.text,o.text)}...
          </p>
        `).join("")}
        
        <div class="mdv-search-result-meta">
          ${t.category?`<span class="mdv-search-result-category">${t.category}</span>`:""}
          ${((r=t.tags)==null?void 0:r.map(o=>`<span class="mdv-search-result-tag">${o}</span>`).join(""))||""}
        </div>
      </div>
    `}}function J(a,e){const t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),r=new RegExp(`(${t})`,"gi");return a.replace(r,"<mark>$1</mark>")}function ye(a){return`
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
  `}function ft(a){const e=document.createElement("button");e.className="mdv-print-button no-print",e.textContent="Print",e.onclick=()=>window.print();const t=a.querySelector(".mdv-header");t&&t.appendChild(e),a.querySelectorAll("h1, h2").forEach((n,s)=>{s>0&&s%3===0&&n.classList.add("page-break")}),a.querySelectorAll("table").forEach(n=>{n.classList.add("avoid-break")}),a.querySelectorAll("pre").forEach(n=>{n.scrollHeight>800?n.style.pageBreakInside="auto":n.classList.add("avoid-break")})}function vt(a,e){return`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Print Preview</title>
      <style>
        ${ye()}
        
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
        ${a}
      </div>
    </body>
    </html>
  `}const xe={light:"Material Design inspired light theme",dark:"Material Design inspired dark theme"},ke={light:"Visual Studio Code light",dark:"Visual Studio Code dark"},we={light:"Nord light - arctic inspired",dark:"Nord dark - arctic inspired"},Te={light:"Dracula light",dark:"Dracula dark"},$e={light:"Solarized light",dark:"Solarized dark"},Se={light:"Monokai light",dark:"Monokai dark"},Ee={light:"Ayu light",dark:"Ayu dark"},Me={light:"Catppuccin Latte",dark:"Catppuccin Mocha"},Ce={light:"Tokyo Night light",dark:"Tokyo Night dark"},bt=Object.freeze(Object.defineProperty({__proto__:null,ayu:Ee,catppuccin:Me,default:{material:xe,vscode:ke,nord:we,dracula:Te,solarized:$e,monokai:Se,ayu:Ee,catppuccin:Me,tokyo:Ce},dracula:Te,material:xe,monokai:Se,nord:we,solarized:$e,tokyo:Ce,vscode:ke},Symbol.toStringTag,{value:"Module"}));h.AdvancedSearchManager=gt,h.ConsoleErrorLogger=V,h.DarkModeToggle=pe,h.ErrorBoundary=W,h.ErrorCode=v,h.ErrorFactory=w,h.ErrorSeverity=b,h.ExportManager=dt,h.I18nManager=lt,h.LRUCache=ee,h.LazyLoader=Fe,h.MarkdownDocsError=m,h.MarkdownDocsViewer=fe,h.MemoryManager=D,h.PerformanceMonitor=re,h.PersistentCache=te,h.SearchIndex=z,h.SearchManager=ie,h.TableOfContents=ut,h.ThemeBuilder=le,h.ThemeManager=ce,h.ThemeSwitcher=me,h.addHeadingIds=pt,h.addPrintUtilities=ft,h.createCustomTheme=Q,h.createExportOptions=ct,h.createI18nConfig=ht,h.createLocaleMessages=mt,h.createViewer=ve,h.debounce=B,h.defaultMessages=Y,h.generatePrintPreview=vt,h.generatePrintStyles=ye,h.quickStart=at,h.themes=E,h.throttle=Be,h.withRetry=ae,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.cjs.map
