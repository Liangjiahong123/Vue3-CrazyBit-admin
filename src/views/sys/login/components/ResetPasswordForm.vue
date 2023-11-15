<script lang="ts" setup>
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum, useFormRules } from "../useLogin";
import { useI18n } from "@/hooks/web/useI18n";

const { getLoginState, setLoginState } = useLoginState();
const { t } = useI18n();

const showResetPwd = computed(() => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD);

const formData = reactive({
  account: "",
  mobile: "",
  code: ""
});

const { getFormRules } = useFormRules(formData);
</script>

<template>
  <main class="reset-pwd-form" v-if="showResetPwd">
    <LoginFormTitle class="enter-x" />
    <el-form :model="formData" :rules="getFormRules" class="enter-x p-4">
      <el-form-item prop="account" class="enter-x">
        <el-input
          size="large"
          :placeholder="t('sys.login.accountPlaceholder')"
          v-model="formData.account"
        />
      </el-form-item>
      <el-form-item prop="mobile" class="enter-x">
        <el-input
          size="large"
          :placeholder="t('sys.login.mobilePlaceholder')"
          v-model="formData.mobile"
        />
      </el-form-item>
      <el-form-item prop="code" class="enter-x">
        <el-input
          size="large"
          :placeholder="t('sys.login.authCodePlaceholder')"
          v-model="formData.code"
        />
        <el-button size="large" class="ml-4">{{ t("sys.login.authCodeButton") }}</el-button>
      </el-form-item>

      <el-button type="primary" size="large" class="enter-x w-full !rounded-lg mt-6">
        <span class="!text-16px !tracking-4px">{{ t("sys.login.resetButton") }}</span>
      </el-button>
      <el-button
        size="large"
        class="enter-x w-full !rounded-lg mt-6"
        plain
        @click="setLoginState(LoginStateEnum.LOGIN)"
      >
        <span class="!text-16px">{{ t("sys.login.backButton") }}</span>
      </el-button>
    </el-form>
  </main>
</template>

<style lang="scss" scoped>
:deep(.el-form-item__content) {
  flex-wrap: nowrap;
}
</style>
