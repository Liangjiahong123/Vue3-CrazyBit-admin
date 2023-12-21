<script lang="ts" setup>
import LayoutMenu from "../Menu/index.vue";
import { useClassName } from "@/hooks/web/useClassName";

const { prefixCls } = useClassName("layout-aside");
</script>

<template>
  <el-aside width="210px" :class="prefixCls">
    <LayoutMenu />
  </el-aside>
</template>

<style lang="scss">
$prefix-cls: "#{$namespace}-layout-aside";

.#{$prefix-cls} {
  background-color: $layout-menu-hover-color;
  @apply fixed top-0 left-0 h-full;
}
</style>
