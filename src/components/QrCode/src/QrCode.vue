<script lang="ts" setup>
import { customToCanvas } from "./toCanvas";

const props = defineProps({
  tag: { type: String as PropType<"canvas" | "img">, default: "canvas" },
  value: { type: [String, Array], default: null },
  width: { type: Number, default: 200 }
});
const emits = defineEmits(["error"]);

const qrCodeRef = ref<HTMLCanvasElement | HTMLImageElement | null>(null);
const createQrcode = async () => {
  try {
    const { tag, value, width } = props;
    const renderValue = String(value);
    const qrcodeEl = unref(qrCodeRef);

    if (!qrcodeEl) return;

    if (tag === "canvas") {
      await customToCanvas({
        canvas: qrcodeEl,
        content: renderValue,
        width
      });
    }

    if (tag === "img") {
    }
  } catch (error) {
    emits("error", error);
  }
};
onMounted(createQrcode);
watch(props, createQrcode, { deep: true });
</script>

<template>
  <div>
    <component :is="tag" ref="qrCodeRef"></component>
  </div>
</template>
