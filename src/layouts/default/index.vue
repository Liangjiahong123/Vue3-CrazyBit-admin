<script lang="ts" setup>
import LayoutAside from "./Aside/index.vue";
import LayoutHeader from "./Header/index.vue";
import LayoutContent from "./Content/index.vue";
import { useClassName } from "@/hooks/web/useClassName";

const { prefixCls } = useClassName("layout-default");
</script>

<template>
  <el-container :class="prefixCls">
    <LayoutAside />

    <el-container :class="`${prefixCls}-main`">
      <LayoutHeader />
      <LayoutContent />
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
$prefix-cls: "#{$namespace}-layout-default";

.#{$prefix-cls} {
  background-color: $layout-bg-color;
  @apply w-full min-h-full flex;

  &-main {
    @apply w-full flex flex-col ml-210px;
  }
}
</style>
