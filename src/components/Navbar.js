export function createNavbar() {
  return `
    <nav class="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="text-xl font-black italic tracking-tighter uppercase text-white">
          MONTERO <span class="text-blue-600">STUDIO</span>
        </div>
        <button id="menu-btn" class="md:hidden text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
        <div id="nav-links" class="hidden md:flex gap-8 text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 font-bold">
          <a href="#sobre-mi" class="hover:text-blue-500 transition-colors">Perfil</a>
          <a href="#portafolio" class="hover:text-blue-500 transition-colors">Trabajo</a>
          <a href="#servicios" class="hover:text-blue-500 transition-colors">Servicios</a>
          <a href="#contacto" class="hover:text-blue-500 transition-colors">Contacto</a>
        </div>
      </div>
      <div id="mobile-menu" class="hidden flex-col bg-black border-b border-white/5 py-6 px-6 space-y-4 md:hidden text-center">
        <a href="#sobre-mi" class="mobile-link text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">Perfil</a>
        <a href="#portafolio" class="mobile-link text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">Trabajo</a>
        <a href="#servicios" class="mobile-link text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">Servicios</a>
        <a href="#contacto" class="mobile-link text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">Contacto</a>
      </div>
    </nav>
  `;
}

export function initNavbar() {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const links = document.querySelectorAll('.mobile-link');
  if (btn && menu) {
    btn.onclick = () => { menu.classList.toggle('hidden'); menu.classList.toggle('flex'); };
    links.forEach(l => l.onclick = () => { menu.classList.add('hidden'); menu.classList.remove('flex'); });
  }
}