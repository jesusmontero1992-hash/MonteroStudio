export function createHero() {
    return `
      <section class="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-6">
        <div class="w-full max-w-5xl">
          <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic tracking-tighter uppercase text-white leading-[1.1] md:leading-tight">
            MONTERO <br class="block md:hidden"> <span class="text-blue-600">STUDIO</span>
          </h1>
          <div class="h-1 w-12 md:w-20 bg-blue-600 mx-auto mt-6 mb-6"></div>
          <p class="font-mono text-white tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-xs uppercase">
            Diseño Visual & Desarrollo Web
          </p>
        </div>
      </section>
    `;
  }