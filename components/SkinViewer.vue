<script setup lang="ts">
import * as skinview3d from 'skinview3d';
import { onMounted, onUnmounted, ref, watch } from 'vue';

const props = defineProps<{
  username: string;
  width: number;
  height: number;
  spin?: boolean;
}>();

const canvasRef = ref<HTMLCanvasElement | null>(null);
let viewer: skinview3d.SkinViewer | null = null;

const initViewer = () => {
  if (!canvasRef.value) return;

  if (viewer) {
    viewer.dispose();
  }

  viewer = new skinview3d.SkinViewer({
    canvas: canvasRef.value,
    width: props.width,
    height: props.height,
    skin: `https://minotar.net/skin/${props.username}`
  });

  viewer.camera.rotation.x = -0.22;
  viewer.camera.rotation.y = 0.38;
  viewer.camera.position.z = 34;
  viewer.controls.enableZoom = false;
  viewer.controls.enablePan = false;

  if (props.spin) {
    viewer.autoRotate = true;
    viewer.autoRotateSpeed = 1.0;
  }

  viewer.animation = new skinview3d.IdleAnimation();
};

onMounted(() => {
  initViewer();
});

watch(() => props.username, () => {
  initViewer();
});

onUnmounted(() => {
  if (viewer) {
    viewer.dispose();
  }
});
</script>

<template>
  <canvas ref="canvasRef" class="image-pixelated"></canvas>
</template>

<style scoped>
.image-pixelated {
  image-rendering: pixelated;
  display: block;
}
</style>
