export function createPortfolio() {
  // Aquí defines tus trabajos reales o los servicios que ofreces
  const proyectos = [
    { 
      cliente: "E-Commerce Luxury", 
      cat: "DESARROLLO WEB", 
      tech: "Next.js + Tailwind",
      desc: "Tienda virtual de alto rendimiento con pasarela de pagos integrada.",
      id: "01"
    },
    { 
      cliente: "Branding Corporativo", 
      cat: "DISEÑO VISUAL", 
      tech: "Figma + Illustrator",
      desc: "Creación de identidad visual y manual de marca para consultora técnica.",
      id: "02"
    },
    { 
      cliente: "Dashboard Admin", 
      cat: "SOFTWARE INTERNO", 
      tech: "React + Firebase",
      desc: "Panel de control en tiempo real para gestión de inventarios y datos.",
      id: "03"
    },
    { 
      cliente: "App de Servicios", 
      cat: "MOBILE DESIGN", 
      tech: "Flutter + Node.js",
      desc: "Diseño de interfaz y experiencia de usuario para aplicación móvil.",
      id: "04"
    }
  ];

  return `
    <section id="portafolio" class="relative py-24 px-6">
      
      <div class="max-w-5xl mx-auto relative z-10">
        
        <div class="mb-16 flex flex-col items-center text-center">
          <h2 class="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white">
            TRABAJOS <span class="text-blue-600">RECIENTES</span>
          </h2>
          <div class="h-1 w-16 md:w-24 bg-blue-600 mt-6 mb-6"></div>
          <p class="font-mono text-white tracking-[0.4em] text-[10px] md:text-xs uppercase italic">
            Selección de Proyectos // Montero Studio
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${proyectos.map(p => `
            <div class="group relative p-8 bg-white/[0.02] border border-white/5 hover:border-blue-600/40 transition-all duration-500 backdrop-blur-sm cursor-pointer">
              
              <div class="relative z-10 space-y-4">
                <div class="flex justify-between items-start">
                  <h4 class="text-xl font-bold text-white uppercase italic tracking-tight group-hover:text-blue-500 transition-colors">
                    ${p.cliente}
                  </h4>
                  <span class="text-blue-600 font-mono text-[10px] font-black opacity-30">${p.id}</span>
                </div>
                
                <p class="text-sm text-white/70 leading-relaxed font-medium italic">
                  ${p.desc}
                </p>

                <div class="pt-4 border-t border-white/5 flex flex-col gap-2">
                  <span class="text-[9px] font-mono text-white uppercase tracking-widest font-bold italic">
                    ÁREA: ${p.cat}
                  </span>
                  <span class="text-[10px] font-mono text-blue-500 font-black uppercase tracking-wider">
                    ${p.tech}
                  </span>
                </div>
              </div>

              <div class="absolute inset-0 bg-blue-600/[0.03] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          `).join('')}
        </div>

        <div class="mt-20 text-center opacity-100">
          <p class="font-mono text-white text-[9px] uppercase tracking-[0.5em]">
            Proyectos validados bajo estándares de alta calidad
          </p>
        </div>

      </div>
    </section>
  `;
}