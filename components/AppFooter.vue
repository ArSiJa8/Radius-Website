<template>
  <footer class="bg-[#0d0d12] border-t border-[rgba(255,255,255,0.06)] pt-14 pb-8 px-8">
    <div id="contact" class="max-w-[1100px] mx-auto mb-14 reveal">
      <div class="mb-10">
        <p class="sec-label">Support</p>
        <h2 class="sec-title">Kontakt</h2>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <a href="https://dsc.gg/mcradius" target="_blank" class="flex items-center gap-4 p-4 bg-[#1a1a21] border border-[rgba(255,255,255,0.06)] rounded-[6px] transition-all hover:border-[#e63946]/26 hover:-translate-y-1 hover:shadow-lg">
          <div class="w-10 h-10 rounded-lg bg-[#5865f2]/18 flex items-center justify-center text-xl">💬</div>
          <div><div class="text-[0.9rem] font-semibold text-white">Discord</div><div class="text-[0.76rem] text-[#8a8a9a]">dsc.gg/mcradius</div></div>
        </a>
        <a href="https://www.youtube.com/@MinecraftRadius" target="_blank" class="flex items-center gap-4 p-4 bg-[#1a1a21] border border-[rgba(255,255,255,0.06)] rounded-[6px] transition-all hover:border-[#e63946]/26 hover:-translate-y-1 hover:shadow-lg">
          <div class="w-10 h-10 rounded-lg bg-red-600/10 flex items-center justify-center text-xl text-red-600">▶</div>
          <div><div class="text-[0.9rem] font-semibold text-white">YouTube</div><div class="text-[0.76rem] text-[#8a8a9a]">@MinecraftRadius</div></div>
        </a>
        <a href="https://www.tiktok.com/@minecraftradiusrppvp" target="_blank" class="flex items-center gap-4 p-4 bg-[#1a1a21] border border-[rgba(255,255,255,0.06)] rounded-[6px] transition-all hover:border-[#e63946]/26 hover:-translate-y-1 hover:shadow-lg">
          <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl">♪</div>
          <div><div class="text-[0.9rem] font-semibold text-white">TikTok</div><div class="text-[0.76rem] text-[#8a8a9a]">@mcradius</div></div>
        </a>
        <div class="flex items-center gap-4 p-4 bg-[#1a1a21] border border-[rgba(255,255,255,0.06)] rounded-[6px] transition-all hover:border-[#e63946]/26 hover:-translate-y-1 hover:shadow-lg cursor-pointer" @click="copyIP">
          <div class="w-10 h-10 rounded-lg bg-[#e63946]/12 flex items-center justify-center text-xl">🎮</div>
          <div><div class="text-[0.9rem] font-semibold text-white">Server IP</div><div class="text-[0.76rem] text-[#8a8a9a]">Radiusmc.de</div></div>
        </div>
      </div>
    </div>

    <div class="divider mb-10"></div>

    <div class="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pb-10 border-b border-[rgba(255,255,255,0.06)]">
      <div>
        <div class="flex items-center gap-2.5 mb-4">
          <div class="w-7 h-7 rounded-md bg-[#e63946] flex items-center justify-center text-xs shadow-lg shadow-[#e63946]/15">⚔</div>
          <span class="font-['Cinzel_Decorative'] text-[0.9rem] text-[#e63946] tracking-[0.14em]">RADIUS</span>
        </div>
        <p class="text-[0.8rem] text-[#8a8a9a] leading-[1.72] font-light max-w-[210px]">Das kompetitive Minecraft-Netzwerk für PvP & Roleplay. Tritt an, steig auf, werde zur Legende.</p>
        <div class="inline-flex items-center gap-2 bg-[#1a1a21] border border-[rgba(255,255,255,0.06)] rounded-[6px] px-3 py-1.5 font-mono text-[0.78rem] text-[#e63946] cursor-pointer mt-4 hover:border-[#e63946]/50 transition-all" @click="copyIP">
          Radiusmc.de
        </div>
      </div>
      
      <div v-for="col in footerCols" :key="col.title">
        <div class="text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-white mb-4">{{ col.title }}</div>
        <ul class="list-none flex flex-col gap-2">
          <li v-for="link in col.links" :key="link.name">
            <a :href="link.href" class="text-[0.82rem] text-[#8a8a9a] transition-colors hover:text-[#e63946] font-light">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="max-w-[1100px] mx-auto mt-6 flex items-center justify-between text-[0.73rem] text-[#5a5a6a] flex-wrap gap-2">
      <span>© 2026 RADIUS. Alle Rechte vorbehalten.</span>
      <span>Nicht affiliated mit Mojang Studios.</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerCols = [
  {
    title: 'Navigation',
    links: [
      { name: 'Saison', href: '#season' },
      { name: 'Rankings', href: '#rankings' },
      { name: 'Königreiche', href: '#kingdoms' },
      { name: 'Kits', href: '#kits' },
    ]
  },
  {
    title: 'Community',
    links: [
      { name: 'Team', href: '#team' },
      { name: 'Discord', href: 'https://dsc.gg/mcradius' },
      { name: 'YouTube', href: 'https://www.youtube.com/@MinecraftRadius' },
      { name: 'TikTok', href: 'https://www.tiktok.com/@mcradius' },
    ]
  },
  {
    title: 'Rechtliches',
    links: [
      { name: 'Impressum', href: '#' },
      { name: 'Datenschutz', href: '#' },
      { name: 'AGB', href: '#' },
    ]
  }
];

const copyIP = () => {
  navigator.clipboard.writeText('Radiusmc.de').then(() => alert('IP kopiert!'));
};
</script>
