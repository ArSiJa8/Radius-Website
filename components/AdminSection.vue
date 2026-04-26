<script setup lang="ts">
import { ref } from 'vue';

const { players, rules, teamMembers, calcPts, TIERS, TIER_RANK, RISIKO_MULT, KINGDOMS_MAP } = useData();

const isAdminLoggedIn = ref(false);
const adminUser = ref('');
const adminPass = ref('');
const loginErr = ref(false);

const activePanel = ref('players');

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'Radius';

const doLogin = () => {
  if (adminUser.value === ADMIN_USER && adminPass.value === ADMIN_PASS) {
    isAdminLoggedIn.value = true;
    loginErr.value = false;
  } else {
    loginErr.value = true;
  }
};

const doLogout = () => {
  isAdminLoggedIn.value = false;
  adminUser.value = '';
  adminPass.value = '';
};

/* Player Form */
const pName = ref('');
const pSword = ref<any>('');
const pUhc = ref<any>('');
const pRisiko = ref<any>('');
const pKingdom = ref('');
const pStatus = ref<'online' | 'offline'>('offline');

const savePlayer = () => {
  if (!pName.value) return alert('Name eingeben!');
  
  const newPlayer = {
    name: pName.value,
    sword: pSword.value,
    uhc: pUhc.value,
    risiko: pRisiko.value,
    kingdom: pKingdom.value,
    status: pStatus.value
  };

  const idx = players.value.findIndex(p => p.name.toLowerCase() === pName.value.toLowerCase());
  if (idx >= 0) {
    players.value[idx] = newPlayer;
  } else {
    players.value.push(newPlayer);
  }
  
  pName.value = '';
};

const removePlayer = (name: string) => {
  if (confirm(`Spieler ${name} entfernen?`)) {
    players.value = players.value.filter(p => p.name !== name);
  }
};
</script>

