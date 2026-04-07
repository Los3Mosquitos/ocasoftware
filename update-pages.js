const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src/app/pages');

function updatePage(name, template) {
    const filePath = path.join(pagesDir, name + '.component.ts');
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the template string
    const templateStart = content.indexOf('template: `') + 11;
    const templateEnd = content.lastIndexOf('`\n})');
    
    content = content.substring(0, templateStart) + '\n' + template + '\n  ' + content.substring(templateEnd);
    fs.writeFileSync(filePath, content);
}

// 1. Blog
updatePage('blog', `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-display font-bold text-primary mb-6">{{title}}</h1>
          <div class="w-20 h-1.5 bg-accent mx-auto mb-8 rounded-full opacity-60"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{{description}}</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Post 1 -->
          <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div class="aspect-video bg-gray-200 relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR6C2ERW8iRG_CWiULZ8IvCgu_x7fVrn2uZ-CY-VNAs0dI8aeiREHJxTIdCxSCpheHVEZgm0GZ55Qpm71cd0QTOGcrf3qaXvxmTZjyfxmx1ZYkUiPscgLt9lqkrj8MjdoblEfkvLRg_0Gr_qaQcvbbyPQgNykvPS1fKbho1CpdyCUmJ7ULvsg91oBsgD0myeUOY94I8KQCvNCinSSuNo1H6yg0d2lV2Jd_xBInC51BK9OCUECDg88vjZNk7XXkdnvP5ytWPeTp-3A" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Blog Post">
            </div>
            <div class="p-8">
              <span class="text-accent font-bold text-xs uppercase tracking-wider mb-2 block">Transformação Digital</span>
              <h3 class="text-xl font-bold text-primary mb-3">Como a IA está redefinindo o desenvolvimento de software</h3>
              <p class="text-gray-600 mb-6 text-sm">Descubra como ferramentas de inteligência artificial estão acelerando o ciclo de desenvolvimento e melhorando a qualidade do código.</p>
              <a href="#" class="text-primary-light font-bold text-sm hover:underline flex items-center">Ler artigo <span class="material-symbols-outlined text-sm ml-1">arrow_forward</span></a>
            </div>
          </div>
          
          <!-- Post 2 -->
          <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div class="aspect-video bg-gray-200 relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuARaJ86_hkLrZkO_pKpFP-V8ID7I8aaqY1rYqfilDcffjADalH-0ASALmxctkovnKIoxFY2rLmCvX1SkUhqFm6DcVbYWZRnM01ZQZXx-q_wgajSZttgnCawN2uXaEeE46d3x6mhrdocsOPq-IZ7KichTrM8ihibRG0AMaBqfB9nHSpawH1_GTmxwJx9BJm0D7Bumpd1dN5pyLhmYHeYETq8sl0M1fJ_pkRMEMm6L3xUw8wCdN8GzahNpEkSMsiAQKo1n47h-ldwAxQ" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Blog Post">
            </div>
            <div class="p-8">
              <span class="text-accent font-bold text-xs uppercase tracking-wider mb-2 block">Cloud Computing</span>
              <h3 class="text-xl font-bold text-primary mb-3">Estratégias de migração para nuvem em 2026</h3>
              <p class="text-gray-600 mb-6 text-sm">Um guia prático para empresas que buscam modernizar sua infraestrutura com segurança e escalabilidade.</p>
              <a href="#" class="text-primary-light font-bold text-sm hover:underline flex items-center">Ler artigo <span class="material-symbols-outlined text-sm ml-1">arrow_forward</span></a>
            </div>
          </div>
          
          <!-- Post 3 -->
          <div class="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
            <div class="aspect-video bg-gray-200 relative overflow-hidden">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6V40URgEU93TzD9moKScX8gdVc4DNn4fMo5GWalugiQRno_aRdcfum7SVlHMjorAmsG1hxxzVGVlG_5QHFn6YFqokI9ff3GdcVgA9SgIdRd0S_uDqimOfsc31AisD_gH94OljMRz0Owsf2lVxXJQ1nhjKHHyiF9XH0zuoHhdiaA56ibmEtaP5O0u9EKGFUka6yJhCqWKEVx2B1iyNCICqUH1d-F_3GOc9znD95eKP8-N_hViQA6hHP3jgAFv2pHU1L7hxFfrcHLg" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Blog Post">
            </div>
            <div class="p-8">
              <span class="text-accent font-bold text-xs uppercase tracking-wider mb-2 block">Metodologia Ágil</span>
              <h3 class="text-xl font-bold text-primary mb-3">O impacto do desenvolvimento ágil no ROI</h3>
              <p class="text-gray-600 mb-6 text-sm">Entenda como entregas contínuas e ciclos curtos podem maximizar o retorno sobre o investimento em software.</p>
              <a href="#" class="text-primary-light font-bold text-sm hover:underline flex items-center">Ler artigo <span class="material-symbols-outlined text-sm ml-1">arrow_forward</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
`);

