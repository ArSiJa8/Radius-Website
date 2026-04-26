<script setup lang="ts">
const videoIds = ['7623509719780543766', '7623779500806950166', '7624171519249272086', '7627436749777653014'];

onMounted(() => {
  if (!document.querySelector('script[src*="tiktok.com/embed"]')) {
    const s = document.createElement('script');
    s.src = 'https://www.tiktok.com/embed.js';
    s.async = true;
    document.body.appendChild(s);
  }
});
</script>

<template>
  <section id="videos" class="bg-[#07070a] py-20 px-8">
    <div class="max-w-[1100px] mx-auto">
      <div class="reveal">
        <div class="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div>
            <p class="sec-label">Media</p>
            <h2 class="sec-title mb-0">Videos & Highlights</h2>
          </div>
          <a href="https://www.tiktok.com/@minecraftradiusrppvp" target="_blank" class="inline-flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.1em] uppercase text-[#e63946] border border-[#e63946]/26 py-1.5 px-4 rounded-[6px] transition-all hover:bg-[#e63946]/10">
            ♪ TikTok folgen ↗
          </a>
        </div>
        <p class="sec-desc">Die besten Clips von unserem TikTok-Kanal.</p>
      </div>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 reveal">
        <div v-for="id in videoIds" :key="id" class="bg-[#131318] border border-[rgba(255,255,255,0.06)] rounded-[10px] overflow-hidden transition-all hover:border-[#e63946]/26 hover:shadow-[0_8px_30px_rgba(230,57,70,0.08)]">
          <blockquote class="tiktok-embed m-0! border-0! block w-full" :cite="`https://www.tiktok.com/@minecraftradiusrppvp/video/${id}`" :data-video-id="id">
            <section></section>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
