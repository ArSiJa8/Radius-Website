<script setup lang="ts">
const { teamMembers } = useData();
</script>

<template>
  <section id="team" class="bg-[#0d0d12] py-20 px-8">
    <div class="max-w-[1100px] mx-auto">
      <div class="reveal">
        <p class="sec-label">Das Team</p>
        <h2 class="sec-title">Wer hinter RADIUS steckt</h2>
        <p class="sec-desc">Unser Team hält den Server am Laufen und sorgt für faire, spannende Spiele.</p>
      </div>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(165px,1fr))] gap-[1.1rem] reveal">
        <div v-for="m in teamMembers" :key="m.name" class="bg-[#131318] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[1.5rem_1.1rem] text-center transition-all hover:-translate-y-1 hover:border-[#e63946]/26">
          <div class="w-[64px] h-[80px] mx-auto mb-3.5 relative">
            <SkinViewer :username="m.name" :width="64" :height="80" spin />
          </div>
          <div class="font-['Cinzel'] text-[0.88rem] text-white mb-1.5">{{ m.name }}</div>
          <span :class="['inline-block px-2.5 py-0.5 rounded-[3px] text-[0.62rem] font-bold tracking-[0.1em] uppercase mb-2', m.role]">
            {{ m.roleLabel }}
          </span>
          <p class="text-[0.76rem] text-[#8a8a9a] leading-[1.55] font-light">{{ m.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.r-owner { background: rgba(230, 57, 70, 0.18); color: #e63946; }
.r-hmod { background: rgba(99, 179, 237, 0.14); color: #63b3ed; }
.r-admin { background: rgba(244, 180, 80, 0.13); color: #f4b450; }
.r-mod { background: rgba(72, 187, 120, 0.12); color: #48bb78; }
.r-dev { background: rgba(159, 122, 234, 0.15); color: #9f7aea; }
</style>
