export function createServices() {
  const servicios = [
    {
      id: "01",
      titulo: "Diseño Web UI/UX",
      desc: "Interfaces modernas que guían al usuario a la acción. Enfoque en limpieza visual y facilidad de uso.",
      tag: "ESTÉTICA"
    },
    {
      id: "02",
      titulo: "Desarrollo Full-Stack",
      desc: "Programación personalizada con tecnologías actuales. Webs rápidas y optimizadas bajo estándares de calidad.",
      tag: "INGENIERÍA"
    },
    {
      id: "03",
      titulo: "Identidad Visual",
      desc: "Creación de marcas con autoridad. Logotipos y sistemas visuales diseñados para destacar en el mercado.",
      tag: "BRANDING"
    },
    {
      id: "04",
      titulo: "Soporte & Optimización",
      desc: "Aseguramos que tu plataforma sea eficiente, segura y técnicamente superior a la competencia.",
      tag: "GARANTÍA"
    }
  ];

  return `
    <section id="servicios" class="py-24 px-6 bg-black border-b border-white/5 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div class="max-w-5xl mx-auto relative z-10">
        
        <div class="mb-20">
          <h2 class="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-4 italic font-black">// SERVICIOS</h2>
          <h3 class="text-4xl md:text-5xl font-black italic uppercase text-white tracking-tighter leading-none">
            SOLUCIONES <span class="text-blue-600">DIGITALES.</span>
          </h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          ${servicios.map(s => `
            <div class="group border-t border-white/10 pt-8 hover:border-blue-600 transition-all duration-500">
              <div class="flex justify-between items-start mb-6">
                <span class="text-blue-600 font-mono text-sm font-black tracking-widest">${s.id}</span>
                <span class="text-white/40 font-mono text-[9px] uppercase tracking-[0.3em] italic font-bold group-hover:text-blue-400 transition-colors">${s.tag}</span>
              </div>
              <h4 class="text-2xl font-black italic text-white uppercase mb-4 group-hover:translate-x-2 transition-transform duration-500">
                ${s.titulo}
              </h4>
              <p class="text-white/50 text-sm leading-relaxed italic font-medium max-w-sm group-hover:text-white/80 transition-colors">
                ${s.desc}
              </p>
            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}