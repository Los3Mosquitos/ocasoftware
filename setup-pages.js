const fs = require('fs');
const path = require('path');

const appHtmlPath = path.join(__dirname, 'src/app/app.html');
const appHtmlContent = fs.readFileSync(appHtmlPath, 'utf8');

const navEndIndex = appHtmlContent.indexOf('</nav>') + 6;
const footerStartIndex = appHtmlContent.indexOf('<footer');

const navContent = appHtmlContent.substring(0, navEndIndex);
const mainContent = appHtmlContent.substring(navEndIndex, footerStartIndex);
const footerContent = appHtmlContent.substring(footerStartIndex);

const pagesDir = path.join(__dirname, 'src/app/pages');
if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
}

const homeComponentContent = "import { Component } from '@angular/core';\n" +
"@Component({\n" +
"  selector: 'app-home',\n" +
"  standalone: true,\n" +
"  template: `\n" +
mainContent.replace(/`/g, '\\`') + "\n" +
"  `\n" +
"})\n" +
"export class HomeComponent {}\n";

fs.writeFileSync(path.join(pagesDir, 'home.component.ts'), homeComponentContent);

let newNavContent = navContent
    .replace(/href="#services"/g, 'routerLink="/" fragment="services"')
    .replace(/href="#about"/g, 'routerLink="/" fragment="about"')
    .replace(/href="#how-we-work"/g, 'routerLink="/" fragment="how-we-work"')
    .replace(/href="#projects"/g, 'routerLink="/" fragment="projects"')
    .replace(/href="#contact"/g, 'routerLink="/" fragment="contact"');

let newFooterContent = footerContent
    .replace(/href="#about"/g, 'routerLink="/" fragment="about"')
    .replace(/href="#contact"/g, 'routerLink="/" fragment="contact"')
    .replace(/href="#">Carreiras<\/a>/g, 'routerLink="/carreiras">Carreiras</a>')
    .replace(/href="#">Blog<\/a>/g, 'routerLink="/blog">Blog</a>')
    .replace(/href="#">Desenvolvimento Web<\/a>/g, 'routerLink="/servicos/desenvolvimento-web">Desenvolvimento Web</a>')
    .replace(/href="#">Aplicativos Móveis<\/a>/g, 'routerLink="/servicos/aplicativos-moveis">Aplicativos Móveis</a>')
    .replace(/href="#">Arquitetura em Nuvem<\/a>/g, 'routerLink="/servicos/arquitetura-nuvem">Arquitetura em Nuvem</a>')
    .replace(/href="#">IA e ML<\/a>/g, 'routerLink="/servicos/ia-ml">IA e ML</a>')
    .replace(/href="#">Política de Privacidade<\/a>/g, 'routerLink="/privacidade">Política de Privacidade</a>')
    .replace(/href="#">Termos de Serviço<\/a>/g, 'routerLink="/termos">Termos de Serviço</a>');

const newAppHtmlContent = newNavContent + "\n" +
"<main class=\"pt-24 min-h-screen flex flex-col\">\n" +
"  <router-outlet></router-outlet>\n" +
"</main>\n" +
newFooterContent;

fs.writeFileSync(appHtmlPath, newAppHtmlContent);

function createPage(name, title, description) {
    const className = name.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Component';
    const content = "import { Component } from '@angular/core';\n" +
"@Component({\n" +
"  selector: 'app-" + name + "',\n" +
"  standalone: true,\n" +
"  template: `\n" +
"    <section class=\"py-24 bg-white\">\n" +
"      <div class=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center\">\n" +
"        <h1 class=\"text-4xl font-display font-bold text-primary mb-6\">" + title + "</h1>\n" +
"        <div class=\"w-20 h-1.5 bg-accent mx-auto mb-8 rounded-full opacity-60\"></div>\n" +
"        <p class=\"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed\">\n" +
"          " + description + "\n" +
"        </p>\n" +
"        \n" +
"        <div class=\"mt-16 p-12 bg-gray-50 rounded-2xl border border-gray-100\">\n" +
"          <span class=\"material-symbols-outlined text-6xl text-gray-300 mb-4 block\">construction</span>\n" +
"          <h3 class=\"text-2xl font-bold text-gray-700 mb-2\">Página em Construção</h3>\n" +
"          <p class=\"text-gray-500\">Estamos trabalhando para trazer o melhor conteúdo para você em breve.</p>\n" +
"        </div>\n" +
"      </div>\n" +
"    </section>\n" +
"  `\n" +
"})\n" +
"export class " + className + " {\n" +
"  title = '" + title + "';\n" +
"  description = '" + description + "';\n" +
"}\n";
    fs.writeFileSync(path.join(pagesDir, name + '.component.ts'), content);
}

createPage('blog', 'Blog OCA SOFTWARE', 'Insights, tendências e artigos sobre tecnologia, transformação digital e inovação.');
createPage('carreiras', 'Carreiras', 'Junte-se à nossa equipe de especialistas e ajude a construir o futuro da tecnologia.');
createPage('web-dev', 'Desenvolvimento Web', 'Criamos plataformas web robustas, escaláveis e de alta performance para o seu negócio.');
createPage('mobile-dev', 'Aplicativos Móveis', 'Desenvolvimento de aplicativos nativos e híbridos focados na melhor experiência do usuário.');
createPage('cloud', 'Arquitetura em Nuvem', 'Soluções em nuvem seguras e escaláveis na AWS, Azure e Google Cloud.');
createPage('ai-ml', 'Inteligência Artificial e Machine Learning', 'Transforme seus dados em decisões inteligentes com nossas soluções de IA.');
createPage('privacy', 'Política de Privacidade', 'Saiba como a OCA SOFTWARE coleta, usa e protege seus dados pessoais.');
createPage('terms', 'Termos de Serviço', 'Termos e condições para o uso dos serviços e plataformas da OCA SOFTWARE.');

console.log('Pages created successfully.');
