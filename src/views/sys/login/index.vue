<script setup lang="ts">
import LoginRecommend from "./components/LoginRecommend.vue";
import PasswordForm from "./components/PasswordForm.vue";
import MobileForm from "./components/MobileForm.vue";
import QrCodeForm from "./components/QrCodeForm.vue";
import ResetPasswordForm from "./components/ResetPasswordForm.vue";
import RegisterForm from "./components/RegisterForm.vue";
</script>

<template>
  <div class="login-wrapper relative w-full h-full px-4">
    <div class="container flex h-full mx-auto py-2 sm:px-10">
      <div class="left flex flex-col w-1/2 pl-4 mr-4">
        <AppLogo />
        <LoginRecommend />
      </div>
      <div class="right flex flex-col w-1/2 h-full">
        <div class="login-form w-full my-auto mx-auto xl:ml-16 xl:w-3/4 xl:p-4 xl:bg-transparent">
          <PasswordForm />
          <MobileForm />
          <QrCodeForm />
          <ResetPasswordForm />
          <RegisterForm />
        </div>
      </div>
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
