<script setup lang="ts">
import LoginRecommend from "./components/LoginRecommend.vue";
import PasswordForm from "./components/PasswordForm.vue";
import MobileForm from "./components/MobileForm.vue";
import QrCodeForm from "./components/QrCodeForm.vue";
import ResetPasswordForm from "./components/ResetPasswordForm.vue";
import RegisterForm from "./components/RegisterForm.vue";

import { useClassName } from "@/hooks/web/useClassName";
const { prefixCls } = useClassName("login");
</script>

<template>
  <div :class="prefixCls" class="relative w-full h-full px-4">
    <div class="-enter-x xl:hidden">
      <AppLogo alwaysShowTitle />
    </div>
    <div class="container flex h-full mx-auto py-2 sm:px-10">
      <div class="hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-1/2">
        <AppLogo />
        <LoginRecommend />
      </div>
      <div class="flex flex-col w-1/2 h-full mx-auto xl:h-auto">
        <div
          :class="`${prefixCls}-form`"
          class="w-full m-auto px-5 py-8 rounded-md shadow-md xl:ml-16 xl:w-2/3 xl:p-4 xl:bg-transparent xl:shadow-none"
        >
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

<style lang="scss">
$prefix-cls: "#{$namespace}-login";
$logo-prefix-cls: "#{$namespace}-app-logo";
$dark-bg: #293146;

.#{$prefix-cls} {
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

  .#{$logo-prefix-cls} {
    &-title {
      color: #fff;
      font-size: 16px;
    }
  }

  .container {
    .#{$logo-prefix-cls} {
      &-title {
        color: #fff;
        font-size: 24px;
      }
    }
  }

  @media (max-width: $screen-xl) {
    background-color: $dark-bg;

    .#{$prefix-cls}-form {
      background-color: #fff;
    }
  }
}
</style>
