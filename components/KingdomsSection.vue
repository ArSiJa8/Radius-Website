<script setup lang="ts">
const { players, calcPts, KINGDOMS_MAP } = useData();

const kingdoms = [
  { id: 'ice', name: 'Eis', icon: '❄', desc: 'Rutschig, kalt, gefährlich. Nur die Härtesten überleben.', gradient: 'from-[#63b3ed] to-[#90cdf4]', hoverColor: 'rgba(99,179,237,0.14)', borderHover: 'rgba(99,179,237,0.28)' },
  { id: 'mushroom', name: 'Pilz', icon: '🍄', desc: 'Mystisch und unberechenbar. Niemand kennt ihre Pläne.', gradient: 'from-[#e63946] to-[#ff6b6b]', hoverColor: 'rgba(230,57,70,0.14)', borderHover: 'rgba(230,57,70,0.28)' },
  { id: 'mountain', name: 'Berg', icon: '⛰', desc: 'Highground entscheidet. Massiv, stark, uneinnehmbar.', gradient: 'from-[#a0aec0] to-[#e2e8f0]', hoverColor: 'rgba(160,174,192,0.12)', borderHover: 'rgba(160,174,192,0.22)' },
  { id: 'canyon', name: 'Canyon', icon: '🏜', desc: 'Tiefe Schluchten, brutale Fights. Jeder Schritt zählt.', gradient: 'from-[#ed8936] to-[#f6ad55]', hoverColor: 'rgba(237,137,54,0.14)', borderHover: 'rgba(237,137,54,0.28)' },
  { id: 'flower', name: 'Blumenwiese', icon: '🌸', desc: 'Sieht friedlich aus… ist es nicht.', gradient: 'from-[#ed64a6] to-[#f687b3]', hoverColor: 'rgba(237,100,166,0.14)', borderHover: 'rgba(237,100,166,0.28)' },
  { id: 'jungle', name: 'Dschungel', icon: '🌴', desc: 'Eng, chaotisch, voller Überraschungen. Schnell oder tot.', gradient: 'from-[#48bb78] to-[#68d391]', hoverColor: 'rgba(72,187,120,0.14)', borderHover: 'rgba(72,187,120,0.28)' },
];

const getKingdomStats = (id: string) => {
  const members = players.value.filter(p => p.kingdom === id);
  const pts = members.reduce((sum, p) => sum + calcPts(p), 0);
  return { members: members.length, pts };
};

const emit = defineEmits(['openKingdom']);
</script>

<template>
  <section id="kingdoms" class="bg-[#07070a] py-20 px-8">
    <div class="max-w-[1100px] mx-auto">
      <div class="reveal">
        <p class="sec-label">Fraktionen</p>
        <h2 class="sec-title">Königreiche</h2>
        <p class="sec-desc">Wähle deine Fraktion, kämpfe für dein Volk. Klicke für Spielerdetails mit 3D-Skins.</p>
      </div>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[1.1rem] reveal">
        <div v-for="k in kingdoms" :key="k.id" 
          @click="emit('openKingdom', k.id)"
          class="bg-[#131318] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[1.5rem_1.3rem] cursor-pointer relative overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
          :style="{ '--hover-shadow': k.hoverColor, '--hover-border': k.borderHover }">
          
          <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r" :class="k.gradient"></div>
          
          <div class="text-[2rem] mb-3 line-height-none">{{ k.icon }}</div>
          <div class="font-['Cinzel'] text-[0.95rem] text-white mb-1.5">{{ k.name }}</div>
          <p class="text-[0.8rem] text-[#8a8a9a] mb-4 leading-[1.55] font-light">{{ k.desc }}</p>
          
          <div class="flex gap-[1.3rem]">
            <div>
              <div class="font-['Cinzel'] text-[1.05rem] text-[#e63946]">{{ getKingdomStats(k.id).members }}</div>
              <div class="text-[0.62rem] tracking-[0.12em] uppercase text-[#5a5a6a] mt-[1px]">Spieler</div>
            </div>
            <div>
              <div class="font-['Cinzel'] text-[1.05rem] text-[#e63946]">{{ getKingdomStats(k.id).pts }}</div>
              <div class="text-[0.62rem] tracking-[0.12em] uppercase text-[#5a5a6a] mt-[1px]">Punkte</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover {
  box-shadow: 0 14px 44px var(--hover-shadow);
  border-color: var(--hover-border);
}
</style>
