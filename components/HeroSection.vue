<script setup lang="ts">
const { players } = useData();

const stats = [
  { value: computed(() => players.value.length), key: 'Spieler' },
  { value: '3', key: 'Kits' },
  { value: '6', key: 'Königreiche' },
  { value: '24/7', key: 'Online' },
];
</script>

<template>
  <section id="hero" class="min-h-screen flex items-center justify-center text-center relative overflow-hidden px-8 py-20 pt-20">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_70%,rgba(230,57,70,0.09)_0%,transparent_60%),linear-gradient(180deg,#07070a_0%,#0a0709_55%,#07070a_100%)]"></div>
    <div class="absolute inset-0 z-0 opacity-[0.022] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[length:52px_52px]"></div>
    <div class="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[700px] h-[220px] rounded-[50%] bg-[#e63946] blur-[130px] opacity-[0.055] z-0 pointer-events-none"></div>

    <div class="relative z-[1] max-w-[840px]">
      <div class="hero-chip inline-flex items-center gap-2 bg-[rgba(230,57,70,0.1)] border border-[rgba(230,57,70,0.3)] rounded-full px-4 py-1 text-[0.67rem] font-semibold tracking-[0.22em] uppercase text-[#e63946] mb-8 animate-[fadeDown_0.7s_ease_both]">
        <span class="w-[5px] h-[5px] bg-[#e63946] rounded-full animate-[blink_2s_infinite]"></span>
        Minecraft Radius – PvP & Roleplay
      </div>
      
      <h1 class="font-['Cinzel_Decorative'] text-[clamp(3.8rem,10vw,7.5rem)] font-black leading-[0.92] tracking-[0.04em] text-white shadow-[0_0_100px_rgba(230,57,70,0.18)] mb-6 animate-[fadeUp_0.8s_0.15s_ease_both]">
        <span class="text-[#e63946]">RAD</span>IUS
      </h1>
      
      <p class="text-base font-light text-[#8a8a9a] max-w-[480px] mx-auto mb-11 leading-[1.8] animate-[fadeUp_0.8s_0.3s_ease_both]">
        Das kompetitive Minecraft-Netzwerk von BNxqz, Mrxqz und Manfeedo. Kämpfe, steige auf, conquere Königreiche.
      </p>
      
      <div class="flex gap-[0.85rem] justify-center flex-wrap animate-[fadeUp_0.8s_0.45s_ease_both]">
        <a href="#rankings" class="btn-red">▶ Rankings ansehen</a>
        <a href="#kits" class="btn-ghost">Kits & Tiers</a>
      </div>
      
      <div class="flex justify-center gap-14 mt-[4.5rem] pt-[2.8rem] border-t border-[rgba(255,255,255,0.06)] animate-[fadeUp_0.8s_0.6s_ease_both] flex-wrap">
        <div v-for="stat in stats" :key="stat.key">
          <span class="font-['Cinzel'] text-[2rem] text-[#e63946] block leading-none">{{ stat.value }}</span>
          <div class="text-[0.65rem] tracking-[0.2em] uppercase text-[#5a5a6a] mt-1">{{ stat.key }}</div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#5a5a6a] text-[0.65rem] tracking-[0.18em] uppercase animate-[float_2.5s_ease-in-out_infinite]">
      Scroll
      <div class="w-px h-[34px] bg-[linear-gradient(to_bottom,#5a5a6a,transparent)] mt-1"></div>
    </div>
  </section>
</template>
