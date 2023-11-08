<script setup lang="ts">
import { useClassName } from "@/hooks/web/useClassName";
import LoginRecommend from "./components/LoginRecommend.vue";
import PasswordForm from "./components/PasswordForm.vue";
import MobileForm from "./components/MobileForm.vue";
import QrCodeForm from "./components/QrCodeForm.vue";
import ResetPasswordForm from "./components/ResetPasswordForm.vue";
import RegisterForm from "./components/RegisterForm.vue";

const { prefixCls } = useClassName("login");
</script>

<template>
  <div :class="prefixCls">
    <div class="align-center absolute top-4 right-4">
      <AppThemeToggle class="enter-x mr-2" />
      <AppLocaleToggle class="enter-x" />
    </div>

    <div class="-enter-x xl:hidden">
      <AppLogo alwaysShowTitle />
    </div>

    <div class="container flex">
      <div class="hidden min-h-full pl-4 mr-4 xl:(flex flex-col w-1/2)">
        <AppLogo class="-enter-x" />
        <LoginRecommend />
      </div>
      <div class="flex flex-col h-full mx-auto xl:(h-auto w-1/2)">
        <div :class="`${prefixCls}-form`" class="enter-x">
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
  @apply w-full h-full px-4 min-h-full overflow-hidden relative;

  &::before {
    @apply absolute top-0 -left-[48%] w-full h-full bg-no-repeat;

    background-position: 100%;
    background-size: auto 100%;
    background-image: url("@/assets/svg/login-bg.svg");
    content: "";
  }

  .#{$logo-prefix-cls} {
    &-title {
      font-size: 16px;
      color: #fff;
    }
  }

  .container {
    @apply h-full mx-auto py-2 sm:px-10;

    .#{$logo-prefix-cls}-title {
      font-size: 24px;
      color: #fff;
    }

    .#{$prefix-cls}-form {
      @apply min-w-360px w-full m-auto px-5 py-8 rounded-md shadow-md  xl:(ml-16 w-auto p-4 bg-transparent shadow-none);
    }
  }

  @media (max-width: $screen-lg) {
    background-color: $dark-bg;

    &::before {
      display: none;
    }

    .#{$prefix-cls}-form {
      background-color: #fff;
    }
  }
}
</style>