// 2. Carreiras
updatePage('carreiras', `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h1 class="text-4xl font-display font-bold text-primary mb-6">{{title}}</h1>
          <div class="w-20 h-1.5 bg-accent mx-auto mb-8 rounded-full opacity-60"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{{description}}</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 class="text-3xl font-bold text-primary mb-6">Nossa Cultura</h2>
            <p class="text-gray-600 mb-4 leading-relaxed">Na OCA SOFTWARE, acreditamos que grandes produtos são construídos por equipes felizes e motivadas. Promovemos um ambiente de colaboração, aprendizado contínuo e respeito mútuo.</p>
            <p class="text-gray-600 mb-6 leading-relaxed">Valorizamos a diversidade de ideias e a autonomia. Aqui, você terá a oportunidade de trabalhar com tecnologias de ponta em projetos que causam impacto real nos negócios dos nossos clientes.</p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-gray-700"><span class="material-symbols-outlined text-accent">check_circle</span> Trabalho remoto flexível</li>
              <li class="flex items-center gap-3 text-gray-700"><span class="material-symbols-outlined text-accent">check_circle</span> Orçamento para educação e cursos</li>
              <li class="flex items-center gap-3 text-gray-700"><span class="material-symbols-outlined text-accent">check_circle</span> Plano de saúde e odontológico premium</li>
              <li class="flex items-center gap-3 text-gray-700"><span class="material-symbols-outlined text-accent">check_circle</span> Participação nos lucros</li>
            </ul>
          </div>
          <div class="grid grid-cols-2 gap-4">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz7_BlpHDQ5zDw9Y0e0FAEp_xZkFJEoX4AloopoRUdgNfOnKt9vYerQD8QbfKQzNUwRLrUwCz5-FkjzjIvKItgu-E80eF7D6muutyerXTGi0PV4fgaxNF5Y6apeYjHkDyf0QnAaPVrf3NeGiVwsBXl6M_2cjrcN9BpRM6TZPAWRZIldEQVR09fv7Kv4w1I4GgnBvdvp1jbL33m8SNPV8KUZBlCWZ_1P5FnUxveEarhc7L8J-ZIuRtW65G4tVG7L9tygzRa3onJIRE" class="rounded-2xl shadow-lg w-full h-48 object-cover" alt="Culture">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1zZpjX_eD9HO52jt6J-FMK92tZxe9S1FfUhhr0IZt8su9irflmMtZnLahVe3ecvfplrObWxuevO7md9KCrJ43tnm2JAg80ciQfp5-Qt-epxfEwJq6dL9pkf5ZuZY-t8038NyJgKwauHV5dBMXxjzzyOQmevB9MbZjKecAQxvTT3zHl4bUUKsfwCSo0XU6uGN6_jobQ7gDlUq2Nnj66YbFKysN1cOIAG73fvP8iXuITqxXMlaR1qOcRFJAHy5m9uPHCCkl4QEY57U" class="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" alt="Culture">
          </div>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-primary mb-8 text-center">Vagas Abertas</h2>
          <div class="space-y-4 max-w-4xl mx-auto">
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition-shadow">
              <div>
                <h3 class="text-xl font-bold text-primary">Desenvolvedor(a) Full Stack Senior</h3>
                <p class="text-gray-500 text-sm mt-1">Remoto • Tempo Integral • Engenharia</p>
              </div>
              <button class="mt-4 md:mt-0 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">Candidatar-se</button>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition-shadow">
              <div>
                <h3 class="text-xl font-bold text-primary">Engenheiro(a) de Dados / IA</h3>
                <p class="text-gray-500 text-sm mt-1">São Paulo (Híbrido) • Tempo Integral • Dados</p>
              </div>
              <button class="mt-4 md:mt-0 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">Candidatar-se</button>
            </div>
            <div class="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col md:flex-row justify-between items-center hover:shadow-md transition-shadow">
              <div>
                <h3 class="text-xl font-bold text-primary">Product Manager</h3>
                <p class="text-gray-500 text-sm mt-1">Remoto • Tempo Integral • Produto</p>
              </div>
              <button class="mt-4 md:mt-0 px-6 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">Candidatar-se</button>
            </div>
          </div>
        </div>
      </div>
    </section>
`);

