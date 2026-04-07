const fs = require('fs');
let content = fs.readFileSync('src/app/app.html', 'utf8');
content = content.replace(/dark:[^\s"']+/g, '');
content = content.replace(/ +/g, ' ');
content = content.replace(/class=" /g, 'class="');
content = content.replace(/ ">/g, '">');
fs.writeFileSync('src/app/app.html', content);
