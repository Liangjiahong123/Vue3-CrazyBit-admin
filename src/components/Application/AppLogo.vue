<script lang="ts" setup>
defineProps({
  showTitle: { type: Boolean, default: true },
  title: { type: String, default: "CrazyBit Admin" }
});
</script>

<template>
  <div class="cbit-app-logo flex items-center">
    <img src="@svg/logo.svg" class="w-48px h-48px" />
    <div class="cbit-app-logo-title truncate ml-2" v-show="showTitle">
      {{ title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
$prefix-cls: "cbit-app-logo";

.#{$prefix-cls} {
  &-title {
    color: #fff;
    font-weight: bold;
    font-size: 24px;
  }
}
</style>
