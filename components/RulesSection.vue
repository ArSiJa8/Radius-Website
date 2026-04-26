<script setup lang="ts">
const { rules } = useData();
</script>

<template>
  <section id="rules" class="bg-[#0d0d12] py-20 px-8">
    <div class="max-w-[1100px] mx-auto">
      <div class="reveal">
        <p class="sec-label">Regeln</p>
        <h2 class="sec-title">Regelwerk</h2>
        <p class="sec-desc">Für alle Spieler auf dem gesamten Netzwerk. Unwissenheit schützt nicht vor Strafe.</p>
      </div>
      
      <div class="flex flex-col reveal">
        <div v-for="(r, i) in rules" :key="i" class="flex gap-6 py-[1.3rem] border-b border-white/[0.05] first:border-t transition-all hover:bg-white/[0.013] hover:px-[0.85rem] group">
          <div class="font-['Cinzel'] text-[1.2rem] md:text-[1.7rem] text-[#e63946]/13 min-w-[3rem] leading-[1.1] shrink-0 group-hover:text-[#e63946]/30 transition-colors">
            {{ String(i + 1).padStart(2, '0') }}
          </div>
          <div>
            <div class="text-[0.92rem] font-semibold text-white mb-1 group-hover:text-[#e63946] transition-colors">{{ r.title }}</div>
            <div class="text-[0.83rem] text-[#8a8a9a] font-light leading-[1.62]">{{ r.desc }}</div>
            <span :class="['inline-block px-2 py-0.5 rounded-[3px] text-[0.6rem] font-bold tracking-[0.1em] uppercase mt-2', r.sev]">
              {{ r.sevLabel }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sev-ban { background: rgba(230, 57, 70, 0.16); color: #e63946; }
.sev-warn { background: rgba(244, 180, 80, 0.13); color: #f4b450; }
.sev-mute { background: rgba(99, 179, 237, 0.12); color: #63b3ed; }
</style>
