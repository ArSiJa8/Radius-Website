<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Player } from '~/types';

const { players, KINGDOMS_MAP, calcPts } = useData();

// Modal State
const isProfileModalOpen = ref(false);
const selectedPlayer = ref<Player | null>(null);

const isKingdomModalOpen = ref(false);
const selectedKingdomId = ref('');

const openProfile = (name: string) => {
  const p = players.value.find(x => x.name === name);
  if (p) {
    selectedPlayer.value = p;
    isProfileModalOpen.value = true;
  }
};

const openKingdom = (id: string) => {
  selectedKingdomId.value = id;
  isKingdomModalOpen.value = true;
};

// Admin visibility (scroll to)
const showAdminPanel = () => {
  const adminSec = document.getElementById('admin');
  adminSec?.scrollIntoView({ behavior: 'smooth' });
};

// Intersection Observer for Reveal effects
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  }, { threshold: 0.07 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

const kingdomPlayers = computed(() => {
  if (!selectedKingdomId.value) return [];
  return players.value
    .filter(p => p.kingdom === selectedKingdomId.value)
    .sort((a, b) => calcPts(b) - calcPts(a));
});
</script>

<template>
  <div class="bg-[#07070a] min-h-screen text-[#eeeae2] font-['DM_Sans']">
    <AppHeader @show-admin="showAdminPanel" />
    
    <HeroSection />
    
    <div class="divider"></div>
    
    <SeasonSection />
    
    <div class="divider"></div>
    
    <RankingsSection @open-profile="openProfile" />
    
    <div class="divider"></div>
    
    <KingdomsSection @open-kingdom="openKingdom" />
    
    <div class="divider"></div>
    
    <KitsSection />
    
    <div class="divider"></div>
    
    <TiersSection />
    
    <div class="divider"></div>
    
    <RulesSection />
    
    <div class="divider"></div>
    
    <VideosSection />
    
    <div class="divider"></div>
    
    <TeamSection />
    
    <div class="divider"></div>
    
    <AdminSection />
    
    <AppFooter />

    <!-- Modals -->
    <Modal :is-open="isProfileModalOpen" :title="'⚔ ' + (selectedPlayer?.name || '')" @close="isProfileModalOpen = false">
      <div v-if="selectedPlayer">
        <div class="flex justify-center mb-5">
           <div class="w-[90px] h-[120px]">
             <SkinViewer :username="selectedPlayer.name" :width="90" :height="120" spin />
           </div>
        </div>
        <div class="grid grid-cols-3 gap-3 mb-5">
          <div class="bg-[#1a1a21] p-3 rounded-[6px] text-center">
            <div class="font-['Cinzel'] text-[#e63946] text-[1.1rem] leading-none">{{ calcPts(selectedPlayer) }}</div>
            <div class="text-[0.62rem] text-[#5a5a6a] tracking-[0.1em] uppercase mt-1">Gesamtpunkte</div>
          </div>
          <div class="bg-[#1a1a21] p-3 rounded-[6px] text-center">
            <div class="font-['Cinzel'] text-[#e63946] text-[0.82rem] leading-none">{{ KINGDOMS_MAP[selectedPlayer.kingdom] || '–' }}</div>
            <div class="text-[0.62rem] text-[#5a5a6a] tracking-[0.1em] uppercase mt-1">Königreich</div>
          </div>
          <div class="bg-[#1a1a21] p-3 rounded-[6px] text-center">
             <div class="font-['Cinzel'] text-[0.9rem] leading-none" :class="selectedPlayer.status === 'online' ? 'text-[#38bd89]' : 'text-[#5a5a6a]'">
               {{ selectedPlayer.status === 'online' ? 'Online' : 'Offline' }}
             </div>
             <div class="text-[0.62rem] text-[#5a5a6a] tracking-[0.1em] uppercase mt-1">Status</div>
          </div>
        </div>
        <div class="space-y-1">
          <div v-for="kit in ['sword', 'uhc', 'risiko']" :key="kit" class="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
            <span class="text-[0.82rem] text-[#8a8a9a] uppercase font-bold">{{ kit }}</span>
            <div class="flex items-center gap-2">
              <span v-if="selectedPlayer[kit as keyof Player]" :class="['tier', `t-${selectedPlayer[kit as keyof Player]}`]">{{ selectedPlayer[kit as keyof Player] }}</span>
              <span v-else class="text-[#5a5a6a]">--</span>
            </div>
          </div>
        </div>
      </div>
    </Modal>

    <Modal :is-open="isKingdomModalOpen" :title="'Spieler in ' + (KINGDOMS_MAP[selectedKingdomId] || '')" @close="isKingdomModalOpen = false">
      <div v-if="kingdomPlayers.length">
        <div v-for="p in kingdomPlayers" :key="p.name" @click="openProfile(p.name)" class="flex items-center justify-between p-2.5 border-b border-white/5 last:border-0 hover:bg-white/5 cursor-pointer rounded-md transition-all">
          <div class="flex items-center gap-3">
             <div class="w-10 h-10">
               <SkinViewer :username="p.name" :width="40" :height="40" />
             </div>
             <div>
               <div class="text-[0.86rem] font-semibold text-white">{{ p.name }}</div>
               <div class="text-[0.7rem] text-[#5a5a6a]">{{ p.sword || '-' }} / {{ p.uhc || '-' }} / {{ p.risiko || '-' }}</div>
             </div>
          </div>
          <span class="font-['Cinzel'] text-[#e63946] text-[0.88rem]">{{ calcPts(p) }} pts</span>
        </div>
      </div>
      <div v-else class="text-center py-10 text-[#5a5a6a] text-sm">
        Noch keine Spieler in diesem Königreich.
      </div>
    </Modal>
  </div>
</template>
