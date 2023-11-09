<script lang="ts" setup>
import LoginFormTitle from "./LoginFormTitle.vue";
import { useLoginState, LoginStateEnum, useFormVaild, useFormRules } from "../useLogin";
import { useUserStore } from "@/stores/modules/user";
import { useMessage } from "@/hooks/web/useMessage";
import { useI18n } from "@/hooks/web/useI18n";

const { t } = useI18n("sys.login");
const { createNotify, createMessage } = useMessage();
const userStore = useUserStore();
const { getLoginState, setLoginState } = useLoginState();

const showPwdLogin = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);

const formRef = ref();
const { validForm } = useFormVaild(formRef);

const formData = reactive({
  account: "crazybit",
  password: "123456",
  rememberMe: false
});

const loading = ref(false);

const { getFormRules } = useFormRules();

const handleLogin = async () => {
  const valid = await validForm();
  if (!valid) return;
  try {
    loading.value = true;
    const userInfo = await userStore.loginAction({
      username: formData.account,
      password: formData.password
    });
    if (userInfo) {
      createNotify({
        message: `${t("loginSuccessDesc")}: ${userInfo.realName}`,
        title: t("loginSuccessTitle")
      });
    }
  } catch (e: any) {
    createMessage({ type: "error", message: e.message || t("sys.api.networkExceptionMsg") });
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <main v-show="showPwdLogin" class="password-form">
    <LoginFormTitle class="enter-x" />
    <el-form
      :model="formData"
      :rules="getFormRules"
      class="enter-x p-4"
      ref="formRef"
      @keypress.enter="handleLogin"
    >
      <el-form-item prop="account" class="enter-x">
        <el-input size="large" :placeholder="t('accountPlaceholder')" v-model="formData.account" />
      </el-form-item>
      <el-form-item prop="password" class="enter-x">
        <el-input
          size="large"
          type="password"
          :placeholder="t('passwordPlaceholder')"
          show-password
          v-model="formData.password"
        />
      </el-form-item>

      <el-row class="enter-x">
        <el-col :span="12">
          <el-checkbox v-model="formData.rememberMe" :label="t('remeberChecked')" />
        </el-col>
        <el-col :span="12" class="text-right">
          <el-button
            class="text-sm"
            type="primary"
            link
            @click="setLoginState(LoginStateEnum.RESET_PASSWORD)"
          >
            {{ t("forgetPswdButton") }}
          </el-button>
        </el-col>
      </el-row>

      <el-button
        type="primary"
        size="large"
        class="w-full !rounded-lg mt-6 enter-x"
        :loading="loading"
        @click="handleLogin"
      >
        <span class="!text-16px !tracking-4px">{{ t("loginButton") }}</span>
      </el-button>

      <el-row :gutter="20" class="mt-6 enter-x <sm:(flex flex-col)">
        <el-col :span="8" class="<sm:(!max-w-full)">
          <el-button plain class="w-full" @click="setLoginState(LoginStateEnum.MOBILE)">
            {{ t("mobileFormTitle") }}
          </el-button>
        </el-col>
        <el-col :span="8" class="<sm:(mt-7px !max-w-full)">
          <el-button plain class="w-full" @click="setLoginState(LoginStateEnum.QR_CODE)">
            {{ t("qrCodeFormTitle") }}
          </el-button>
        </el-col>
        <el-col :span="8" class="<sm:(mt-7px !max-w-full)">
          <el-button plain class="w-full" @click="setLoginState(LoginStateEnum.REGISTER)">
            {{ t("registerFormTitle") }}
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </main>
</template>
