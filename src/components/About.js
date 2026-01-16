export function createAbout() {
  const techs = [
    { name: "HTML5", img: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" },
    { name: "CSS3", img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
    { name: "JS", img: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" },
    { name: "React", img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" }
  ];

  return `
    <section id="sobre-mi" class="py-20 px-6 bg-[#050505] border-y border-white/5">
      <div class="max-w-5xl mx-auto">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div class="space-y-6">
            <h2 class="text-blue-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold italic">// PERFIL PROFESIONAL</h2>
            <h3 class="text-3xl md:text-4xl font-black italic uppercase text-white tracking-tighter leading-none">
              DISEÑO QUE VENDE. <br>CÓDIGO QUE <span class="text-blue-600">FUNCIONA.</span>
            </h3>
            <p class="text-white/70 text-base leading-relaxed italic font-light">
              Mi enfoque es simple: crear herramientas digitales que ayuden a tu negocio a destacar. Combino el <span class="text-white font-medium italic underline decoration-blue-600/30">diseño visual moderno</span> con una programación limpia y segura.
            </p>
            <p class="text-white/40 text-sm italic leading-relaxed font-bold">
              Trabajo bajo estándares internacionales de calidad (ISO/IEC 25010) para asegurar que tu web sea rápida, fácil de usar y crezca junto con tu marca.
            </p>
          </div>
          
          <div class="bg-blue-600/[0.03] border border-blue-600/20 p-8 space-y-4 backdrop-blur-sm">
              <p class="text-white italic text-lg leading-snug font-light">
                "No solo entrego una página web, entrego una solución técnica pensada para durar y dar resultados."
              </p>
              <div class="h-[1px] w-12 bg-blue-600 shadow-[0_0_8px_#2563eb]"></div>
          </div>
        </div>

        <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p class="text-[9px] font-mono text-white/50 uppercase tracking-[0.5em] italic font-black">Tecnologías de confianza</p>
          
          <div class="flex gap-8 md:gap-12 items-center">
            ${techs.map(t => `
              <div class="group relative">
                <img 
                  src="${t.img}" 
                  alt="${t.name}" 
                  class="w-8 h-8 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 cursor-crosshair"
                >
                <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-600 opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}