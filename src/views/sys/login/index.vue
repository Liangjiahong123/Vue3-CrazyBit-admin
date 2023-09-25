<script setup lang="ts"></script>

<template>
  <div class="login-wrapper relative w-full h-full px-4">
    <div class="container flex">Login</div>
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
    background-image: url("@/assets/svg/login-bg.svg");
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: auto 100%;
    z-index: -1;
  }
}
</style>
