<script lang="ts" setup>
import { useClassName } from "@/hooks/web/useClassName";

const { prefixCls } = useClassName("layout-aside");
</script>

<template>
  <el-aside width="210px" :class="prefixCls">
    <div class="py-10px pl-10px">
      <AppLogo />
    </div>
  </el-aside>
</template>

<style lang="scss">
$prefix-cls: "#{$namespace}-layout-aside";
$logo-prefix-cls: "#{$namespace}-app-logo";

.#{$prefix-cls} {
  @apply fixed top-0 left-0 h-full;

  .#{$logo-prefix-cls}-title {
    @apply text-black;
  }
}
</style>
