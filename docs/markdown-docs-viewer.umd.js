(function(l,T){typeof exports=="object"&&typeof module<"u"?T(exports,require("marked"),require("marked-highlight"),require("highlight.js")):typeof define=="function"&&define.amd?define(["exports","marked","marked-highlight","highlight.js"],T):(l=typeof globalThis<"u"?globalThis:l||self,T(l.MarkdownDocsViewer={},l.marked,l.markedHighlight,l.hljs))})(this,function(l,T,L,E){"use strict";const w={name:"default",colors:{primary:"#3b82f6",secondary:"#10b981",background:"#ffffff",surface:"#f3f4f6",text:"#111827",textPrimary:"#111827",textLight:"#6b7280",textSecondary:"#6b7280",border:"#e5e7eb",code:"#8b5cf6",codeBackground:"#f3f4f6",link:"#3b82f6",linkHover:"#2563eb",error:"#ef4444",warning:"#f59e0b",success:"#10b981"},fonts:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',code:'"Fira Code", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono", monospace'},spacing:{unit:8,containerMaxWidth:"1200px",sidebarWidth:"320px"},borderRadius:"0.5rem"},F={name:"dark",colors:{primary:"#3b82f6",secondary:"#10b981",background:"#0f172a",surface:"#1e293b",text:"#f1f5f9",textPrimary:"#f1f5f9",textLight:"#94a3b8",textSecondary:"#94a3b8",border:"#334155",code:"#8b5cf6",codeBackground:"#1a202c",link:"#3b82f6",linkHover:"#60a5fa",error:"#ef4444",warning:"#f59e0b",success:"#10b981"},fonts:w.fonts,spacing:w.spacing,borderRadius:w.borderRadius};function oe(s){const e=s.name==="dark"?F:w;return{...e,...s,colors:{...e.colors,...s.colors||{}},fonts:{...e.fonts,...s.fonts||{}},spacing:{...e.spacing,...s.spacing||{}}}}function G(s,e){const{colors:t,fonts:r,spacing:i,borderRadius:o}=s,n=i.unit;return`
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
      width: ${i.sidebarWidth};
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
    }

    .mdv-search-input {
      width: 100%;
      padding: ${n*1.5}px ${n*2}px;
      background-color: ${t.background};
      border: 1px solid ${t.border};
      border-radius: ${o};
      color: ${t.textPrimary};
      font-size: 0.875rem;
      transition: border-color 0.2s;
    }

    .mdv-search-input:focus {
      outline: none;
      border-color: ${t.primary};
      box-shadow: 0 0 0 3px ${t.primary}33;
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
      border-radius: ${o};
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
      border-radius: ${o};
    }

    /* Content */
    .mdv-content {
      flex: 1;
      overflow-y: auto;
      background-color: ${t.background};
    }

    .mdv-document {
      max-width: ${i.containerMaxWidth};
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
      border-radius: ${o};
    }

    .mdv-code-block {
      position: relative;
      margin-bottom: ${n*2}px;
    }

    .mdv-document-content pre {
      background-color: ${t.codeBackground};
      padding: ${n*2}px;
      border-radius: ${o};
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
      border-radius: ${o};
      font-size: 0.75rem;
      cursor: pointer;
      transition: all 0.2s;
    }

    .mdv-copy-button:hover {
      background-color: ${t.secondary};
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
    ${s.customCSS||""}
  `}function ne(s,e,t){const r=t.showCategories?se(s):{"All Documents":s};return`
    <ul class="mdv-nav-list">
      ${Object.entries(r).map(([o,n])=>({category:o,documents:ae(n,t.sortBy||"order")})).map(o=>ce(o,e,t)).join("")}
    </ul>
  `}function se(s){return s.reduce((e,t)=>{const r=t.category||"Uncategorized";return e[r]||(e[r]=[]),e[r].push(t),e},{})}function ae(s,e){return[...s].sort((t,r)=>{switch(e){case"title":return t.title.localeCompare(r.title);case"order":return(t.order||999)-(r.order||999);default:return 0}})}function ce(s,e,t){const r=t.collapsible&&s.documents.length>1;return`
    <li class="mdv-nav-group">
      ${s.category!=="All Documents"?`
        <div class="mdv-nav-category ${r?"collapsible":""}">
          ${s.category}
          ${r?'<span class="mdv-collapse-icon">▼</span>':""}
        </div>
      `:""}
      <ul class="mdv-nav-sublist">
        ${s.documents.map(i=>de(i,e,t)).join("")}
      </ul>
    </li>
  `}function de(s,e,t){const r=(e==null?void 0:e.id)===s.id,i=t.showTags&&s.tags?le(s.tags):"",o=t.showDescription&&s.description?`<div class="mdv-nav-description">${s.description}</div>`:"";return`
    <li class="mdv-nav-item">
      <a href="#${s.id}" 
         class="mdv-nav-link ${r?"active":""}"
         data-doc-id="${s.id}">
        <span class="mdv-nav-title">${s.title}</span>
        ${o}
        ${i}
      </a>
    </li>
  `}function le(s){return`
    <div class="mdv-nav-tags">
      ${s.map(e=>`<span class="mdv-tag">${e}</span>`).join("")}
    </div>
  `}class W{constructor(e=50){this.capacity=Math.max(1,e),this.cache=new Map,this.accessOrder=[]}get(e){if(this.cache.has(e))return this.moveToFront(e),this.cache.get(e)}set(e,t){this.cache.has(e)?(this.cache.set(e,t),this.moveToFront(e)):(this.cache.size>=this.capacity&&this.evictLeastRecentlyUsed(),this.cache.set(e,t),this.accessOrder.unshift(e))}has(e){return this.cache.has(e)}delete(e){return this.cache.has(e)?(this.cache.delete(e),this.accessOrder=this.accessOrder.filter(t=>t!==e),!0):!1}clear(){this.cache.clear(),this.accessOrder=[]}size(){return this.cache.size}getCapacity(){return this.capacity}getMemoryUsage(){let e=0;for(const[t,r]of this.cache)e+=this.estimateSize(t)+this.estimateSize(r);return e}entries(){return this.cache.entries()}moveToFront(e){this.accessOrder=this.accessOrder.filter(t=>t!==e),this.accessOrder.unshift(e)}evictLeastRecentlyUsed(){const e=this.accessOrder.pop();e!==void 0&&this.cache.delete(e)}estimateSize(e){return typeof e=="string"?e.length*2:typeof e=="number"?8:typeof e=="object"&&e!==null?JSON.stringify(e).length*2:4}}class V extends W{constructor(e=50,t="mdv-cache"){super(e),this.storageKey=t,this.useStorage=this.isStorageAvailable(),this.useStorage&&this.loadFromStorage()}set(e,t){super.set(e,t),this.useStorage&&this.saveToStorage()}clear(){if(super.clear(),this.useStorage)try{localStorage.removeItem(this.storageKey)}catch(e){console.warn("Failed to clear persistent cache:",e)}}isStorageAvailable(){try{const e="test";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}loadFromStorage(){try{const e=localStorage.getItem(this.storageKey);if(e){const t=JSON.parse(e);for(const[r,i]of t.entries||[])super.set(r,i)}}catch(e){console.warn("Failed to load cache from storage:",e)}}saveToStorage(){try{const e={entries:Array.from(this.entries()),timestamp:Date.now()};localStorage.setItem(this.storageKey,JSON.stringify(e))}catch(e){console.warn("Failed to save cache to storage:",e)}}}class A{constructor(){this.documents=[],this.titleIndex=new Map,this.contentIndex=new Map,this.tagIndex=new Map,this.searchCache=new Map,this.stopWords=new Set(["a","an","and","are","as","at","be","by","for","from","has","he","in","is","it","its","of","on","that","the","to","was","were","will","with","but","or","not","can"])}updateIndex(e,t){this.documents=e,this.clearIndex(),this.searchCache.clear(),e.forEach((r,i)=>{this.indexText(r.title,this.titleIndex,i),r.description&&this.indexText(r.description,this.contentIndex,i),r.tags&&r.tags.forEach(n=>{this.indexText(n,this.tagIndex,i)});const o=t.get(r.id);if(o){const n=this.cleanMarkdown(o);this.indexText(n,this.contentIndex,i)}})}search(e,t={}){const r=JSON.stringify({query:e,options:t});if(this.searchCache.has(r))return this.searchCache.get(r);const{searchInTags:i=!0,fuzzySearch:o=!1,caseSensitive:n=!1,maxResults:a=10}=t,c=n?e:e.toLowerCase(),u=this.tokenize(c),p=new Map;for(const d of u)this.stopWords.has(d)||(this.searchInIndex(d,this.titleIndex,p,3,o),this.searchInIndex(d,this.contentIndex,p,1,o),i&&this.searchInIndex(d,this.tagIndex,p,2,o));const y=Array.from(p.values()).sort((d,h)=>h.score-d.score).slice(0,a).map(d=>d.doc);return this.searchCache.set(r,y),y}clearIndex(){this.titleIndex.clear(),this.contentIndex.clear(),this.tagIndex.clear()}indexText(e,t,r){const i=this.tokenize(e.toLowerCase());for(const o of i)this.stopWords.has(o)||(t.has(o)||t.set(o,new Set),t.get(o).add(r))}tokenize(e){return e.toLowerCase().replace(/[^\w\s]/g," ").split(/\s+/).filter(t=>t.length>1)}cleanMarkdown(e){return e.replace(/```[\s\S]*?```/g,"").replace(/`[^`]+`/g,"").replace(/\[([^\]]+)\]\([^)]+\)/g,"$1").replace(/[#*_~`]/g,"").replace(/\s+/g," ").trim()}searchInIndex(e,t,r,i,o){if(t.has(e))for(const n of t.get(e))this.addToResults(r,n,i);if(o){for(const[n,a]of t)if(this.fuzzyMatch(e,n))for(const c of a)this.addToResults(r,c,i*.5)}for(const[n,a]of t)if(n.startsWith(e)&&n!==e)for(const c of a)this.addToResults(r,c,i*.8)}addToResults(e,t,r){if(t<this.documents.length){const i=this.documents[t];e.has(t)?e.get(t).score+=r:e.set(t,{score:r,doc:i})}}fuzzyMatch(e,t){if(e.length===0)return!0;if(t.length===0)return!1;const r=Math.floor(Math.max(e.length,t.length)*.3);return this.levenshteinDistance(e,t)<=r}levenshteinDistance(e,t){const r=Array(t.length+1).fill(null).map(()=>Array(e.length+1).fill(null));for(let i=0;i<=e.length;i++)r[0][i]=i;for(let i=0;i<=t.length;i++)r[i][0]=i;for(let i=1;i<=t.length;i++)for(let o=1;o<=e.length;o++){const n=e[o-1]===t[i-1]?0:1;r[i][o]=Math.min(r[i][o-1]+1,r[i-1][o]+1,r[i-1][o-1]+n)}return r[t.length][e.length]}}function O(s,e){let t;return(...r)=>{const i=()=>{t=void 0,s(...r)};t&&clearTimeout(t),t=setTimeout(i,e)}}function he(s,e){let t;return(...r)=>{t||(s(...r),t=!0,setTimeout(()=>t=!1,e))}}class me{constructor(){this.observers=new Map,this.loadedElements=new WeakSet}observeElement(e,t,r={}){if(this.loadedElements.has(e))return;const i=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting&&!this.loadedElements.has(n.target)&&(t(),this.loadedElements.add(n.target),i.unobserve(n.target),this.observers.delete(n.target))})},{rootMargin:"50px",threshold:.1,...r});i.observe(e),this.observers.set(e,i)}unobserveElement(e){const t=this.observers.get(e);t&&(t.unobserve(e),this.observers.delete(e))}cleanup(){for(const[e,t]of this.observers)t.unobserve(e);this.observers.clear()}}class M{constructor(){this.cleanupTasks=[],this.memoryWarningThreshold=50*1024*1024}static getInstance(){return M.instance||(M.instance=new M),M.instance}addCleanupTask(e){this.cleanupTasks.push(e)}removeCleanupTask(e){const t=this.cleanupTasks.indexOf(e);t>-1&&this.cleanupTasks.splice(t,1)}cleanup(){this.cleanupTasks.forEach(e=>{try{e()}catch(t){console.warn("Cleanup task failed:",t)}}),global.gc&&global.gc()}checkMemoryUsage(){if("memory"in performance){const t=performance.memory.usedJSHeapSize;if(t>this.memoryWarningThreshold)return console.warn(`High memory usage detected: ${Math.round(t/1024/1024)}MB`),this.cleanup(),!1}return!0}getMemoryStats(){if("memory"in performance){const e=performance.memory;return{used:Math.round(e.usedJSHeapSize/1024/1024),total:Math.round(e.totalJSHeapSize/1024/1024),limit:Math.round(e.jsHeapSizeLimit/1024/1024)}}return{}}}class K{constructor(){this.metrics=new Map,this.observers=[]}startTiming(e){const t=performance.now();return()=>{const r=performance.now()-t;this.recordMetric(e,r)}}recordMetric(e,t){this.metrics.has(e)||this.metrics.set(e,[]);const r=this.metrics.get(e);r.push(t),r.length>100&&r.shift()}getMetrics(e){const t=this.metrics.get(e)||[];return t.length===0?{avg:0,min:0,max:0,count:0}:{avg:t.reduce((i,o)=>i+o,0)/t.length,min:Math.min(...t),max:Math.max(...t),count:t.length}}getAllMetrics(){const e={};for(const t of this.metrics.keys())e[t]=this.getMetrics(t);return e}clearMetrics(){this.metrics.clear()}observeResourceTiming(){if("PerformanceObserver"in window){const e=new PerformanceObserver(t=>{t.getEntries().forEach(i=>{i.entryType==="resource"&&this.recordMetric("resource-load",i.duration)})});try{e.observe({entryTypes:["resource"]}),this.observers.push(e)}catch(t){console.warn("Failed to observe resource timing:",t)}}}cleanup(){this.observers.forEach(e=>e.disconnect()),this.observers=[]}}function ue(s){return`
    <div class="mdv-search">
      <input 
        type="text" 
        class="mdv-search-input" 
        placeholder="${s.placeholder||"Search documentation..."}"
        aria-label="Search documentation"
      />
      <div class="mdv-search-results"></div>
    </div>
  `}class pe{constructor(e,t){this.searchInput=null,this.searchResults=null,this.currentQuery="",this.options=e,this.searchIndex=new A,this.onDocumentSelect=t,this.debouncedSearch=O(r=>this.performSearch(r),300)}updateIndex(e,t){this.searchIndex.updateIndex(e,t)}attachToDOM(e){const t=e.querySelector(".mdv-search");t&&(this.searchInput=t.querySelector(".mdv-search-input"),this.searchResults=t.querySelector(".mdv-search-results"),this.searchInput&&(this.searchInput.addEventListener("input",this.handleSearchInput.bind(this)),this.searchInput.addEventListener("keydown",this.handleKeyDown.bind(this)),this.searchInput.addEventListener("focus",this.handleFocus.bind(this)),this.searchInput.addEventListener("blur",this.handleBlur.bind(this))),this.searchResults&&(this.searchResults.style.display="none"))}handleSearchInput(e){const r=e.target.value.trim();if(this.currentQuery=r,r.length===0){this.hideResults();return}r.length>=2&&this.debouncedSearch(r)}handleKeyDown(e){var i;if(!this.searchResults)return;const t=this.searchResults.querySelectorAll(".mdv-search-result"),r=this.searchResults.querySelector(".mdv-search-result.active");switch(e.key){case"ArrowDown":e.preventDefault(),this.navigateResults(t,r,1);break;case"ArrowUp":e.preventDefault(),this.navigateResults(t,r,-1);break;case"Enter":e.preventDefault(),r?this.selectResult(r):t.length>0&&this.selectResult(t[0]);break;case"Escape":this.hideResults(),(i=this.searchInput)==null||i.blur();break}}handleFocus(){this.currentQuery.length>=2&&this.performSearch(this.currentQuery)}handleBlur(){setTimeout(()=>{this.hideResults()},150)}navigateResults(e,t,r){if(e.length===0)return;t&&t.classList.remove("active");let i=0;t?i=Array.from(e).indexOf(t)+r:r===-1&&(i=e.length-1),i<0&&(i=e.length-1),i>=e.length&&(i=0),e[i].classList.add("active"),e[i].scrollIntoView({block:"nearest"})}selectResult(e){const t=e.getAttribute("data-doc-id");if(t&&this.onDocumentSelect){const r=this.findDocumentById(t);r&&(this.onDocumentSelect(r),this.hideResults(),this.searchInput&&(this.searchInput.value="",this.currentQuery=""))}}findDocumentById(e){return{id:e,title:e}}performSearch(e){if(!this.searchResults)return;const t=this.searchIndex.search(e,{searchInTags:this.options.searchInTags,fuzzySearch:this.options.fuzzySearch,caseSensitive:this.options.caseSensitive,maxResults:this.options.maxResults||10});this.renderResults(t,e)}renderResults(e,t){if(!this.searchResults)return;if(e.length===0){this.searchResults.innerHTML=`
        <div class="mdv-search-no-results">
          No results found for "${this.escapeHtml(t)}"
        </div>
      `,this.showResults();return}const r=e.map((i,o)=>{const n=this.highlightQuery(i.title,t),a=i.description?this.highlightQuery(i.description,t):"",c=i.tags?i.tags.map(u=>`<span class="mdv-search-tag">${this.escapeHtml(u)}</span>`).join(""):"";return`
        <div class="mdv-search-result ${o===0?"active":""}" data-doc-id="${this.escapeHtml(i.id)}">
          <div class="mdv-search-result-title">${n}</div>
          ${a?`<div class="mdv-search-result-description">${a}</div>`:""}
          ${c?`<div class="mdv-search-result-tags">${c}</div>`:""}
          ${i.category?`<div class="mdv-search-result-category">${this.escapeHtml(i.category)}</div>`:""}
        </div>
      `}).join("");this.searchResults.innerHTML=r,this.searchResults.querySelectorAll(".mdv-search-result").forEach(i=>{i.addEventListener("click",()=>this.selectResult(i)),i.addEventListener("mouseenter",()=>{var o;(o=this.searchResults)==null||o.querySelectorAll(".mdv-search-result").forEach(n=>n.classList.remove("active")),i.classList.add("active")})}),this.showResults()}highlightQuery(e,t){if(!t)return this.escapeHtml(e);const r=this.options.caseSensitive===!0?"g":"gi",i=new RegExp(`(${this.escapeRegex(t)})`,r);return this.escapeHtml(e).replace(i,"<mark>$1</mark>")}showResults(){this.searchResults&&(this.searchResults.style.display="block")}hideResults(){this.searchResults&&(this.searchResults.style.display="none")}escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}escapeRegex(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}clearSearch(){this.searchInput&&(this.searchInput.value=""),this.currentQuery="",this.hideResults()}setDocuments(e){this.findDocumentById=t=>e.find(r=>r.id===t)||null}destroy(){this.searchInput&&(this.searchInput.removeEventListener("input",this.handleSearchInput.bind(this)),this.searchInput.removeEventListener("keydown",this.handleKeyDown.bind(this)),this.searchInput.removeEventListener("focus",this.handleFocus.bind(this)),this.searchInput.removeEventListener("blur",this.handleBlur.bind(this)))}}var v=(s=>(s.INVALID_CONFIG="INVALID_CONFIG",s.CONTAINER_NOT_FOUND="CONTAINER_NOT_FOUND",s.INVALID_SOURCE="INVALID_SOURCE",s.DOCUMENT_NOT_FOUND="DOCUMENT_NOT_FOUND",s.DOCUMENT_LOAD_FAILED="DOCUMENT_LOAD_FAILED",s.DOCUMENT_PARSE_FAILED="DOCUMENT_PARSE_FAILED",s.NETWORK_ERROR="NETWORK_ERROR",s.NETWORK_TIMEOUT="NETWORK_TIMEOUT",s.UNAUTHORIZED_ACCESS="UNAUTHORIZED_ACCESS",s.RATE_LIMITED="RATE_LIMITED",s.FILE_NOT_FOUND="FILE_NOT_FOUND",s.FILE_READ_ERROR="FILE_READ_ERROR",s.PERMISSION_DENIED="PERMISSION_DENIED",s.GITHUB_API_ERROR="GITHUB_API_ERROR",s.GITHUB_RATE_LIMIT="GITHUB_RATE_LIMIT",s.GITHUB_NOT_FOUND="GITHUB_NOT_FOUND",s.SEARCH_FAILED="SEARCH_FAILED",s.SEARCH_TIMEOUT="SEARCH_TIMEOUT",s.MARKDOWN_PARSE_ERROR="MARKDOWN_PARSE_ERROR",s.SYNTAX_HIGHLIGHT_ERROR="SYNTAX_HIGHLIGHT_ERROR",s.THEME_LOAD_ERROR="THEME_LOAD_ERROR",s.INVALID_THEME="INVALID_THEME",s.UNKNOWN_ERROR="UNKNOWN_ERROR",s.OPERATION_CANCELLED="OPERATION_CANCELLED",s.MISSING_DEPENDENCY="MISSING_DEPENDENCY",s))(v||{}),b=(s=>(s.LOW="low",s.MEDIUM="medium",s.HIGH="high",s.CRITICAL="critical",s))(b||{});class m extends Error{constructor(e,t,r,i="medium",o=!1,n={}){super(t),this.name="MarkdownDocsError",this.code=e,this.severity=i,this.userMessage=r,this.isRetryable=o,this.context={timestamp:new Date,userAgent:typeof navigator<"u"?navigator.userAgent:void 0,url:typeof window<"u"&&window.location?window.location.href:void 0,stackTrace:this.stack,...n},Object.setPrototypeOf(this,m.prototype)}toJSON(){return{name:this.name,code:this.code,message:this.message,userMessage:this.userMessage,severity:this.severity,isRetryable:this.isRetryable,context:this.context}}}class ge extends m{constructor(e,t,r){super("INVALID_CONFIG",e,t,"high",!1,r),this.name="ConfigurationError"}}class fe extends m{constructor(e,t,r,i=!0,o){super(e,t,r,"medium",i,o),this.name="NetworkError"}}class Y extends m{constructor(e,t,r,i=!1,o){super(e,t,r,"medium",i,o),this.name="DocumentError"}}class ve extends m{constructor(e,t,r,i=!1,o){super(e,t,r,"medium",i,o),this.name="GitHubError"}}const x={containerNotFound(s){return new ge(`Container element not found: ${s}`,"Unable to find the container element. Please check your configuration.",{operation:"initialization",additionalData:{selector:s}})},documentNotFound(s){return new Y("DOCUMENT_NOT_FOUND",`Document not found: ${s}`,"The requested document could not be found.",!1,{operation:"loadDocument",documentId:s})},networkError(s,e,t){const r=e?`Network request failed: ${e} ${t}`:"Network request failed";return new fe("NETWORK_ERROR",r,"Unable to load content due to a network error. Please check your connection and try again.",!0,{operation:"networkRequest",additionalData:{url:s,status:e,statusText:t}})},githubApiError(s,e,t){const r=e===404?"GITHUB_NOT_FOUND":e===403?"GITHUB_RATE_LIMIT":"GITHUB_API_ERROR",i=e===404?"The requested GitHub file was not found.":e===403?"GitHub API rate limit reached. Please try again later.":"Unable to load content from GitHub. Please try again later.";return new ve(r,`GitHub API error: ${t}`,i,e===403,{operation:"githubRequest",additionalData:{path:s,status:e,responseMessage:t}})},parseError(s,e){return new Y("MARKDOWN_PARSE_ERROR","Failed to parse markdown content","Unable to render the document content. The document may contain invalid formatting.",!1,{operation:"parseMarkdown",originalError:e,additionalData:{contentLength:s.length}})}},H={maxAttempts:3,baseDelay:1e3,maxDelay:1e4,exponentialBackoff:!0,retryableErrorCodes:["NETWORK_ERROR","NETWORK_TIMEOUT","RATE_LIMITED","GITHUB_RATE_LIMIT"]};async function J(s,e={}){const t={...H,...e};let r;for(let i=1;i<=t.maxAttempts;i++)try{return await s()}catch(o){if(r=o,i===t.maxAttempts)break;if(o instanceof m){if(!o.isRetryable||!t.retryableErrorCodes.includes(o.code))break}else break;const n=t.exponentialBackoff?Math.min(t.baseDelay*Math.pow(2,i-1),t.maxDelay):t.baseDelay;await new Promise(a=>setTimeout(a,n))}throw r}class U{constructor(e){this.errorHandler=e}async execute(e,t,r={}){try{return await e()}catch(i){const o=this.wrapError(i,r);return this.errorHandler&&this.errorHandler(o),t()}}wrapError(e,t){return e instanceof m?e:e instanceof Error?new m("UNKNOWN_ERROR",e.message,"An unexpected error occurred. Please try again.","medium",!1,{...t,originalError:e}):new m("UNKNOWN_ERROR","Unknown error occurred","An unexpected error occurred. Please try again.","medium",!1,{...t,originalError:e})}}class _{constructor(e=!1){this.isDevelopment=e}log(e){const t=this.getLogMethod(e.severity);this.isDevelopment?t("MarkdownDocsViewer Error:",{code:e.code,message:e.message,userMessage:e.userMessage,severity:e.severity,context:e.context,stack:e.stack}):t(`[${e.code}] ${e.userMessage}`)}debug(e,t){this.isDevelopment&&console.debug("MarkdownDocsViewer Debug:",e,t)}warn(e,t){console.warn("MarkdownDocsViewer Warning:",e,t)}error(e,t){console.error("MarkdownDocsViewer Error:",e,t)}getLogMethod(e){switch(e){case"low":return console.info;case"medium":return console.warn;case"high":case"critical":return console.error;default:return console.log}}}class be{constructor(e,t={},r,i=50){this.loadingPromises=new Map,this.source=e,this.retryConfig={...H,...t},this.logger=r||new _,this.errorBoundary=new U(o=>this.logger.log(o)),this.cache=new V(i,`mdv-cache-${this.source.type}`),this.performanceMonitor=new K,this.memoryManager=M.getInstance(),this.memoryManager.addCleanupTask(()=>{this.clearOldCacheEntries()})}async loadAll(){return this.errorBoundary.execute(async()=>(this.logger.debug("Loading all documents",{sourceType:this.source.type}),this.validateSource(),this.source.documents),()=>(this.logger.warn("Failed to load documents, returning empty array"),[]),{operation:"loadAll"})}async loadDocument(e){return this.errorBoundary.execute(async()=>{const t=this.performanceMonitor.startTiming("document-load");try{if(this.cache.has(e.id)){this.logger.debug("Loading document from cache",{documentId:e.id});const o=this.cache.get(e.id);return t(),o}if(this.loadingPromises.has(e.id)){this.logger.debug("Document already loading, waiting for existing promise",{documentId:e.id});const o=await this.loadingPromises.get(e.id);return t(),o}this.logger.debug("Loading document",{documentId:e.id,hasContent:!!e.content,hasFile:!!e.file});let r="";const i=(async()=>{if(e.content)r=e.content;else if(e.file)r=await J(()=>this.loadFromSource(e.file),this.retryConfig);else throw x.documentNotFound(e.id);return this.cache.set(e.id,r),this.logger.debug("Document loaded successfully",{documentId:e.id,contentLength:r.length,cacheSize:this.cache.size()}),this.memoryManager.checkMemoryUsage(),r})();this.loadingPromises.set(e.id,i);try{return r=await i,r}finally{this.loadingPromises.delete(e.id),t()}}catch(r){throw t(),r}},()=>(this.logger.warn("Failed to load document, returning empty content",{documentId:e.id}),""),{operation:"loadDocument",documentId:e.id})}validateSource(){if(!this.source)throw new m(v.INVALID_SOURCE,"Document source is not defined","Invalid document source configuration.",b.HIGH,!1);if(!this.source.documents||this.source.documents.length===0)throw new m(v.INVALID_SOURCE,"No documents defined in source","No documents are configured to load.",b.MEDIUM,!1);switch(this.source.type){case"local":break;case"url":this.source.baseUrl||this.logger.warn("URL source without baseUrl may cause issues with relative paths");break;case"github":break;case"content":{const e=this.source.documents.filter(t=>!t.content);e.length>0&&this.logger.warn("Content source has documents without content",{missingContentIds:e.map(t=>t.id)});break}default:throw new m(v.INVALID_SOURCE,`Unknown source type: ${this.source.type}`,"Unsupported document source type.",b.HIGH,!1)}}async loadFromSource(e){switch(this.logger.debug("Loading from source",{path:e,sourceType:this.source.type}),this.source.type){case"local":return this.loadLocal(e);case"url":return this.loadFromUrl(e);case"github":return this.loadFromGithub(e);case"content":throw new m(v.DOCUMENT_LOAD_FAILED,"Content source should not load from path","Internal error: Content source attempted to load from file path.",b.MEDIUM,!1);default:throw new m(v.INVALID_SOURCE,`Unknown source type: ${this.source.type}`,"Unsupported document source type.",b.HIGH,!1)}}async loadLocal(e){const t=this.source.basePath?`${this.source.basePath}/${e}`:e;this.logger.debug("Loading local file",{path:e,fullPath:t});try{const r=await fetch(t);if(!r.ok)throw r.status===404?x.documentNotFound(e):x.networkError(t,r.status,r.statusText);const i=await r.text();return this.logger.debug("Local file loaded successfully",{path:e,contentLength:i.length}),i}catch(r){throw r instanceof m?r:r instanceof TypeError&&r.message.includes("fetch")?x.networkError(t):new m(v.FILE_READ_ERROR,`Failed to load local file ${e}: ${r}`,"Unable to load the requested file. Please check if the file exists and is accessible.",b.MEDIUM,!0,{operation:"loadLocal",originalError:r,additionalData:{path:e,fullPath:t}})}}async loadFromUrl(e){const t=this.source.baseUrl?`${this.source.baseUrl}/${e}`:e;this.logger.debug("Loading from URL",{path:e,url:t});try{const r=await fetch(t,{headers:this.source.headers||{}});if(!r.ok)throw r.status===404?x.documentNotFound(e):r.status===403||r.status===401?new m(v.UNAUTHORIZED_ACCESS,`Unauthorized access to ${t}: ${r.statusText}`,"Access denied. Please check your credentials or permissions.",b.HIGH,!1,{operation:"loadFromUrl",additionalData:{url:t,status:r.status}}):r.status===429?new m(v.RATE_LIMITED,`Rate limited when accessing ${t}`,"Too many requests. Please wait and try again.",b.MEDIUM,!0,{operation:"loadFromUrl",additionalData:{url:t,status:r.status}}):x.networkError(t,r.status,r.statusText);const i=await r.text();return this.logger.debug("URL content loaded successfully",{url:t,contentLength:i.length}),i}catch(r){throw r instanceof m?r:r instanceof TypeError&&r.message.includes("fetch")?x.networkError(t):new m(v.NETWORK_ERROR,`Failed to load from URL ${t}: ${r}`,"Unable to load content from the specified URL. Please check your connection and try again.",b.MEDIUM,!0,{operation:"loadFromUrl",originalError:r,additionalData:{path:e,url:t}})}}async loadFromGithub(e){const t=e.split("/");if(t.length<3)throw new m(v.INVALID_CONFIG,"Invalid GitHub path format. Expected: owner/repo/branch/path/to/file","Invalid GitHub file path format.",b.HIGH,!1,{operation:"loadFromGithub",additionalData:{path:e,expectedFormat:"owner/repo/branch/path/to/file"}});const[r,i,o="main",...n]=t,a=`https://api.github.com/repos/${r}/${i}/contents/${n.join("/")}?ref=${o}`;this.logger.debug("Loading from GitHub",{path:e,owner:r,repo:i,branch:o,filePath:n.join("/"),apiUrl:a});try{const c=await fetch(a,{headers:{Accept:"application/vnd.github.v3+json","User-Agent":"MarkdownDocsViewer/1.0",...this.source.headers||{}}});if(!c.ok){if(c.status===404)throw x.githubApiError(e,404,"File not found");if(c.status===403){const d=c.headers.get("X-RateLimit-Reset");let h="GitHub API rate limit exceeded";if(d){const f=new Date(parseInt(d)*1e3);h+=`. Rate limit resets at ${f.toISOString()}`}throw x.githubApiError(e,403,h)}const y=await c.text().catch(()=>"Unknown error");throw x.githubApiError(e,c.status,y)}const u=await c.json();if(Array.isArray(u))throw new m(v.GITHUB_API_ERROR,"GitHub path points to a directory, not a file","The specified GitHub path is a directory. Please specify a file path.",b.MEDIUM,!1,{operation:"loadFromGithub",additionalData:{path:e,responseType:"directory"}});if(!u.content)throw new m(v.GITHUB_API_ERROR,"No content found in GitHub response","The requested GitHub file appears to be empty or inaccessible.",b.MEDIUM,!1,{operation:"loadFromGithub",additionalData:{path:e,data:u}});const p=atob(u.content.replace(/\s/g,""));return this.logger.debug("GitHub content loaded successfully",{path:e,contentLength:p.length,sha:u.sha}),p}catch(c){throw c instanceof m?c:c instanceof TypeError&&c.message.includes("fetch")?x.networkError(a):new m(v.GITHUB_API_ERROR,`Failed to load from GitHub ${e}: ${c}`,"Unable to load content from GitHub. Please check the file path and try again.",b.MEDIUM,!0,{operation:"loadFromGithub",originalError:c,additionalData:{path:e,apiUrl:a,owner:r,repo:i,branch:o}})}}clearCache(){this.logger.debug("Clearing document cache",{cacheSize:this.cache.size()}),this.cache.clear()}getCacheSize(){return this.cache.size()}isCached(e){return this.cache.has(e)}getCacheStats(){return{size:this.cache.size(),capacity:this.cache.getCapacity(),memoryUsage:this.cache.getMemoryUsage()}}getPerformanceMetrics(){return this.performanceMonitor.getAllMetrics()}clearOldCacheEntries(){this.logger.debug("Memory cleanup triggered, cache will evict LRU entries as needed")}updateRetryConfig(e){this.retryConfig={...this.retryConfig,...e},this.logger.debug("Updated retry configuration",{retryConfig:this.retryConfig})}destroy(){this.cache.clear(),this.loadingPromises.clear(),this.performanceMonitor.cleanup(),this.logger.debug("DocumentLoader destroyed and cleaned up")}async preloadDocuments(e){const t=this.performanceMonitor.startTiming("preload-documents");try{const r=this.source.documents.filter(i=>e.includes(i.id)&&!this.cache.has(i.id));if(r.length>0){this.logger.debug("Preloading documents",{count:r.length,docIds:e});const i=3;for(let o=0;o<r.length;o+=i){const n=r.slice(o,o+i);await Promise.allSettled(n.map(a=>this.loadDocument(a)))}}}finally{t()}}}class ye{constructor(e,t){this.currentRoute="",this.boundHashChangeHandler=null,this.mode=e,this.onRouteChange=t,e==="hash"&&(this.boundHashChangeHandler=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.boundHashChangeHandler),this.handleHashChange())}handleHashChange(){const e=window.location.hash.slice(1);e&&e!==this.currentRoute&&(this.currentRoute=e,this.onRouteChange(e))}setRoute(e){this.currentRoute=e,this.mode==="hash"&&(window.location.hash=e)}getCurrentRoute(){return this.mode==="hash"?window.location.hash.slice(1)||null:this.currentRoute||null}destroy(){this.mode==="hash"&&this.boundHashChangeHandler&&(window.removeEventListener("hashchange",this.boundHashChangeHandler),this.boundHashChangeHandler=null)}}const g={xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400},R={sm:540,md:720,lg:960,xl:1140,xxl:1320},B={minimum:44,comfortable:48,large:56},C={baseFontSize:{xs:14,sm:15,md:16},lineHeight:{tight:1.25,normal:1.5,relaxed:1.75},headings:{h1:{xs:1.75,sm:2,md:2.5,lg:3,xl:3.5,xxl:4},h2:{xs:1.5,sm:1.75,md:2,lg:2.25,xl:2.5,xxl:2.75},h3:{xs:1.25,sm:1.5,md:1.75,lg:1.875,xl:2,xxl:2.125},h4:{xs:1.125,sm:1.25,md:1.375,lg:1.5,xl:1.625,xxl:1.75},h5:{xs:1,sm:1.125,md:1.25,lg:1.375,xl:1.5,xxl:1.625},h6:{xs:.875,sm:1,md:1.125,lg:1.25,xl:1.375,xxl:1.5}}};function we(){return`
    :root {
      /* Breakpoint values */
      --mdv-breakpoint-xs: ${g.xs}px;
      --mdv-breakpoint-sm: ${g.sm}px;
      --mdv-breakpoint-md: ${g.md}px;
      --mdv-breakpoint-lg: ${g.lg}px;
      --mdv-breakpoint-xl: ${g.xl}px;
      --mdv-breakpoint-xxl: ${g.xxl}px;
      
      /* Touch targets */
      --mdv-touch-target-min: ${B.minimum}px;
      --mdv-touch-target-comfortable: ${B.comfortable}px;
      --mdv-touch-target-large: ${B.large}px;
      
      /* Container max-widths */
      --mdv-container-sm: ${R.sm}px;
      --mdv-container-md: ${R.md}px;
      --mdv-container-lg: ${R.lg}px;
      --mdv-container-xl: ${R.xl}px;
      --mdv-container-xxl: ${R.xxl}px;
      
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
  `}function xe(){return`
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
  `}function ke(){const s=Object.entries(C.headings).map(([e,t])=>{const r=t.xs;let i=`
    ${e} {
      font-size: ${r}rem;
      line-height: ${C.lineHeight.tight};
      margin-bottom: var(--mdv-spacing-md);
    }`;return Object.entries(t).forEach(([o,n])=>{o!=="xs"&&g[o]&&(i+=`
    @media (min-width: ${g[o]}px) {
      ${e} {
        font-size: ${n}rem;
      }
    }`)}),i}).join(`
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
    
    ${s}
    
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
  `}function Te(){return`
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
  `}function $e(){return`
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
        -webkit-overflow-scrolling: touch;
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
        -webkit-overflow-scrolling: touch;
      }
      
      .mdv-table-wrapper {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
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
  `}function Se(s){const e=we(),t=xe(),r=ke(),i=Te(),o=$e();return`
    ${e}
    ${t}
    ${r}
    ${i}
    ${o}
  `}function N(){return typeof window>"u"?!1:window.innerWidth<g.md}function X(){if(typeof window>"u")return"md";const s=window.innerWidth;return s>=g.xxl?"xxl":s>=g.xl?"xl":s>=g.lg?"lg":s>=g.md?"md":s>=g.sm?"sm":"xs"}function Ee(){if(typeof document>"u")return;let s=document.querySelector('meta[name="viewport"]');s||(s=document.createElement("meta"),s.name="viewport",document.head.appendChild(s)),s.content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover, user-scalable=yes, maximum-scale=5"}class Q{constructor(e={}){this.container=null,this.options={enablePersistence:!0,storageKey:"mdv-theme",...e},this.themes=new Map,this.initializeBuiltInThemes();const t=this.getSavedThemeName();this.currentTheme=t&&this.themes.get(t)||w}initializeBuiltInThemes(){this.registerTheme({...w,description:"Clean and modern light theme",author:"MarkdownDocsViewer",version:"1.0.0"}),this.registerTheme({...F,description:"Easy on the eyes dark theme",author:"MarkdownDocsViewer",version:"1.0.0"}),this.registerTheme({name:"high-contrast",description:"High contrast theme for improved accessibility",author:"MarkdownDocsViewer",version:"1.0.0",colors:{primary:"#0066cc",secondary:"#008055",background:"#ffffff",surface:"#f0f0f0",text:"#000000",textPrimary:"#000000",textLight:"#333333",textSecondary:"#333333",border:"#000000",code:"#6600cc",codeBackground:"#ffffcc",link:"#0066cc",linkHover:"#0044aa",error:"#cc0000",warning:"#cc6600",success:"#008055"},fonts:w.fonts,spacing:w.spacing,borderRadius:"0.25rem"}),this.registerTheme({name:"github",description:"GitHub-inspired theme",author:"MarkdownDocsViewer",version:"1.0.0",colors:{primary:"#0969da",secondary:"#1a7f37",background:"#ffffff",surface:"#f6f8fa",text:"#1f2328",textPrimary:"#1f2328",textLight:"#656d76",textSecondary:"#656d76",border:"#d0d7de",code:"#0550ae",codeBackground:"#f6f8fa",link:"#0969da",linkHover:"#0860ca",error:"#d1242f",warning:"#9a6700",success:"#1a7f37"},fonts:{body:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif',code:'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'},spacing:w.spacing,borderRadius:"0.375rem"}),this.registerTheme({name:"dracula",description:"Popular dark theme with vibrant colors",author:"MarkdownDocsViewer",version:"1.0.0",colors:{primary:"#bd93f9",secondary:"#50fa7b",background:"#282a36",surface:"#44475a",text:"#f8f8f2",textPrimary:"#f8f8f2",textLight:"#6272a4",textSecondary:"#6272a4",border:"#44475a",code:"#ff79c6",codeBackground:"#44475a",link:"#8be9fd",linkHover:"#9aedfe",error:"#ff5555",warning:"#ffb86c",success:"#50fa7b"},fonts:w.fonts,spacing:w.spacing,borderRadius:"0.5rem"}),this.registerTheme({name:"solarized-light",description:"Precision colors for machines and people",author:"MarkdownDocsViewer",version:"1.0.0",colors:{primary:"#268bd2",secondary:"#859900",background:"#fdf6e3",surface:"#eee8d5",text:"#657b83",textPrimary:"#586e75",textLight:"#93a1a1",textSecondary:"#93a1a1",border:"#eee8d5",code:"#b58900",codeBackground:"#eee8d5",link:"#268bd2",linkHover:"#1e6fa8",error:"#dc322f",warning:"#cb4b16",success:"#859900"},fonts:w.fonts,spacing:w.spacing,borderRadius:"0.375rem"}),this.registerTheme({name:"solarized-dark",description:"Precision colors for machines and people (dark)",author:"MarkdownDocsViewer",version:"1.0.0",colors:{primary:"#268bd2",secondary:"#859900",background:"#002b36",surface:"#073642",text:"#839496",textPrimary:"#93a1a1",textLight:"#586e75",textSecondary:"#586e75",border:"#073642",code:"#b58900",codeBackground:"#073642",link:"#268bd2",linkHover:"#1e6fa8",error:"#dc322f",warning:"#cb4b16",success:"#859900"},fonts:w.fonts,spacing:w.spacing,borderRadius:"0.375rem"}),this.registerTheme({name:"material",description:"Material Design inspired theme",author:"MarkdownDocsViewer",version:"1.0.0",colors:{primary:"#1976d2",secondary:"#00897b",background:"#ffffff",surface:"#f5f5f5",text:"#212121",textPrimary:"#212121",textLight:"#757575",textSecondary:"#757575",border:"#e0e0e0",code:"#673ab7",codeBackground:"#f5f5f5",link:"#1976d2",linkHover:"#1565c0",error:"#d32f2f",warning:"#f57c00",success:"#388e3c"},fonts:{body:'Roboto, "Helvetica Neue", Arial, sans-serif',heading:'Roboto, "Helvetica Neue", Arial, sans-serif',code:'"Roboto Mono", Consolas, Monaco, monospace'},spacing:w.spacing,borderRadius:"0.25rem"})}registerTheme(e){this.themes.set(e.name,e)}setTheme(e){const t=this.themes.get(e);return t?(this.currentTheme=t,this.options.enablePersistence&&this.saveThemeName(e),this.applyCSSVariables(t),this.options.onThemeChange&&this.options.onThemeChange(t),t):(console.warn(`Theme "${e}" not found`),null)}getCurrentTheme(){return this.currentTheme}getAvailableThemes(){return Array.from(this.themes.values())}getTheme(e){return this.themes.get(e)}createCustomTheme(e,t){const r=this.currentTheme,i={...r,...t,name:e,colors:{...r.colors,...t.colors||{}},fonts:{...r.fonts,...t.fonts||{}},spacing:{...r.spacing,...t.spacing||{}},description:"Custom theme",author:"User",version:"1.0.0"};return this.registerTheme(i),i}applyCSSVariables(e){const t=document.documentElement;Object.entries(e.colors).forEach(([r,i])=>{const o=`--mdv-color-${this.kebabCase(r)}`;t.style.setProperty(o,i);const n=this.hexToRgb(i);n&&t.style.setProperty(`${o}-rgb`,`${n.r}, ${n.g}, ${n.b}`)}),Object.entries(e.fonts).forEach(([r,i])=>{t.style.setProperty(`--mdv-font-${this.kebabCase(r)}`,i)}),t.style.setProperty("--mdv-spacing-unit",`${e.spacing.unit}px`),t.style.setProperty("--mdv-container-max-width",e.spacing.containerMaxWidth),t.style.setProperty("--mdv-sidebar-width",e.spacing.sidebarWidth),t.style.setProperty("--mdv-border-radius",e.borderRadius),t.setAttribute("data-mdv-theme",e.name)}getContrastRatio(e,t){const r=this.getLuminance(e),i=this.getLuminance(t),o=Math.max(r,i),n=Math.min(r,i);return(o+.05)/(n+.05)}isAccessible(e,t,r="AA"){const i=this.getContrastRatio(e,t);return r==="AAA"?i>=7:i>=4.5}getLuminance(e){const t=this.hexToRgb(e);if(!t)return 0;const r=t.r/255,i=t.g/255,o=t.b/255,n=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),a=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4),c=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4);return .2126*n+.7152*a+.0722*c}hexToRgb(e){const t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}kebabCase(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}getSavedThemeName(){if(!this.options.enablePersistence||typeof localStorage>"u")return null;try{return localStorage.getItem(this.options.storageKey||"mdv-theme")}catch{return null}}saveThemeName(e){if(!(!this.options.enablePersistence||typeof localStorage>"u"))try{localStorage.setItem(this.options.storageKey||"mdv-theme",e)}catch(t){console.warn("Failed to save theme preference:",t)}}exportTheme(e){return JSON.stringify(e,null,2)}importTheme(e){try{const t=JSON.parse(e);return this.validateTheme(t),this.registerTheme(t),t}catch(t){return console.error("Failed to import theme:",t),null}}validateTheme(e){if(!e.name||typeof e.name!="string")throw new Error("Theme must have a name");if(!e.colors||typeof e.colors!="object")throw new Error("Theme must have colors");const t=["primary","secondary","background","surface","text","textPrimary","textSecondary","textLight","border","code","codeBackground","link","linkHover","error","warning","success"];for(const r of t)if(!e.colors[r])throw new Error(`Theme missing required color: ${r}`)}}function $(s){if(s==null)return"";const e=String(s),t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","\n":"&#10;","\r":"&#13;","	":"&#9;"};return e.replace(/[&<>"'\n\r\t]/g,r=>t[r])}function I(s){if(!s)return"";const e=String(s).trim();return/^(#[0-9a-fA-F]{3,8}|rgb\([^)]*\)|rgba\([^)]*\)|hsl\([^)]*\)|hsla\([^)]*\)|[a-zA-Z]+)$/.test(e)?e:""}function Ie(s){if(!s)return"";const e=String(s).trim();return/^[\w\s\-,'"]+$/.test(e)&&e.length<200?e:""}function Z(s){if(s==null)return"";const e=String(s).trim();return/^-?(?:\d+(?:\.\d+)?)(px|em|rem|%|vh|vw|ex|ch|vmin|vmax|cm|mm|in|pt|pc)?$/.test(e)&&e.length<20?e:""}class Ce{constructor(e,t={}){this.container=null,this.isOpen=!1,this.colorInputs=[{key:"primary",label:"Primary",description:"Main accent color",category:"primary"},{key:"secondary",label:"Secondary",description:"Secondary accent color",category:"primary"},{key:"background",label:"Background",description:"Main background color",category:"background"},{key:"surface",label:"Surface",description:"Card and panel background",category:"background"},{key:"text",label:"Text",description:"Body text color",category:"text"},{key:"textPrimary",label:"Primary Text",description:"Primary text color",category:"text"},{key:"textSecondary",label:"Secondary Text",description:"Secondary text color",category:"text"},{key:"textLight",label:"Light Text",description:"Light text color",category:"text"},{key:"border",label:"Border",description:"Border color",category:"background"},{key:"code",label:"Code Text",description:"Inline code text color",category:"text"},{key:"codeBackground",label:"Code Background",description:"Code block background",category:"background"},{key:"link",label:"Link",description:"Link color",category:"primary"},{key:"linkHover",label:"Link Hover",description:"Link hover color",category:"primary"},{key:"error",label:"Error",description:"Error state color",category:"semantic"},{key:"warning",label:"Warning",description:"Warning state color",category:"semantic"},{key:"success",label:"Success",description:"Success state color",category:"semantic"}],this.themeManager=e,this.options={allowExport:!0,allowImport:!0,showPreview:!0,showAccessibilityCheck:!0,...t},this.originalTheme=e.getCurrentTheme(),this.currentTheme=this.deepCloneTheme(this.originalTheme)}render(){return`
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
                  <input type="text" id="theme-name" value="${$(this.currentTheme.name)}" placeholder="Enter theme name">
                </div>
              </div>
              
              <div class="mdv-theme-builder-section">
                <h3>Base Theme</h3>
                <select id="base-theme" aria-label="Select base theme">
                  ${this.themeManager.getAvailableThemes().map(e=>`
                    <option value="${$(e.name)}" ${e.name===this.originalTheme.name?"selected":""}>
                      ${$(e.name)}
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
                  <input type="text" id="border-radius" value="${$(Z(this.currentTheme.borderRadius))}" placeholder="e.g., 0.5rem">
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
    `}renderColorInputs(){return["primary","background","text","semantic"].map(t=>{const r=this.colorInputs.filter(i=>i.category===t);return`
        <div class="mdv-theme-builder-color-category">
          <h4>${t.charAt(0).toUpperCase()+t.slice(1)}</h4>
          ${r.map(i=>`
            <div class="mdv-theme-builder-field mdv-theme-builder-color-field">
              <label for="color-${i.key}">${i.label}</label>
              <div class="mdv-theme-builder-color-input">
                <input 
                  type="color" 
                  id="color-${i.key}" 
                  value="${$(I(this.currentTheme.colors[i.key]))}"
                  aria-label="${i.label} color"
                >
                <input 
                  type="text" 
                  id="color-text-${i.key}" 
                  value="${$(I(this.currentTheme.colors[i.key]))}"
                  placeholder="#000000"
                  aria-label="${i.label} color value"
                >
              </div>
              ${i.description?`<small>${i.description}</small>`:""}
            </div>
          `).join("")}
        </div>
      `}).join("")}renderFontInputs(){return[{key:"body",label:"Body Font",description:"Main text font family"},{key:"heading",label:"Heading Font",description:"Heading font family"},{key:"code",label:"Code Font",description:"Monospace font family"}].map(t=>`
      <div class="mdv-theme-builder-field">
        <label for="font-${t.key}">${t.label}</label>
        <input 
          type="text" 
          id="font-${t.key}" 
          value="${$(Ie(this.currentTheme.fonts[t.key]))}"
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
          value="${$(Z(this.currentTheme.spacing[t.key]))}"
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
        <a href="#" style="color: ${I(this.currentTheme.colors.link)}">Sample Link</a>
        <blockquote style="background: ${I(this.currentTheme.colors.surface)}; border-left: 4px solid ${I(this.currentTheme.colors.primary)};">
          This is a blockquote to show surface colors and borders.
        </blockquote>
        <code style="background: ${I(this.currentTheme.colors.codeBackground)}; color: ${I(this.currentTheme.colors.code)};">
          code example
        </code>
        <div class="mdv-preview-buttons">
          <button style="background: ${I(this.currentTheme.colors.primary)}; color: white;">Primary Button</button>
          <button style="background: ${I(this.currentTheme.colors.secondary)}; color: white;">Secondary Button</button>
        </div>
      </div>
    `}open(){this.isOpen=!0,this.updateDisplay()}close(){this.isOpen=!1,this.updateDisplay(),this.options.onClose&&this.options.onClose()}attachTo(e){this.container=e,this.setupEventListeners()}setupEventListeners(){if(!this.container)return;const e=this.container.querySelector(".mdv-theme-builder-close");e==null||e.addEventListener("click",()=>this.close());const t=this.container.querySelector(".mdv-theme-builder-overlay");t==null||t.addEventListener("click",d=>{d.target===t&&this.close()}),this.colorInputs.forEach(d=>{if(!this.container)return;const h=this.container.querySelector(`#color-${d.key}`),f=this.container.querySelector(`#color-text-${d.key}`);if(!h||!f){console.warn(`Color inputs not found for: ${d.key}`);return}h.addEventListener("input",k=>{const S=k.target.value;this.updateColor(d.key,S),f.value=S}),f.addEventListener("input",k=>{const S=k.target.value;this.isValidColor(S)&&(this.updateColor(d.key,S),h.value=S)})}),["body","heading","code"].forEach(d=>{if(!this.container)return;const h=this.container.querySelector(`#font-${d}`);if(!h){console.warn(`Font input not found: font-${d}`);return}h.addEventListener("input",f=>{this.updateFont(d,f.target.value)})}),["unit","containerMaxWidth","sidebarWidth"].forEach(d=>{if(!this.container)return;const h=this.container.querySelector(`#spacing-${d}`);if(!h){console.warn(`Spacing input not found: spacing-${d}`);return}h.addEventListener("input",f=>{const k=d==="unit"?parseInt(f.target.value):f.target.value;this.updateSpacing(d,k)})});const o=this.container.querySelector("#border-radius");o&&o.addEventListener("input",d=>{this.currentTheme.borderRadius=d.target.value,this.updatePreview()});const n=this.container.querySelector("#theme-name");n&&n.addEventListener("input",d=>{this.currentTheme.name=d.target.value});const a=this.container.querySelector("#base-theme");a&&a.addEventListener("change",d=>{this.loadBaseTheme(d.target.value)});const c=this.container.querySelector("#save-theme");c==null||c.addEventListener("click",()=>this.saveTheme());const u=this.container.querySelector("#reset-theme");u==null||u.addEventListener("click",()=>this.resetTheme());const p=this.container.querySelector("#export-theme");p==null||p.addEventListener("click",()=>this.exportTheme());const y=this.container.querySelector("#import-theme");y==null||y.addEventListener("click",()=>this.importTheme()),document.addEventListener("keydown",d=>{d.key==="Escape"&&this.isOpen&&this.close()})}updateColor(e,t){this.currentTheme.colors[e]=t,this.updatePreview(),this.updateAccessibilityCheck()}updateFont(e,t){this.currentTheme.fonts[e]=t,this.updatePreview()}updateSpacing(e,t){this.currentTheme.spacing[e]=t,this.updatePreview()}updatePreview(){if(!this.options.showPreview||!this.container)return;const e=this.container.querySelector("#theme-preview");e&&(e.innerHTML=this.renderPreview());const t=this.container.querySelector(".mdv-theme-builder-preview-content");t&&Object.entries(this.currentTheme.colors).forEach(([r,i])=>{t.style.setProperty(`--mdv-color-${this.kebabCase(r)}`,i)})}updateAccessibilityCheck(){var t;if(!this.options.showAccessibilityCheck||!this.container)return;const e=this.container.querySelector(".mdv-theme-builder-accessibility");e&&(e.innerHTML=((t=this.renderAccessibilityCheck().match(/<div class="mdv-theme-builder-accessibility">(.*?)<\/div>/s))==null?void 0:t[1])||"")}updateDisplay(){if(!this.container)return;const e=this.container.querySelector(".mdv-theme-builder-overlay");e&&(e.classList.toggle("open",this.isOpen),e.setAttribute("aria-hidden",(!this.isOpen).toString()))}loadBaseTheme(e){const t=this.themeManager.getTheme(e);t&&(this.currentTheme=this.deepCloneTheme(t),this.refreshInputs(),this.updatePreview(),this.updateAccessibilityCheck())}refreshInputs(){if(!this.container)return;this.colorInputs.forEach(t=>{if(!this.container)return;const r=this.container.querySelector(`#color-${t.key}`),i=this.container.querySelector(`#color-text-${t.key}`);r&&(r.value=this.currentTheme.colors[t.key]),i&&(i.value=this.currentTheme.colors[t.key])}),[{selector:"#theme-name",value:this.currentTheme.name},{selector:"#border-radius",value:this.currentTheme.borderRadius},{selector:"#font-body",value:this.currentTheme.fonts.body},{selector:"#font-heading",value:this.currentTheme.fonts.heading},{selector:"#font-code",value:this.currentTheme.fonts.code},{selector:"#spacing-unit",value:this.currentTheme.spacing.unit.toString()},{selector:"#spacing-containerMaxWidth",value:this.currentTheme.spacing.containerMaxWidth},{selector:"#spacing-sidebarWidth",value:this.currentTheme.spacing.sidebarWidth}].forEach(({selector:t,value:r})=>{if(!this.container)return;const i=this.container.querySelector(t);i&&(i.value=r)})}saveTheme(){const e=this.themeManager.createCustomTheme(this.currentTheme.name,this.currentTheme);this.options.onThemeCreate&&this.options.onThemeCreate(e),this.close()}resetTheme(){this.currentTheme=this.deepCloneTheme(this.originalTheme),this.refreshInputs(),this.updatePreview(),this.updateAccessibilityCheck()}exportTheme(){const e=this.themeManager.exportTheme(this.currentTheme),t=new Blob([e],{type:"application/json"}),r=URL.createObjectURL(t),i=document.createElement("a");i.href=r,i.download=`${this.currentTheme.name}.json`,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(r)}importTheme(){const e=document.createElement("input");e.type="file",e.accept=".json",e.onchange=t=>{var i;const r=(i=t.target.files)==null?void 0:i[0];if(r){const o=new FileReader;o.onload=n=>{var a;try{const c=(a=n.target)==null?void 0:a.result,u=this.themeManager.importTheme(c);u&&(this.currentTheme=this.deepCloneTheme(u),this.refreshInputs(),this.updatePreview(),this.updateAccessibilityCheck())}catch(c){console.error("Failed to import theme:",c)}},o.readAsText(r)}},e.click()}isValidColor(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)}kebabCase(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()}deepCloneTheme(e){return typeof structuredClone<"u"?structuredClone(e):JSON.parse(JSON.stringify(e))}getStyles(){return`
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
      }
      
      .mdv-theme-builder-section h4 {
        margin: 16px 0 8px 0;
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--mdv-color-text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .mdv-theme-builder-field {
        margin-bottom: 12px;
      }
      
      .mdv-theme-builder-field label {
        display: block;
        margin-bottom: 4px;
        font-size: 0.875rem;
        font-weight: 500;
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
      
      .mdv-theme-builder-field small {
        display: block;
        margin-top: 4px;
        font-size: 0.75rem;
        color: var(--mdv-color-text-secondary);
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
        color: var(--mdv-color-text-primary);
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
      
      /* Mobile responsiveness */
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
        }
        
        .mdv-theme-builder-actions {
          flex-direction: column;
        }
        
        .mdv-theme-builder-btn {
          width: 100%;
          justify-content: center;
        }
      }
    `}}class ee{constructor(e,t={}){this.container=null,this.isOpen=!1,this.themeBuilder=null,this.themeManager=e,this.options={position:"header",showPreview:!0,showDescription:!0,allowCustomThemes:!0,...t}}render(){const e=this.themeManager.getCurrentTheme(),t=this.themeManager.getAvailableThemes();return`
      <div class="mdv-theme-switcher ${this.options.position==="floating"?"mdv-theme-switcher-floating":""}">
        <button class="mdv-theme-trigger" aria-label="Change theme" title="Change theme">
          ${this.getThemeIcon(e.name)}
          <span class="mdv-theme-name">${e.name}</span>
        </button>
        <div class="mdv-theme-dropdown ${this.isOpen?"open":""}" aria-hidden="${!this.isOpen}">
          <div class="mdv-theme-dropdown-header">
            <h3>Choose Theme</h3>
            ${this.options.allowCustomThemes?`
              <button class="mdv-theme-custom-btn" aria-label="Create custom theme">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z"/>
                </svg>
              </button>
            `:""}
          </div>
          <div class="mdv-theme-list">
            ${t.map(r=>this.renderThemeOption(r,r.name===e.name)).join("")}
          </div>
        </div>
      </div>
    `}renderThemeOption(e,t){return`
      <button 
        class="mdv-theme-option ${t?"active":""}" 
        data-theme="${e.name}"
        aria-label="Switch to ${e.name} theme"
        aria-current="${t?"true":"false"}"
      >
        <div class="mdv-theme-option-content">
          <div class="mdv-theme-option-info">
            <span class="mdv-theme-option-name">${$(e.name)}</span>
            ${this.options.showDescription&&e.description?`
              <span class="mdv-theme-option-description">${$(e.description)}</span>
            `:""}
          </div>
          ${this.options.showPreview?this.renderThemePreview(e):""}
        </div>
        ${t?`
          <svg class="mdv-theme-option-check" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
        `:""}
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
    `}getThemeIcon(e){return{default:"☀️",light:"☀️",dark:"🌙","high-contrast":"🔲",github:"🐙",dracula:"🦇","solarized-light":"🌅","solarized-dark":"🌃",material:"🎨"}[e]||"🎨"}attachTo(e){this.container=e,this.setupEventListeners()}setupEventListeners(){if(!this.container)return;const e=this.container.querySelector(".mdv-theme-trigger");e==null||e.addEventListener("click",r=>{r.stopPropagation(),this.toggleDropdown()}),this.container.addEventListener("click",r=>{const o=r.target.closest(".mdv-theme-option");o&&o.dataset.theme&&this.selectTheme(o.dataset.theme)});const t=this.container.querySelector(".mdv-theme-custom-btn");t==null||t.addEventListener("click",()=>{this.openCustomThemeBuilder()}),document.addEventListener("click",r=>{var i;(i=this.container)!=null&&i.contains(r.target)||this.closeDropdown()}),this.container.addEventListener("keydown",r=>{this.handleKeyboardNavigation(r)})}toggleDropdown(){this.isOpen=!this.isOpen,this.updateDropdownState()}closeDropdown(){this.isOpen=!1,this.updateDropdownState()}updateDropdownState(){var t;const e=(t=this.container)==null?void 0:t.querySelector(".mdv-theme-dropdown");e&&(e.classList.toggle("open",this.isOpen),e.setAttribute("aria-hidden",(!this.isOpen).toString()))}selectTheme(e){const t=this.themeManager.setTheme(e);t&&(this.updateUI(),this.closeDropdown(),this.options.onThemeChange&&this.options.onThemeChange(t))}updateUI(){if(!this.container)return;const e=this.themeManager.getCurrentTheme(),t=this.container.querySelector(".mdv-theme-trigger");t&&(t.innerHTML=`
        ${this.getThemeIcon(e.name)}
        <span class="mdv-theme-name">${e.name}</span>
      `),this.container.querySelectorAll(".mdv-theme-option").forEach(r=>{const i=r.getAttribute("data-theme")===e.name;r.classList.toggle("active",i),r.setAttribute("aria-current",i.toString())})}handleKeyboardNavigation(e){var o,n;if(!this.isOpen)return;const t=Array.from(((o=this.container)==null?void 0:o.querySelectorAll(".mdv-theme-option"))||[]),r=t.findIndex(a=>a.classList.contains("active"));let i=r;switch(e.key){case"ArrowDown":e.preventDefault(),i=(r+1)%t.length;break;case"ArrowUp":e.preventDefault(),i=r===0?t.length-1:r-1;break;case"Enter":case" ":{e.preventDefault();const a=document.activeElement;a!=null&&a.dataset.theme&&this.selectTheme(a.dataset.theme);return}case"Escape":e.preventDefault(),this.closeDropdown();return}i!==r&&((n=t[i])==null||n.focus())}openCustomThemeBuilder(){if(!this.themeBuilder){this.themeBuilder=new Ce(this.themeManager,{onThemeCreate:t=>{this.selectTheme(t.name)},onClose:()=>{this.themeBuilder=null}});const e=document.createElement("div");e.innerHTML=this.themeBuilder.render(),document.body.appendChild(e),this.themeBuilder.attachTo(e)}this.themeBuilder.open(),this.closeDropdown()}getStyles(){return`
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
        cursor: pointer;
        font-size: 0.875rem;
        transition: all 0.2s ease;
      }
      
      .mdv-theme-trigger:hover {
        background: var(--mdv-color-background);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      
      .mdv-theme-name {
        text-transform: capitalize;
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
        cursor: pointer;
        transition: background 0.2s ease;
      }
      
      .mdv-theme-custom-btn:hover {
        background: var(--mdv-color-background);
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
        cursor: pointer;
        text-align: left;
        transition: all 0.2s ease;
      }
      
      .mdv-theme-option:hover {
        background: var(--mdv-color-background);
        border-color: var(--mdv-color-border);
      }
      
      .mdv-theme-option.active {
        background: var(--mdv-color-primary);
        color: white;
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
        opacity: 0.7;
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
      
      .mdv-theme-option-check {
        flex-shrink: 0;
      }
      
      /* Mobile styles */
      @media (max-width: 768px) {
        .mdv-theme-dropdown {
          position: fixed;
          top: auto;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0;
          border-radius: var(--mdv-border-radius) var(--mdv-border-radius) 0 0;
          max-height: 70vh;
        }
        
        .mdv-theme-switcher-floating {
          bottom: 60px;
        }
      }
    `}}const P=class P{constructor(e,t={}){this.container=null,this.isDark=!1,this.themeManager=e,this.options={position:"header",showLabel:!0,compact:!1,lightThemeName:"default",darkThemeName:"dark",...t};const r=this.themeManager.getCurrentTheme().name;this.isDark=r===this.options.darkThemeName}render(){const e=`mdv-dark-toggle-${++P.instanceCounter}`;return`
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
    `}attachTo(e){this.container=e,this.setupEventListeners()}setupEventListeners(){if(!this.container)return;const e=this.container.querySelector(".mdv-dark-toggle-btn");e&&(e.addEventListener("click",()=>{this.toggle()}),document.addEventListener("mdv-theme-changed",t=>{var n,a;const o=((a=(n=t.detail)==null?void 0:n.theme)==null?void 0:a.name)===this.options.darkThemeName;o!==this.isDark&&(this.isDark=o,this.updateUI())}))}toggle(){const e=this.isDark?this.options.lightThemeName:this.options.darkThemeName,t=this.themeManager.setTheme(e);t&&(this.isDark=!this.isDark,this.updateUI(),document.dispatchEvent(new CustomEvent("mdv-dark-mode-toggled",{detail:{isDark:this.isDark,theme:t}})),this.options.onToggle&&this.options.onToggle(this.isDark,t))}updateUI(){if(!this.container)return;const e=this.container.querySelector(".mdv-dark-toggle-btn"),t=this.container.querySelector(".mdv-dark-toggle-label"),r=this.container.querySelector(".mdv-dark-toggle-icon");e&&(e.className=`mdv-dark-toggle-btn ${this.isDark?"dark":"light"}`,e.setAttribute("aria-checked",this.isDark.toString()),e.setAttribute("aria-label",this.isDark?"Switch to light mode":"Switch to dark mode"),e.setAttribute("title",this.isDark?"Switch to light mode":"Switch to dark mode")),t&&(t.textContent=`${this.isDark?"Dark":"Light"} Mode`),r&&(r.innerHTML=this.isDark?this.getMoonIcon():this.getSunIcon())}setDarkMode(e){e!==this.isDark&&this.toggle()}isDarkMode(){return this.isDark}getStyles(){return`
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
        background: var(--mdv-color-text-light);
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
    `}};P.instanceCounter=0;let z=P;class te{constructor(e){var t,r,i,o,n,a,c,u,p,y,d;this.router=null,this.styles=null;try{const h=typeof process<"u"&&((t=process==null?void 0:process.env)==null?void 0:t.NODE_ENV)==="development";this.logger=new _(h),this.errorBoundary=new U(k=>{this.handleError(k)}),this.config=this.validateAndMergeConfig(e),this.validateDependencies(),this.state={currentDocument:null,documents:[],searchQuery:"",searchResults:[],loading:!1,error:null,sidebarOpen:!1},this.container=this.validateContainer(e.container);const f=(r=e.errorHandling)!=null&&r.retryConfig?{...H,...e.errorHandling.retryConfig}:H;this.loader=new be(this.config.source,f,this.logger),this.themeManager=new Q({enablePersistence:((i=this.config.theme)==null?void 0:i.enablePersistence)!==!1,storageKey:((o=this.config.theme)==null?void 0:o.storageKey)||"mdv-theme",onThemeChange:k=>{this.applyTheme(k),this.config.onThemeChange&&this.config.onThemeChange(k)}}),this.themeSwitcher=new ee(this.themeManager,{position:((n=this.config.theme)==null?void 0:n.switcherPosition)||"header",showPreview:((a=this.config.theme)==null?void 0:a.showPreview)!==!1,showDescription:((c=this.config.theme)==null?void 0:c.showDescription)!==!1,allowCustomThemes:((u=this.config.theme)==null?void 0:u.allowCustomThemes)!==!1}),this.darkModeToggle=new z(this.themeManager,{position:((p=this.config.theme)==null?void 0:p.darkTogglePosition)||"header",showLabel:((y=this.config.theme)==null?void 0:y.showDarkModeLabel)!==!1,compact:((d=this.config.theme)==null?void 0:d.compactDarkToggle)===!0,onToggle:(k,S)=>{this.config.onThemeChange&&this.config.onThemeChange(S)}}),this.init()}catch(h){const f=h instanceof m?h:new m("UNKNOWN_ERROR",`Initialization failed: ${h}`,"Failed to initialize the documentation viewer. Please check your configuration.","critical",!1,{operation:"initialization",originalError:h});throw this.handleError(f),f}}validateDependencies(){var r,i;const e=[],t=[];if(typeof T.marked>"u"&&e.push("marked - Markdown parser is required"),typeof E>"u"?t.push("highlight.js - Syntax highlighting will be disabled"):(typeof E.highlight!="function"&&t.push("highlight.js.highlight - Some highlighting features may not work"),typeof E.highlightElement!="function"&&t.push("highlight.js.highlightElement - Auto-highlighting will be disabled")),typeof L.markedHighlight>"u"&&((i=(r=this.config)==null?void 0:r.render)!=null&&i.syntaxHighlighting)&&t.push("marked-highlight - Advanced syntax highlighting will be disabled"),typeof document>"u"&&e.push("DOM environment - This library requires a browser environment"),typeof window>"u"&&e.push("Window object - Browser environment is required"),t.forEach(o=>{this.logger.warn(`Optional dependency missing: ${o}`)}),e.length>0)throw new m(v.MISSING_DEPENDENCY,`Missing required dependencies: ${e.join(", ")}`,"Some required libraries are not available. Please ensure all dependencies are properly loaded.",b.CRITICAL,!1,{operation:"validateDependencies",additionalData:{missingDependencies:e,warnings:t}});this.logger.debug("Dependency validation completed",{warnings:t.length})}validateContainer(e){let t;if(typeof e=="string"){if(t=document.querySelector(e),!t)throw x.containerNotFound(e)}else t=e;if(!(t instanceof HTMLElement))throw new m("INVALID_CONFIG","Container is not a valid HTML element","The provided container is not a valid HTML element.","high",!1,{operation:"validateContainer"});return t}validateAndMergeConfig(e){if(!e.container)throw new m("INVALID_CONFIG","Container is required","Container element is required for initialization.","critical",!1);if(!e.source)throw new m("INVALID_CONFIG","Document source is required","Document source configuration is required.","critical",!1);return{theme:w,search:{enabled:!0},navigation:{showCategories:!0,showTags:!1,collapsible:!0,showDescription:!0},render:{syntaxHighlighting:!0,copyCodeButton:!0,linkTarget:"_self"},errorHandling:{gracefulDegradation:!0,showErrorDetails:!1,enableErrorLogging:!0,retryConfig:{maxAttempts:3,baseDelay:1e3,exponentialBackoff:!0}},responsive:!0,mobile:{enabled:!0,breakpoints:g,touchTargets:{minimum:44,comfortable:48,large:56},typography:{baseFontSize:{xs:14,sm:15,md:16,lg:16,xl:16,xxl:16},lineHeight:{tight:1.25,normal:1.5,relaxed:1.75},scaleRatio:1.2},navigation:{swipeGestures:!0,collapseBehavior:"overlay",showBackdrop:!0,closeOnOutsideClick:!0},gestures:{swipeToNavigate:!0,pinchToZoom:!1,doubleTapToZoom:!1,swipeThreshold:50},layout:{containerPadding:16,contentSpacing:24,borderRadius:8},performance:{enableTouchOptimizations:!0,preventDefaultTouch:!0,optimizeScrolling:!0}},routing:"hash",...e}}async init(){await this.errorBoundary.execute(async()=>{var t,r;this.state.loading=!0,this.state.error=null,this.render(),this.configureMarked();const e=(t=this.config.theme)!=null&&t.name?this.themeManager.getTheme(this.config.theme.name)||this.config.theme:this.themeManager.getCurrentTheme();this.applyTheme(e),await this.loadDocuments(),this.config.routing!=="none"&&this.setupRouting(),this.render(),await this.loadInitialDocument(),this.state.loading=!1,this.render(),this.logger.debug("MarkdownDocsViewer initialized successfully",{documentCount:this.state.documents.length,hasRouter:!!this.router,theme:(r=this.config.theme)==null?void 0:r.name})},()=>{this.state.loading=!1,this.render()},{operation:"init"})}configureMarked(){var e;try{(e=this.config.render)!=null&&e.syntaxHighlighting&&(typeof E<"u"&&typeof L.markedHighlight<"u"?T.marked.use(L.markedHighlight({langPrefix:"hljs language-",highlight(t,r){try{if(typeof E.getLanguage=="function"&&typeof E.highlight=="function"){const i=E.getLanguage(r)?r:"plaintext";return E.highlight(t,{language:i}).value}return t}catch{return t}}})):this.logger.warn("Syntax highlighting enabled but dependencies not available",{hljs:typeof E<"u",markedHighlight:typeof L.markedHighlight<"u"})),T.marked.setOptions({gfm:!0,breaks:!0})}catch(t){this.logger.warn("Failed to configure markdown parser",{error:t})}}applyTheme(e){this.errorBoundary.execute(async()=>{var r,i;this.themeManager.applyCSSVariables(e),this.styles&&this.styles.remove(),this.styles=document.createElement("style");let t=G(e,this.config);this.config.responsive&&((r=this.config.mobile)==null?void 0:r.enabled)!==!1&&(t+=Se(this.config)),t+=this.themeSwitcher.getStyles(),t+=this.darkModeToggle.getStyles(),this.styles.textContent=t,document.head.appendChild(this.styles),((i=this.config.mobile)==null?void 0:i.enabled)!==!1&&Ee()},()=>{this.logger.warn("Failed to apply theme, using default styles")},{operation:"applyTheme",additionalData:{themeName:e.name}})}async loadDocuments(){await this.errorBoundary.execute(async()=>{const e=await this.loader.loadAll();this.state.documents=e,e.length===0&&this.logger.warn("No documents loaded")},()=>{this.state.documents=[],this.logger.error("Failed to load documents, using empty document list")},{operation:"loadDocuments"})}setupRouting(){this.errorBoundary.execute(async()=>{this.router=new ye(this.config.routing,e=>{this.loadDocument(e).catch(t=>{this.logger.error("Router-triggered document load failed",{docId:e,error:t})})})},()=>{this.logger.warn("Failed to setup routing, navigation will work without URL updates")},{operation:"setupRouting"})}async loadInitialDocument(){await this.errorBoundary.execute(async()=>{var t,r;const e=((t=this.router)==null?void 0:t.getCurrentRoute())||((r=this.state.documents[0])==null?void 0:r.id);e&&await this.loadDocument(e)},()=>{this.logger.debug("No initial document to load")},{operation:"loadInitialDocument"})}render(){this.errorBoundary.execute(async()=>{this.container.innerHTML=`
          <div class="mdv-app">
            ${this.renderHeader()}
            <div class="mdv-layout">
              ${this.renderSidebar()}
              ${this.renderContent()}
            </div>
            ${this.config.footer?this.renderFooter():""}
          </div>
        `,this.attachEventListeners()},()=>{this.container.innerHTML='<div class="mdv-error">Failed to render viewer interface.</div>'},{operation:"render"})}renderHeader(){var i,o;const e=(((i=this.config.theme)==null?void 0:i.switcherPosition)||"header")==="header",t=(((o=this.config.theme)==null?void 0:o.darkTogglePosition)||"header")==="header",r=[];return t&&r.push(this.darkModeToggle.render()),e&&r.push(this.themeSwitcher.render()),`
      <header class="mdv-header">
        <button class="mdv-mobile-toggle" aria-label="Toggle navigation"></button>
        ${this.config.logo?`<img src="${this.config.logo}" alt="Logo" class="mdv-logo">`:""}
        <h1 class="mdv-title">${this.config.title||"Documentation"}</h1>
        ${r.length>0?`<div class="mdv-header-actions">${r.join("")}</div>`:""}
      </header>
    `}renderSidebar(){var r;const e=ne(this.state.documents,this.state.currentDocument,this.config.navigation),t=(r=this.config.search)!=null&&r.enabled?ue(this.config.search):"";return`
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
      `}renderError(e){var a;const t=e instanceof m,r=(a=this.config.errorHandling)==null?void 0:a.showErrorDetails;let i="An unexpected error occurred.",o="",n="";return t?(i=e.userMessage,e.isRetryable&&(n='<button class="mdv-retry-button">Try Again</button>'),r&&(o=`
          <details class="mdv-error-details">
            <summary>Error Details</summary>
            <pre><code>${JSON.stringify(e.toJSON(),null,2)}</code></pre>
          </details>
        `)):r&&(o=`
          <details class="mdv-error-details">
            <summary>Error Details</summary>
            <pre><code>${e.stack||e.message}</code></pre>
          </details>
        `),`
      <main class="mdv-content">
        <div class="mdv-error">
          <div class="mdv-error-icon">⚠️</div>
          <h2>Oops! Something went wrong</h2>
          <p class="mdv-error-message">${i}</p>
          ${n}
          ${o}
        </div>
      </main>
    `}renderFooter(){return`<footer class="mdv-footer">${this.config.footer}</footer>`}renderMarkdown(e){var t,r;try{let i=T.marked(e);return(t=this.config.render)!=null&&t.copyCodeButton&&(i=i.replace(/<pre><code/g,'<div class="mdv-code-block"><button class="mdv-copy-button">Copy</button><pre><code'),i=i.replace(/<\/code><\/pre>/g,"</code></pre></div>")),((r=this.config.render)==null?void 0:r.linkTarget)==="_blank"&&(i=i.replace(/<a /g,'<a target="_blank" rel="noopener noreferrer" ')),i}catch(i){return this.logger.error("Failed to render markdown, showing raw content",{error:i}),`<pre>${e}</pre>`}}attachEventListeners(){this.errorBoundary.execute(async()=>{const e=this.container.querySelector(".mdv-mobile-toggle");e==null||e.addEventListener("click",()=>{this.state.sidebarOpen=!this.state.sidebarOpen,this.updateSidebar()}),this.setupMobileInteractions();const t=this.container.querySelector(".mdv-theme-switcher");t&&this.themeSwitcher.attachTo(t);const r=this.container.querySelector(".mdv-dark-mode-toggle");r&&this.darkModeToggle.attachTo(r),this.container.querySelectorAll(".mdv-nav-link").forEach(o=>{o.addEventListener("click",n=>{n.preventDefault();const a=o.getAttribute("data-doc-id");a&&this.loadDocument(a).catch(c=>{this.logger.error("Navigation click failed",{docId:a,error:c})})})});const i=this.container.querySelector(".mdv-search-input");i==null||i.addEventListener("input",o=>{try{this.handleSearch(o.target.value)}catch(n){this.logger.warn("Search input handling failed",{error:n})}}),this.container.querySelectorAll(".mdv-copy-button").forEach(o=>{o.addEventListener("click",async n=>{var a;try{const c=(a=n.target.nextElementSibling)==null?void 0:a.querySelector("code");c&&navigator.clipboard&&(await navigator.clipboard.writeText(c.textContent||""),o.textContent="Copied!",setTimeout(()=>{o.textContent="Copy"},2e3))}catch(c){this.logger.warn("Copy to clipboard failed",{error:c}),o.textContent="Copy failed",setTimeout(()=>{o.textContent="Copy"},2e3)}})}),this.container.querySelectorAll(".mdv-retry-button").forEach(o=>{o.addEventListener("click",()=>{window.location.reload()})})},()=>{this.logger.warn("Failed to attach some event listeners")},{operation:"attachEventListeners"})}updateSidebar(){const e=this.container.querySelector(".mdv-sidebar"),t=this.container.querySelector(".mdv-sidebar-backdrop");e&&e.classList.toggle("open",this.state.sidebarOpen),t&&t.classList.toggle("show",this.state.sidebarOpen),e&&e.setAttribute("aria-hidden",this.state.sidebarOpen?"false":"true"),N()&&(document.body.style.overflow=this.state.sidebarOpen?"hidden":"")}setupMobileInteractions(){var e;(e=this.config.mobile)!=null&&e.enabled&&this.errorBoundary.execute(async()=>{var t,r,i,o;this.setupSidebarBackdrop(),(r=(t=this.config.mobile)==null?void 0:t.gestures)!=null&&r.swipeToNavigate&&this.setupSwipeGestures(),(o=(i=this.config.mobile)==null?void 0:i.performance)!=null&&o.enableTouchOptimizations&&this.setupTouchOptimizations(),this.setupResponsiveHandlers()},()=>{this.logger.warn("Failed to setup mobile interactions")},{operation:"setupMobileInteractions"})}setupSidebarBackdrop(){var t,r,i;if(!((r=(t=this.config.mobile)==null?void 0:t.navigation)!=null&&r.showBackdrop))return;let e=this.container.querySelector(".mdv-sidebar-backdrop");e||(e=document.createElement("div"),e.className="mdv-sidebar-backdrop",this.container.appendChild(e)),(i=this.config.mobile.navigation)!=null&&i.closeOnOutsideClick&&e.addEventListener("click",()=>{this.state.sidebarOpen=!1,this.updateSidebar()})}setupSwipeGestures(){var p,y;let e=0,t=0,r=!1;const i=((y=(p=this.config.mobile)==null?void 0:p.gestures)==null?void 0:y.swipeThreshold)||50,o=this.container.querySelector(".mdv-sidebar"),n=this.container.querySelector(".mdv-content");if(!o||!n)return;const a=d=>{d.touches.length===1&&(e=d.touches[0].clientX,t=d.touches[0].clientY,r=!1)},c=d=>{var h,f;if(d.touches.length===1&&!r){const k=d.touches[0].clientX-e,S=d.touches[0].clientY-t;Math.abs(k)>Math.abs(S)&&Math.abs(k)>10&&(r=!0,(f=(h=this.config.mobile)==null?void 0:h.performance)!=null&&f.preventDefaultTouch&&d.preventDefault())}},u=d=>{if(r&&d.changedTouches.length===1){const h=d.changedTouches[0].clientX-e;N()&&(h>i&&e<50&&!this.state.sidebarOpen?(this.state.sidebarOpen=!0,this.updateSidebar()):h<-i&&this.state.sidebarOpen&&(this.state.sidebarOpen=!1,this.updateSidebar()))}r=!1};n.addEventListener("touchstart",a,{passive:!0}),n.addEventListener("touchmove",c,{passive:!1}),n.addEventListener("touchend",u,{passive:!0}),o.addEventListener("touchstart",a,{passive:!0}),o.addEventListener("touchmove",c,{passive:!1}),o.addEventListener("touchend",u,{passive:!0})}setupTouchOptimizations(){var t,r;this.container.querySelectorAll(".mdv-button, .mdv-nav-item, .mdv-mobile-toggle, .mdv-search-input, .mdv-toc-item").forEach(i=>{i.style.touchAction="manipulation"}),(r=(t=this.config.mobile)==null?void 0:t.performance)!=null&&r.optimizeScrolling&&this.container.querySelectorAll(".mdv-navigation, .mdv-content").forEach(o=>{o.style.setProperty("-webkit-overflow-scrolling","touch"),o.style.overscrollBehavior="contain"})}setupResponsiveHandlers(){const e=()=>{const r=X();r!=="xs"&&r!=="sm"&&this.state.sidebarOpen&&(this.state.sidebarOpen=!1,this.updateSidebar()),this.updateResponsiveUI()};let t;window.addEventListener("resize",()=>{clearTimeout(t),t=window.setTimeout(e,150)}),window.addEventListener("orientationchange",()=>{setTimeout(e,100)})}updateResponsiveUI(){const e=X(),t=this.container;Object.keys(g).forEach(i=>{t.classList.remove(`mdv-breakpoint-${i}`)}),t.classList.add(`mdv-breakpoint-${e}`);const r=t.querySelector(".mdv-mobile-toggle");r&&(r.style.display=N()?"flex":"none")}async loadDocument(e){await this.errorBoundary.execute(async()=>{var r;const t=this.state.documents.find(i=>i.id===e);if(!t)throw x.documentNotFound(e);this.state.loading=!0,this.state.error=null,this.render(),!t.content&&t.file&&(t.content=await this.loader.loadDocument(t)),this.state.currentDocument=t,this.state.loading=!1,this.router&&this.router.setRoute(e),this.config.onDocumentLoad&&this.config.onDocumentLoad(t),this.render(),(r=this.container.querySelector(".mdv-content"))==null||r.scrollTo(0,0),N()&&(this.state.sidebarOpen=!1,this.updateSidebar()),this.logger.debug("Document loaded successfully",{docId:e})},()=>{this.state.loading=!1,this.render()},{operation:"loadDocument",documentId:e})}handleSearch(e){var t;if(this.state.searchQuery=e,!e.trim()){this.state.searchResults=[],this.render();return}try{const r=this.state.documents.filter(i=>{try{return[i.title,i.description||"",i.content||"",...i.tags||[]].join(" ").toLowerCase().includes(e.toLowerCase())}catch(o){return this.logger.warn("Error during document search",{docId:i.id,error:o}),!1}});this.state.searchResults=r.slice(0,((t=this.config.search)==null?void 0:t.maxResults)||10),this.render()}catch(r){this.logger.error("Search operation failed",{query:e,error:r}),this.state.searchResults=[]}}handleError(e){var t;if(this.state&&(this.state.error=e,this.state.loading=!1),this.logger?this.logger.log(e):console.error("MarkdownDocsViewer Error:",e),(t=this.config)!=null&&t.onError)try{this.config.onError(e)}catch(r){this.logger?this.logger.error("Error in user error handler",{handlerError:r}):console.error("Error in user error handler:",r)}this.state&&this.container&&this.render()}async refresh(){await this.errorBoundary.execute(async()=>{this.loader.clearCache(),await this.loadDocuments(),this.render()},()=>{this.logger.error("Failed to refresh documents")},{operation:"refresh"})}setTheme(e){if(typeof e=="string"){const t=this.themeManager.setTheme(e);t&&(this.config.theme=t)}else{if(e.name&&this.themeManager.getTheme(e.name))this.themeManager.setTheme(e.name);else{const t=`temp-${Date.now()}`;this.themeManager.registerTheme({...e,name:t}),this.themeManager.setTheme(t)}this.config.theme=e}}getAvailableThemes(){return this.themeManager.getAvailableThemes()}registerTheme(e){this.themeManager.registerTheme(e)}createCustomTheme(e,t){return this.themeManager.createCustomTheme(e,t)}getDocument(e){return this.state.documents.find(t=>t.id===e)||null}getAllDocuments(){return[...this.state.documents]}async search(e){return new Promise(t=>{this.handleSearch(e),t([...this.state.searchResults])})}destroy(){try{this.styles&&this.styles.remove(),this.router&&this.router.destroy(),this.container.innerHTML="",this.logger.debug("MarkdownDocsViewer destroyed")}catch(e){this.logger.warn("Error during cleanup",{error:e})}}getState(){return{...this.state}}getConfig(){return{...this.config}}getDocuments(){return[...this.state.documents]}async getDocumentContent(e){if(e.content)return e.content;if(e.file){const t=await this.loader.loadDocument(e);return e.content=t,t}return""}getTheme(){return this.config.theme}getThemeStyles(){return G(this.config.theme,this.config)}}function De(s){return new te(s)}function D(s){if(typeof s!="string")return"";const e=document.createElement("div");return e.textContent=s,e.innerHTML}function Me(s){if(typeof s!="string")return"";const e=document.createElement("div");e.innerHTML=s;const t=new Set(["p","br","strong","b","em","i","u","code","pre","h1","h2","h3","h4","h5","h6","ul","ol","li","blockquote","table","thead","tbody","tr","td","th","a","img","hr","div","span"]),r=new Map([["a",new Set(["href","title"])],["img",new Set(["src","alt","title","width","height"])],["*",new Set(["id","class"])]]);function i(a){const c=a.tagName.toLowerCase();if(!t.has(c))return null;const u=document.createElement(c),p=r.get(c)||new Set,y=r.get("*")||new Set;for(const d of a.attributes){const h=d.name.toLowerCase();if(!h.startsWith("on")&&(p.has(h)||y.has(h))){let f=d.value;if((h==="href"||h==="src")&&(f=o(f),!f))continue;u.setAttribute(h,f)}}for(const d of Array.from(a.childNodes))if(d.nodeType===Node.TEXT_NODE)u.appendChild(document.createTextNode(d.textContent||""));else if(d.nodeType===Node.ELEMENT_NODE){const h=i(d);h&&u.appendChild(h)}return u}function o(a){if(!a||typeof a!="string")return"";const c=a.trim().toLowerCase(),u=["javascript:","data:","vbscript:","livescript:","mocha:","about:","file:","ftp:","jar:","view-source:"];for(const p of u)if(c.startsWith(p))return"";return c.startsWith("http://")||c.startsWith("https://")||c.startsWith("mailto:")||c.startsWith("#")||c.startsWith("/")||c.startsWith("./")||c.startsWith("../")||!c.includes(":")?a.trim():""}const n=document.createElement("div");for(const a of Array.from(e.childNodes))if(a.nodeType===Node.TEXT_NODE)n.appendChild(document.createTextNode(a.textContent||""));else if(a.nodeType===Node.ELEMENT_NODE){const c=i(a);c&&n.appendChild(c)}return n.innerHTML}class Re{constructor(e){this.html2pdfAvailable=!1,this.viewer=e,this.checkDependencies()}checkDependencies(){typeof window<"u"&&window.html2pdf&&(this.html2pdfAvailable=!0)}async export(e){switch(e.format){case"pdf":return this.exportPDF(e);case"html":return this.exportHTML(e);default:throw new m(v.INVALID_CONFIG,`Unsupported export format: ${e.format}`,"The specified export format is not supported.",b.HIGH,!1,{operation:"export",additionalData:{format:e.format}})}}async exportPDF(e){var i,o,n;if(!this.html2pdfAvailable)throw new m(v.MISSING_DEPENDENCY,"html2pdf.js is required for PDF export. Please include it in your project.","PDF export requires the html2pdf.js library to be included in your project.",b.HIGH,!1,{operation:"exportPDF",additionalData:{dependency:"html2pdf.js"}});const t=await this.generateExportHTML(e),r=document.createElement("div");r.innerHTML=t,r.style.position="absolute",r.style.left="-9999px",r.style.width="210mm",document.body.appendChild(r);try{const a={margin:((i=e.pdfOptions)==null?void 0:i.margin)||10,filename:e.filename||"documentation.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0,logging:!1},jsPDF:{unit:"mm",format:((o=e.pdfOptions)==null?void 0:o.format)||"a4",orientation:((n=e.pdfOptions)==null?void 0:n.orientation)||"portrait"},pagebreak:{mode:["avoid-all","css","legacy"]}},c=window.html2pdf;return await c().set(a).from(r).outputPdf("blob")}finally{document.body.removeChild(r)}}async exportHTML(e){const t=await this.generateExportHTML(e);return e.embedAssets?this.embedAssets(t):t}async generateExportHTML(e){var o;const t=await this.getDocumentsToExport(e),r=this.viewer.getTheme();let i=`<!DOCTYPE html>
<html lang="${D(e.locale||"en")}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${D(e.title||"Documentation Export")}</title>
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
<body class="export-body">`;e.includeTOC&&(i+=this.generateTableOfContents(t));for(let n=0;n<t.length;n++){const a=t[n],c=await this.viewer.getDocumentContent(a),u=await T.marked(c);i+=`
  <article class="exported-document ${n>0?"page-break":""}" id="doc-${D(a.id)}">
    <h1>${D(a.title)}</h1>
    ${a.description?`<p class="doc-description">${D(a.description)}</p>`:""}
    ${(o=a.tags)!=null&&o.length?`<div class="doc-tags">${a.tags.map(p=>`<span class="tag">${D(p)}</span>`).join("")}</div>`:""}
    <div class="doc-content">
      ${Me(u)}
    </div>
  </article>`}return i+=`
</body>
</html>`,i}async getDocumentsToExport(e){const t=this.viewer.getDocuments();return!e.documentIds||e.documentIds.length===0?t:t.filter(r=>e.documentIds.includes(r.id))}generateTableOfContents(e){let t=`
  <nav class="export-toc page-break">
    <h1>Table of Contents</h1>
    <ol>`;for(const r of e)t+=`
      <li><a href="#doc-${D(r.id)}">${D(r.title)}</a></li>`;return t+=`
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
    `}async embedAssets(e){return e}isPDFExportAvailable(){return this.html2pdfAvailable}getExportCapabilities(){return{pdf:this.html2pdfAvailable,html:!0,formats:["html",...this.html2pdfAvailable?["pdf"]:[]]}}}function Le(s={}){return{format:"html",includeTheme:!0,includeTOC:!0,embedAssets:!1,...s}}class Ae{constructor(e){this.config=e,this.currentLocale=e.locale,this.messages=e.messages,this.fallbackLocale=e.fallbackLocale||"en",this.validateConfig()}validateConfig(){if(!this.messages[this.currentLocale]&&(console.warn(`No messages found for locale "${this.currentLocale}", falling back to "${this.fallbackLocale}"`),!this.messages[this.fallbackLocale]))throw new m(v.INVALID_CONFIG,`No messages found for locale "${this.currentLocale}" or fallback locale "${this.fallbackLocale}"`,"No translation messages found for the specified locale or fallback locale.",b.HIGH,!1,{operation:"validateI18nConfig",additionalData:{locale:this.currentLocale,fallbackLocale:this.fallbackLocale}})}t(e,t){const r=this.getMessage(e);return r?t?this.interpolate(r,t):r:(console.warn(`Missing translation for key: ${e}`),e)}getMessage(e){const t=e.split(".");let r=this.messages[this.currentLocale];for(const i of t)if(r&&typeof r=="object"&&i in r)r=r[i];else{r=void 0;break}if(r===void 0&&this.fallbackLocale!==this.currentLocale){r=this.messages[this.fallbackLocale];for(const i of t)if(r&&typeof r=="object"&&i in r)r=r[i];else return}return typeof r=="string"?r:void 0}interpolate(e,t){return e.replace(/\{(\w+)\}/g,(r,i)=>t[i]!==void 0?String(t[i]):r)}setLocale(e){if(!this.messages[e])throw new m(v.INVALID_CONFIG,`No messages found for locale "${e}"`,"The specified locale is not available.",b.HIGH,!1,{operation:"setLocale",additionalData:{locale:e}});this.currentLocale=e}getLocale(){return this.currentLocale}getAvailableLocales(){return Object.keys(this.messages)}hasLocale(e){return e in this.messages}addLocale(e,t){this.messages[e]=t}extendLocale(e,t){this.messages[e]||(this.messages[e]={}),this.messages[e]=this.deepMerge(this.messages[e],t)}deepMerge(e,t){const r={...e};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(typeof t[i]=="object"&&t[i]!==null&&!Array.isArray(t[i])?r[i]=this.deepMerge(e[i]||{},t[i]):r[i]=t[i]);return r}}const q={app:{title:"Documentation",loading:"Loading documentation...",error:"An error occurred",retry:"Try Again",welcome:"Welcome to the Documentation",selectDocument:"Select a document from the sidebar to begin reading."},navigation:{toggleMenu:"Toggle navigation",search:"Search",searchPlaceholder:"Search documentation...",categories:"Categories",tags:"Tags",noResults:"No results found"},document:{copyCode:"Copy",codeCopied:"Copied!",copyFailed:"Copy failed",tableOfContents:"Table of Contents",backToTop:"Back to top"},export:{title:"Export Documentation",format:"Format",pdf:"PDF",html:"HTML",selectDocuments:"Select documents to export",selectAll:"Select All",deselectAll:"Deselect All",exportButton:"Export",exporting:"Exporting...",exportSuccess:"Export completed successfully",exportError:"Export failed",options:{includeTheme:"Include theme styles",includeTOC:"Include table of contents",embedAssets:"Embed assets (images, etc.)"}},errors:{documentNotFound:"Document not found",loadError:"Failed to load document",networkError:"Network error occurred",unknown:"An unexpected error occurred"}};function Oe(s={}){const e=s.messages||{};return e.en?e.en=re(q,e.en):e.en=q,{locale:"en",fallbackLocale:"en",...s,messages:e}}function re(s,e){const t={...s};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){const i=s[r],o=e[r];typeof o=="object"&&typeof i=="object"&&!Array.isArray(o)&&!Array.isArray(i)?t[r]=re(i,o):t[r]=o}return t}function He(s,e){return{[s]:e}}class Ne{constructor(e={}){this.headings=[],this.activeId=null,this.options={enabled:!0,maxDepth:3,sticky:!0,scrollSpy:!0,collapsible:!1,position:"right",...e}}generate(e){if(!this.options.enabled)return[];this.headings=[];let t=[];try{t=T.marked.lexer(e)}catch{const i=e.split(`
`);for(const o of i)if(o.startsWith("#")){const n=o.match(/^#{1,6}/);if(n){const a=n[0].length,c=o.slice(a).trim();if(c.length>0){const u=a,p=c,y=this.generateId(p);this.headings.push({level:u,text:p,id:y,children:[]})}}}return this.buildTree()}return this.extractHeadings(t),this.buildTree()}extractHeadings(e){for(const t of e)if(t.type==="heading"&&t.depth<=this.options.maxDepth){const r=this.generateId(t.text);this.headings.push({id:r,text:t.text,level:t.depth,children:[]})}}buildTree(){const e=[],t=[];for(const r of this.headings){for(;t.length>0&&t[t.length-1].level>=r.level;)t.pop();t.length===0?e.push(r):t[t.length-1].children.push(r),t.push(r)}return e}generateId(e){const t=e.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();let r=1,i=t;for(;this.headings.some(o=>o.id===i);)i=`${t}-${r}`,r++;return i}render(){if(!this.options.enabled||this.headings.length===0)return"";const e=this.options.position,t=this.options.sticky?"mdv-toc-sticky":"",r=this.options.collapsible?"mdv-toc-collapsible":"";return`
      <nav class="mdv-toc mdv-toc-${e} ${t} ${r}" role="navigation" aria-label="Table of contents">
        <h2 class="mdv-toc-title">Table of Contents</h2>
        ${this.renderTree(this.buildTree())}
      </nav>
    `}renderTree(e,t=1){if(e.length===0)return"";const r=e.map(i=>{const o=i.children.length>0,n=i.id===this.activeId?"mdv-toc-active":"";return`
        <li class="mdv-toc-item mdv-toc-level-${t} ${n}">
          <a href="#${i.id}" class="mdv-toc-link" data-toc-id="${i.id}">
            ${i.text}
          </a>
          ${o?this.renderTree(i.children,t+1):""}
        </li>
      `}).join("");return`<ul class="mdv-toc-list mdv-toc-list-${t}">${r}</ul>`}initScrollSpy(e){if(!this.options.scrollSpy||!this.options.enabled)return;const t=[];this.headings.forEach(o=>{const n=e.querySelector(`#${o.id}`);n&&t.push(n)});const r=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting&&this.setActiveHeading(n.target.id)})},{rootMargin:"-20% 0% -70% 0%",threshold:0});t.forEach(o=>{r.observe(o)});let i;e.addEventListener("scroll",()=>{clearTimeout(i),i=setTimeout(()=>{this.updateActiveHeading(e,t)},100)})}updateActiveHeading(e,t){let r=null;for(const i of t){const o=i.getBoundingClientRect(),n=e.getBoundingClientRect();if(o.top-n.top<=100)r=i;else break}r&&this.setActiveHeading(r.id)}setActiveHeading(e){this.activeId=e,document.querySelectorAll(".mdv-toc-link").forEach(t=>{if(t.classList.remove("mdv-toc-active"),t.getAttribute("data-toc-id")===e){t.classList.add("mdv-toc-active");const r=t.closest(".mdv-toc");if(r&&this.options.sticky){const i=t.getBoundingClientRect(),o=r.getBoundingClientRect();(i.top<o.top||i.bottom>o.bottom)&&t.scrollIntoView({behavior:"smooth",block:"center"})}}})}static getStyles(){return`
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
    `}}function ze(s){const t=new DOMParser().parseFromString(s,"text/html"),r=t.querySelectorAll("h1, h2, h3, h4, h5, h6"),i=new Set;return r.forEach(o=>{if(!o.id){const n=o.textContent.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim();let a=1,c=n;for(;i.has(c);)c=`${n}-${a}`,a++;i.add(c),o.id=c}}),t.body.innerHTML}class Pe{constructor(e,t={}){this.searchHistory=[],this.documents=e,this.options={enabled:!0,caseSensitive:!1,fuzzySearch:!1,searchInTags:!0,maxResults:10,highlighting:!0,searchHistory:!0,maxHistoryItems:10,...t},this.searchIndex=new A,this.buildIndex(),this.debouncedSearch=O(r=>this.performSearch(r),300),this.loadSearchHistory()}buildIndex(){const e=new Map;this.documents.forEach(t=>{t.content&&e.set(t.id,t.content)}),this.searchIndex.updateIndex(this.documents,e)}performSearch(e){const t=this.search(e);return this.addToHistory(e,t.length),t}search(e){if(!e.trim())return[];let r=this.searchIndex.search(e).map((i,o)=>({document:i,score:1-o*.1,highlights:this.options.highlighting?this.generateHighlights(i,e):[]}));return r=this.applyFilters(r),r.sort((i,o)=>o.score-i.score),r=r.slice(0,this.options.maxResults),this.options.searchHistory&&this.addToHistory(e,r.length),r}searchDebounced(e,t){this.debouncedSearch=O(()=>{const r=this.search(e);t(r)},300),this.debouncedSearch(e)}applyFilters(e){if(!this.options.filters)return e;const{categories:t,tags:r,dateRange:i}=this.options.filters;return e.filter(o=>{const n=o.document;if(t&&t.length>0&&(!n.category||!t.includes(n.category))||r&&r.length>0&&(!n.tags||!n.tags.some(a=>r.includes(a))))return!1;if(i&&n.date){const a=new Date(n.date);if(i.from&&a<i.from||i.to&&a>i.to)return!1}return!0})}generateHighlights(e,t){const r=[],i=t.toLowerCase().split(/\s+/),o=(n,a)=>{const c=n.toLowerCase();i.forEach(u=>{let p=c.indexOf(u);for(;p!==-1;){const y=Math.max(0,p-50),d=Math.min(n.length,p+u.length+50),h=n.substring(y,d);r.push({field:a,text:h,position:p}),p=c.indexOf(u,p+1)}})};return o(e.title,"title"),e.description&&o(e.description,"description"),e.content&&r.length<5&&o(e.content,"content"),e.tags&&this.options.searchInTags&&o(e.tags.join(" "),"tags"),r.slice(0,5)}getSearchHistory(){return[...this.searchHistory]}clearSearchHistory(){this.searchHistory=[],this.saveSearchHistory()}addToHistory(e,t){this.searchHistory=this.searchHistory.filter(r=>r.query!==e),this.searchHistory.unshift({query:e,timestamp:new Date,resultCount:t}),this.searchHistory.length>this.options.maxHistoryItems&&(this.searchHistory=this.searchHistory.slice(0,this.options.maxHistoryItems)),this.saveSearchHistory()}loadSearchHistory(){if(!(typeof window>"u"||!this.options.searchHistory))try{const e=localStorage.getItem("mdv-search-history");if(e){const t=JSON.parse(e);this.searchHistory=t.map(r=>({...r,timestamp:new Date(r.timestamp)}))}}catch(e){console.warn("Failed to load search history:",e)}}saveSearchHistory(){if(!(typeof window>"u"||!this.options.searchHistory))try{localStorage.setItem("mdv-search-history",JSON.stringify(this.searchHistory))}catch(e){console.warn("Failed to save search history:",e)}}getSuggestions(e){const t=[],r=e.toLowerCase();return this.searchHistory.forEach(i=>{i.query.toLowerCase().includes(r)&&t.push(i.query)}),this.documents.forEach(i=>{i.title.toLowerCase().includes(r)&&!t.includes(i.title)&&t.push(i.title)}),t.slice(0,5)}updateDocuments(e){this.documents=e,this.searchIndex=new A,this.buildIndex()}static renderSearchUI(e){return`
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
          ${e.highlights.find(i=>i.field==="title")?j(t.title,e.highlights.find(i=>i.field==="title").text):t.title}
        </h3>
        
        ${t.description?`
          <p class="mdv-search-result-description">
            ${e.highlights.find(i=>i.field==="description")?j(t.description,e.highlights.find(i=>i.field==="description").text):t.description}
          </p>
        `:""}
        
        ${e.highlights.filter(i=>i.field==="content").map(i=>`
          <p class="mdv-search-result-excerpt">
            ...${j(i.text,i.text)}...
          </p>
        `).join("")}
        
        <div class="mdv-search-result-meta">
          ${t.category?`<span class="mdv-search-result-category">${t.category}</span>`:""}
          ${((r=t.tags)==null?void 0:r.map(i=>`<span class="mdv-search-result-tag">${i}</span>`).join(""))||""}
        </div>
      </div>
    `}}function j(s,e){const t=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),r=new RegExp(`(${t})`,"gi");return s.replace(r,"<mark>$1</mark>")}function ie(s){return`
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
  `}function Fe(s){const e=document.createElement("button");e.className="mdv-print-button no-print",e.textContent="Print",e.onclick=()=>window.print();const t=s.querySelector(".mdv-header");t&&t.appendChild(e),s.querySelectorAll("h1, h2").forEach((n,a)=>{a>0&&a%3===0&&n.classList.add("page-break")}),s.querySelectorAll("table").forEach(n=>{n.classList.add("avoid-break")}),s.querySelectorAll("pre").forEach(n=>{n.scrollHeight>800?n.style.pageBreakInside="auto":n.classList.add("avoid-break")})}function Ue(s,e){return`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Print Preview</title>
      <style>
        ${ie()}
        
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
        ${s}
      </div>
    </body>
    </html>
  `}l.AdvancedSearchManager=Pe,l.ConsoleErrorLogger=_,l.DarkModeToggle=z,l.ErrorBoundary=U,l.ErrorCode=v,l.ErrorFactory=x,l.ErrorSeverity=b,l.ExportManager=Re,l.I18nManager=Ae,l.LRUCache=W,l.LazyLoader=me,l.MarkdownDocsError=m,l.MarkdownDocsViewer=te,l.MemoryManager=M,l.PerformanceMonitor=K,l.PersistentCache=V,l.SearchIndex=A,l.SearchManager=pe,l.TableOfContents=Ne,l.ThemeManager=Q,l.ThemeSwitcher=ee,l.addHeadingIds=ze,l.addPrintUtilities=Fe,l.createCustomTheme=oe,l.createExportOptions=Le,l.createI18nConfig=Oe,l.createLocaleMessages=He,l.createViewer=De,l.darkTheme=F,l.debounce=O,l.defaultMessages=q,l.defaultTheme=w,l.generatePrintPreview=Ue,l.generatePrintStyles=ie,l.throttle=he,l.withRetry=J,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.cjs.map