<template>
  <section id="admin" class="bg-[#07070a] py-20 px-8">
    <div class="max-w-[1100px] mx-auto">
      <div class="reveal max-w-[400px] mx-auto text-center" v-if="!isAdminLoggedIn">
        <p class="sec-label">Verwaltung</p>
        <h2 class="sec-title">Admin Login</h2>
        <div class="bg-[#131318] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-8 mt-6">
          <input v-model="adminUser" type="text" class="w-full bg-[#222229] border border-[rgba(255,255,255,0.06)] rounded-[6px] p-2.5 text-white outline-none mb-4 focus:border-[#e63946]" placeholder="Benutzername">
          <input v-model="adminPass" type="password" class="w-full bg-[#222229] border border-[rgba(255,255,255,0.06)] rounded-[6px] p-2.5 text-white outline-none mb-6 focus:border-[#e63946]" placeholder="Passwort" @keydown.enter="doLogin">
          <button @click="doLogin" class="btn-red w-full justify-center">Einloggen</button>
          <p v-if="loginErr" class="text-[#e63946] text-[0.8rem] mt-3">Ungültige Zugangsdaten.</p>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-[205px_1fr] gap-7 reveal">
        <aside class="bg-[#131318] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-3.5 h-fit sticky top-[70px]">
          <div class="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[#5a5a6a] px-3 mb-1.5">Verwaltung</div>
          <div @click="activePanel = 'players'" class="flex items-center gap-2 p-2 rounded-[6px] cursor-pointer text-[0.83rem] transition-all" :class="activePanel === 'players' ? 'bg-[rgba(230,57,70,0.15)] text-[#e63946]' : 'text-[#8a8a9a] hover:bg-white/5'">👤 Spieler</div>
          <div @click="activePanel = 'rules'" class="flex items-center gap-2 p-2 rounded-[6px] cursor-pointer text-[0.83rem] transition-all" :class="activePanel === 'rules' ? 'bg-[rgba(230,57,70,0.15)] text-[#e63946]' : 'text-[#8a8a9a] hover:bg-white/5'">📋 Regelwerk</div>
          <div class="h-px bg-[rgba(255,255,255,0.06)] my-2.5 mx-3"></div>
          <div @click="doLogout" class="flex items-center gap-2 p-2 rounded-[6px] cursor-pointer text-[0.83rem] text-[#e63946] hover:bg-[rgba(230,57,70,0.1)] transition-all">↩ Ausloggen</div>
        </aside>

        <div>
           <div v-if="activePanel === 'players'">
              <div class="font-['Cinzel'] text-[1.15rem] text-white mb-5">Spieler verwalten</div>
              <div class="bg-[#131318] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-5 mb-4">
                <div class="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-[#5a5a6a] mb-3.5">Hinzufügen / Bearbeiten</div>
                <input v-model="pName" type="text" class="w-full bg-[#222229] border border-[rgba(255,255,255,0.06)] rounded-[6px] p-2 text-white outline-none mb-3" placeholder="Minecraft IGN">
                <div class="grid grid-cols-3 gap-2.5 mb-3">
                  <select v-model="pSword" class="bg-[#222229] border border-[rgba(255,255,255,0.06)] rounded-[6px] p-2 text-white outline-none">
                    <option value="">⚔ Sword</option>
                    <option v-for="t in TIERS" :key="t" :value="t">{{ t }}</option>
                  </select>
                  <select v-model="pUhc" class="bg-[#222229] border border-[rgba(255,255,255,0.06)] rounded-[6px] p-2 text-white outline-none">
                    <option value="">☢ UHC</option>
                    <option v-for="t in TIERS" :key="t" :value="t">{{ t }}</option>
                  </select>
                  <select v-model="pRisiko" class="bg-[#222229] border border-[rgba(255,255,255,0.06)] rounded-[6px] p-2 text-white outline-none">
                    <option value="">💣 Risiko</option>
                    <option v-for="t in TIERS" :key="t" :value="t">{{ t }}</option>
                  </select>
                </div>
                <div class="grid grid-cols-2 gap-2.5 mb-4">
                   <select v-model="pKingdom" class="bg-[#222229] border border-[rgba(255,255,255,0.06)] rounded-[6px] p-2 text-white outline-none">
                    <option value="">👑 Königreich</option>
                    <option v-for="(name, id) in KINGDOMS_MAP" :key="id" :value="id">{{ name }}</option>
                  </select>
                  <select v-model="pStatus" class="bg-[#222229] border border-[rgba(255,255,255,0.06)] rounded-[6px] p-2 text-white outline-none">
                    <option value="offline">● Offline</option>
                    <option value="online">● Online</option>
                  </select>
                </div>
                <button @click="savePlayer" class="bg-[#e63946] text-white font-bold uppercase text-[0.76rem] tracking-[0.1em] py-2 px-4 rounded-[6px] hover:bg-[#c1121f] transition-all">+ Spieler speichern</button>
              </div>

              <div class="bg-[#131318] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-5">
                <div class="text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-[#5a5a6a] mb-3.5">Spielerliste ({{ players.length }})</div>
                <div v-for="p in players" :key="p.name" class="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
                  <div>
                    <div class="text-[0.86rem] font-semibold text-white">{{ p.name }} <span class="text-[0.68rem] text-[#5a5a6a]">{{ KINGDOMS_MAP[p.kingdom] }}</span></div>
                    <div class="text-[0.7rem] text-[#8a8a9a]">{{ p.sword || '-' }} / {{ p.uhc || '-' }} / {{ p.risiko || '-' }} · {{ calcPts(p) }} pts</div>
                  </div>
                  <div class="flex items-center gap-3">
                    <span :class="['status', p.status === 'online' ? 's-on' : 's-off']">● {{ p.status === 'online' ? 'Online' : 'Offline' }}</span>
                    <button @click="removePlayer(p.name)" class="text-[#e63946] hover:bg-[#e63946]/10 p-1.5 rounded-md transition-all">✕</button>
                  </div>
                </div>
              </div>
           </div>

           <div v-if="activePanel === 'rules'">
              <div class="font-['Cinzel'] text-[1.15rem] text-white mb-5">Regelwerk verwalten</div>
              <p class="text-[#8a8a9a] text-sm italic">Coming soon: Volles Regel-Management.</p>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>
