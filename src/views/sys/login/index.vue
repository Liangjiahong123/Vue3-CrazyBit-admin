<script setup lang="ts">
import LoginRecommend from "./c-cpns/LoginRecommend.vue";
</script>

<template>
  <div class="login-wrapper relative w-full h-full px-4">
    <div class="container h-full py-8 sm:px-28 flex jc-between">
      <div class="left flex flex-col flex-1">
        <AppLogo />
        <LoginRecommend />
      </div>
      <div class="right flex-1">Right</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-wrapper {
  min-height: 100%;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin-left: -48%;
    z-index: -1;
    @include bg("svg/login-bg.svg", "no-repeat", "100%", "auto 100%");
  }
}
</style>