// 3. Web Dev
updatePage('web-dev', `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span class="material-symbols-outlined text-4xl text-primary">language</span>
          </div>
          <h1 class="text-4xl font-display font-bold text-primary mb-6">{{title}}</h1>
          <div class="w-20 h-1.5 bg-accent mx-auto mb-8 rounded-full opacity-60"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{{description}}</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 class="text-2xl font-bold text-primary mb-4">Plataformas que impulsionam negócios</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">Desenvolvemos aplicações web sob medida, desde portais corporativos complexos até sistemas SaaS escaláveis. Utilizamos as tecnologias mais modernas para garantir performance, segurança e uma experiência de usuário impecável.</p>
            
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-primary-light">speed</span>
                </div>
                <div>
                  <h4 class="font-bold text-primary">Alta Performance</h4>
                  <p class="text-sm text-gray-600 mt-1">Aplicações otimizadas para carregar rapidamente e suportar alto volume de tráfego.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-primary-light">security</span>
                </div>
                <div>
                  <h4 class="font-bold text-primary">Segurança de Nível Empresarial</h4>
                  <p class="text-sm text-gray-600 mt-1">Proteção de dados e conformidade com as principais regulamentações (LGPD/GDPR).</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span class="material-symbols-outlined text-primary-light">devices</span>
                </div>
                <div>
                  <h4 class="font-bold text-primary">Design Responsivo</h4>
                  <p class="text-sm text-gray-600 mt-1">Interfaces que se adaptam perfeitamente a qualquer tamanho de tela ou dispositivo.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <h4 class="font-bold text-primary mb-6 text-center">Nossa Stack Tecnológica</h4>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-xl shadow-sm text-center font-semibold text-gray-700 border border-gray-100">Angular & React</div>
              <div class="bg-white p-4 rounded-xl shadow-sm text-center font-semibold text-gray-700 border border-gray-100">Node.js & NestJS</div>
              <div class="bg-white p-4 rounded-xl shadow-sm text-center font-semibold text-gray-700 border border-gray-100">PostgreSQL & MongoDB</div>
              <div class="bg-white p-4 rounded-xl shadow-sm text-center font-semibold text-gray-700 border border-gray-100">TypeScript</div>
            </div>
            <div class="mt-8 text-center">
               <a href="/#contact" class="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors">Solicitar Orçamento</a>
            </div>
          </div>
        </div>
      </div>
    </section>
`);

