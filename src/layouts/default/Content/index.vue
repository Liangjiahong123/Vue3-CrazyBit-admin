<script lang="ts" setup>
import { useClassName } from "@/hooks/web/useClassName";

const { prefixCls } = useClassName("layout-content");
</script>

<template>
  <el-main :class="prefixCls">
    <router-view />
  </el-main>
</template>

<style lang="scss" scoped>
$prefix-cls: "#{$namespace}-layout-content";

.#{$prefix-cls} {
  background-color: $layout-content-bg-color;
  box-shadow: $layout-box-shadow;
  @apply p-4 m-4 ml-0 rounded-lg;
}
</style>
