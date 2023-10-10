<script lang="ts" setup>
const props = defineProps({
  tag: { type: String as PropType<"canvas" | "img">, default: "canvas" }
});

const qrCodeRef = ref<HTMLCanvasElement | HTMLImageElement | null>(null);

onMounted(() => {
  try {
    const { tag } = props;
    const qrCodeEl = unref(qrCodeRef);

    if (!qrCodeEl) return;

    if (tag === "canvas") {
    }
  } catch (err) {
    console.log(err);
  }
});
</script>

<template>
  <div>
    <component :is="tag" ref="qrCodeRef"></component>
  </div>
</template>

<style lang="scss" scoped></style>