// 4. Mobile Dev
updatePage('mobile-dev', `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span class="material-symbols-outlined text-4xl text-primary">smartphone</span>
          </div>
          <h1 class="text-4xl font-display font-bold text-primary mb-6">{{title}}</h1>
          <div class="w-20 h-1.5 bg-accent mx-auto mb-8 rounded-full opacity-60"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{{description}}</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="order-2 md:order-1 relative">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5govv6d7xoWoOPiEOtEX9odpnfX6Xf9knXFdtkhsDeqDwLjH_CZMyakJ7JbBfwRgcSxKcmh11BCBzPdMYl6oEXHZGEzUn-sqZsnKEOtIe4q-wQMdJyf-8dIzpIbHb2y6YZv5o-jlWck3WrZ5XLOOTeRnW6PnpiJ1Xl0yw7Za4n3UlRhGDVF526WwFaCid6K97d_pnPohyF28eLhu-ZWEnd2rCgYZHqjLf6HLtLf6z_EeYvyCR0TT5ch9nR2MXWe0NhLRAIR_Zvxo" class="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]" alt="Mobile App">
             <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
               <div class="flex items-center gap-2 mb-2">
                 <span class="material-symbols-outlined text-yellow-400">star</span>
                 <span class="material-symbols-outlined text-yellow-400">star</span>
                 <span class="material-symbols-outlined text-yellow-400">star</span>
                 <span class="material-symbols-outlined text-yellow-400">star</span>
                 <span class="material-symbols-outlined text-yellow-400">star</span>
               </div>
               <p class="font-bold text-primary">Experiência 5 Estrelas</p>
             </div>
          </div>
          <div class="order-1 md:order-2">
            <h3 class="text-2xl font-bold text-primary mb-4">Seu negócio na palma da mão</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">Construímos aplicativos móveis nativos e multiplataforma que engajam usuários e geram resultados. Do conceito ao lançamento nas lojas de aplicativos, cuidamos de todo o processo.</p>
            
            <ul class="space-y-4 mb-8">
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-accent mt-0.5">check_circle</span>
                <div>
                  <strong class="text-primary block">Desenvolvimento Multiplataforma</strong>
                  <span class="text-gray-600 text-sm">Flutter e React Native para alcançar iOS e Android com um único código base.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-accent mt-0.5">check_circle</span>
                <div>
                  <strong class="text-primary block">Desenvolvimento Nativo</strong>
                  <span class="text-gray-600 text-sm">Swift e Kotlin para aplicações que exigem máxima performance e acesso profundo ao hardware.</span>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-accent mt-0.5">check_circle</span>
                <div>
                  <strong class="text-primary block">UI/UX Focada em Conversão</strong>
                  <span class="text-gray-600 text-sm">Interfaces intuitivas projetadas para reter usuários e facilitar jornadas.</span>
                </div>
              </li>
            </ul>
            <a href="/#contact" class="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors">Falar com Consultor</a>
          </div>
        </div>
      </div>
    </section>
`);

// 5. Cloud
updatePage('cloud', `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span class="material-symbols-outlined text-4xl text-primary">cloud</span>
          </div>
          <h1 class="text-4xl font-display font-bold text-primary mb-6">{{title}}</h1>
          <div class="w-20 h-1.5 bg-accent mx-auto mb-8 rounded-full opacity-60"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{{description}}</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
            <span class="material-symbols-outlined text-5xl text-accent mb-4">cloud_upload</span>
            <h3 class="text-xl font-bold text-primary mb-3">Migração para Nuvem</h3>
            <p class="text-gray-600 text-sm">Movemos sua infraestrutura legada para a nuvem de forma segura, sem tempo de inatividade, reduzindo custos operacionais.</p>
          </div>
          <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
            <span class="material-symbols-outlined text-5xl text-accent mb-4">architecture</span>
            <h3 class="text-xl font-bold text-primary mb-3">Arquitetura Cloud-Native</h3>
            <p class="text-gray-600 text-sm">Desenhamos sistemas baseados em microsserviços, containers e serverless para máxima escalabilidade e resiliência.</p>
          </div>
          <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 text-center">
            <span class="material-symbols-outlined text-5xl text-accent mb-4">security_update_good</span>
            <h3 class="text-xl font-bold text-primary mb-3">DevOps & FinOps</h3>
            <p class="text-gray-600 text-sm">Automatizamos pipelines de CI/CD e otimizamos seus custos na nuvem para que você pague apenas pelo que usa.</p>
          </div>
        </div>
        
        <div class="bg-primary text-white rounded-3xl p-12 text-center relative overflow-hidden">
           <div class="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
           <h3 class="text-3xl font-bold mb-6 relative z-10">Parceiros das Maiores Nuvens</h3>
           <p class="text-lg text-gray-200 mb-8 max-w-2xl mx-auto relative z-10">Nossa equipe possui certificações avançadas nos principais provedores de nuvem do mercado.</p>
           <div class="flex justify-center gap-8 relative z-10 font-bold text-xl tracking-widest">
             <span>AWS</span>
             <span>|</span>
             <span>GOOGLE CLOUD</span>
             <span>|</span>
             <span>AZURE</span>
           </div>
        </div>
      </div>
    </section>
`);

