<script lang="ts" setup>
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum, useFormRules } from "../useLogin";
import { useI18n } from "@/hooks/web/useI18n";

const { getLoginState, setLoginState } = useLoginState();
const { getFormRules } = useFormRules();
const { t } = useI18n("sys.login");

const showMobileLogin = computed(() => unref(getLoginState) === LoginStateEnum.MOBILE);

const formData = reactive({
  mobile: "",
  authCode: ""
});
</script>

<template>
  <main class="mobile-form" v-if="showMobileLogin">
    <LoginFormTitle class="enter-x" />
    <el-form :model="formData" :rules="getFormRules" class="enter-x p-4">
      <el-form-item prop="mobile" class="enter-x">
        <el-input
          v-model="formData.mobile"
          maxlength="11"
          size="large"
          :placeholder="t('mobilePlaceholder')"
        />
      </el-form-item>
      <el-form-item prop="authCode" class="enter-x">
        <el-input
          v-model="formData.authCode"
          size="large"
          :placeholder="t('authCodePlaceholder')"
        />

        <el-button size="large" class="ml-4">
          {{ t("authCodeButton") }}
        </el-button>
      </el-form-item>

      <el-button type="primary" size="large" class="enter-x w-full !rounded-lg mt-6">
        <span class="!text-16px !tracking-4px">{{ t("loginButton") }}</span>
      </el-button>
      <el-button
        size="large"
        class="enter-x w-full !rounded-lg mt-6"
        plain
        @click="setLoginState(LoginStateEnum.LOGIN)"
      >
        <span class="!text-16px !tracking-4px">{{ t("backButton") }}</span>
      </el-button>
    </el-form>
  </main>
</template>

<style lang="scss" scoped>
:deep(.el-form-item__content) {
  flex-wrap: nowrap;
}
</style>
