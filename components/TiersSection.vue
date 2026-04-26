<script setup lang="ts">
const { getTierPoints, TIERS, RISIKO_MULT } = useData();

const kitOptions = [
  { id: 'sword', title: '⚔ Sword', sub: '1.0× Multiplikator', mult: 1 },
  { id: 'uhc', title: '☢ UHC', sub: '1.0× Multiplikator', mult: 1 },
  { id: 'risiko', title: '💣 Risiko', sub: '1.3× Multiplikator – meiste Punkte', mult: RISIKO_MULT, highlight: true },
];
</script>

<template>
  <section id="tiers" class="bg-[#07070a] py-20 px-8">
    <div class="max-w-[1100px] mx-auto">
      <div class="reveal">
        <p class="sec-label">Punktesystem</p>
        <h2 class="sec-title">Tier-Punkte Übersicht</h2>
        <p class="sec-desc"><strong class="text-[#e63946]">HT1 = bester Tier (meiste Punkte)</strong>, LT5 = schlechtester. Risiko gibt 1.3× Bonus.</p>
      </div>
      
      <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[1.3rem] reveal">
        <div v-for="kit in kitOptions" :key="kit.id" 
          class="bg-[#131318] border rounded-[10px] overflow-hidden transition-all duration-300"
          :class="kit.highlight ? 'border-[#e63946]/26 scale-[1.02] shadow-xl' : 'border-[rgba(255,255,255,0.06)]'">
          <div class="p-[1.1rem_1.3rem] border-b border-[rgba(255,255,255,0.06)] flex items-center justify-between">
            <div>
              <div class="font-['Cinzel'] text-[0.9rem] text-white">{{ kit.title }}</div>
              <div class="text-[0.7rem]" :class="kit.highlight ? 'text-[#e63946]' : 'text-[#8a8a9a]'">{{ kit.sub }}</div>
            </div>
          </div>
          <div class="flex flex-col">
            <div v-for="(t, i) in TIERS" :key="t" class="flex items-center justify-between px-[1.3rem] py-[0.6rem] border-b border-white/[0.03] transition-colors hover:bg-white/[0.02] last:border-0">
               <div class="flex items-center gap-2.5">
                <div class="text-[0.68rem] text-[#5a5a6a] w-5 text-right font-mono">{{ i + 1 }}</div>
                <span :class="['tier', `t-${t}`]">{{ t }}</span>
                <span v-if="i === 0" class="text-[0.58rem] font-bold text-[#ffd700] tracking-[0.1em] uppercase bg-[#ffd700]/10 border border-[#ffd700]/25 px-1.5 py-0.5 rounded-[3px]">BESTER</span>
              </div>
              <div class="font-['Cinzel'] text-[#e63946] text-[0.88rem]">{{ getTierPoints(t, kit.mult) }} pts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
