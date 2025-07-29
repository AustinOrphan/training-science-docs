(function(h,$){typeof exports=="object"&&typeof module<"u"?$(exports,require("marked"),require("marked-highlight"),require("highlight.js")):typeof define=="function"&&define.amd?define(["exports","marked","marked-highlight","highlight.js"],$):(h=typeof globalThis<"u"?globalThis:h||self,$(h.MarkdownDocsViewer={},h.marked,h.markedHighlight,h.hljs))})(this,function(h,$,H,Ce){"use strict";const C=(n=>n&&typeof n=="object"&&"default"in n?n:{default:n})(Ce),K={github:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',code:'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'},material:{body:'Roboto, "Helvetica Neue", Arial, sans-serif',heading:'Roboto, "Helvetica Neue", Arial, sans-serif',code:'"Roboto Mono", Consolas, Monaco, monospace'},vscode:{body:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',heading:'"Segoe UI Semibold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',code:'Consolas, "Courier New", monospace'},nord:{body:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"JetBrains Mono", "Fira Code", Consolas, Monaco, monospace'},dracula:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"Fira Code", "JetBrains Mono", Consolas, Monaco, monospace'},solarized:{body:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"Source Code Pro", Consolas, Monaco, monospace'},monokai:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"Monaco", "Menlo", "Ubuntu Mono", Consolas, monospace'},ayu:{body:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"Fira Code", "Source Code Pro", Consolas, Monaco, monospace'},catppuccin:{body:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"JetBrains Mono", "Fira Code", Consolas, Monaco, monospace'},tokyo:{body:'"Hiragino Sans", "Yu Gothic UI", "Segoe UI", -apple-system, sans-serif',heading:'"Hiragino Sans", "Yu Gothic UI", "Segoe UI", -apple-system, sans-serif',code:'"SFMono-Regular", "Consolas", "Liberation Mono", Monaco, monospace'},default:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',code:'"Fira Code", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace'}},U={default:{light:{primary:"#3b82f6",secondary:"#10b981",background:"#ffffff",surface:"#f3f4f6",text:"#111827",textPrimary:"#111827",textLight:"#6b7280",textSecondary:"#6b7280",border:"#e5e7eb",code:"#8b5cf6",codeBackground:"#f3f4f6",link:"#3b82f6",linkHover:"#2563eb",error:"#ef4444",warning:"#f59e0b",success:"#10b981"},dark:{primary:"#60a5fa",secondary:"#34d399",background:"#0f172a",surface:"#1e293b",text:"#f1f5f9",textPrimary:"#f1f5f9",textLight:"#94a3b8",textSecondary:"#94a3b8",border:"#334155",code:"#a78bfa",codeBackground:"#1a202c",link:"#60a5fa",linkHover:"#93c5fd",error:"#f87171",warning:"#fbbf24",success:"#34d399"}},github:{light:{primary:"#0969da",secondary:"#1a7f37",background:"#ffffff",surface:"#f6f8fa",text:"#1f2328",textPrimary:"#1f2328",textLight:"#656d76",textSecondary:"#656d76",border:"#d0d7de",code:"#0550ae",codeBackground:"#f6f8fa",link:"#0969da",linkHover:"#0860ca",error:"#d1242f",warning:"#9a6700",success:"#1a7f37"},dark:{primary:"#4493f8",secondary:"#3fb950",background:"#0d1117",surface:"#161b22",text:"#e6edf3",textPrimary:"#e6edf3",textLight:"#7d8590",textSecondary:"#7d8590",border:"#30363d",code:"#79c0ff",codeBackground:"#161b22",link:"#4493f8",linkHover:"#58a6ff",error:"#f85149",warning:"#d29922",success:"#3fb950"}},material:{light:{primary:"#1976d2",secondary:"#00897b",background:"#ffffff",surface:"#f5f5f5",text:"#212121",textPrimary:"#212121",textLight:"#757575",textSecondary:"#757575",border:"#e0e0e0",code:"#673ab7",codeBackground:"#f5f5f5",link:"#1976d2",linkHover:"#1565c0",error:"#d32f2f",warning:"#f57c00",success:"#388e3c"},dark:{primary:"#42a5f5",secondary:"#26a69a",background:"#121212",surface:"#1e1e1e",text:"#ffffff",textPrimary:"#ffffff",textLight:"#b3b3b3",textSecondary:"#b3b3b3",border:"#2e2e2e",code:"#ab47bc",codeBackground:"#1e1e1e",link:"#42a5f5",linkHover:"#64b5f6",error:"#f44336",warning:"#ff9800",success:"#4caf50"}},vscode:{light:{primary:"#0078d4",secondary:"#00bcf2",background:"#ffffff",surface:"#f3f3f3",text:"#323130",textPrimary:"#323130",textLight:"#605e5c",textSecondary:"#605e5c",border:"#c8c6c4",code:"#d83b01",codeBackground:"#f3f2f1",link:"#0078d4",linkHover:"#106ebe",error:"#d13438",warning:"#ff8c00",success:"#107c10"},dark:{primary:"#0078d4",secondary:"#00bcf2",background:"#1e1e1e",surface:"#252526",text:"#cccccc",textPrimary:"#cccccc",textLight:"#969696",textSecondary:"#969696",border:"#3c3c3c",code:"#569cd6",codeBackground:"#1e1e1e",link:"#3794ff",linkHover:"#1f7ce6",error:"#f14c4c",warning:"#ff8c00",success:"#89d185"}},nord:{light:{primary:"#5e81ac",secondary:"#88c0d0",background:"#eceff4",surface:"#e5e9f0",text:"#2e3440",textPrimary:"#2e3440",textLight:"#4c566a",textSecondary:"#4c566a",border:"#d8dee9",code:"#b48ead",codeBackground:"#e5e9f0",link:"#5e81ac",linkHover:"#81a1c1",error:"#bf616a",warning:"#ebcb8b",success:"#a3be8c"},dark:{primary:"#88c0d0",secondary:"#8fbcbb",background:"#2e3440",surface:"#3b4252",text:"#eceff4",textPrimary:"#eceff4",textLight:"#d8dee9",textSecondary:"#d8dee9",border:"#4c566a",code:"#b48ead",codeBackground:"#3b4252",link:"#88c0d0",linkHover:"#8fbcbb",error:"#bf616a",warning:"#ebcb8b",success:"#a3be8c"}},dracula:{light:{primary:"#6272a4",secondary:"#8be9fd",background:"#f8f8f2",surface:"#f0f0f0",text:"#282a36",textPrimary:"#282a36",textLight:"#6272a4",textSecondary:"#6272a4",border:"#e0e0e0",code:"#bd93f9",codeBackground:"#f0f0f0",link:"#6272a4",linkHover:"#44475a",error:"#ff5555",warning:"#ffb86c",success:"#50fa7b"},dark:{primary:"#bd93f9",secondary:"#8be9fd",background:"#282a36",surface:"#44475a",text:"#f8f8f2",textPrimary:"#f8f8f2",textLight:"#6272a4",textSecondary:"#6272a4",border:"#6272a4",code:"#ff79c6",codeBackground:"#44475a",link:"#8be9fd",linkHover:"#50fa7b",error:"#ff5555",warning:"#ffb86c",success:"#50fa7b"}},solarized:{light:{primary:"#268bd2",secondary:"#2aa198",background:"#fdf6e3",surface:"#eee8d5",text:"#586e75",textPrimary:"#073642",textLight:"#586e75",textSecondary:"#586e75",border:"#93a1a1",code:"#d33682",codeBackground:"#eee8d5",link:"#268bd2",linkHover:"#2aa198",error:"#dc322f",warning:"#b58900",success:"#859900"},dark:{primary:"#268bd2",secondary:"#2aa198",background:"#002b36",surface:"#073642",text:"#839496",textPrimary:"#93a1a1",textLight:"#657b83",textSecondary:"#586e75",border:"#586e75",code:"#d33682",codeBackground:"#073642",link:"#268bd2",linkHover:"#2aa198",error:"#dc322f",warning:"#b58900",success:"#859900"}},monokai:{light:{primary:"#f92672",secondary:"#a6e22e",background:"#fafafa",surface:"#f0f0f0",text:"#272822",textPrimary:"#272822",textLight:"#75715e",textSecondary:"#75715e",border:"#e0e0e0",code:"#ae81ff",codeBackground:"#f0f0f0",link:"#f92672",linkHover:"#fd971f",error:"#f92672",warning:"#fd971f",success:"#a6e22e"},dark:{primary:"#f92672",secondary:"#a6e22e",background:"#272822",surface:"#3e3d32",text:"#f8f8f2",textPrimary:"#f8f8f2",textLight:"#75715e",textSecondary:"#75715e",border:"#49483e",code:"#ae81ff",codeBackground:"#3e3d32",link:"#66d9ef",linkHover:"#a6e22e",error:"#f92672",warning:"#fd971f",success:"#a6e22e"}},ayu:{light:{primary:"#399ee6",secondary:"#86b300",background:"#fafafa",surface:"#f3f4f5",text:"#5c6166",textPrimary:"#5c6166",textLight:"#5c6166",textSecondary:"#5c6166",border:"#e7eaed",code:"#a37acc",codeBackground:"#f3f4f5",link:"#399ee6",linkHover:"#4cbf99",error:"#f07178",warning:"#ff8f40",success:"#86b300"},dark:{primary:"#39bae6",secondary:"#95e6cb",background:"#0b0e14",surface:"#11151c",text:"#b3b1ad",textPrimary:"#e6e1cf",textLight:"#4d5566",textSecondary:"#626a73",border:"#1e232a",code:"#d4bfff",codeBackground:"#11151c",link:"#39bae6",linkHover:"#95e6cb",error:"#f28779",warning:"#ffb454",success:"#bae67e"}},catppuccin:{light:{primary:"#1e66f5",secondary:"#179299",background:"#eff1f5",surface:"#e6e9ef",text:"#4c4f69",textPrimary:"#4c4f69",textLight:"#6c6f85",textSecondary:"#6c6f85",border:"#bcc0cc",code:"#8839ef",codeBackground:"#e6e9ef",link:"#1e66f5",linkHover:"#04a5e5",error:"#d20f39",warning:"#df8e1d",success:"#40a02b"},dark:{primary:"#89b4fa",secondary:"#94e2d5",background:"#1e1e2e",surface:"#313244",text:"#cdd6f4",textPrimary:"#cdd6f4",textLight:"#a6adc8",textSecondary:"#a6adc8",border:"#45475a",code:"#cba6f7",codeBackground:"#313244",link:"#89b4fa",linkHover:"#94e2d5",error:"#f38ba8",warning:"#fab387",success:"#a6e3a1"}},tokyo:{light:{primary:"#3d59a1",secondary:"#006a83",background:"#d5d6db",surface:"#e1e2e7",text:"#0d2258",textPrimary:"#0d2258",textLight:"#5c5f69",textSecondary:"#5c5f69",border:"#a8adb7",code:"#5a4a78",codeBackground:"#e1e2e7",link:"#3d59a1",linkHover:"#634da0",error:"#8c4351",warning:"#8f5e15",success:"#485e30"},dark:{primary:"#7aa2f7",secondary:"#7dcfff",background:"#1a1b26",surface:"#24283b",text:"#c0caf5",textPrimary:"#c0caf5",textLight:"#565f89",textSecondary:"#565f89",border:"#414868",code:"#bb9af7",codeBackground:"#24283b",link:"#7aa2f7",linkHover:"#7dcfff",error:"#f7768e",warning:"#e0af68",success:"#9ece6a"}}};function _(n,e){const t=K[n];return t?t[e]:K.default[e]}function O(n,e){const t=U[n];if(!t)throw new Error(`Unknown theme: ${n}`);return{name:`${n}-${e}`,colors:t[e],fonts:{body:_(n,"body"),heading:_(n,"heading"),code:_(n,"code")},spacing:{unit:8,containerMaxWidth:"1200px",sidebarWidth:"320px"},borderRadius:n==="material"?"0.25rem":"0.5rem"}}function y(n){return n.replace(/-(light|dark)$/,"")}function S(n){return n.endsWith("-dark")?"dark":"light"}function Y(n,e,t){if(typeof n=="object"&&e===void 0&&t===void 0){const r=n;let o="default",i="light";if(r.name){const s=y(r.name);Object.keys(U).includes(s)?(o=s,i=S(r.name)):(r.name==="dark"||r.name.includes("-dark"))&&(o="default",i="dark")}const a=O(o,i);return{...a,...r,name:r.name||`${o}-${i}`,colors:{...a.colors,...r.colors||{}},fonts:{...a.fonts,...r.fonts||{}},spacing:{...a.spacing,...r.spacing||{}}}}if(typeof n=="string"&&e&&t){const r=n,o=O(r,e);return{...o,...t,name:t.name||`${r}-${e}`,colors:{...o.colors,...t.colors||{}},fonts:{...o.fonts,...t.fonts||{}},spacing:{...o.spacing,...t.spacing||{}}}}throw new Error("Invalid arguments to createCustomTheme. Use either createCustomTheme(overrides) or createCustomTheme(baseName, mode, overrides)")}const M=Object.keys(U).reduce((n,e)=>{const t=e;return n[t]={light:O(t,"light"),dark:O(t,"dark")},n},{});function J(){const n=[];return Object.keys(M).forEach(e=>{const t=M[e];n.push(t.light),n.push(t.dark)}),n}function Me(){return Object.keys(M)}function X(n,e){const{colors:t,fonts:r,spacing:o,borderRadius:i}=n,a=o.unit;return`
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
    .mdv-mobile-toggle {
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
      max-width: ${o.sidebarWidth};
      min-width: 240px;
      background-color: ${t.surface};
      border-right: 1px solid ${t.border};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      flex-shrink: 0;
    }

    .mdv-search-wrapper {
      padding: ${a*2}px ${a*2}px ${a*1.5}px;
      border-bottom: 1px solid ${t.border};
      background-color: ${t.surface};
    }

    .mdv-search-input {
      width: 100%;
      padding: ${a*1.5}px ${a*2}px;
      border: 1px solid ${t.border};
      border-radius: ${i};
      background-color: ${t.background};
      color: ${t.textPrimary};
      font-size: 0.9rem;
      font-family: ${r.body};
      transition: all 0.2s ease;
    }

    .mdv-search-input {
      outline: none;
      border-color: ${t.primary};
      box-shadow: 0 0 0 2px ${t.primary}20;
    }

    .mdv-search-input::placeholder {
      color: ${t.textSecondary};
    }

    /* Search Results */
    .mdv-search-results {
      background-color: ${t.background};
      border: 1px solid ${t.border};
      border-top: none;
      border-radius: 0 0 ${i} ${i};
      max-height: 300px;
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1000;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .mdv-search-result {
      padding: ${a*1.5}px ${a*2}px;
      border-bottom: 1px solid ${t.border};
      cursor: pointer;
      transition: background-color 0.15s ease;
    }

    .mdv-search-result:last-child {
      border-bottom: none;
    }

    .mdv-search-result:hover {
      background-color: ${t.primary}10;
    }

    .mdv-search-result-title {
      font-weight: 600;
      color: ${t.textPrimary};
      margin-bottom: 4px;
    }

    .mdv-search-result-content {
      font-size: 0.8rem;
      color: ${t.textSecondary};
      line-height: 1.4;
    }

    .mdv-search-highlight {
      background-color: ${t.warning}40;
      font-weight: 600;
      padding: 1px 2px;
      border-radius: 2px;
    }

    /* Navigation */
    .mdv-navigation {
      flex: 1;
      overflow-y: auto;
      padding: ${a*1.5}px 0;
    }

    .mdv-nav-section {
      margin-bottom: ${a*3}px;
    }

    .mdv-nav-section:last-child {
      margin-bottom: ${a*1.5}px;
    }

    .mdv-nav-heading {
      font-family: ${r.heading};
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: ${t.textSecondary};
      margin: 0 0 ${a}px 0;
      padding: 0 ${a*2}px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      user-select: none;
    }

    .mdv-nav-heading .mdv-nav-toggle {
      font-size: 0.7rem;
      opacity: 0.7;
      transition: transform 0.2s ease;
    }

    .mdv-nav-heading.collapsed .mdv-nav-toggle {
      transform: rotate(-90deg);
    }

    .mdv-nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .mdv-nav-list.collapsed {
      display: none;
    }

    .mdv-nav-item {
      margin: 0;
    }

    .mdv-nav-link {
      display: block;
      padding: ${a}px ${a*2}px;
      color: ${t.textSecondary};
      text-decoration: none;
      border-radius: 0;
      transition: all 0.15s ease;
      font-size: 0.9rem;
      line-height: 1.4;
      position: relative;
      border-left: 3px solid transparent;
    }

    .mdv-nav-link:hover {
      background-color: ${t.primary}08;
      color: ${t.textPrimary};
      border-left-color: ${t.primary}40;
    }

    .mdv-nav-link.active {
      background-color: ${t.primary}15;
      color: ${t.primary};
      font-weight: 600;
      border-left-color: ${t.primary};
    }

    .mdv-nav-description {
      font-size: 0.8rem;
      color: ${t.textLight};
      margin-top: 2px;
      display: block;
      font-weight: 400;
    }

    /* Content Area */
    .mdv-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: ${t.background};
    }

    .mdv-content-wrapper {
      flex: 1;
      overflow-y: auto;
      padding: ${a*4}px;
    }

    .mdv-content-inner {
      max-width: 800px;
      margin: 0 auto;
      width: 100%;
    }

    /* Document Content */
    .mdv-document {
      line-height: 1.7;
      color: ${t.text};
    }

    .mdv-document h1 {
      font-family: ${r.heading};
      font-size: 2.5rem;
      font-weight: 700;
      color: ${t.textPrimary};
      margin: 0 0 ${a*3}px 0;
      line-height: 1.2;
      border-bottom: 2px solid ${t.border};
      padding-bottom: ${a*2}px;
    }

    .mdv-document h2 {
      font-family: ${r.heading};
      font-size: 2rem;
      font-weight: 600;
      color: ${t.textPrimary};
      margin: ${a*4}px 0 ${a*2}px 0;
      line-height: 1.3;
    }

    .mdv-document h3 {
      font-family: ${r.heading};
      font-size: 1.5rem;
      font-weight: 600;
      color: ${t.textPrimary};
      margin: ${a*3}px 0 ${a*2}px 0;
      line-height: 1.4;
    }

    .mdv-document h4 {
      font-family: ${r.heading};
      font-size: 1.25rem;
      font-weight: 600;
      color: ${t.textPrimary};
      margin: ${a*3}px 0 ${a}px 0;
      line-height: 1.4;
    }

    .mdv-document h5 {
      font-family: ${r.heading};
      font-size: 1.125rem;
      font-weight: 600;
      color: ${t.textPrimary};
      margin: ${a*2}px 0 ${a}px 0;
      line-height: 1.5;
    }

    .mdv-document h6 {
      font-family: ${r.heading};
      font-size: 1rem;
      font-weight: 600;
      color: ${t.textSecondary};
      margin: ${a*2}px 0 ${a}px 0;
      line-height: 1.5;
    }

    .mdv-document p {
      margin: 0 0 ${a*2}px 0;
      line-height: 1.7;
      color: ${t.text};
    }

    .mdv-document ul, 
    .mdv-document ol {
      margin: 0 0 ${a*2}px 0;
      padding-left: ${a*3}px;
      color: ${t.text};
    }

    .mdv-document li {
      margin-bottom: ${a/2}px;
      line-height: 1.7;
    }

    .mdv-document blockquote {
      margin: ${a*3}px 0;
      padding: ${a*2}px ${a*3}px;
      background-color: ${t.surface};
      border-left: 4px solid ${t.primary};
      border-radius: 0 ${i} ${i} 0;
      font-style: italic;
      color: ${t.textSecondary};
    }

    .mdv-document blockquote p {
      margin: 0;
    }

    /* Code Blocks */
    .mdv-document pre,
    .mdv-document code {
      font-family: ${r.code};
      font-size: 0.9em;
    }

    .mdv-document code {
      background-color: ${t.codeBackground};
      color: ${t.code};
      padding: 2px ${a/2}px;
      border-radius: ${i};
      font-weight: 500;
    }

    .mdv-document pre {
      background-color: ${t.codeBackground};
      color: ${t.text};
      padding: ${a*2}px ${a*3}px;
      border-radius: ${i};
      overflow-x: auto;
      margin: ${a*2}px 0;
      line-height: 1.5;
      border: 1px solid ${t.border};
    }

    .mdv-document pre code {
      background: none;
      padding: 0;
      color: inherit;
      font-weight: normal;
    }

    /* Links */
    .mdv-document a {
      color: ${t.link};
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: all 0.15s ease;
    }

    .mdv-document a:hover {
      color: ${t.linkHover};
      border-bottom-color: ${t.linkHover};
    }

    /* Tables */
    .mdv-document table {
      width: 100%;
      border-collapse: collapse;
      margin: ${a*3}px 0;
      background-color: ${t.surface};
      border-radius: ${i};
      overflow: hidden;
      box-shadow: 0 1px 3px ${t.border}60;
    }

    .mdv-document th,
    .mdv-document td {
      padding: ${a*2}px ${a*3}px;
      text-align: left;
      border-bottom: 1px solid ${t.border};
    }

    .mdv-document th {
      background-color: ${t.primary}10;
      font-family: ${r.heading};
      font-weight: 600;
      color: ${t.textPrimary};
    }

    .mdv-document tr:last-child td {
      border-bottom: none;
    }

    /* Images */
    .mdv-document img {
      max-width: 100%;
      height: auto;
      border-radius: ${i};
      margin: ${a*2}px 0;
      box-shadow: 0 2px 8px ${t.border}40;
    }

    /* Horizontal Rule */
    .mdv-document hr {
      border: none;
      height: 1px;
      background-color: ${t.border};
      margin: ${a*4}px 0;
    }

    /* Table of Contents */
    .mdv-toc {
      background-color: ${t.surface};
      border: 1px solid ${t.border};
      border-radius: ${i};
      padding: ${a*2}px 0;
      margin-bottom: ${a*3}px;
      position: sticky;
      top: ${a*2}px;
    }

    .mdv-toc-title {
      font-family: ${r.heading};
      font-weight: 600;
      color: ${t.textPrimary};
      margin: 0 0 ${a*2}px 0;
      padding: 0 ${a*2}px;
      font-size: 1rem;
    }

    .mdv-toc-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .mdv-toc-item {
      margin: 0;
    }

    .mdv-toc-link {
      display: block;
      padding: ${a/2}px ${a*2}px;
      color: ${t.textSecondary};
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.15s ease;
      border-left: 3px solid transparent;
    }

    .mdv-toc-link:hover {
      color: ${t.textPrimary};
      background-color: ${t.border}30;
    }

    .mdv-toc-link.active {
      color: ${t.primary};
      border-left-color: ${t.primary};
      background-color: ${t.primary}10;
    }

    .mdv-toc-level-2 { padding-left: ${a*3}px; }
    .mdv-toc-level-3 { padding-left: ${a*4}px; }
    .mdv-toc-level-4 { padding-left: ${a*5}px; }
    .mdv-toc-level-5 { padding-left: ${a*6}px; }
    .mdv-toc-level-6 { padding-left: ${a*7}px; }

    /* Loading States */
    .mdv-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${a*5}px;
      color: ${t.textSecondary};
      flex-direction: column;
      gap: ${a*2}px;
    }

    .mdv-spinner {
      width: 32px;
      height: 32px;
      border: 3px solid ${t.border};
      border-top: 3px solid ${t.primary};
      border-radius: 50%;
      animation: mdv-spin 1s linear infinite;
    }

    @keyframes mdv-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    /* Error States */
    .mdv-error {
      background-color: ${t.error}10;
      border: 1px solid ${t.error}40;
      border-radius: ${i};
      padding: ${a*3}px;
      color: ${t.error};
      margin: ${a*2}px 0;
    }

    .mdv-error-title {
      font-weight: 600;
      margin-bottom: ${a}px;
    }

    /* Theme Switcher */
    .mdv-theme-switcher {
      position: relative;
      display: inline-block;
    }

    .mdv-theme-trigger {
      background: ${t.surface};
      border: 1px solid ${t.border};
      border-radius: ${i};
      padding: ${a}px ${a*2}px;
      color: ${t.textPrimary};
      cursor: pointer;
      font-size: 0.9rem;
      font-family: ${r.body};
      display: flex;
      align-items: center;
      gap: ${a}px;
      transition: all 0.15s ease;
      min-width: 120px;
      justify-content: space-between;
    }

    .mdv-theme-trigger:hover {
      background: ${t.border}40;
      border-color: ${t.primary}60;
    }

    .mdv-theme-trigger:focus {
      outline: none;
      border-color: ${t.primary};
      box-shadow: 0 0 0 2px ${t.primary}20;
    }

    .mdv-theme-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      margin-top: ${a/2}px;
      background: ${t.surface};
      border: 1px solid ${t.border};
      border-radius: ${i};
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      min-width: 200px;
      z-index: 1000;
      max-height: 300px;
      overflow-y: auto;
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      transition: all 0.2s ease;
    }

    .mdv-theme-dropdown.show {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .mdv-theme-option {
      padding: ${a*1.5}px ${a*2}px;
      cursor: pointer;
      border-bottom: 1px solid ${t.border};
      transition: background-color 0.15s ease;
      display: flex;
      align-items: center;
      gap: ${a}px;
      font-size: 0.9rem;
    }

    .mdv-theme-option:last-child {
      border-bottom: none;
    }

    .mdv-theme-option:hover {
      background-color: ${t.primary}10;
    }

    .mdv-theme-option.active {
      background-color: ${t.primary}15;
      color: ${t.primary};
      font-weight: 600;
    }

    .mdv-theme-preview {
      width: 16px;
      height: 16px;
      border-radius: 3px;
      border: 1px solid ${t.border};
      flex-shrink: 0;
    }

    /* Dark Mode Toggle */
    .mdv-dark-mode-toggle {
      display: flex;
      align-items: center;
      gap: ${a}px;
      background: ${t.surface};
      border: 1px solid ${t.border};
      border-radius: ${i};
      padding: ${a}px ${a*1.5}px;
      cursor: pointer;
      transition: all 0.15s ease;
      font-size: 0.9rem;
      color: ${t.textPrimary};
      font-family: ${r.body};
    }

    .mdv-dark-mode-toggle:hover {
      background: ${t.border}40;
      border-color: ${t.primary}60;
    }

    .mdv-dark-mode-toggle:focus {
      outline: none;
      border-color: ${t.primary};
      box-shadow: 0 0 0 2px ${t.primary}20;
    }

    .mdv-dark-toggle-icon {
      font-size: 1rem;
      transition: transform 0.2s ease;
    }

    .mdv-dark-toggle-label {
      user-select: none;
      font-weight: 500;
    }

    /* Responsive Utilities */
    .mdv-hidden {
      display: none !important;
    }

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

    /* Focus Styles */
    .mdv-app :focus {
      outline: 2px solid ${t.primary};
      outline-offset: 2px;
    }

    .mdv-app :focus:not(:focus-visible) {
      outline: none;
    }

    /* Print Styles */
    @media print {
      .mdv-sidebar,
      .mdv-header-actions,
      .mdv-search-wrapper {
        display: none !important;
      }

      .mdv-layout {
        display: block;
      }

      .mdv-content {
        padding: 0;
      }

      .mdv-document {
        max-width: none;
      }
    }
  `}function Ze(n,e){return`
    /* Mobile Styles */
    @media (max-width: 1024px) {
      .mdv-header-actions .mdv-dark-toggle-label {
        display: none;
      }
      
      .mdv-header-actions .mdv-theme-trigger {
        min-width: auto;
        padding: 6px 8px;
      }
      
      .mdv-theme-trigger .mdv-theme-name {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .mdv-app {
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      
      .mdv-mobile-toggle {
        display: flex;
      }
      
      .mdv-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 280px;
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
      }
      
      .mdv-sidebar.show {
        transform: translateX(0);
      }
      
      .mdv-layout {
        width: 100%;
      }
      
      .mdv-content {
        width: 100%;
        margin-left: 0;
      }
      
      .mdv-content-wrapper {
        padding: ${n.spacing.unit*2}px ${n.spacing.unit*2}px;
      }
      
      .mdv-document h1 {
        font-size: 2rem;
      }
      
      .mdv-document h2 {
        font-size: 1.5rem;
      }
      
      .mdv-document h3 {
        font-size: 1.25rem;
      }
      
      .mdv-theme-dropdown {
        right: auto;
        left: 0;
        width: 100%;
        max-width: 280px;
      }
      
      .mdv-document table {
        font-size: 0.9rem;
        display: block;
        overflow-x: auto;
        white-space: nowrap;
      }
      
      .mdv-document th,
      .mdv-document td {
        padding: ${n.spacing.unit}px ${n.spacing.unit*1.5}px;
      }
      
      .mdv-toc {
        position: static;
      }
    }

    @media (max-width: 640px) {
      .mdv-header {
        padding: ${n.spacing.unit}px ${n.spacing.unit*2}px;
      }
      
      .mdv-title {
        font-size: 1.25rem;
      }
      
      .mdv-content-wrapper {
        padding: ${n.spacing.unit*2}px ${n.spacing.unit}px;
      }
      
      .mdv-document h1 {
        font-size: 1.75rem;
      }
      
      .mdv-document h2 {
        font-size: 1.375rem;
      }
      
      .mdv-document pre {
        padding: ${n.spacing.unit}px ${n.spacing.unit*2}px;
        font-size: 0.8rem;
      }
      
      .mdv-header-actions {
        gap: ${n.spacing.unit}px;
      }
      
      .mdv-sidebar {
        width: 100vw;
      }
    }

    /* Landscape phones and portrait tablets */
    @media (max-width: 1024px) and (orientation: landscape) {
      .mdv-header {
        min-height: 50px;
      }
      
      .mdv-content-wrapper {
        padding: ${n.spacing.unit*2}px ${n.spacing.unit*3}px;
      }
    }

    /* High DPI displays */
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      .mdv-document img {
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
      }
    }
  `}function We(n,e){const t=X(n,e),r=Ze(n,e);return`${t}

${r}`}function Ge(n){const e=n.colors.primary,t=n.colors.background,r=n.colors.text;return{primary:e,primaryRgb:be(e),background:t,backgroundRgb:be(t),text:r,textRgb:be(r)}}function be(n){const e=n.replace("#",""),t=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),o=parseInt(e.substring(4,6),16);return`${t}, ${r}, ${o}`}function Be(n,e){const t=Ge(n),r=document.documentElement;Object.entries(t).forEach(([o,i])=>{r.style.setProperty(`--mdv-${o}`,i)}),e&&e()}const Qe={primary:"#3b82f6",secondary:"#10b981",accent:"#8b5cf6",background:"#ffffff",surface:"#f3f4f6",text:"#111827",textPrimary:"#111827",textSecondary:"#6b7280",textLight:"#9ca3af",border:"#e5e7eb",error:"#ef4444",warning:"#f59e0b",success:"#10b981",info:"#3b82f6",link:"#3b82f6",linkHover:"#2563eb",code:"#8b5cf6",codeBackground:"#f1f5f9"};class ve{constructor(e={}){this.themes=new Map,this.currentTheme=null,this.onThemeChangeCallbacks=new Set,this.storageKey=e.storageKey||"mdv-theme",this.enablePersistence=e.enablePersistence!==!1,this.onThemeChange=e.onThemeChange,this.registerBuiltinThemes(),this.initializeDefaultTheme()}registerBuiltinThemes(){J().forEach(e=>{this.themes.set(e.name,e)})}initializeDefaultTheme(){let e=null;if(this.enablePersistence)try{const t=localStorage.getItem(this.storageKey);t&&(e=this.themes.get(t))}catch{}e||(e=this.themes.get("default-light")),e&&this.setTheme(e.name)}setTheme(e){let t;if(typeof e=="string"?t=this.themes.get(e):typeof e=="object"&&e.name&&(t=e),!t){console.warn(`Theme "${e}" not found, using default theme`),t=this.themes.get("default-light");return}this.currentTheme=t,this.enablePersistence&&this.persistTheme(t.name),this.onThemeChangeCallbacks.forEach(r=>{try{r(t)}catch(o){console.error("Error in theme change callback:",o)}}),this.onThemeChange?.(t)}persistTheme(e){try{localStorage.setItem(this.storageKey,e)}catch(t){console.warn("Failed to persist theme:",t)}}getCurrentTheme(){return this.currentTheme}getTheme(e){return this.themes.get(e)||null}getAllThemes(){return Array.from(this.themes.values())}getAvailableThemes(){const e=new Map;return this.themes.forEach(t=>{const r=y(t.name);e.has(r)||e.set(r,{name:r,light:null,dark:null}),S(t.name)==="light"?e.get(r).light=t:e.get(r).dark=t}),Array.from(e.values()).filter(t=>t.light&&t.dark)}registerTheme(e){this.themes.set(e.name,e)}onThemeChanged(e){this.onThemeChangeCallbacks.add(e)}offThemeChanged(e){this.onThemeChangeCallbacks.delete(e)}}class We{constructor(e,t={}){this.themeManager=e,this.options={position:"header",showPreview:!0,showDescription:!1,allowCustomThemes:!0,...t},this.element=null,this.dropdown=null,this.isOpen=!1,this.createElement(),this.setupEventListeners()}createElement(){this.element=document.createElement("div"),this.element.className="mdv-theme-switcher",this.element.innerHTML=`
      <button class="mdv-theme-trigger" aria-haspopup="true" aria-expanded="false">
        <span class="mdv-theme-icon">🎨</span>
        <span class="mdv-theme-name">${this.getThemeDisplayName()}</span>
        <span class="mdv-theme-arrow">▼</span>
      </button>
      <div class="mdv-theme-dropdown">
        ${this.renderThemeOptions()}
      </div>
    `,this.dropdown=this.element.querySelector(".mdv-theme-dropdown")}getThemeDisplayName(){const e=this.themeManager.getCurrentTheme();if(!e)return"Theme";const t=y(e.name),r=S(e.name);return`${t.charAt(0).toUpperCase()+t.slice(1)} ${r.charAt(0).toUpperCase()+r.slice(1)}`}renderThemeOptions(){const e=this.themeManager.getAvailableThemes(),t=this.themeManager.getCurrentTheme(),r=t?y(t.name):"default",o=t?S(t.name):"light";return e.map(i=>`
        <div class="mdv-theme-group">
          <div class="mdv-theme-option ${r===i.name?"active":""}"
               data-theme="${i.light.name}"
               data-mode="light">
            <div class="mdv-theme-preview" style="background-color: ${i.light.colors.primary}"></div>
            <span>${i.name.charAt(0).toUpperCase()+i.name.slice(1)} Light</span>
          </div>
          <div class="mdv-theme-option ${r===i.name&&o==="dark"?"active":""}"
               data-theme="${i.dark.name}"
               data-mode="dark">
            <div class="mdv-theme-preview" style="background-color: ${i.dark.colors.primary}"></div>
            <span>${i.name.charAt(0).toUpperCase()+i.name.slice(1)} Dark</span>
          </div>
        </div>
      `).join("")}setupEventListeners(){const e=this.element.querySelector(".mdv-theme-trigger");e?.addEventListener("click",()=>this.toggle()),this.element.addEventListener("click",t=>{const r=t.target.closest(".mdv-theme-option");if(r){const o=r.dataset.theme;o&&(this.themeManager.setTheme(o),this.updateUI(),this.close())}}),document.addEventListener("click",t=>{this.element.contains(t.target)||this.close()}),this.themeManager.onThemeChanged(()=>{this.updateUI()})}toggle(){this.isOpen?this.close():this.open()}open(){this.isOpen||(this.isOpen=!0,this.dropdown?.classList.add("show"),this.element.querySelector(".mdv-theme-trigger")?.setAttribute("aria-expanded","true"))}close(){this.isOpen&&(this.isOpen=!1,this.dropdown?.classList.remove("show"),this.element.querySelector(".mdv-theme-trigger")?.setAttribute("aria-expanded","false"))}updateUI(){const e=this.element.querySelector(".mdv-theme-name");e&&(e.textContent=this.getThemeDisplayName());const t=this.element.querySelector(".mdv-theme-dropdown");t&&(t.innerHTML=this.renderThemeOptions())}render(){return this.element.outerHTML}getStyles(){return`
      .mdv-theme-group {
        border-bottom: 1px solid var(--mdv-border, #e5e7eb);
      }
      
      .mdv-theme-group:last-child {
        border-bottom: none;
      }
    `}}class Ge{constructor(e,t={}){this.themeManager=e,this.options={position:"header",showLabel:!0,compact:!1,onToggle:null,...t},this.element=null,this.isDark=!1,this.createElement(),this.setupEventListeners(),this.updateFromCurrentTheme()}createElement(){const e=this.options.compact?"":this.options.showLabel?`<span class="mdv-dark-toggle-label">${this.isDark?"Dark":"Light"}</span>`:"";this.element=document.createElement("button"),this.element.className="mdv-dark-mode-toggle",this.element.innerHTML=`
      <span class="mdv-dark-toggle-icon">${this.isDark?"🌙":"☀️"}</span>
      ${e}
    `,this.element.setAttribute("aria-label",`Switch to ${this.isDark?"light":"dark"} mode`),this.element.setAttribute("title",`Switch to ${this.isDark?"light":"dark"} mode`)}updateFromCurrentTheme(){const e=this.themeManager.getCurrentTheme();e&&(this.isDark=e.name.includes("-dark"),this.updateUI())}setupEventListeners(){this.element?.addEventListener("click",()=>this.toggle()),this.themeManager.onThemeChanged(e=>{this.isDark=e.name.includes("-dark"),this.updateUI()})}toggle(){const e=this.themeManager.getCurrentTheme();if(!e)return;const t=y(e.name),r=this.isDark?"light":"dark",o=`${t}-${r}`,i=this.themeManager.getTheme(o);i&&(this.themeManager.setTheme(i.name),this.options.onToggle?.(r==="dark",i))}updateUI(){if(!this.element)return;const e=this.element.querySelector(".mdv-dark-toggle-icon"),t=this.element.querySelector(".mdv-dark-toggle-label");e&&(e.textContent=this.isDark?"🌙":"☀️"),t&&(t.textContent=this.isDark?"Dark":"Light"),this.element.setAttribute("aria-label",`Switch to ${this.isDark?"light":"dark"} mode`),this.element.setAttribute("title",`Switch to ${this.isDark?"light":"dark"} mode`)}render(){return this.element?.outerHTML||""}getStyles(){return`
      .mdv-dark-mode-toggle {
        user-select: none;
      }
      
      .mdv-dark-toggle-icon {
        flex-shrink: 0;
      }
    `}}function be(n){const e=document.getElementById("mdv-mobile-backdrop");if(n){if(e)return;const t=document.createElement("div");t.id="mdv-mobile-backdrop",t.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        opacity: 0;
        transition: opacity 0.3s ease;
      `,document.body.appendChild(t),requestAnimationFrame(()=>{t.style.opacity="1"}),t.addEventListener("click",()=>{const r=document.querySelector(".mdv-sidebar");r?.classList.remove("show"),Be(!1)})}else e&&(e.style.opacity="0",setTimeout(()=>{e.remove()},300))}function Be(n){be(n)}class Qe{constructor(e,t,r={}){this.container=e,this.documents=t,this.options={placeholder:"Search documents...",caseSensitive:!1,fuzzySearch:!0,searchInContent:!0,maxResults:10,debounceDelay:150,...r},this.searchIndex=[],this.element=null,this.isOpen=!1,this.currentQuery="",this.results=[],this.debounceTimer=null,this.selectedIndex=-1,this.onSelectCallback=null,this.buildSearchIndex(),this.createElement(),this.setupEventListeners()}buildSearchIndex(){this.searchIndex=this.documents.map(e=>({document:e,searchableText:this.createSearchableText(e)}))}createSearchableText(e){const t=[];return t.push(e.title||""),(e.description||e.subtitle)&&t.push(e.description||e.subtitle||""),e.tags&&Array.isArray(e.tags)&&t.push(...e.tags),e.category&&t.push(e.category),this.options.searchInContent&&e.content&&t.push(e.content.replace(/[#*`]/g,"").substring(0,500)),t.join(" ").toLowerCase()}createElement(){this.element=document.createElement("div"),this.element.className="mdv-search-wrapper",this.element.innerHTML=`
      <div class="mdv-search-container">
        <input 
          type="text" 
          class="mdv-search-input" 
          placeholder="${this.options.placeholder}"
          aria-label="Search documents"
          autocomplete="off"
          spellcheck="false"
        />
        <div class="mdv-search-results" style="display: none;"></div>
      </div>
    `,this.container.appendChild(this.element)}setupEventListeners(){const e=this.element.querySelector(".mdv-search-input");e&&(e.addEventListener("input",t=>this.handleInput(t)),e.addEventListener("keydown",t=>this.handleKeyDown(t)),e.addEventListener("focus",()=>this.handleFocus()),e.addEventListener("blur",t=>this.handleBlur(t))),document.addEventListener("click",t=>{this.element.contains(t.target)||this.close()})}handleInput(e){const t=e.target.value;this.currentQuery=t,this.debounceTimer&&clearTimeout(this.debounceTimer),this.debounceTimer=setTimeout(()=>{this.performSearch(t)},this.options.debounceDelay)}handleKeyDown(e){if(!this.isOpen){e.key==="Enter"&&this.currentQuery&&this.performSearch(this.currentQuery);return}switch(e.key){case"ArrowDown":e.preventDefault(),this.selectedIndex=Math.min(this.selectedIndex+1,this.results.length-1),this.updateSelection();break;case"ArrowUp":e.preventDefault(),this.selectedIndex=Math.max(this.selectedIndex-1,-1),this.updateSelection();break;case"Enter":e.preventDefault(),this.selectedIndex>=0&&this.selectedIndex<this.results.length&&this.selectResult(this.results[this.selectedIndex]);break;case"Escape":e.preventDefault(),this.close();break}}handleFocus(){this.currentQuery&&this.results.length>0&&this.open()}handleBlur(e){setTimeout(()=>{this.element.contains(document.activeElement)||this.close()},150)}performSearch(e){if(!e.trim()){this.results=[],this.close();return}this.results=this.searchDocuments(e),this.results.length>0?this.showResults():this.close()}searchDocuments(e){const t=e.toLowerCase().trim();if(!t)return[];let r=this.searchIndex.filter(a=>this.matchesQuery(a.searchableText,t)).map(a=>a.document);return this.options.maxResults&&(r=r.slice(0,this.options.maxResults)),r}matchesQuery(e,t){return this.options.fuzzySearch?this.fuzzyMatch(e,t):this.options.caseSensitive?e.includes(t):e.toLowerCase().includes(t)}fuzzyMatch(e,t){let r=0;const o=e.toLowerCase(),i=t.toLowerCase();for(let a=0;a<i.length;a++){const s=o.indexOf(i[a],r);if(s===-1)return!1;r=s+1}return!0}showResults(){const e=this.element.querySelector(".mdv-search-results");if(!e)return;e.innerHTML=this.results.map((t,r)=>this.renderResult(t,r)).join(""),e.style.display="block",this.selectedIndex=-1,this.isOpen=!0}renderResult(e,t){const r=this.highlightMatch(e.title||"Untitled",this.currentQuery),o=e.description||e.subtitle?", this.currentQuery):"";}return`
      <div class="mdv-search-result" data-index="${t}">
        <div class="mdv-search-result-title">${r}</div>
        ${o?`<div class="mdv-search-result-content">${o}</div>`:""}
      </div>
    `}highlightMatch(e,t){if(!t)return e;const r=new RegExp(`(${t})`,"gi");return e.replace(r,'<span class="mdv-search-highlight">$1</span>')}updateSelection(){const e=this.element.querySelectorAll(".mdv-search-result");e.forEach((t,r)=>{t.classList.toggle("selected",r===this.selectedIndex)})}selectResult(e){this.onSelectCallback?.(e),this.close()}open(){this.isOpen=!0;const e=this.element.querySelector(".mdv-search-results");e&&(e.style.display="block")}close(){this.isOpen=!1,this.selectedIndex=-1;const e=this.element.querySelector(".mdv-search-results");e&&(e.style.display="none")}onSelect(e){this.onSelectCallback=e}updateDocuments(e){this.documents=e,this.buildSearchIndex(),this.currentQuery&&this.performSearch(this.currentQuery)}getElement(){return this.element}destroy(){this.debounceTimer&&clearTimeout(this.debounceTimer),this.element?.remove()}}class Ue{constructor(e){this.config=e,this.loadingPromises=new Map,this.cache=new Map,this.abortControllers=new Map,this.maxCacheSize=50}async loadDocument(e){const t=this.getCacheKey(e);if(this.cache.has(t))return this.cache.get(t);if(this.loadingPromises.has(t))return this.loadingPromises.get(t);const r=this.fetchDocument(e);return this.loadingPromises.set(t,r),r.finally(()=>{this.loadingPromises.delete(t)}),r}async fetchDocument(e){const t=this.getCacheKey(e);this.abortControllers.has(t)&&this.abortControllers.get(t).abort();const r=new AbortController;this.abortControllers.set(t,r);try{const o=await this.loadFromSource(e,r.signal);return this.cacheDocument(t,o),o}catch(o){if(o.name==="AbortError")throw o;throw console.error(`Failed to load document ${e.id}:`,o),new Error(`Failed to load document: ${o.message}`)}finally{this.abortControllers.delete(t)}}async loadFromSource(e,t){const{source:r}=this.config;switch(r.type){case"local":return this.loadLocalDocument(e,t);case"url":return this.loadUrlDocument(e,t);case"github":return this.loadGithubDocument(e,t);case"content":return this.loadContentDocument(e);default:throw new Error(`Unsupported source type: ${r.type}`)}}async loadLocalDocument(e,t){const r=this.config.source;if(r.type!=="local")throw new Error("Invalid source type");const o=`${r.basePath}/${e.file}`.replace(/\/+/g,"/"),i=await fetch(o,{signal:t});if(!i.ok)throw new Error(`HTTP ${i.status}: ${i.statusText}`);return await i.text()}async loadUrlDocument(e,t){const r=this.config.source;if(r.type!=="url")throw new Error("Invalid source type");const o=`${r.baseUrl}/${e.file}`.replace(/([^:]\/)\/+/g,"$1"),i={signal:t,...r.headers&&{headers:r.headers}},a=await fetch(o,i);if(!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);return await a.text()}async loadGithubDocument(e,t){const r=`https://raw.githubusercontent.com/${e.file}`,o=await fetch(r,{signal:t});if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);return await o.text()}async loadContentDocument(e){return e.content||""}getCacheKey(e){return`${e.id}_${e.file||""}_${JSON.stringify(e)}`}cacheDocument(e,t){this.cache.size>=this.maxCacheSize&&this.evictOldestCache(),this.cache.set(e,{content:t,timestamp:Date.now()})}evictOldestCache(){let e=null,t=1/0;for(const[r,o]of this.cache.entries())o.timestamp<t&&(t=o.timestamp,e=r);e&&this.cache.delete(e)}clearCache(){this.cache.clear()}abortAll(){this.abortControllers.forEach(e=>e.abort()),this.abortControllers.clear()}}class Je{constructor(e,t={}){this.container=e,this.documents=t.documents||[],this.options={showCategories:!0,showDescription:!0,sortBy:"order",...t},this.element=null,this.currentDocument=null,this.onSelectCallback=null,this.createElement(),this.render()}createElement(){this.element=document.createElement("div"),this.element.className="mdv-navigation",this.container.appendChild(this.element)}render(){const e=this.groupDocuments(),t=Object.entries(e).map(([r,o])=>this.renderCategory(r,o)).join("");this.element.innerHTML=t,this.setupEventListeners()}groupDocuments(){if(!this.options.showCategories)return{Documents:this.documents};const e={};return this.documents.forEach(t=>{const r=t.category||"Documents";e[r]||(e[r]=[]),e[r].push(t)}),Object.keys(e).forEach(t=>{e[t]=this.sortDocuments(e[t])}),e}sortDocuments(e){const t=this.options.sortBy;return t==="title"?e.sort((r,o)=>(r.title||"").localeCompare(o.title||"")):t==="date"&&"date"in e[0]?e.sort((r,o)=>new Date(o.date).getTime()-new Date(r.date).getTime()):e.sort((r,o)=>(r.order||0)-(o.order||0))}renderCategory(e,t){const r=`mdv-nav-section-${e.replace(/\s+/g,"-").toLowerCase()}`;return`
      <div class="mdv-nav-section" data-category="${e}">
        <h3 class="mdv-nav-heading" data-section="${r}">
          ${e}
          <span class="mdv-nav-toggle">▼</span>
        </h3>
        <ul class="mdv-nav-list" id="${r}">
          ${t.map(o=>this.renderNavItem(o)).join("")}
        </ul>
      </div>
    `}renderNavItem(e){const t=this.currentDocument?.id===e.id?"active":"",r=this.options.showDescription&&e.description?`<span class="mdv-nav-description">${e.description}</span>`:"";return`
      <li class="mdv-nav-item">
        <a href="#${e.id}" class="mdv-nav-link ${t}" data-document="${e.id}" role="menuitem">
          ${e.title||"Untitled"}
          ${r}
        </a>
      </li>
    `}setupEventListeners(){this.element.addEventListener("click",e=>{const t=e.target.closest(".mdv-nav-link");if(t){e.preventDefault();const r=t.dataset.document,o=this.documents.find(i=>i.id===r);o&&this.selectDocument(o);return}const r=e.target.closest(".mdv-nav-heading");if(r){const o=r.dataset.section,i=document.getElementById(o);i&&(i.classList.toggle("collapsed"),r.classList.toggle("collapsed"))}})}selectDocument(e){this.currentDocument=e,this.updateActiveStates(),this.onSelectCallback?.(e)}updateActiveStates(){this.element.querySelectorAll(".mdv-nav-link").forEach(e=>{e.classList.toggle("active",e.dataset.document===this.currentDocument?.id)})}updateDocuments(e){this.documents=e,this.render()}onSelect(e){this.onSelectCallback=e}getCurrentDocument(){return this.currentDocument}destroy(){this.element?.remove()}}class Xe{constructor(e,t={}){this.container=e,this.options={enableScrollSpy:!0,smoothScroll:!0,offset:20,...t},this.headings=[],this.observer=null,this.element=null,this.currentActive=null,this.onCreate()}onCreate(){this.element=document.createElement("div"),this.element.className="mdv-toc",this.element.innerHTML=`
      <h4 class="mdv-toc-title">Table of Contents</h4>
      <ul class="mdv-toc-list"></ul>
    `,this.container.appendChild(this.element)}generate(e){this.cleanup();const t=e.querySelectorAll("h1, h2, h3, h4, h5, h6");this.headings=Array.from(t).map((r,o)=>{const i=r.id||`heading-${o}`;return r.id||(r.id=i),{id:i,text:r.textContent||"Untitled",level:parseInt(r.tagName.charAt(1)),element:r}}).filter(r=>r.text.trim()!==""),this.render(),this.options.enableScrollSpy&&this.setupScrollSpy()}render(){const e=this.element?.querySelector(".mdv-toc-list");if(!e){console.warn("TOC list element not found");return}if(this.headings.length===0){this.element.style.display="none";return}this.element.style.display="block",e.innerHTML=this.headings.map(t=>`
      <li class="mdv-toc-item">
        <a href="#${t.id}" class="mdv-toc-link mdv-toc-level-${t.level}" data-target="${t.id}">
          ${t.text}
        </a>
      </li>
    `).join(""),this.setupClickHandlers()}setupClickHandlers(){this.element?.addEventListener("click",e=>{const t=e.target.closest(".mdv-toc-link");if(t){e.preventDefault();const r=t.dataset.target;if(r){const o=document.getElementById(r);o?this.scrollToHeading(o,r):console.warn(`Heading element with id "${r}" not found`)}}})}scrollToHeading(e,t){if(this.options.smoothScroll){const r=e.getBoundingClientRect().top+window.pageYOffset-this.options.offset;window.scrollTo({top:r,behavior:"smooth"})}else e.scrollIntoView();this.setActiveHeading(t)}setupScrollSpy(){if(!window.IntersectionObserver){console.warn("IntersectionObserver not supported, scroll spy disabled");return}const e={root:null,rootMargin:`-${this.options.offset}px 0px -80% 0px`,threshold:0};this.observer=new IntersectionObserver(t=>{const r=t.filter(i=>i.isIntersecting).sort((i,a)=>a.boundingClientRect.top-i.boundingClientRect.top)[0];if(r){const i=r.target;this.setActiveHeading(i.id)}},e),this.headings.forEach(t=>{this.observer?.observe(t.element)})}setActiveHeading(e){this.currentActive!==e&&(this.currentActive=e,this.updateActiveStates())}updateActiveStates(){this.element?.querySelectorAll(".mdv-toc-link").forEach(e=>{e.classList.toggle("active",e.dataset.target===this.currentActive)})}cleanup(){this.observer?.disconnect(),this.observer=null,this.headings=[],this.currentActive=null}destroy(){this.cleanup(),this.element?.remove()}}const Fe="4.2.1";class $e{constructor(e){this.config=this.validateConfig(e),this.state={isInitialized:!1,currentDocument:null,documents:[],error:null,loading:!1},this.container=null,this.themeManager=null,this.themeSwitcher=null,this.darkModeToggle=null,this.navigation=null,this.search=null,this.toc=null,this.loader=null}validateConfig(e){if(!e.container)throw new Error("Container is required");if(!e.source||!e.source.documents)throw new Error("Source with documents is required");return{title:"Documentation",...e,search:{enabled:!0,placeholder:"Search documents...",...e.search},navigation:{showCategories:!0,showDescription:!0,sortBy:"order",...e.navigation},render:{syntaxHighlighting:!0,highlightTheme:"github",...e.render}}}async init(){try{this.setupContainer(),this.setupTheme(),this.setupComponents(),await this.loadInitialContent(),this.state.isInitialized=!0,console.log("MarkdownDocsViewer initialized successfully")}catch(e){console.error("Failed to initialize MarkdownDocsViewer:",e),this.handleError(e)}}setupContainer(){this.container=typeof this.config.container=="string"?document.querySelector(this.config.container):this.config.container;if(!this.container)throw new Error(`Container not found: ${this.config.container}`);this.container.className="mdv-app",this.render()}setupTheme(){this.themeManager=new ve({storageKey:this.config.theme?.storageKey||"mdv-theme",enablePersistence:this.config.theme?.enablePersistence!==!1,onThemeChange:e=>{this.applyTheme(e),this.config.onThemeChange?.(e)}}),this.themeSwitcher=new We(this.themeManager,{position:this.config.theme?.switcherPosition||"header",showPreview:this.config.theme?.showPreview!==!1,showDescription:this.config.theme?.showDescription!==!1,allowCustomThemes:this.config.theme?.allowCustomThemes!==!1}),this.darkModeToggle=new Ge(this.themeManager,{position:this.config.theme?.darkTogglePosition||"header",showLabel:this.config.theme?.showDarkModeLabel!==!1,compact:this.config.theme?.compactDarkToggle===!0,onToggle:(e,t)=>{this.config.onThemeChange?.(t)}}),this.config.theme&&typeof this.config.theme=="object"&&this.config.theme.name&&this.themeManager.setTheme(this.config.theme.name)}setupComponents(){this.loader=new Ue(this.config),this.state.documents=this.config.source.documents;const e=this.container.querySelector(".mdv-navigation-container");this.navigation=new Je(e,{documents:this.state.documents,...this.config.navigation}),this.navigation.onSelect(t=>this.loadDocument(t));const t=this.container.querySelector(".mdv-search-container");this.config.search?.enabled!==!1&&(this.search=new Qe(t,this.state.documents,this.config.search),this.search.onSelect(r=>this.loadDocument(r)));const r=this.container.querySelector(".mdv-toc-container");this.toc=new Xe(r)}async loadInitialContent(){this.state.documents.length>0&&await this.loadDocument(this.state.documents[0])}async loadDocument(e){if(this.state.loading)return;this.state.loading=!0,this.state.currentDocument=e,this.updateLoadingState();try{const t=await this.loader.loadDocument(e),r=await this.renderMarkdown(t);this.displayDocument(r),this.toc?.generate(this.getDocumentContainer()),this.navigation?.selectDocument(e),this.updateUrl(e.id)}catch(t){console.error("Failed to load document:",t),this.handleError(t)}finally{this.state.loading=!1,this.updateLoadingState()}}async renderMarkdown(e){if(typeof $=="u")throw new Error("Marked library not found. Please include marked.js");const t={breaks:!0,gfm:!0};if(this.config.render?.syntaxHighlighting&&typeof C.default<"u"&&typeof H<"u"){const r=H.markedHighlight({langPrefix:"hljs language-",highlight(o,i){return C.default.highlightAuto(o,i?[i]:void 0).value}});t.extensions=[r]}return $.parse(e,t)}displayDocument(e){const t=this.getDocumentContainer();t&&(t.innerHTML=`<article class="mdv-document">${e}</article>`)}getDocumentContainer(){return this.container?.querySelector(".mdv-document-container")}updateLoadingState(){const e=this.getDocumentContainer();e&&(this.state.loading?e.innerHTML=`
        <div class="mdv-loading">
          <div class="mdv-spinner"></div>
          <span>Loading document...</span>
        </div>
      `:this.state.error&&(e.innerHTML=`
        <div class="mdv-error">
          <div class="mdv-error-title">Error Loading Document</div>
          <div>${this.state.error.message}</div>
        </div>
      `))}handleError(e){this.state.error=e,this.updateLoadingState(),this.config.onError?.(e)}updateUrl(e){if(typeof window<"u"&&window.history){const t=new URL(window.location);t.hash=e,window.history.replaceState({},document.title,t.toString())}}applyTheme(e){if(!e)return;let t=document.getElementById("mdv-theme-styles");t?.remove(),t=document.createElement("style"),t.id="mdv-theme-styles",t.textContent=We(e),document.head.appendChild(t)}render(){if(!this.container)return;const e=(this.config.theme?.switcherPosition||"header")==="header",t=(this.config.theme?.darkTogglePosition||"header")==="header";this.container.innerHTML=`
      <header class="mdv-header">
        <button class="mdv-mobile-toggle" aria-label="Toggle navigation" style="display: none;"></button>
        ${this.config.logo?`<img src="${this.config.logo}" alt="Logo" class="mdv-logo">`:""}        
        <h1 class="mdv-title">${this.config.title}</h1>
        <div class="mdv-header-actions">
          ${t?this.darkModeToggle?.render()||"":""}
          ${e?this.themeSwitcher?.render()||"":""}
        </div>
      </header>
      <div class="mdv-layout">
        <aside class="mdv-sidebar">
          <div class="mdv-search-container"></div>
          <div class="mdv-navigation-container"></div>
        </aside>
        <main class="mdv-content">
          <div class="mdv-toc-container"></div>
          <div class="mdv-content-wrapper">
            <div class="mdv-content-inner">
              <div class="mdv-document-container">
                <div class="mdv-loading">
                  <div class="mdv-spinner"></div>
                  <span>Loading documentation...</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    `,this.setupMobileToggle()}setupMobileToggle(){const e=this.container?.querySelector(".mdv-mobile-toggle"),t=this.container?.querySelector(".mdv-sidebar");e&&t&&e.addEventListener("click",()=>{const r=t.classList.contains("show");t.classList.toggle("show"),Be(t.classList.contains("show")),r||window.innerWidth<=768&&(e.style.display="flex")})}setTheme(e){this.themeManager?.setTheme(e)}getTheme(){return this.themeManager?.getCurrentTheme()||null}getAllThemes(){return this.themeManager?.getAllThemes()||[]}registerTheme(e){this.themeManager?.registerTheme(e)}destroy(){this.loader?.abortAll(),this.search?.destroy(),this.navigation?.destroy(),this.toc?.destroy(),this.themeManager=null,this.themeSwitcher=null,this.darkModeToggle=null,this.container&&(this.container.innerHTML="")}}function Ve(n){return new $e(n)}function ke(n,e,t={}){const r=typeof n=="string"?document.querySelector(n):n;if(!r)throw new Error("Container element not found");const o={container:r,source:{type:"content",documents:[{id:"quick-start",title:"Quick Start",content:e}]},...t};return Ve(o)}h.MarkdownDocsViewer=$e,h.createCustomTheme=Y,h.createViewer=Ve,h.quickStart=ke,h.themes=M,h.version=Fe,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});