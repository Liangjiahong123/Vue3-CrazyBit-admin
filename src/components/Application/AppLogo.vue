<script lang="ts" setup>
import { useClassName } from "@/hooks/web/useClassName";

defineProps({
  showTitle: { type: Boolean, default: true },
  title: { type: String, default: "CrazyBit Admin" },
  alwaysShowTitle: { type: Boolean, default: false }
});

const { prefixCls } = useClassName("app-logo");

const getTitleCls = computed(() => `${prefixCls}-title`);
</script>

<template>
  <div :class="prefixCls" class="flex items-center">
    <img
      src="@svg/crazybit-logo.svg"
      alt="CrazyBit Admin"
      class="w-32px h-32px xl:(w-48px h-48px)"
    />
    <div :class="getTitleCls" v-show="showTitle">
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: "#{$namespace}-app-logo";

.#{$prefix-cls} {
  transition: all 0.2s ease;
  @apply pl-4 cursor-pointer h-80px;

  &-title {
    line-height: normal;
    transition: all 0.5s;
    @apply truncate ml-2 font-weight-700 text-16px;
  }
}
</style>
