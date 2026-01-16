export function createContact() {
  const email = "jesusmontero1992@gmail.com"; 
  const asunto = "Consulta de Proyecto - Montero Studio";

  return `
    <section id="contacto" class="relative py-32 px-6 overflow-hidden">
      
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-5xl mx-auto relative z-10">
        
        <div class="mb-16 flex flex-col items-center text-center">
          <h2 class="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white leading-tight">
            ¿LISTO PARA <span class="text-blue-600">CONECTAR?</span>
          </h2>
          <div class="h-1 w-16 md:w-24 bg-blue-600 mt-6 mb-6"></div>
          <p class="font-mono text-white/60 tracking-[0.4em] text-[10px] md:text-xs uppercase italic">
            Selecciona un canal de comunicación directa
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          
          <a href="mailto:${email}?subject=${encodeURIComponent(asunto)}" 
             class="group relative flex items-center justify-between p-6 bg-white/[0.02] border border-white/10 hover:border-blue-500 transition-all duration-500 overflow-hidden">
            <div class="relative z-10 flex items-center gap-5">
              <div class="p-3 border border-white/5 bg-white/5 group-hover:bg-blue-600/10 transition-colors">
                <svg class="w-6 h-6 fill-white group-hover:fill-blue-500 transition-colors" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div class="text-left">
                <p class="text-white font-black italic uppercase tracking-tighter text-lg leading-none">EMAIL DIRECTO</p>
                <p class="text-blue-400 font-mono text-[9px] uppercase tracking-widest mt-1 font-bold italic">Respuesta inmediata</p>
              </div>
            </div>
            <span class="relative z-10 text-white/20 group-hover:text-blue-500 transition-colors font-mono text-[10px] font-black italic">[ GMAIL ]</span>
            <div class="absolute inset-0 bg-blue-600/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>

          <a href="https://wa.me/584123195053?text=Hola%20Montero%20Studio%2C%20solicito%20informaci%C3%B3n%20sobre%20sus%20servicios." 
             target="_blank"
             class="group relative flex items-center justify-between p-6 bg-white/[0.02] border border-white/10 hover:border-blue-500 transition-all duration-500 overflow-hidden">
            <div class="relative z-10 flex items-center gap-5">
              <div class="p-3 border border-white/5 bg-white/5 group-hover:bg-blue-600/10 transition-colors">
                <svg class="w-6 h-6 fill-white group-hover:fill-blue-500 transition-colors" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.63 1.434h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div class="text-left">
                <p class="text-white font-black italic uppercase tracking-tighter text-lg leading-none">CHAT EN VIVO</p>
                <p class="text-blue-400 font-mono text-[9px] uppercase tracking-widest mt-1 font-bold italic">Respuesta Inmediata</p>
              </div>
            </div>
            <span class="relative z-10 text-white/20 group-hover:text-blue-500 transition-colors font-mono text-[10px] font-black italic">[ WA.ME ]</span>
            <div class="absolute inset-0 bg-blue-600/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          </a>

        </div>

        <div class="mt-12 flex justify-center gap-12">
          <a href="https://github.com/jesusmontero1992-hash/" target="_blank" class="group flex flex-col items-center gap-2">
            <div class="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-all duration-300">
              <svg class="w-5 h-5 fill-white/40 group-hover:fill-blue-500 transition-colors" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <span class="text-[8px] font-mono text-white/30 group-hover:text-blue-500 uppercase tracking-widest transition-colors italic font-bold">GitHub</span>
          </a>

          <a href="https://instagram.com/jesus_montero_92/" target="_blank" class="group flex flex-col items-center gap-2">
            <div class="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-all duration-300">
              <svg class="w-5 h-5 fill-white/40 group-hover:fill-blue-500 transition-colors" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.584.07-4.849c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.947s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </div>
            <span class="text-[8px] font-mono text-white/30 group-hover:text-blue-500 uppercase tracking-widest transition-colors italic font-bold">Instagram</span>
          </a>
        </div>

      </div>
    </section>
  `;
}