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
  <div :class="prefixCls" class="flex items-center pl-4 cursor-pointer">
    <img src="@svg/logo.svg" class="w-32px h-32px xl:w-48px xl:h-48px" />
    <div :class="getTitleCls" class="truncate ml-2" v-show="showTitle">
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: "#{$namespace}-app-logo";

.#{$prefix-cls} {
  height: 80px;
  transition: all 0.2s ease;

  &-title {
    font-weight: 700;
    font-size: 16px;
    line-height: normal;
    transition: all 0.5s;
  }
}
</style>
