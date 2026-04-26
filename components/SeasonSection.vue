<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const { players } = useData();
const seasonEnd = new Date('2026-06-30T23:59:59');

const countdown = ref({
  d: '--',
  h: '--',
  m: '--',
  s: '--'
});

let timer: NodeJS.Timeout;

const updateCountdown = () => {
  const now = new Date();
  const diff = seasonEnd.getTime() - now.getTime();
  
  if (diff <= 0) {
    countdown.value = { d: '00', h: '00', m: '00', s: '00' };
    return;
  }

  const pad = (n: number) => String(n).padStart(2, '0');
  countdown.value = {
    d: pad(Math.floor(diff / 86400000)),
    h: pad(Math.floor((diff % 86400000) / 3600000)),
    m: pad(Math.floor((diff % 3600000) / 60000)),
    s: pad(Math.floor((diff % 60000) / 1000))
  };
};

onMounted(() => {
  updateCountdown();
  timer = setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <section id="season" class="bg-[#07070a] py-20 px-8">
    <div class="max-w-[1100px] mx-auto">
      <div class="reveal items-start flex flex-col">
        <p class="sec-label">Aktuell</p>
        <h2 class="sec-title">Saison 1</h2>
        <p class="sec-desc">Die erste offizielle RADIUS-Saison. Erkämpfe deinen Platz in der Hall of Fame.</p>
      </div>
      
      <div class="bg-[#131318] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-8 md:px-10 flex items-center justify-between gap-8 flex-wrap reveal">
        <div>
          <div class="font-['Cinzel'] text-[1.4rem] text-white mb-1">⚔ Saison 1 – Der Anfang</div>
          <div class="text-[0.82rem] text-[#8a8a9a] font-light">Start: 01. April 2026 &nbsp;·&nbsp; Ende: 30. Juni 2026</div>
          <div class="flex gap-2.5 mt-3.5 flex-wrap">
            <div class="inline-flex items-center gap-1.5 bg-[#1a1a21] border border-[rgba(255,255,255,0.06)] px-3 py-1 rounded-[4px] text-[0.75rem] text-[#8a8a9a]">
              Spieler&nbsp;<span class="text-[#eeeae2] font-semibold">{{ players.length }}</span>
            </div>
            <div class="inline-flex items-center gap-1.5 bg-[#1a1a21] border border-[rgba(255,255,255,0.06)] px-3 py-1 rounded-[4px] text-[0.75rem] text-[#8a8a9a]">
              Bestes Kit&nbsp;<span class="text-[#eeeae2] font-semibold">💣 Risiko</span>
            </div>
          </div>
        </div>
        
        <div>
          <div class="text-[0.65rem] tracking-[0.2em] uppercase text-[#5a5a6a] mb-2.5">Saisonende in</div>
          <div class="flex gap-4">
            <div v-for="(val, key) in countdown" :key="key" class="text-center">
              <span class="font-['Cinzel'] text-[2.2rem] text-[#e63946] block leading-none">{{ val }}</span>
              <div class="text-[0.62rem] tracking-[0.18em] uppercase text-[#5a5a6a] mt-1">{{ {d:'Tage',h:'Std',m:'Min',s:'Sek'}[key] }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
