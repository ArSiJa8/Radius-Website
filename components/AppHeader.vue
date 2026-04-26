<script setup lang="ts">
const navLinks = [
  { name: 'Saison', href: '#season' },
  { name: 'Rankings', href: '#rankings' },
  { name: 'Königreiche', href: '#kingdoms' },
  { name: 'Kits', href: '#kits' },
  { name: 'Tiers', href: '#tiers' },
  { name: 'Regelwerk', href: '#rules' },
  { name: 'Videos', href: '#videos' },
  { name: 'Team', href: '#team' },
  { name: 'Kontakt', href: '#contact' },
];

const emit = defineEmits(['showAdmin']);
const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

const closeNav = () => {
  isNavOpen.value = false;
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-[900] h-[60px] flex items-center justify-between px-8 bg-[#07070a]/92 backdrop-blur-3xl border-b border-[rgba(255,255,255,0.06)]">
    <a href="#hero" class="flex items-center gap-2.5 font-['Cinzel_Decorative'] text-base tracking-[0.14em] text-[#e63946]">
      <div class="w-8 h-8 bg-[#e63946] rounded-[7px] flex items-center justify-center text-[0.95rem] shrink-0 shadow-[0_0_16px_rgba(230,57,70,0.3)]">⚔</div>
      RADIUS
    </a>
    
    <ul class="hidden md:flex items-center gap-0.5 list-none">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href" class="text-[0.72rem] font-medium tracking-[0.09em] uppercase text-[#8a8a9a] py-1.5 px-3 rounded-[6px] transition-colors hover:text-white hover:bg-white/5">
          {{ link.name }}
        </a>
      </li>
      <li>
        <a href="#" @click.prevent="emit('showAdmin')" class="text-[0.72rem] font-medium tracking-[0.09em] uppercase py-1.5 px-3 rounded-[6px] transition-colors bg-[#e63946] text-white shadow-[0_0_12px_rgba(230,57,70,0.15)] hover:bg-[#c1121f]">
          Admin
        </a>
      </li>
    </ul>

    <!-- Mobile Nav -->
    <ul v-if="isNavOpen" class="md:hidden flex flex-col absolute top-[60px] left-0 right-0 bg-[#0d0d12] p-4 border-b border-[rgba(255,255,255,0.06)] z-[800]">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href" @click="closeNav" class="block text-[0.72rem] font-medium tracking-[0.09em] uppercase text-[#8a8a9a] py-2 px-3 rounded-[6px] hover:text-white hover:bg-white/5">
          {{ link.name }}
        </a>
      </li>
    </ul>

    <div class="md:hidden flex flex-col gap-1.5 cursor-pointer p-1" @click="toggleNav">
      <span class="block w-[21px] h-[1.5px] bg-[#8a8a9a] rounded-sm transition-all" :class="{'rotate-45 translate-y-[6.5px]': isNavOpen}"></span>
      <span class="block w-[21px] h-[1.5px] bg-[#8a8a9a] rounded-sm transition-all" :class="{'opacity-0': isNavOpen}"></span>
      <span class="block w-[21px] h-[1.5px] bg-[#8a8a9a] rounded-sm transition-all" :class="{'-rotate-45 -translate-y-[6.5px]': isNavOpen}"></span>
    </div>
  </nav>
</template>
