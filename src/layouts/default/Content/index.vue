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
  @apply p-4 rounded-lg;
}
</style>
