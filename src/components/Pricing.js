export function createPricing() {
  const miNumero = "04123195053"; // Pon tu número sin el + (Ej: 584120000000)

  const pasos = [
    { num: "01", titulo: "Briefing", desc: "Definimos la idea y los objetivos básicos." },
    { num: "02", titulo: "Diseño", desc: "Creamos la identidad visual de tu marca." },
    { num: "03", titulo: "Entrega", desc: "Envío de archivos finales listos para usar." }
  ];

  return `
    <section id="precios" class="py-24 px-6 bg-[#050505] relative overflow-hidden">
      <div class="max-w-7xl mx-auto relative z-10">
        
        <div class="mb-24">
          <h2 class="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 italic font-black">// PROCESO</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
            ${pasos.map(p => `
              <div class="relative group">
                <span class="text-6xl font-black text-white/5 absolute -top-8 -left-4 select-none group-hover:text-blue-600/10 transition-colors">${p.num}</span>
                <h4 class="text-white font-black italic uppercase text-xl mb-3 relative">${p.titulo}</h4>
                <p class="text-white/50 text-sm italic leading-relaxed">${p.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div class="bg-black border border-white/10 p-10 hover:border-blue-900/50 transition-all duration-500 flex flex-col justify-between group">
            <div>
              <h4 class="text-blue-500/50 font-mono text-[9px] font-black tracking-widest uppercase mb-2 italic">// ESENCIAL</h4>
              <h3 class="text-3xl font-black text-white italic uppercase mb-8 leading-none group-hover:text-blue-600 transition-colors">
                PACK <span class="text-blue-600">MINI</span>
              </h3>
              <ul class="space-y-5 mb-10 text-white/50 text-sm italic font-medium">
                <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-blue-900 group-hover:bg-blue-600"></span> Identidad Express (Logo)</li>
                <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-blue-900 group-hover:bg-blue-600"></span> Tarjeta Digital (V-Card)</li>
                <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-blue-900 group-hover:bg-blue-600"></span> Formatos para RRSS</li>
              </ul>
            </div>
            <div>
              <p class="text-white font-black text-3xl mb-8 font-mono leading-none">$50</p>
              <a href="https://wa.me/${miNumero}?text=Hola%20Montero%20Studio!%20Me%20gustar%C3%ADa%20iniciar%20con%20el%20*Pack%20Mini%20($50)*" 
                 target="_blank"
                 class="block text-center py-4 border border-white/20 text-white font-black uppercase italic text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                Empezar Ahora
              </a>
            </div>
          </div>

          <div class="bg-black border border-white/10 p-10 hover:border-blue-600/50 transition-all duration-500 flex flex-col justify-between group scale-105 z-20 border-blue-600/30">
            <div>
              <h4 class="text-blue-600 font-mono text-[9px] font-black tracking-widest uppercase mb-2 italic">// POPULAR</h4>
              <h3 class="text-3xl font-black text-white italic uppercase mb-8 leading-none">
                STARTUP <span class="text-blue-600">PRO</span>
              </h3>
              <ul class="space-y-5 mb-10 text-white/70 text-sm italic font-medium">
                <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-blue-600"></span> Identidad Visual Completa</li>
                <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-blue-600"></span> Landing Page (1 sección)</li>
                <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-blue-600"></span> SEO Básico & WhatsApp</li>
              </ul>
            </div>
            <div>
              <p class="text-white font-black text-3xl mb-8 font-mono leading-none">$150</p>
              <a href="https://wa.me/${miNumero}?text=Hola%20Montero%20Studio!%20Solicito%20informaci%C3%B3n%20sobre%20el%20*Pack%20Startup%20Pro%20($150)*" 
                 target="_blank"
                 class="block text-center py-4 bg-white text-black font-black uppercase italic text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                Solicitar Pack
              </a>
            </div>
          </div>

          <div class="bg-black border-2 border-blue-600 p-10 relative overflow-hidden flex flex-col justify-between group">
             <div class="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[8px] px-3 py-1 font-black uppercase tracking-tighter">EL MEJOR VALOR</div>
            <div>
              <h4 class="text-blue-400 font-mono text-[9px] font-black tracking-widest uppercase mb-2 italic">// EMPRESARIAL</h4>
              <h3 class="text-3xl font-black text-white italic uppercase mb-8 leading-none">
                BUSINESS <span class="text-blue-600">MAX</span>
              </h3>
              <ul class="space-y-5 mb-10 text-white/80 text-sm italic font-medium">
                <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-blue-600"></span> Web Corporativa (5 secciones)</li>
                <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-blue-600"></span> Hosting + Dominio (1 año)</li>
                <li class="flex items-center gap-3"><span class="w-1.5 h-1.5 bg-blue-600"></span> SSL & Correos Corporativos</li>
              </ul>
            </div>
            <div>
              <p class="text-white font-black text-3xl mb-8 font-mono leading-none">$350</p>
              <a href="https://wa.me/${miNumero}?text=Hola%20Montero%20Studio!%20Me%20interesa%20el%20*Pack%20Business%20Max%20($350)*%20para%20mi%20empresa." 
                 target="_blank"
                 class="block text-center py-4 bg-blue-600 text-white font-black uppercase italic text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                Cotizar Proyecto
              </a>
            </div>
          </div>

        </div>

        <p class="mt-12 text-center text-white/30 text-[9px] font-mono uppercase tracking-[0.3em] font-bold italic">
          * Precios ajustados a la complejidad técnica solicitada.
        </p>
      </div>
    </section>
  `;
}