// 6. AI & ML
updatePage('ai-ml', `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span class="material-symbols-outlined text-4xl text-primary">psychology</span>
          </div>
          <h1 class="text-4xl font-display font-bold text-primary mb-6">{{title}}</h1>
          <div class="w-20 h-1.5 bg-accent mx-auto mb-8 rounded-full opacity-60"></div>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{{description}}</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 class="text-2xl font-bold text-primary mb-4">Inovação baseada em dados</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">Ajudamos empresas a extrair valor real de seus dados. Desde análise preditiva até agentes de IA generativa, implementamos soluções que automatizam tarefas complexas e fornecem insights estratégicos.</p>
            
            <div class="space-y-6">
              <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h4 class="font-bold text-primary mb-2 flex items-center gap-2"><span class="material-symbols-outlined text-accent">smart_toy</span> IA Generativa & LLMs</h4>
                <p class="text-sm text-gray-600">Integração com modelos avançados (como Gemini e GPT) para criar assistentes virtuais, geradores de conteúdo e analisadores de documentos.</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h4 class="font-bold text-primary mb-2 flex items-center gap-2"><span class="material-symbols-outlined text-accent">query_stats</span> Análise Preditiva</h4>
                <p class="text-sm text-gray-600">Modelos de machine learning que preveem tendências de mercado, comportamento do consumidor e falhas em equipamentos.</p>
              </div>
              <div class="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h4 class="font-bold text-primary mb-2 flex items-center gap-2"><span class="material-symbols-outlined text-accent">visibility</span> Visão Computacional</h4>
                <p class="text-sm text-gray-600">Sistemas capazes de analisar e extrair informações de imagens e vídeos para controle de qualidade e segurança.</p>
              </div>
            </div>
          </div>
          <div class="relative">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeTUzjVdv_D1EI79Hn4YmbUUK9Q7W8ZkFcWQZXHHGFeVCtjWkeg2gy8AWO9ITsYJKeMnwRlmlQeJj8SGcq4ENdW4-PqytwXQSU527vEkUl-ae8NgQmnvZksY2rpXEAgRgdrx0hATpASTFRx9ZlaU9mxgFOdZgNV_o6y-umOFW7jPWtaLLhEnJL04OTHvuon_Bhx2IRU5veHd5NdBjT37TmpCXBfmeFpPHA6O24x-LVeWoGAZeBofoDN61a0ZUlDu_Nisr-lCEmZWY" class="rounded-3xl shadow-2xl w-full object-cover aspect-square" alt="AI Dashboard">
          </div>
        </div>
      </div>
    </section>
`);

