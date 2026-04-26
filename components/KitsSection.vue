<template>
  <section id="kits" class="bg-[#0d0d12] py-20 px-8">
    <div class="max-w-[1100px] mx-auto">
      <div class="reveal">
        <p class="sec-label">PvP Modi</p>
        <h2 class="sec-title">Spielmodi & Kits</h2>
        <p class="sec-desc">Drei einzigartige Kampfmodi. Risiko gibt 1.3× mehr Punkte – das meiste im ganzen System.</p>
      </div>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[1.3rem] reveal">
        <!-- Sword -->
        <div class="bg-[#131318] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[1.7rem] flex flex-col gap-4 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[rgba(230,57,70,0.26)] hover:shadow-2xl">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-[8px] bg-[rgba(230,57,70,0.15)] border border-[rgba(230,57,70,0.26)] flex items-center justify-center text-[1.4rem] shrink-0">⚔</div>
            <div>
              <div class="font-['Cinzel'] text-base text-white">Sword</div>
              <div class="text-[0.68rem] text-[#e63946] tracking-[0.14em] uppercase mt-[2px]">Klassisches PvP</div>
            </div>
          </div>
          <div class="inline-flex items-center gap-1.5 bg-[rgba(230,57,70,0.12)] border border-[rgba(230,57,70,0.26)] rounded-[4px] px-2.5 py-1 text-[0.7rem] font-semibold text-[#e63946]">
            HT1 = 1000 pts &nbsp;·&nbsp; 1.0× Multiplikator
          </div>
          <p class="text-[0.86rem] text-[#8a8a9a] leading-[1.68] font-light">Der Klassiker. Nur reines Können entscheidet. Kein Spammen – Skill gegen Skill.</p>
          <ul class="list-none flex flex-col gap-1 text-[#eeeae2] text-[0.82rem]">
            <li class="flex items-start gap-2 py-1 border-b border-white/5 last:border-0"><span class="text-[#e63946]">▸</span> Diamant Schwert (Sharpness II)</li>
            <li class="flex items-start gap-2 py-1 border-b border-white/5 last:border-0"><span class="text-[#e63946]">▸</span> Diamant Rüstung (Protection II)</li>
            <li class="flex items-start gap-2 py-1 border-b border-white/5 last:border-0"><span class="text-[#e63946]">▸</span> Golden Apple × 2</li>
          </ul>
        </div>
        
        <!-- UHC -->
        <div class="bg-[#131318] border border-[rgba(255,255,255,0.06)] rounded-[10px] p-[1.7rem] flex flex-col gap-4 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[rgba(230,57,70,0.26)] hover:shadow-2xl">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-[8px] bg-[rgba(230,57,70,0.15)] border border-[rgba(230,57,70,0.26)] flex items-center justify-center text-[1.4rem] shrink-0">☢</div>
            <div>
              <div class="font-['Cinzel'] text-base text-white">UHC</div>
              <div class="text-[0.68rem] text-[#e63946] tracking-[0.14em] uppercase mt-[2px]">Ultra Hardcore</div>
            </div>
          </div>
          <div class="inline-flex items-center gap-1.5 bg-[rgba(230,57,70,0.12)] border border-[rgba(230,57,70,0.26)] rounded-[4px] px-2.5 py-1 text-[0.7rem] font-semibold text-[#e63946]">
            HT1 = 1000 pts &nbsp;·&nbsp; 1.0× Multiplikator
          </div>
          <p class="text-[0.86rem] text-[#8a8a9a] leading-[1.68] font-light">Kein natürliches Heilen. Jeder Schaden zählt. Potion-Management entscheidet.</p>
          <ul class="list-none flex flex-col gap-1 text-[#eeeae2] text-[0.82rem]">
            <li class="flex items-start gap-2 py-1 border-b border-white/5 last:border-0"><span class="text-[#e63946]">▸</span> Diamant Rüstung (Prot III)</li>
            <li class="flex items-start gap-2 py-1 border-b border-white/5 last:border-0"><span class="text-[#e63946]">▸</span> Golden Apples × 2</li>
            <li class="flex items-start gap-2 py-1 border-b border-white/5 last:border-0"><span class="text-[#e63946]">▸</span> Water & Lava Buckets</li>
          </ul>
        </div>

        <!-- Risiko -->
        <div class="bg-[#131318] border border-[#e63946]/26 rounded-[10px] p-[1.7rem] flex flex-col gap-4 relative overflow-hidden transition-all hover:-translate-y-1 hover:border-[#e63946] hover:shadow-[0_14px_46px_rgba(230,57,70,0.07)]">
          <div class="absolute top-3 right-3 bg-[#e63946] text-white text-[0.58rem] font-bold tracking-[0.1em] uppercase px-2 py-1 rounded-[3px]">MEISTE PUNKTE</div>
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-[8px] bg-[rgba(230,57,70,0.15)] border border-[#e63946]/26 flex items-center justify-center text-[1.4rem] shrink-0">💣</div>
            <div>
              <div class="font-['Cinzel'] text-base text-white">Risiko</div>
              <div class="text-[0.68rem] text-[#e63946] tracking-[0.14em] uppercase mt-[2px]">High Stakes</div>
            </div>
          </div>
           <div class="inline-flex items-center gap-1.5 bg-[rgba(230,57,70,0.2)] border border-[#e63946] rounded-[4px] px-2.5 py-1 text-[0.7rem] font-semibold text-[#e63946]">
            HT1 = 1300 pts &nbsp;·&nbsp; 1.3× Multiplikator
          </div>
          <p class="text-[0.86rem] text-[#8a8a9a] leading-[1.68] font-light">Wer stirbt verliert Punkte, wer gewinnt steigt auf. Alles oder nichts. <strong class="text-[#e63946]">30% mehr Punkte.</strong></p>
          <ul class="list-none flex flex-col gap-1 text-[#eeeae2] text-[0.82rem]">
            <li class="flex items-start gap-2 py-1 border-b border-white/5 last:border-0"><span class="text-[#e63946]">▸</span> Zufälliges Equipment-Set</li>
            <li class="flex items-start gap-2 py-1 border-b border-white/5 last:border-0"><span class="text-[#e63946]">▸</span> ELO-basiertes Risiko-System</li>
            <li class="flex items-start gap-2 py-1 border-b border-white/5 last:border-0"><span class="text-[#e63946]">▸</span> Saisonale Belohnungen</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
