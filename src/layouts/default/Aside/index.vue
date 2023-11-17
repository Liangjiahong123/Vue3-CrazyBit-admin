<script lang="ts" setup>
import { useClassName } from "@/hooks/web/useClassName";

const { prefixCls } = useClassName("layout-aside");
</script>

<template>
  <el-aside width="210px" :class="prefixCls">aside</el-aside>
</template>

<style lang="scss" scoped>
$prefix-cls: "#{$namespace}-layout-aside";

.#{$prefix-cls} {
  @apply fixed top-0 left-0 h-full;
}
</style>
