<script lang="ts" setup>
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum, useFormRules } from "../useLogin";
import { useI18n } from "@/hooks/web/useI18n";

const { getLoginState, setLoginState } = useLoginState();
const { t } = useI18n();

const showRegsiter = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER);

const formData = reactive({
  account: "",
  mobile: "",
  code: "",
  password: "",
  confirmPassword: "",
  policy: false
});

const { getFormRules } = useFormRules(formData);
</script>

<template>
  <main class="register-form" v-if="showRegsiter">
    <LoginFormTitle class="enter-x" />

    <el-form :model="formData" :rules="getFormRules" class="p-4 enter-x">
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

      <el-form-item prop="password" class="enter-x">
        <StrengthCompute
          size="large"
          v-model:value="formData.password"
          :placeholder="t('sys.login.passwordPlaceholder')"
        />
      </el-form-item>

      <el-form-item prop="confirmPassword" class="enter-x">
        <el-input
          size="large"
          type="password"
          :placeholder="t('sys.login.confirmPwdPlaceholder')"
          show-password
          v-model="formData.confirmPassword"
        />
      </el-form-item>

      <el-form-item prop="policy" class="enter-x">
        <el-checkbox v-model="formData.policy" :label="t('sys.login.policyChecked')" />
      </el-form-item>

      <el-button type="primary" size="large" class="w-full !rounded-lg mt-4 enter-x">
        <span class="!text-16px !tracking-4px">{{ t("sys.login.registerButton") }}</span>
      </el-button>
      <el-button
        size="large"
        class="w-full !rounded-lg mt-6 enter-x"
        plain
        @click="setLoginState(LoginStateEnum.LOGIN)"
      >
        <span class="!text-16px !tracking-4px">{{ t("sys.login.backButton") }}</span>
      </el-button>
    </el-form>
  </main>
</template>

<style lang="scss" scoped>
:deep(.el-form-item__content) {
  flex-wrap: nowrap;
}
</style>
