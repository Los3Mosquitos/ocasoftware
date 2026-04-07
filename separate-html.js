const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/app/pages');
if (!fs.existsSync(pagesDir)) {
    console.log('Pages directory not found.');
    process.exit(0);
}

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const templateStartStr = 'template: `';
    const startIndex = content.indexOf(templateStartStr);
    
    if (startIndex !== -1) {
        const contentAfterStart = content.substring(startIndex + templateStartStr.length);
        let endIndex = -1;
        for (let i = 0; i < contentAfterStart.length; i++) {
            if (contentAfterStart[i] === '`' && contentAfterStart[i-1] !== '\\') {
                endIndex = i;
                break;
            }
        }
        
        if (endIndex !== -1) {
            let htmlContent = contentAfterStart.substring(0, endIndex);
            htmlContent = htmlContent.replace(/\\`/g, '`');
            
            const htmlFileName = file.replace('.ts', '.html');
            fs.writeFileSync(path.join(pagesDir, htmlFileName), htmlContent.trim() + '\n');
            
            const before = content.substring(0, startIndex);
            const after = contentAfterStart.substring(endIndex + 1);
            
            const newTsContent = before + "templateUrl: './" + htmlFileName + "'" + after;
            fs.writeFileSync(filePath, newTsContent);
            console.log('Processed ' + file + ' -> ' + htmlFileName);
        }
    }
});
