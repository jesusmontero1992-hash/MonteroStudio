// Serial Fijo y Maestro de Montero Studio
const serialFijo = "MS-2026-001-VZ-ZUL";

export function createLegalModal() {
  return `
    <div id="legal-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-4">
      <div id="close-overlay" class="absolute inset-0 bg-black/98 backdrop-blur-xl"></div>
      
      <div class="relative bg-[#050505] border border-white/10 w-full max-w-4xl p-6 md:p-20 shadow-[0_0_80px_rgba(0,0,0,1)] overflow-y-auto max-h-[95vh] custom-scrollbar border-t-blue-600/50">
        
        <div class="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none overflow-hidden select-none">
          <h1 class="text-[10rem] md:text-[25rem] font-black italic uppercase tracking-tighter -rotate-12 text-white">
            MONTERO
          </h1>
        </div>

        <button id="close-modal" class="absolute top-4 right-4 md:top-8 md:right-8 text-white/40 hover:text-white text-2xl font-light transition-colors z-20 p-2">✕</button>
        
        <div class="relative z-10 space-y-10 md:space-y-16 text-left">
          
          <div class="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-white/10 pb-8 md:pb-12">
            <div>
              <h3 class="text-white font-black italic text-2xl md:text-3xl tracking-tighter uppercase mb-2 leading-none">
                ACUERDO DE <span class="text-blue-600">SERVICIOS</span>
              </h3>
              <p class="text-blue-400 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] italic font-bold">Estándar de Ingeniería & Diseño</p>
            </div>
            <div class="bg-blue-600/10 p-3 md:p-4 border border-blue-600/30 w-full md:w-auto">
              <p class="text-blue-500 font-mono text-[8px] font-bold tracking-widest uppercase mb-1 text-center">CÓDIGO DE VALIDACIÓN</p>
              <p class="text-white font-mono text-xs md:text-sm tracking-widest font-bold text-center">${serialFijo}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            
            <div class="space-y-8 md:space-y-10">
              <div class="space-y-4">
                <h4 class="text-white font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] flex items-center gap-3">
                  <span class="w-1.5 h-1.5 bg-blue-600 shadow-[0_0_8px_#2563eb]"></span> 01. GESTIÓN TÉCNICA
                </h4>
                <div class="space-y-4 text-white/70 text-[13px] md:text-sm leading-relaxed italic font-medium px-2 md:px-4">
                  <p><strong class="text-white">Adjudicación:</strong> Los proyectos inician con el abono del 50%. Este pago activa el sprint de diseño y programación.</p>
                  <p><strong class="text-white">Propiedad:</strong> Tras la liquidación final (100%), se transfiere la propiedad total de los activos al cliente.</p>
                </div>
              </div>

              <div class="bg-white/[0.03] p-5 border-l-2 border-blue-600/50">
                <h5 class="text-blue-500 font-mono text-[9px] font-bold uppercase tracking-widest mb-3 italic">Estándar ISO/IEC 25010</h5>
                <p class="text-white/50 text-[11px] md:text-[12px] leading-relaxed italic font-medium">
                  Este estudio garantiza que su web cumple con criterios de <span class="text-white">Adecuación, Eficiencia, Usabilidad y Seguridad</span>.
                </p>
              </div>
            </div>

            <div class="space-y-8 md:space-y-10">
              <div class="space-y-4">
                <h4 class="text-white font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] flex items-center gap-3">
                  <span class="w-1.5 h-1.5 bg-blue-600 shadow-[0_0_8px_#2563eb]"></span> 02. PRIVACIDAD & ÉTICA
                </h4>
                <div class="space-y-4 text-white/70 text-[13px] md:text-sm leading-relaxed italic font-medium px-2 md:px-4">
                  <p><strong class="text-white">Confidencialidad:</strong> Sus activos y datos estratégicos están protegidos bajo secreto profesional.</p>
                  <p><strong class="text-white">Seguridad:</strong> Al concluir el despliegue, se recomienda la actualización de credenciales. No almacenamos accesos permanentes.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center md:items-end gap-10">
            <div class="space-y-5 text-center md:text-left">
              <div class="space-y-1">
                <p class="text-white/40 font-mono text-[9px] uppercase tracking-widest italic font-bold">Digital Sign Authorized</p>
                <div class="text-white italic text-3xl md:text-4xl font-black tracking-tighter uppercase leading-none">
                  MONTERO<span class="text-blue-600">STUDIO</span>
                </div>
              </div>
              <p class="text-white/40 font-mono text-[9px] uppercase tracking-widest italic leading-relaxed font-bold">
                LEAD DEVELOPER & VISUAL DESIGNER<br>
                ZULIA, VENEZUELA.
              </p>
            </div>
            
            <div class="text-center md:text-right space-y-2">
              <p class="text-[9px] font-mono text-white/40 uppercase tracking-widest font-bold italic">Documento ID: ${serialFijo}</p>
              <p class="text-[9px] font-mono text-blue-500 uppercase tracking-widest font-bold italic">SISTEMA DE CALIDAD CERTIFICADO INTERNAMENTE</p>
              <p class="text-[9px] font-mono text-white/20 uppercase tracking-widest font-bold">© 2026 MONTERO STUDIO. ALL RIGHTS RESERVED.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;
}

export function initLegalModal() {
  const open = document.getElementById('open-legal');
  const modal = document.getElementById('legal-modal');
  const close = document.getElementById('close-modal');
  const overlay = document.getElementById('close-overlay');

  if (open && modal) {
    const show = () => {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    };
    const hide = () => {
      modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    };

    open.onclick = show;
    close.onclick = hide;
    overlay.onclick = hide;
    
    window.addEventListener('keydown', (e) => {
      if (e.key === "Escape" && !modal.classList.contains('hidden')) hide();
    });
  }
}