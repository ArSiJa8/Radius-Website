<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Tier } from '~/types';

const { players, calcPts, KINGDOMS_MAP } = useData();
const currentTab = ref<'overall' | 'sword' | 'uhc' | 'risiko'>('overall');
const searchQuery = ref('');

const TIER_RANK: Record<string, number> = {
  HT1: 10, HT2: 9, HT3: 8, HT4: 7, HT5: 6,
  LT1: 5, LT2: 4, LT3: 3, LT4: 2, LT5: 1, '': 0
};

const processedPlayers = computed(() => {
  let list = [...players.value];
  
  if (currentTab.value === 'overall') {
    list.sort((a, b) => calcPts(b) - calcPts(a));
  } else {
    list.sort((a, b) => (TIER_RANK[b[currentTab.value]] || 0) - (TIER_RANK[a[currentTab.value]] || 0));
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q));
  }
  
  return list;
});

const crowns = ['👑', '🥈', '🥉'];
const emit = defineEmits(['openProfile']);

const getTabClass = (tab: string) => {
  return currentTab.value === tab 
    ? 'bg-[#e63946] text-white border-[#e63946] shadow-[0_0_12px_rgba(230,57,70,0.15)]' 
    : 'border-[rgba(255,255,255,0.06)] text-[#8a8a9a] hover:border-[rgba(230,57,70,0.26)] hover:text-[#eeeae2]';
};
</script>

<template>
  <section id="rankings" class="bg-[#0d0d12] py-20 px-8">
    <div class="max-w-[1100px] mx-auto">
      <div class="reveal">
        <p class="sec-label">Leaderboard</p>
        <h2 class="sec-title">Live Rankings</h2>
        <p class="sec-desc"><strong class="text-[#e63946]">HT1 = bester Tier.</strong> Punkte werden automatisch berechnet. Klicke auf einen Spieler für sein 3D-Profil.</p>
      </div>

      <div class="reveal">
        <div class="flex items-center justify-between flex-wrap gap-4 mb-7">
          <div class="flex gap-1.5 flex-wrap">
            <button v-for="tab in ['overall', 'sword', 'uhc', 'risiko']" :key="tab" 
              @click="currentTab = tab as any"
              class="font-['DM_Sans'] text-[0.72rem] font-semibold tracking-[0.1em] uppercase py-1.5 px-4 rounded-[6px] border bg-transparent transition-all"
              :class="getTabClass(tab)">
              {{ tab === 'overall' ? 'Gesamt' : tab === 'sword' ? '⚔ Sword' : tab === 'uhc' ? '☢ UHC' : '💣 Risiko' }}
            </button>
          </div>
          <input v-model="searchQuery" type="text" class="bg-[#1a1a21] border border-[rgba(255,255,255,0.06)] rounded-[6px] py-2 px-4 font-['DM_Sans'] text-[0.85rem] text-[#eeeae2] outline-none w-full md:w-[210px] focus:border-[#e63946] transition-colors placeholder:text-[#5a5a6a]" placeholder="🔍 Spieler suchen…">
        </div>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-[rgba(255,255,255,0.06)]">
                <th class="w-12 text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#5a5a6a] p-3 text-left">#</th>
                <th class="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#5a5a6a] p-3 text-left">Spieler</th>
                <th class="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#5a5a6a] p-3 text-left">Punkte</th>
                <th class="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#5a5a6a] p-3 text-left">Sword</th>
                <th class="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#5a5a6a] p-3 text-left">UHC</th>
                <th class="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#5a5a6a] p-3 text-left">Risiko</th>
                <th class="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#5a5a6a] p-3 text-left">Königreich</th>
                <th class="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#5a5a6a] p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, i) in processedPlayers" :key="p.name" @click="emit('openProfile', p.name)" class="border-b border-[rgba(255,255,255,0.03)] transition-colors hover:bg-[rgba(230,57,70,0.05)] cursor-pointer">
                <td class="p-4">
                  <span v-if="i < 3" :class="['text-xl', i === 0 ? 'text-[#ffd700]' : i === 1 ? 'text-[#c0c0c0]' : 'text-[#cd7f32]']">{{ crowns[i] }}</span>
                  <span v-else class="font-['Cinzel'] text-[#5a5a6a] text-[0.78rem]">#{{ i + 1 }}</span>
                </td>
                <td class="p-4">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 shrink-0">
                      <SkinViewer :username="p.name" :width="40" :height="40" />
                    </div>
                    <span class="font-semibold text-[0.92rem] text-white">{{ p.name }}</span>
                  </div>
                </td>
                <td class="p-4 font-['Cinzel'] text-[#e63946] text-[1.05rem] font-bold">{{ calcPts(p) }}</td>
                <td class="p-4"><span v-if="p.sword" :class="['tier', `t-${p.sword}`]">{{ p.sword }}</span><span v-else class="text-[#5a5a6a]">--</span></td>
                <td class="p-4"><span v-if="p.uhc" :class="['tier', `t-${p.uhc}`]">{{ p.uhc }}</span><span v-else class="text-[#5a5a6a]">--</span></td>
                <td class="p-4"><span v-if="p.risiko" :class="['tier', `t-${p.risiko}`]">{{ p.risiko }}</span><span v-else class="text-[#5a5a6a]">--</span></td>
                <td class="p-4 text-[0.7rem] text-[#8a8a9a]">{{ KINGDOMS_MAP[p.kingdom] || '–' }}</td>
                <td class="p-4">
                  <span :class="['status', p.status === 'online' ? 's-on' : 's-off']">
                    ● {{ p.status === 'online' ? 'Online' : 'Offline' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
