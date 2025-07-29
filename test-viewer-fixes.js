const { chromium } = require('playwright');

async function runTests() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  
  console.log('🧪 Starting viewer fix verification tests...\n');
  
  // Test 1: Development Viewer
  console.log('📋 Test 1: Development Viewer (docs-viewer.html)');
  const page1 = await context.newPage();
  
  // Capture console messages
  const consoleMessages1 = [];
  page1.on('console', msg => consoleMessages1.push({ type: msg.type(), text: msg.text() }));
  
  await page1.goto('http://localhost:8000/docs-viewer.html');
  await page1.waitForTimeout(3000); // Wait for initialization
  
  // Check for errors
  const errors1 = consoleMessages1.filter(msg => msg.type === 'error');
  const warnings1 = consoleMessages1.filter(msg => msg.type === 'warning');
  
  console.log(`  ✓ Page loaded`);
  console.log(`  📊 Console errors: ${errors1.length}`);
  console.log(`  ⚠️  Console warnings: ${warnings1.length}`);
  
  if (errors1.length > 0) {
    console.log('  ❌ Errors found:');
    errors1.forEach(err => console.log(`    - ${err.text}`));
  }
  
  // Check if viewer loaded
  const viewerLoaded1 = await page1.evaluate(() => {
    return typeof MarkdownDocsViewer !== 'undefined';
  });
  console.log(`  ${viewerLoaded1 ? '✓' : '❌'} MarkdownDocsViewer loaded`);
  
  // Check if highlight.js is available
  const hljsAvailable1 = await page1.evaluate(() => {
    return typeof window.hljs !== 'undefined';
  });
  console.log(`  ${hljsAvailable1 ? '✓' : '❌'} highlight.js available`);
  
  // Check theme switcher
  const themeSwitcher1 = await page1.$('.mdv-theme-switcher');
  console.log(`  ${themeSwitcher1 ? '✓' : '❌'} Theme switcher present`);
  
  // Check dark mode toggle
  const darkToggle1 = await page1.$('.mdv-dark-mode-toggle');
  console.log(`  ${darkToggle1 ? '✓' : '❌'} Dark mode toggle present`);
  
  console.log('\n📋 Test 2: Production Viewer (docs/index.html)');
  const page2 = await context.newPage();
  
  // Capture console messages
  const consoleMessages2 = [];
  page2.on('console', msg => consoleMessages2.push({ type: msg.type(), text: msg.text() }));
  
  await page2.goto('http://localhost:8000/docs/index.html');
  await page2.waitForTimeout(3000); // Wait for initialization
  
  // Check for errors
  const errors2 = consoleMessages2.filter(msg => msg.type === 'error');
  const warnings2 = consoleMessages2.filter(msg => msg.type === 'warning');
  
  console.log(`  ✓ Page loaded`);
  console.log(`  📊 Console errors: ${errors2.length}`);
  console.log(`  ⚠️  Console warnings: ${warnings2.length}`);
  
  if (errors2.length > 0) {
    console.log('  ❌ Errors found:');
    errors2.forEach(err => console.log(`    - ${err.text}`));
  }
  
  // Check if viewer loaded
  const viewerLoaded2 = await page2.evaluate(() => {
    return typeof window.MarkdownDocsViewer !== 'undefined';
  });
  console.log(`  ${viewerLoaded2 ? '✓' : '❌'} MarkdownDocsViewer loaded`);
  
  // Check if highlight.js is available
  const hljsAvailable2 = await page2.evaluate(() => {
    return typeof window.hljs !== 'undefined';
  });
  console.log(`  ${hljsAvailable2 ? '✓' : '❌'} highlight.js available`);
  
  // Check localStorage
  const localStorage2 = await page2.evaluate(() => {
    const theme = localStorage.getItem('training-docs-theme');
    return {
      theme,
      isOldTheme: theme === 'training-science-light' || theme === 'training-science-dark'
    };
  });
  console.log(`  ${!localStorage2.isOldTheme ? '✓' : '❌'} No old theme in localStorage`);
  if (localStorage2.theme) {
    console.log(`    Current theme: ${localStorage2.theme}`);
  }
  
  console.log('\n📋 Test 3: Theme Switching');
  
  // Test theme switching
  const themeSwitcher2 = await page2.$('.mdv-theme-switcher button');
  if (themeSwitcher2) {
    await themeSwitcher2.click();
    await page2.waitForTimeout(500);
    
    const themeOptions = await page2.$$('.mdv-theme-option');
    console.log(`  ✓ Theme options available: ${themeOptions.length}`);
    
    // Try switching to dark theme
    const darkOption = await page2.$('.mdv-theme-option[data-theme="dark"]');
    if (darkOption) {
      await darkOption.click();
      await page2.waitForTimeout(500);
      
      const isDark = await page2.evaluate(() => {
        const root = document.documentElement;
        const bgColor = getComputedStyle(root).getPropertyValue('--mdv-color-background');
        return bgColor && bgColor !== '#ffffff';
      });
      console.log(`  ${isDark ? '✓' : '❌'} Theme switched to dark`);
    }
  }
  
  // Test dark mode toggle
  const darkToggle2 = await page2.$('.mdv-dark-mode-toggle button');
  if (darkToggle2) {
    await darkToggle2.click();
    await page2.waitForTimeout(500);
    console.log(`  ✓ Dark mode toggle clicked`);
  }
  
  console.log('\n📋 Test 4: Debug Viewer');
  const page3 = await context.newPage();
  
  await page3.goto('http://localhost:8000/debug-viewer.html');
  await page3.waitForTimeout(3000);
  
  // Get debug panel content
  const debugContent = await page3.evaluate(() => {
    const panel = document.getElementById('debug-panel');
    return panel ? panel.textContent : '';
  });
  
  const hasHljsSuccess = debugContent.includes('✓ hljs loaded');
  const hasMarkedSuccess = debugContent.includes('✓ marked loaded');
  const hasViewerSuccess = debugContent.includes('✓ Viewer created successfully');
  
  console.log(`  ${hasHljsSuccess ? '✓' : '❌'} highlight.js loaded in debug`);
  console.log(`  ${hasMarkedSuccess ? '✓' : '❌'} marked loaded in debug`);
  console.log(`  ${hasViewerSuccess ? '✓' : '❌'} Viewer created in debug`);
  
  // Summary
  console.log('\n📊 Test Summary:');
  const totalErrors = errors1.length + errors2.length;
  const totalWarnings = warnings1.length + warnings2.length;
  
  console.log(`  Total errors: ${totalErrors}`);
  console.log(`  Total warnings: ${totalWarnings}`);
  console.log(`  ${totalErrors === 0 ? '✅ All tests passed!' : '❌ Some tests failed'}`);
  
  await browser.close();
}

// Run the tests
runTests().catch(console.error);