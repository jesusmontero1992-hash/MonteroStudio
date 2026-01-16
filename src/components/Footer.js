export function createFooter() {
  const year = new Date().getFullYear();
  
  return `
    <footer class="relative py-12 px-6 border-t border-white/10 bg-black overflow-hidden">
      
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 md:gap-8">
          
          <div class="flex flex-col items-center md:items-start space-y-3">
            <h4 class="text-white font-black italic text-2xl uppercase tracking-tighter leading-none">
              MONTERO <span class="text-blue-600">STUDIO</span>
            </h4>
            <p class="text-[9px] font-mono text-white/70 uppercase tracking-[0.3em] font-bold">
              © ${year} // TODOS LOS DERECHOS RESERVADOS
            </p>
          </div>

          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-10 mb-1">
            
            <button id="open-legal" class="text-[10px] font-mono text-white/90 hover:text-blue-500 uppercase tracking-[0.2em] font-black italic transition-colors">
              AVISO LEGAL
            </button>

            <div class="flex items-center gap-3">
              <p class="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] font-black italic leading-none">
                SERVIDOR ACTIVO
              </p>
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-600 shadow-[0_0_8px_#2563eb]"></span>
              </span>
            </div>

          </div>
        </div>
      </div>
    </footer>
  `;
}