const fs = require('fs');

const logPath = 'C:\\Users\\WINDOWS\\.gemini\\antigravity\\brain\\485b2f99-0233-405a-88a3-d34925462c11\\.system_generated\\logs\\transcript.jsonl';
const content = fs.readFileSync(logPath, 'utf8');
const lines = content.split('\n');

const lineIndex = 305;
if (lines[lineIndex]) {
    const obj = JSON.parse(lines[lineIndex]);
    for (const call of obj.tool_calls) {
        if (call.name === 'replace_file_content') {
            let code = call.args.ReplacementContent;
            // Let's unescape it manually if it contains literal \n and \"
            let cleanCode = code;
            if (cleanCode.startsWith('"') && cleanCode.endsWith('"')) {
                cleanCode = cleanCode.substring(1, cleanCode.length - 1);
            }
            cleanCode = cleanCode
                .replace(/\\r/g, '\r')
                .replace(/\\n/g, '\n')
                .replace(/\\t/g, '\t')
                .replace(/\\"/g, '"')
                .replace(/\\\\/g, '\\');
            
            fs.writeFileSync('lost_script.js', cleanCode, 'utf8');
            console.log('Unescaped lost_script.js written successfully');
        }
    }
} else {
    console.log('Line index not found');
}