// 7. Privacy
updatePage('privacy', `
    <section class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-display font-bold text-primary mb-6">{{title}}</h1>
        <p class="text-gray-500 mb-10">Última atualização: 07 de Abril de 2026</p>
        
        <div class="prose prose-lg prose-primary max-w-none text-gray-600">
          <p>A OCA SOFTWARE ("nós", "nosso" ou "empresa") está comprometida em proteger a sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você visita nosso site ou utiliza nossos serviços.</p>
          
          <h3 class="text-2xl font-bold text-primary mt-8 mb-4">1. Informações que Coletamos</h3>
          <p>Podemos coletar informações pessoais que você nos fornece diretamente, como nome, endereço de e-mail, número de telefone e informações da empresa ao preencher formulários de contato ou solicitar orçamentos.</p>
          
          <h3 class="text-2xl font-bold text-primary mt-8 mb-4">2. Como Usamos Suas Informações</h3>
          <p>Utilizamos as informações coletadas para:</p>
          <ul class="list-disc pl-6 mb-6 space-y-2">
            <li>Fornecer, operar e manter nossos serviços;</li>
            <li>Melhorar, personalizar e expandir nossos serviços;</li>
            <li>Compreender e analisar como você usa nossos serviços;</li>
            <li>Desenvolver novos produtos, serviços, recursos e funcionalidades;</li>
            <li>Comunicar-nos com você, diretamente ou por meio de um de nossos parceiros, inclusive para atendimento ao cliente.</li>
          </ul>
          
          <h3 class="text-2xl font-bold text-primary mt-8 mb-4">3. Compartilhamento de Informações</h3>
          <p>Não vendemos, trocamos ou alugamos suas informações pessoais para terceiros. Podemos compartilhar informações genéricas agregadas demográficas não vinculadas a nenhuma informação de identificação pessoal com nossos parceiros de negócios e anunciantes confiáveis.</p>
          
          <h3 class="text-2xl font-bold text-primary mt-8 mb-4">4. Segurança dos Dados</h3>
          <p>Adotamos práticas adequadas de coleta, armazenamento e processamento de dados e medidas de segurança para proteger contra acesso não autorizado, alteração, divulgação ou destruição de suas informações pessoais.</p>
          
          <h3 class="text-2xl font-bold text-primary mt-8 mb-4">5. Seus Direitos (LGPD)</h3>
          <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir, atualizar ou solicitar a exclusão de suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail privacy@ocasoftware.com.</p>
        </div>
      </div>
    </section>
`);

// 8. Terms
updatePage('terms', `
    <section class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-display font-bold text-primary mb-6">{{title}}</h1>
        <p class="text-gray-500 mb-10">Última atualização: 07 de Abril de 2026</p>
        
        <div class="prose prose-lg prose-primary max-w-none text-gray-600">
          <p>Bem-vindo à OCA SOFTWARE. Ao acessar nosso site e utilizar nossos serviços, você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso.</p>
          
          <h3 class="text-2xl font-bold text-primary mt-8 mb-4">1. Aceitação dos Termos</h3>
          <p>Ao acessar este site, você concorda em ficar vinculado a estes Termos de Serviço, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de quaisquer leis locais aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.</p>
          
          <h3 class="text-2xl font-bold text-primary mt-8 mb-4">2. Uso de Licença</h3>
          <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da OCA SOFTWARE, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.</p>
          
          <h3 class="text-2xl font-bold text-primary mt-8 mb-4">3. Prestação de Serviços</h3>
          <p>Os serviços de desenvolvimento de software, consultoria e infraestrutura prestados pela OCA SOFTWARE serão regidos por contratos específicos firmados entre a empresa e o cliente. Estes termos de uso do site não substituem ou modificam contratos de prestação de serviços.</p>
          
          <h3 class="text-2xl font-bold text-primary mt-8 mb-4">4. Propriedade Intelectual</h3>
          <p>Todo o conteúdo incluído neste site, como texto, gráficos, logotipos, ícones de botões, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da OCA SOFTWARE ou de seus fornecedores de conteúdo e protegido por leis de direitos autorais internacionais.</p>
          
          <h3 class="text-2xl font-bold text-primary mt-8 mb-4">5. Limitações</h3>
          <p>Em nenhum caso a OCA SOFTWARE ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em nosso site.</p>
        </div>
      </div>
    </section>
`);

console.log('Pages updated with content successfully.');
