const fs = require('fs');

const adminHtml = fs.readFileSync('admin.html', 'utf8');
const lines = adminHtml.split('\n');

lines.forEach((line, idx) => {
    if (line.includes('loadOverviewStats')) {
        console.log(`Line ${idx+1}: ${line.trim()}`);
    }
});
