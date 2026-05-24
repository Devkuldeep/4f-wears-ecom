const fs = require('fs');

const adminHtml = fs.readFileSync('admin.html', 'utf8');
const lines = adminHtml.split('\n');

// Find lines containing switchTab, panel, or tab-panel
lines.forEach((line, idx) => {
    if (line.includes('switchTab') || line.includes('tabBtn') || line.includes('panel-') || line.includes('tab-panel')) {
        console.log(`Line ${idx+1}: ${line.trim()}`);
    }
});
