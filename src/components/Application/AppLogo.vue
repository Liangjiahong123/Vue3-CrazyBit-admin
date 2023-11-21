<script lang="ts" setup>
import { useClassName } from "@/hooks/web/useClassName";

defineProps({
  showTitle: { type: Boolean, default: true },
  title: { type: String, default: "CrazyBit Admin" }
});

const { prefixCls } = useClassName("app-logo");

function handleGoHome() {}
</script>

<template>
  <div :class="prefixCls" @click="handleGoHome">
    <img src="@svg/crazybit-logo.svg" class="w-48px h-48px" />
    <div :class="`${prefixCls}-title`" v-show="showTitle">
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: "#{$namespace}-app-logo";

.#{$prefix-cls} {
  transition: all 0.2s ease;
  @apply cursor-pointer flex items-center;

  &-title {
    line-height: normal;
    transition: all 0.5s;
    @apply truncate ml-2 font-weight-700 text-16px text-white;
  }
}
</style>
