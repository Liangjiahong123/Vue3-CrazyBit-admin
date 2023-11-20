<script lang="ts" setup>
import { useClassName } from "@/hooks/web/useClassName";

const { prefixCls } = useClassName("layout-header");
</script>

<template>
  <el-header height="80px" :class="prefixCls">Header</el-header>
</template>

<style lang="scss" scoped>
$prefix-cls: "#{$namespace}-layout-header";
.#{$prefix-cls} {
  background-color: $layout-header-bg-color;
  @apply w-full rounded-lg shadow-md;
}
</style>
