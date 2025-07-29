(function(h,$){typeof exports=="object"&&typeof module<"u"?$(exports,require("marked"),require("marked-highlight"),require("highlight.js")):typeof define=="function"&&define.amd?define(["exports","marked","marked-highlight","highlight.js"],$):(h=typeof globalThis<"u"?globalThis:h||self,$(h.MarkdownDocsViewer={},h.marked,h.markedHighlight,h.hljs))})(this,function(h,$,H,Ce){"use strict";const C=(n=>n&&typeof n=="object"&&"default"in n?n:{default:n})(Ce),K={github:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',code:'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'},material:{body:'Roboto, "Helvetica Neue", Arial, sans-serif',heading:'Roboto, "Helvetica Neue", Arial, sans-serif',code:'"Roboto Mono", Consolas, Monaco, monospace'},vscode:{body:'"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',heading:'"Segoe UI Semibold", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif',code:'Consolas, "Courier New", monospace'},nord:{body:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"JetBrains Mono", "Fira Code", Consolas, Monaco, monospace'},dracula:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"Fira Code", "JetBrains Mono", Consolas, Monaco, monospace'},solarized:{body:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segue UI", sans-serif',code:'"Source Code Pro", Consolas, Monaco, monospace'},monokai:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',code:'"Monaco", "Menlo", "Ubuntu Mono", Consolas, monospace'},ayu:{body:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"Fira Code", "Source Code Pro", Consolas, Monaco, monospace'},catppuccin:{body:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',heading:'"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',code:'"JetBrains Mono", "Fira Code", Consolas, Monaco, monospace'},tokyo:{body:'"Hiragino Sans", "Yu Gothic UI", "Segoe UI", -apple-system, sans-serif',heading:'"Hiragino Sans", "Yu Gothic UI", "Segoe UI", -apple-system, sans-serif',code:'"SFMono-Regular", "Consolas", "Liberation Mono", Monaco, monospace'},default:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',code:'"Fira Code", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace'}},U={default:{light:{primary:"#3b82f6",secondary:"#10b981",background:"#ffffff",surface:"#f3f4f6",text:"#111827",textPrimary:"#111827",textLight:"#6b7280",textSecondary:"#6b7280",border:"#e5e7eb",code:"#8b5cf6",codeBackground:"#f3f4f6",link:"#3b82f6",linkHover:"#2563eb",error:"#ef4444",warning:"#f59e0b",success:"#10b981"},dark:{primary:"#60a5fa",secondary:"#34d399",background:"#0f172a",surface:"#1e293b",text:"#f1f5f9",textPrimary:"#f1f5f9",textLight:"#94a3b8",textSecondary:"#94a3b8",border:"#334155",code:"#a78bfa",codeBackground:"#1a202c",link:"#60a5fa",linkHover:"#93c5fd",error:"#f87171",warning:"#fbbf24",success:"#34d399"}},github:{light:{primary:"#0969da",secondary:"#1a7f37",background:"#ffffff",surface:"#f6f8fa",text:"#1f2328",textPrimary:"#1f2328",textLight:"#656d76",textSecondary:"#656d76",border:"#d0d7de",code:"#0550ae",codeBackground:"#f6f8fa",link:"#0969da",linkHover:"#0860ca",error:"#d1242f",warning:"#9a6700",success:"#1a7f37"},dark:{primary:"#4493f8",secondary:"#3fb950",background:"#0d1117",surface:"#161b22",text:"#e6edf3",textPrimary:"#e6edf3",textLight:"#7d8590",textSecondary:"#7d8590",border:"#30363d",code:"#79c0ff",codeBackground:"#161b22",link:"#4493f8",linkHover:"#58a6ff",error:"#f85149",warning:"#d29922",success:"#3fb950"}},material:{light:{primary:"#1976d2",secondary:"#00897b",background:"#ffffff",surface:"#f5f5f5",text:"#212121",textPrimary:"#212121",textLight:"#757575",textSecondary:"#757575",border:"#e0e0e0",code:"#673ab7",codeBackground:"#f5f5f5",link:"#1976d2",linkHover:"#1565c0",error:"#d32f2f",warning:"#f57c00",success:"#388e3c"},dark:{primary:"#42a5f5",secondary:"#26a69a",background:"#121212",surface:"#1e1e1e",text:"#ffffff",textPrimary:"#ffffff",textLight:"#b3b3b3",textSecondary:"#b3b3b3",border:"#2e2e2e",code:"#ab47bc",codeBackground:"#1e1e1e",link:"#42a5f5",linkHover:"#64b5f6",error:"#f44336",warning:"#ff9800",success:"#4caf50"}},vscode:{light:{primary:"#0078d4",secondary:"#00bcf2",background:"#ffffff",surface:"#f3f3f3",text:"#323130",textPrimary:"#323130",textLight:"#605e5c",textSecondary:"#605e5c",border:"#c8c6c4",code:"#d83b01",codeBackground:"#f3f2f1",link:"#0078d4",linkHover:"#106ebe",error:"#d13438",warning:"#ff8c00",success:"#107c10"},dark:{primary:"#0078d4",secondary:"#00bcf2",background:"#1e1e1e",surface:"#252526",text:"#cccccc",textPrimary:"#cccccc",textLight:"#969696",textSecondary:"#969696",border:"#3c3c3c",code:"#569cd6",codeBackground:"#1e1e1e",link:"#3794ff",linkHover:"#1f7ce6",error:"#f14c4c",warning:"#ff8c00",success:"#89d185"}},nord:{light:{primary:"#5e81ac",secondary:"#88c0d0",background:"#eceff4",surface:"#e5e9f0",text:"#2e3440",textPrimary:"#2e3440",textLight:"#4c566a",textSecondary:"#4c566a",border:"#d8dee9",code:"#b48ead",codeBackground:"#e5e9f0",link:"#5e81ac",linkHover:"#81a1c1",error:"#bf616a",warning:"#ebcb8b",success:"#a3be8c"},dark:{primary:"#88c0d0",secondary:"#8fbcbb",background:"#2e3440",surface:"#3b4252",text:"#eceff4",textPrimary:"#eceff4",textLight:"#d8dee9",textSecondary:"#d8dee9",border:"#4c566a",code:"#b48ead",codeBackground:"#3b4252",link:"#88c0d0",linkHover:"#8fbcbb",error:"#bf616a",warning:"#ebcb8b",success:"#a3be8c"}},dracula:{light:{primary:"#6272a4",secondary:"#8be9fd",background:"#f8f8f2",surface:"#f0f0f0",text:"#282a36",textPrimary:"#282a36",textLight:"#6272a4",textSecondary:"#6272a4",border:"#e0e0e0",code:"#bd93f9",codeBackground:"#f0f0f0",link:"#6272a4",linkHover:"#44475a",error:"#ff5555",warning:"#ffb86c",success:"#50fa7b"},dark:{primary:"#bd93f9",secondary:"#8be9fd",background:"#282a36",surface:"#44475a",text:"#f8f8f2",textPrimary:"#f8f8f2",textLight:"#6272a4",textSecondary:"#6272a4",border:"#6272a4",code:"#ff79c6",codeBackground:"#44475a",link:"#8be9fd",linkHover:"#50fa7b",error:"#ff5555",warning:"#ffb86c",success:"#50fa7b"}},solarized:{light:{primary:"#268bd2",secondary:"#2aa198",background:"#fdf6e3",surface:"#eee8d5",text:"#586e75",textPrimary:"#073642",textLight:"#586e75",textSecondary:"#586e75",border:"#93a1a1",code:"#d33682",codeBackground:"#eee8d5",link:"#268bd2",linkHover:"#2aa198",error:"#dc322f",warning:"#b58900",success:"#859900"},dark:{primary:"#268bd2",secondary:"#2aa198",background:"#002b36",surface:"#073642",text:"#839496",textPrimary:"#93a1a1",textLight:"#657b83",textSecondary:"#586e75",border:"#586e75",code:"#d33682",codeBackground:"#073642",link:"#268bd2",linkHover:"#2aa198",error:"#dc322f",warning:"#b58900",success:"#859900"}},monokai:{light:{primary:"#f92672",secondary:"#a6e22e",background:"#fafafa",surface:"#f0f0f0",text:"#272822",textPrimary:"#272822",textLight:"#75715e",textSecondary:"#75715e",border:"#e0e0e0",code:"#ae81ff",codeBackground:"#f0f0f0",link:"#f92672",linkHover:"#fd971f",error:"#f92672",warning:"#fd971f",success:"#a6e22e"},dark:{primary:"#f92672",secondary:"#a6e22e",background:"#272822",surface:"#3e3d32",text:"#f8f8f2",textPrimary:"#f8f8f2",textLight:"#75715e",textSecondary:"#75715e",border:"#49483e",code:"#ae81ff",codeBackground:"#3e3d32",link:"#66d9ef",linkHover:"#a6e22e",error:"#f92672",warning:"#fd971f",success:"#a6e22e"}},ayu:{light:{primary:"#399ee6",secondary:"#86b300",background:"#fafafa",surface:"#f3f4f5",text:"#5c6166",textPrimary:"#5c6166",textLight:"#5c6166",textSecondary:"#5c6166",border:"#e7eaed",code:"#a37acc",codeBackground:"#f3f4f5",link:"#399ee6",linkHover:"#4cbf99",error:"#f07178",warning:"#ff8f40",success:"#86b300"},dark:{primary:"#39bae6",secondary:"#95e6cb",background:"#0b0e14",surface:"#11151c",text:"#b3b1ad",textPrimary:"#e6e1cf",textLight:"#4d5566",textSecondary:"#626a73",border:"#1e232a",code:"#d4bfff",codeBackground:"#11151c",link:"#39bae6",linkHover:"#95e6cb",error:"#f28779",warning:"#ffb454",success:"#bae67e"}},catppuccin:{light:{primary:"#1e66f5",secondary:"#179299",background:"#eff1f5",surface:"#e6e9ef",text:"#4c4f69",textPrimary:"#4c4f69",textLight:"#6c6f85",textSecondary:"#6c6f85",border:"#bcc0cc",code:"#8839ef",codeBackground:"#e6e9ef",link:"#1e66f5",linkHover:"#04a5e5",error:"#d20f39",warning:"#df8e1d",success:"#40a02b"},dark:{primary:"#89b4fa",secondary:"#94e2d5",background:"#1e1e2e",surface:"#313244",text:"#cdd6f4",textPrimary:"#cdd6f4",textLight:"#a6adc8",textSecondary:"#a6adc8",border:"#45475a",code:"#cba6f7",codeBackground:"#313244",link:"#89b4fa",linkHover:"#94e2d5",error:"#f38ba8",warning:"#fab387",success:"#a6e3a1"}},tokyo:{light:{primary:"#3d59a1",secondary:"#006a83",background:"#d5d6db",surface:"#e1e2e7",text:"#0d2258",textPrimary:"#0d2258",textLight:"#5c5f69",textSecondary:"#5c5f69",border:"#a8adb7",code:"#5a4a78",codeBackground:"#e1e2e7",link:"#3d59a1",linkHover:"#634da0",error:"#8c4351",warning:"#8f5e15",success:"#485e30"},dark:{primary:"#7aa2f7",secondary:"#7dcfff",background:"#1a1b26",surface:"#24283b",text:"#c0caf5",textPrimary:"#c0caf5",textLight:"#565f89",textSecondary:"#565f89",border:"#414868",code:"#bb9af7",codeBackground:"#24283b",link:"#7aa2f7",linkHover:"#7dcfff",error:"#f7768e",warning:"#e0af68",success:"#9ece6a"}}};function _(n,e){const t=K[n];return t?t[e]:K.default[e]}function O(n,e){const t=U[n];if(!t)throw new Error(`Unknown theme: ${n}`);return{name:`${n}-${e}`,colors:t[e],fonts:{body:_(n,"body"),heading:_(n,"heading"),code:_(n,"code")},spacing:{unit:8,containerMaxWidth:"1200px",sidebarWidth:"320px"},borderRadius:n==="material"?"0.25rem":"0.5rem"}}function y(n){return n.replace(/-(light|dark)$/,"")}function S(n){return n.endsWith("-dark")?"dark":"light"}function Y(n,e,t){if(typeof n=="object"&&e===void 0&&t===void 0){const r=n;let o="default",i="light";if(r.name){const s=y(r.name);Object.keys(U).includes(s)?(o=s,i=S(r.name)):(r.name==="dark"||r.name.includes("-dark"))&&(o="default",i="dark")}const a=O(o,i);return{...a,...r,name:r.name||`${o}-${i}`,colors:{...a.colors,...r.colors||{}},fonts:{...a.fonts,...r.fonts||{}},spacing:{...a.spacing,...r.spacing||{}}}}if(typeof n=="string"&&e&&t){const r=n,o=O(r,e);return{...o,...t,name:t.name||`${r}-${e}`,colors:{...o.colors,...t.colors||{}},fonts:{...o.fonts,...t.fonts||{}},spacing:{...o.spacing,...t.spacing||{}}}}throw new Error("Invalid arguments to createCustomTheme. Use either createCustomTheme(overrides) or createCustomTheme(baseName, mode, overrides)")}const M=Object.keys(U).reduce((n,e)=>{const t=e;return n[t]={light:O(t,"light"),dark:O(t,"dark")},n},{});function J(){const n=[];return Object.keys(M).forEach(e=>{const t=M[e];n.push(t.light),n.push(t.dark)}),n}function Me(){return Object.keys(M)}function X(n,e){const{colors:t,fonts:r,spacing:o,borderRadius:i}=n,a=o.unit;return`
    /* Base Styles */
    .mdv-app {
      font-family: ${r.body};
      color: ${t.textPrimary};
      background-color: ${t.background};
      min-height: 100vh;
      line-height: 1.6;
      margin: 0;
      padding: 0;
      font-size: 16px;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      /* Modern scrollbar */
      scrollbar-color: ${t.border} ${t.surface};
      scrollbar-width: thin;
    }

    .mdv-app *::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }

    .mdv-app *::-webkit-scrollbar-track {
      background: ${t.surface};
    }

    .mdv-app *::-webkit-scrollbar-thumb {
      background: ${t.border};
      border-radius: ${i};
    }

    .mdv-app *::-webkit-scrollbar-thumb:hover {
      background: ${t.textSecondary};
    }

    /* Layout */
    .mdv-container {
      display: flex;
      max-width: ${o.containerMaxWidth};
      margin: 0 auto;
      background-color: ${t.background};
      min-height: 100vh;
    }

    /* Header */
    .mdv-header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background-color: ${t.surface};
      border-bottom: 1px solid ${t.border};
      padding: ${a*2}px ${a*3}px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      backdrop-filter: blur(8px);
      background-color: ${t.surface}f0;
    }

    .mdv-header h1 {
      font-family: ${r.heading};
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0;
      color: ${t.textPrimary};
    }

    .mdv-header-controls {
      display: flex;
      align-items: center;
      gap: ${a*2}px;
    }

    /* Sidebar */
    .mdv-sidebar {
      width: ${o.sidebarWidth};
      background-color: ${t.surface};
      border-right: 1px solid ${t.border};
      padding: ${a*3}px 0;
      overflow-y: auto;
      position: sticky;
      top: 0;
      height: 100vh;
      flex-shrink: 0;
    }

    .mdv-nav {
      padding: 0 ${a*3}px;
    }

    .mdv-nav-category {
      margin-bottom: ${a*3}px;
    }

    .mdv-nav-category-title {
      font-family: ${r.heading};
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: ${t.textSecondary};
      margin: 0 0 ${a}px 0;
      padding: 0 ${a*2}px;
    }

    .mdv-nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .mdv-nav-item {
      margin-bottom: ${a/2}px;
    }

    .mdv-nav-link {
      display: block;
      padding: ${a}px ${a*2}px;
      color: ${t.textSecondary};
      text-decoration: none;
      border-radius: ${i};
      transition: all 0.15s ease;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.4;
    }

    .mdv-nav-link:hover {
      background-color: ${t.border}40;
      color: ${t.textPrimary};
    }

    .mdv-nav-link.active {
      background-color: ${t.primary}15;
      color: ${t.primary};
      font-weight: 600;
      border-left: 3px solid ${t.primary};
      padding-left: ${a*2-3}px;
    }

    .mdv-nav-description {
      font-size: 0.8rem;
      color: ${t.textLight};
      margin-top: ${a/2}px;
      display: block;
    }

    /* Main Content */
    .mdv-main {
      flex: 1;
      padding: ${a*4}px ${a*5}px;
      background-color: ${t.background};
      min-width: 0;
    }

    .mdv-content {
      max-width: 800px;
      margin: 0 auto;
    }

    /* Document Content */
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

    /* Search */
    .mdv-search {
      margin-bottom: ${a*3}px;
      padding: 0 ${a*3}px;
    }

    .mdv-search-input {
      width: 100%;
      padding: ${a*1.5}px ${a*2}px;
      border: 1px solid ${t.border};
      border-radius: ${i};
      background-color: ${t.background};
      color: ${t.textPrimary};
      font-size: 0.9rem;
      transition: all 0.15s ease;
    }

    .mdv-search-input:focus {
      outline: none;
      border-color: ${t.primary};
      box-shadow: 0 0 0 3px ${t.primary}20;
    }

    .mdv-search-input::placeholder {
      color: ${t.textSecondary};
    }

    /* Theme Switcher */
    .mdv-theme-switcher {
      position: relative;
      display: inline-block;
    }

    .mdv-theme-button {
      background: ${t.surface};
      border: 1px solid ${t.border};
      border-radius: ${i};
      padding: ${a}px ${a*2}px;
      color: ${t.textPrimary};
      cursor: pointer;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: ${a}px;
      transition: all 0.15s ease;
    }

    .mdv-theme-button:hover {
      background: ${t.border}40;
    }

    .mdv-theme-dropdown {
      position: absolute;
      top: 100%;
      right: 0;
      margin-top: ${a/2}px;
      background: ${t.surface};
      border: 1px solid ${t.border};
      border-radius: ${i};
      box-shadow: 0 4px 20px ${t.border}60;
      min-width: 200px;
      z-index: 1000;
      max-height: 300px;
      overflow-y: auto;
    }

    .mdv-theme-option {
      padding: ${a*1.5}px ${a*2}px;
      cursor: pointer;
      border-bottom: 1px solid ${t.border};
      transition: background-color 0.15s ease;
      display: flex;
      align-items: center;
      gap: ${a}px;
    }

    .mdv-theme-option:last-child {
      border-bottom: none;
    }

    .mdv-theme-option:hover {
      background-color: ${t.border}40;
    }

    .mdv-theme-option.active {
      background-color: ${t.primary}15;
      color: ${t.primary};
    }

    .mdv-theme-preview {
      width: 16px;
      height: 16px;
      border-radius: 2px;
      border: 1px solid ${t.border};
    }

    /* Table of Contents */
    .mdv-toc {
      background-color: ${t.surface};
      border: 1px solid ${t.border};
      border-radius: ${i};
      padding: ${a*2}px 0;
      margin-bottom: ${a*3}px;
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

    /* Loading States */
    .mdv-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${a*5}px;
      color: ${t.textSecondary};
    }

    .mdv-spinner {
      width: 32px;
      height: 32px;
      border: 3px solid ${t.border};
      border-top: 3px solid ${t.primary};
      border-radius: 50%;
      animation: mdv-spin 1s linear infinite;
      margin-right: ${a*2}px;
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
      .mdv-header-controls,
      .mdv-search {
        display: none !important;
      }

      .mdv-main {
        padding: 0;
      }

      .mdv-container {
        display: block;
      }
    }
  `}function Ze(n){return`
    /* Mobile Styles */
    @media (max-width: 768px) {
      .mdv-container {
        flex-direction: column;
      }

      .mdv-sidebar {
        width: 100%;
        height: auto;
        position: static;
        border-right: none;
        border-bottom: 1px solid ${n.colors.border};
        max-height: 50vh;
        overflow-y: auto;
      }

      .mdv-main {
        padding: ${n.spacing.unit*2}px ${n.spacing.unit*3}px;
      }

      .mdv-header {
        padding: ${n.spacing.unit*2}px ${n.spacing.unit*3}px;
      }

      .mdv-header h1 {
        font-size: 1.25rem;
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
        max-width: 300px;
      }

      .mdv-document table {
        font-size: 0.9rem;
      }

      .mdv-document th,
      .mdv-document td {
        padding: ${n.spacing.unit}px ${n.spacing.unit*1.5}px;
      }
    }

    @media (max-width: 480px) {
      .mdv-main {
        padding: ${n.spacing.unit*2}px;
      }

      .mdv-header {
        padding: ${n.spacing.unit}px ${n.spacing.unit*2}px;
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

      .mdv-document table {
        display: block;
        overflow-x: auto;
        white-space: nowrap;
      }
    }
  `}function We(n,e){const t=X(n,e),r=Ze(n);return`${t}

${r}`}function Ge(n){const e=n.colors.primary,t=n.colors.background,r=n.colors.text;return{primary:e,primaryRgb:be(e),background:t,backgroundRgb:be(t),text:r,textRgb:be(r)}}function be(n){const e=n.replace("#",""),t=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),o=parseInt(e.substring(4,6),16);return`${t}, ${r}, ${o}`}function Be(n,e){const t=Ge(n),r=document.documentElement;Object.entries(t).forEach(([o,i])=>{r.style.setProperty(`--mdv-${o}`,i)}),e&&e()}const Qe={primary:"#3b82f6",secondary:"#10b981",accent:"#8b5cf6",background:"#ffffff",surface:"#f3f4f6",text:"#111827",textPrimary:"#111827",textSecondary:"#6b7280",textLight:"#9ca3af",border:"#e5e7eb",error:"#ef4444",warning:"#f59e0b",success:"#10b981",info:"#3b82f6",link:"#3b82f6",linkHover:"#2563eb",code:"#8b5cf6",codeBackground:"#f1f5f9"};class Ue{constructor(e={}){this.themes=new Map,this.customThemes=new Map,this.currentTheme=null,this.eventListeners=new Map,this.config={enablePersistence:!0,storageKey:"mdv-theme",defaultTheme:"default-light",...e},this.initializeBuiltinThemes(),this.loadPersistedTheme()}initializeBuiltinThemes(){J().forEach(e=>{this.themes.set(e.name,e)})}registerTheme(e){this.customThemes.set(e.name,e),this.emit("themeRegistered",e)}unregisterTheme(e){this.customThemes.delete(e)&&this.emit("themeUnregistered",e)}getAllThemes(){return[...this.themes.values(),...this.customThemes.values()]}getTheme(e){return this.themes.get(e)||this.customThemes.get(e)||null}getCurrentTheme(){return this.currentTheme}applyTheme(e,t){let r;if(typeof e=="string"?r=this.getTheme(e):r=e,!r){console.warn(`Theme not found: ${e}, falling back to default`),r=this.getTheme("default-light");return}this.currentTheme=r,this.injectThemeStyles(r),this.config.enablePersistence&&this.persistTheme(r.name),this.emit("themeChanged",r),t?.()}injectThemeStyles(e){const t="mdv-theme-styles";let r=document.getElementById(t);r?.remove(),r=document.createElement("style"),r.id=t,r.textContent=We(e),document.head.appendChild(r)}persistTheme(e){try{localStorage.setItem(this.config.storageKey,e)}catch(t){console.warn("Failed to persist theme:",t)}}loadPersistedTheme(){if(!this.config.enablePersistence)return;try{const e=localStorage.getItem(this.config.storageKey);if(e){const t=this.getTheme(e);t&&this.applyTheme(t)}}catch(e){console.warn("Failed to load persisted theme:",e)}}createCustomTheme(e,t){const r=Y(t);return r.name=e,r}on(e,t){this.eventListeners.has(e)||this.eventListeners.set(e,[]),this.eventListeners.get(e).push(t)}off(e,t){const r=this.eventListeners.get(e);r&&this.eventListeners.set(e,r.filter(o=>o!==t))}emit(e,...t){const r=this.eventListeners.get(e);r?.forEach(o=>{try{o(...t)}catch(i){console.error(`Error in theme manager event listener for ${e}:`,i)}})}}function Je(n){return new Ue(n)}function Xe(n,e={}){const t=Je(e),r=document.createElement("div");r.className="mdv-theme-switcher";const o=document.createElement("button");o.className="mdv-theme-button",o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded","false"),o.innerHTML='<span>🎨</span><span>Theme</span>',r.appendChild(o);const i=document.createElement("div");i.className="mdv-theme-dropdown mdv-hidden",i.setAttribute("role","menu"),r.appendChild(i);const a=()=>{const f=i.classList.contains("mdv-hidden");i.classList.toggle("mdv-hidden"),o.setAttribute("aria-expanded",f.toString()),f&&s()},s=()=>{i.innerHTML="";const f=t.getAllThemes();f.forEach(d=>{const g=document.createElement("div");g.className="mdv-theme-option",g.setAttribute("role","menuitem"),g.setAttribute("tabindex","0");const p=document.createElement("div");p.className="mdv-theme-preview",p.style.backgroundColor=d.colors.primary,g.appendChild(p);const v=document.createElement("span");v.textContent=u(d.name),g.appendChild(v),d===t.getCurrentTheme()&&g.classList.add("active"),g.addEventListener("click",()=>{t.applyTheme(d),a()}),g.addEventListener("keydown",m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),t.applyTheme(d),a())}),i.appendChild(g)})},u=f=>f.replace(/^(\w+)-(\w+)$/,(d,g,p)=>`${g.charAt(0).toUpperCase()+g.slice(1)} ${p.charAt(0).toUpperCase()+p.slice(1)}`);return o.addEventListener("click",a),document.addEventListener("click",f=>{r.contains(f.target)||i.classList.contains("mdv-hidden")||(i.classList.add("mdv-hidden"),o.setAttribute("aria-expanded","false"))}),t.on("themeChanged",s),n.appendChild(r),{switcher:r,themeManager:t}}class Fe{constructor(e){this.config=e,this.cache=new Map,this.isLoading=!1,this.abortController=null}async loadDocument(e){const t=this.getCacheKey(e);if(this.cache.has(t))return this.cache.get(t);this.isLoading=!0,this.abortController?.abort(),this.abortController=new AbortController;try{const r=await this.fetchDocument(e);return this.cache.set(t,r),r}finally{this.isLoading=!1,this.abortController=null}}getCacheKey(e){return`${e.id}-${JSON.stringify(e)}`}async fetchDocument(e){const{source:t}=this.config;switch(t.type){case"local":return this.loadLocalDocument(e);case"url":return this.loadUrlDocument(e);case"github":return this.loadGithubDocument(e);case"content":return this.loadContentDocument(e);default:throw new Error(`Unsupported source type: ${t.type}`)}}async loadLocalDocument(e){const t=this.config.source;if(t.type!=="local")throw new Error("Invalid source type");const r=`${t.basePath}/${e.file}`,o=await fetch(r,{signal:this.abortController?.signal});if(!o.ok)throw new Error(`Failed to load document: ${o.statusText}`);return await o.text()}async loadUrlDocument(e){const t=this.config.source;if(t.type!=="url")throw new Error("Invalid source type");const r=`${t.baseUrl}/${e.file}`,o={signal:this.abortController?.signal,...t.headers&&{headers:t.headers}},i=await fetch(r,o);if(!i.ok)throw new Error(`Failed to load document: ${i.statusText}`);return await i.text()}async loadGithubDocument(e){const t=this.config.source;if(t.type!=="github")throw new Error("Invalid source type");const r=`https://raw.githubusercontent.com/${e.file}`,o=await fetch(r,{signal:this.abortController?.signal});if(!o.ok)throw new Error(`Failed to load document: ${o.statusText}`);return await o.text()}async loadContentDocument(e){return e.content||""}clearCache(){this.cache.clear()}abort(){this.abortController?.abort()}}class Ve{constructor(e,t){this.container=e,this.config=t,this.searchTerm="",this.filteredDocuments=[],this.searchIndex=new Map,this.eventListeners=new Map,this.init()}init(){this.buildSearchIndex(),this.render()}buildSearchIndex(){this.config.source.documents.forEach(e=>{const t=[e.title,e.description||"",e.category||""].join(" ").toLowerCase();this.searchIndex.set(e.id,{document:e,searchText:t})})}render(){this.container.innerHTML=`
      <div class="mdv-search">
        <input 
          type="text" 
          class="mdv-search-input" 
          placeholder="${this.config.search?.placeholder||"Search documents..."}"
          aria-label="Search documents"
        />
      </div>
    `;const e=this.container.querySelector(".mdv-search-input");e?.addEventListener("input",t=>{this.handleSearch(t.target.value)})}handleSearch(e){this.searchTerm=e.toLowerCase(),this.filteredDocuments=e?this.filterDocuments(e):this.config.source.documents,this.emit("searchResults",{term:e,results:this.filteredDocuments})}filterDocuments(e){const t=[];return this.searchIndex.forEach(r=>{r.searchText.includes(e)&&t.push(r.document)}),t}getFilteredDocuments(){return this.filteredDocuments.length>0||this.searchTerm?this.filteredDocuments:this.config.source.documents}on(e,t){this.eventListeners.has(e)||this.eventListeners.set(e,[]),this.eventListeners.get(e).push(t)}emit(e,t){this.eventListeners.get(e)?.forEach(r=>r(t))}}class ye{constructor(e,t){this.container=e,this.config=t,this.documents=[],this.currentDocument=null,this.eventListeners=new Map,this.init()}init(){this.documents=this.config.source.documents,this.render(),this.setupEventListeners()}render(){const e=this.groupDocumentsByCategory(),t=Object.keys(e).map(r=>{const o=e[r],i=o.map(a=>`
          <li class="mdv-nav-item">
            <a href="#${a.id}" class="mdv-nav-link" data-document-id="${a.id}">
              ${a.title}
              ${a.description?`<span class="mdv-nav-description">${a.description}</span>`:""}
            </a>
          </li>
        `).join("");return`
        <div class="mdv-nav-category">
          <h3 class="mdv-nav-category-title">${r}</h3>
          <ul class="mdv-nav-list">
            ${i}
          </ul>
        </div>
      `}).join("");this.container.innerHTML=`
      <nav class="mdv-nav" role="navigation" aria-label="Document navigation">
        ${t}
      </nav>
    `}groupDocumentsByCategory(){const e={};return this.documents.forEach(t=>{const r=t.category||"Documents";e[r]||(e[r]=[]),e[r].push(t)}),Object.keys(e).forEach(t=>{e[t].sort((r,o)=>(r.order||0)-(o.order||0))}),e}setupEventListeners(){this.container.addEventListener("click",e=>{const t=e.target.closest(".mdv-nav-link");if(t){e.preventDefault();const r=t.dataset.documentId;r&&this.selectDocument(r)}})}selectDocument(e){const t=this.documents.find(r=>r.id===e);t&&(this.currentDocument=t,this.updateActiveState(e),this.emit("documentSelected",t))}updateActiveState(e){this.container.querySelectorAll(".mdv-nav-link").forEach(t=>{t.classList.toggle("active",t.dataset.documentId===e)})}updateDocuments(e){this.documents=e,this.render()}on(e,t){this.eventListeners.has(e)||this.eventListeners.set(e,[]),this.eventListeners.get(e).push(t)}emit(e,t){this.eventListeners.get(e)?.forEach(r=>r(t))}}class ke{constructor(e,t){this.container=e,this.config=t,this.toc=[],this.currentActiveId=null,this.observer=null,this.eventListeners=new Map}generate(e){const t=e.querySelectorAll("h1, h2, h3, h4, h5, h6");this.toc=Array.from(t).map((r,o)=>{const i=r.id||`heading-${o}`;return r.id||(r.id=i),{id:i,text:r.textContent||"",level:parseInt(r.tagName.charAt(1)),element:r}}).filter(r=>r.text.trim()!==""),this.render(),this.setupScrollSpy(e)}render(){if(this.toc.length===0){this.container.innerHTML="";return}const e=this.toc.map(t=>`
      <li class="mdv-toc-item">
        <a href="#${t.id}" class="mdv-toc-link mdv-toc-level-${t.level}" data-target="${t.id}">
          ${t.text}
        </a>
      </li>
    `).join("");this.container.innerHTML=`
      <div class="mdv-toc">
        <h4 class="mdv-toc-title">Table of Contents</h4>
        <ul class="mdv-toc-list">
          ${e}
        </ul>
      </div>
    `,this.container.addEventListener("click",t=>{const r=t.target.closest(".mdv-toc-link");if(r){t.preventDefault();const o=r.dataset.target;if(o){const i=document.getElementById(o);i&&(i.scrollIntoView({behavior:"smooth",block:"start"}),this.updateActiveState(o))}}})}setupScrollSpy(e){this.observer?.disconnect();const t={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0};this.observer=new IntersectionObserver(r=>{const o=r.filter(a=>a.isIntersecting).sort((a,s)=>s.intersectionRatio-a.intersectionRatio)[0];if(o){const a=o.target;this.updateActiveState(a.id)}},t),this.toc.forEach(r=>{this.observer.observe(r.element)})}updateActiveState(e){if(this.currentActiveId===e)return;this.currentActiveId=e,this.container.querySelectorAll(".mdv-toc-link").forEach(t=>{t.classList.toggle("active",t.dataset.target===e)}),this.emit("activeChanged",e)}destroy(){this.observer?.disconnect(),this.observer=null}on(e,t){this.eventListeners.has(e)||this.eventListeners.set(e,[]),this.eventListeners.get(e).push(t)}emit(e,t){this.eventListeners.get(e)?.forEach(r=>r(t))}}class _e{constructor(e){this.config={title:"Documentation",theme:"default-light",container:"#docs",source:{type:"content",documents:[]},search:{enabled:!0,placeholder:"Search documentation..."},navigation:{showCategories:!0,collapsible:!0},render:{syntaxHighlighting:!0,copyCodeButton:!1},...e},this.elements={},this.components={},this.loader=null,this.currentDocument=null,this.isInitialized=!1,this.init()}async init(){try{this.setupContainer(),this.setupComponents(),await this.setupContent(),this.isInitialized=!0}catch(e){console.error("Failed to initialize MarkdownDocsViewer:",e),this.showError("Failed to initialize documentation viewer",e.message)}}setupContainer(){const e=typeof this.config.container=="string"?document.querySelector(this.config.container):this.config.container;if(!e)throw new Error(`Container not found: ${this.config.container}`);this.elements.container=e,e.className="mdv-app",e.innerHTML=`
      <div class="mdv-container">
        <aside class="mdv-sidebar">
          <div class="mdv-search-container"></div>
          <div class="mdv-navigation-container"></div>
        </aside>
        <main class="mdv-main">
          <header class="mdv-header">
            <h1>${this.config.title}</h1>
            <div class="mdv-header-controls">
              <div class="mdv-theme-switcher-container"></div>
            </div>
          </header>
          <div class="mdv-content">
            <div class="mdv-toc-container"></div>
            <div class="mdv-document-container">
              <div class="mdv-loading">
                <div class="mdv-spinner"></div>
                <span>Loading documentation...</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    `,this.elements.searchContainer=e.querySelector(".mdv-search-container"),this.elements.navigationContainer=e.querySelector(".mdv-navigation-container"),this.elements.tocContainer=e.querySelector(".mdv-toc-container"),this.elements.documentContainer=e.querySelector(".mdv-document-container"),this.elements.themeSwitcherContainer=e.querySelector(".mdv-theme-switcher-container")}setupComponents(){this.setupThemeManager(),this.setupLoader(),this.setupSearch(),this.setupNavigation(),this.setupTableOfContents()}setupThemeManager(){if(!this.elements.themeSwitcherContainer)return;const{switcher:e,themeManager:t}=Xe(this.elements.themeSwitcherContainer,{enablePersistence:!0,storageKey:"mdv-theme"});this.components.themeManager=t,typeof this.config.theme=="string"?t.applyTheme(this.config.theme):t.applyTheme(this.config.theme)}setupLoader(){this.loader=new Fe(this.config)}setupSearch(){!this.config.search?.enabled||!this.elements.searchContainer||(this.components.search=new Ve(this.elements.searchContainer,this.config),this.components.search.on("searchResults",e=>{this.components.navigation?.updateDocuments(e.results)}))}setupNavigation(){this.elements.navigationContainer&&(this.components.navigation=new ye(this.elements.navigationContainer,this.config),this.components.navigation.on("documentSelected",e=>{this.loadDocument(e)}))}setupTableOfContents(){this.elements.tocContainer&&(this.components.toc=new ke(this.elements.tocContainer,this.config))}async setupContent(){if(this.config.source.documents.length>0){const e=this.config.source.documents[0];await this.loadDocument(e)}}async loadDocument(e){if(!this.loader||!this.elements.documentContainer)return;this.currentDocument=e,this.showLoading();try{const t=await this.loader.loadDocument(e),r=await this.renderMarkdown(t);this.elements.documentContainer.innerHTML=`<article class="mdv-document">${r}</article>`,this.components.toc?.generate(this.elements.documentContainer),this.updateUrl(e.id)}catch(t){console.error("Failed to load document:",t),this.showError("Failed to load document",t.message)}}async renderMarkdown(e){if(typeof window.marked>"u")throw new Error("Marked library not found. Please include marked.js");const t={breaks:!0,gfm:!0};if(this.config.render?.syntaxHighlighting&&typeof window.hljs<"u"&&typeof window.markedHighlight<"u"){const r=window.markedHighlight.markedHighlight({langPrefix:"hljs language-",highlight(o,i){return window.hljs.highlightAuto(o,i?[i]:void 0).value}});t.extensions=[r]}return window.marked.parse(e,t)}showLoading(){this.elements.documentContainer&&(this.elements.documentContainer.innerHTML=`
      <div class="mdv-loading">
        <div class="mdv-spinner"></div>
        <span>Loading document...</span>
      </div>
    `)}showError(e,t){this.elements.documentContainer&&(this.elements.documentContainer.innerHTML=`
      <div class="mdv-error">
        <div class="mdv-error-title">${e}</div>
        <div>${t}</div>
      </div>
    `)}updateUrl(e){const t=new URL(window.location);t.hash=e,window.history.replaceState({},document.title,t.toString())}destroy(){this.components.toc?.destroy(),this.loader?.abort(),Object.values(this.components).forEach(e=>{typeof e.destroy=="function"&&e.destroy()}),this.elements.container&&(this.elements.container.innerHTML="")}}function Ne(n){return new _e(n)}function Ye(n,e){const t=typeof n=="string"?document.querySelector(n):n;if(!t)throw new Error("Container element not found");const r={container:t,source:{type:"content",documents:[{id:"quick-start",title:"Quick Start",content:e}]},...arguments.length>2?arguments[2]:{}};return Ne(r)}h.MarkdownDocsViewer=_e,h.createCustomTheme=Y,h.createThemeManager=Je,h.createViewer=Ne,h.quickStart=Ye,h.themes=M,Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});