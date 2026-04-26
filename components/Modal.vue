<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
  title: string;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 bg-black/82 z-[1000] flex items-center justify-center p-6 backdrop-blur-md" @click.self="emit('close')">
      <div class="bg-[#131318] border border-[rgba(255,255,255,0.1)] rounded-[10px] w-full max-w-[520px] max-h-[88vh] overflow-hidden flex flex-col animate-[slideUp_0.22s_ease]">
        <div class="flex items-center justify-between p-[1.3rem_1.5rem] border-b border-[rgba(255,255,255,0.06)]">
          <span class="font-['Cinzel'] text-base text-white">{{ title }}</span>
          <button @click="emit('close')" class="w-7 h-7 rounded-[5px] border border-[rgba(255,255,255,0.06)] bg-transparent text-[#8a8a9a] flex items-center justify-center transition-all hover:bg-[#e63946] hover:border-[#e63946] hover:text-white">✕</button>
        </div>
        <div class="p-[1.3rem_1.5rem] overflow-y-auto">
          <slot />
        </div>
      </div>
    </div>
  </Teleport>
</template>
