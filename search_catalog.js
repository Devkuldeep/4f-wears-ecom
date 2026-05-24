const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\WINDOWS\\Desktop\\Practise\\kuldeep\\4f-wears-ecom';
const files = fs.readdirSync(dir);

files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isFile() && file.endsWith('.html')) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('productsList') || content.includes('products-list') || content.includes('DEFAULT_PRODUCT_SET') || content.includes('productsKey') || content.includes('productsList')) {
            console.log(`File: ${file} contains reference`);
            // Search lines containing the reference
            const lines = content.split('\n');
            lines.forEach((line, idx) => {
                if (line.includes('productsList') || line.includes('DEFAULT_PRODUCT_SET')) {
                    console.log(`  Line ${idx+1}: ${line.trim()}`);
                }
            });
        }
    }
});
