#!/usr/bin/env node

const http = require('http');
const https = require('https');
const { execSync } = require('child_process');

console.log('🔍 Verifying Training Science Docs Viewer Fixes\n');

// Color codes for terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m'
};

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`)
};

// Test 1: Check if dependencies are accessible
console.log('📋 Test 1: CDN Dependencies\n');

const dependencies = [
  {
    name: 'marked.js',
    url: 'https://cdn.jsdelivr.net/npm/marked@14.1.2/lib/marked.umd.js'
  },
  {
    name: 'marked-highlight',
    url: 'https://cdn.jsdelivr.net/npm/marked-highlight@2.1.4/lib/index.umd.js'
  },
  {
    name: 'highlight.js',
    url: 'https://cdn.jsdelivr.net/npm/highlight.js@11.10.0/lib/highlight.min.js'
  }
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => {
      resolve(false);
    });
  });
}

async function testDependencies() {
  for (const dep of dependencies) {
    const isAccessible = await checkUrl(dep.url);
    if (isAccessible) {
      log.success(`${dep.name} CDN accessible`);
    } else {
      log.error(`${dep.name} CDN not accessible`);
    }
  }
}

// Test 2: Check local files
console.log('\n📋 Test 2: Local Files\n');

const fs = require('fs');
const path = require('path');

const filesToCheck = [
  'docs/index.html',
  'docs-viewer.html',
  'docs/markdown-docs-viewer.umd.js',
  'viewer/dist/index.umd.cjs'
];

function checkLocalFiles() {
  filesToCheck.forEach(file => {
    if (fs.existsSync(file)) {
      const stats = fs.statSync(file);
      log.success(`${file} exists (${(stats.size / 1024).toFixed(1)} KB)`);
    } else {
      log.error(`${file} not found`);
    }
  });
}

// Test 3: Check HTML files for fixes
console.log('\n📋 Test 3: HTML Implementation Checks\n');

function checkHTMLFixes() {
  const htmlFiles = ['docs/index.html', 'docs-viewer.html'];
  
  htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      
      console.log(`\n  Checking ${file}:`);
      
      // Check for DOMContentLoaded wrapper
      if (content.includes('DOMContentLoaded')) {
        log.success('  Uses DOMContentLoaded for proper load order');
      } else {
        log.error('  Missing DOMContentLoaded wrapper');
      }
      
      // Check for localStorage cleanup
      if (content.includes('localStorage.removeItem')) {
        log.success('  Has localStorage cleanup code');
      } else {
        log.warning('  No localStorage cleanup found');
      }
      
      // Check for window.hljs assignment
      if (content.includes('window.hljs = hljs')) {
        log.success('  Sets window.hljs properly');
      } else {
        log.error('  Missing window.hljs assignment');
      }
      
      // Check for theme configuration
      if (content.includes('switcherPosition') && content.includes('darkTogglePosition')) {
        log.success('  Has proper theme configuration');
      } else {
        log.error('  Missing theme switcher configuration');
      }
      
      // Check it's not using hardcoded theme
      if (content.includes('theme: themes.default.light')) {
        log.error('  Still using hardcoded theme');
      } else {
        log.success('  Not using hardcoded theme');
      }
    }
  });
}

// Test 4: Check for server
console.log('\n📋 Test 4: Local Server Check\n');

function checkServer() {
  http.get('http://localhost:8000/', (res) => {
    log.success(`Local server running on port 8000 (status: ${res.statusCode})`);
  }).on('error', () => {
    log.warning('Local server not running on port 8000');
    log.info('Run: python3 -m http.server 8000');
  });
}

// Test 5: Git status
console.log('\n📋 Test 5: Git Status\n');

function checkGitStatus() {
  try {
    const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
    log.info(`Current branch: ${branch}`);
    
    const status = execSync('git status --porcelain', { encoding: 'utf8' });
    const modifiedFiles = status.split('\n').filter(line => line.trim()).length;
    
    if (modifiedFiles === 0) {
      log.success('No uncommitted changes');
    } else {
      log.warning(`${modifiedFiles} file(s) with uncommitted changes`);
    }
  } catch (e) {
    log.error('Unable to check git status');
  }
}

// Run all tests
async function runTests() {
  await testDependencies();
  checkLocalFiles();
  checkHTMLFixes();
  checkServer();
  checkGitStatus();
  
  console.log('\n✅ Verification complete!\n');
  console.log('To test in browser:');
  console.log('1. Start server: python3 -m http.server 8000');
  console.log('2. Open http://localhost:8000/docs-viewer.html');
  console.log('3. Open http://localhost:8000/docs/index.html');
  console.log('4. Check browser console for any errors\n');
}

runTests();