<script lang="ts" setup>
import { createAppProvider } from "./useAppProvider";
const props = defineProps({
  prefixCls: { type: String, default: "crazybit" }
});

const { prefixCls } = toRefs(props);
createAppProvider({ prefixCls });
</script>

<template>
  <slot></slot>
</template>

<style lang="scss" scoped></style>
