<script lang="ts" setup>
import { View, Hide } from "@element-plus/icons-vue";

import { useLoginState, LoginStateEnum, usePasswordState } from "../hooks/useState";

const { loginState, setLoginState } = useLoginState();
const showPwdLogin = computed(() => unref(loginState) === LoginStateEnum.LOGIN);

const { passwordState, setPasswordState } = usePasswordState();

const formData = reactive({
  account: "crazybit",
  password: "123456",
  rememberMe: false
});
</script>

<template>
  <main v-show="showPwdLogin" class="password-form">
    <h2 class="mb-3 text-3xl font-bold">登录</h2>
    <el-form class="p-4">
      <el-form-item name="account">
        <el-input size="large" placeholder="账号" v-model="formData.account" />
      </el-form-item>
      <el-form-item name="password">
        <el-input
          size="large"
          :type="passwordState ? 'text' : 'password'"
          placeholder="密码"
          v-model="formData.password"
        />
        <el-icon
          color="rgba(0,0,0,.4)"
          class="!absolute right-3 cursor-pointer"
          @click="setPasswordState"
        >
          <View v-show="passwordState" />
          <Hide v-show="!passwordState" />
        </el-icon>
        <!-- <el-icon color="rgba(0,0,0,.4)"><Hide /></el-icon> -->
      </el-form-item>

      <el-row>
        <el-col :span="12" class="flex items-center">
          <el-checkbox v-model="formData.rememberMe" label="记住我" />
        </el-col>
        <el-col :span="12" class="text-right">
          <el-button
            class="text-sm"
            type="primary"
            link
            @click="setLoginState(LoginStateEnum.RESET_PASSWORD)"
          >
            忘记密码?
          </el-button>
        </el-col>
      </el-row>

      <el-button type="primary" size="large" class="w-full !rounded-lg mt-6">
        <span class="!text-16px !tracking-4px">登录</span>
      </el-button>

      <el-row :gutter="20" class="mt-6">
        <el-col :span="8">
          <el-button plain class="w-full" @click="setLoginState(LoginStateEnum.MOBILE)">
            手机登录
          </el-button>
        </el-col>
        <el-col :span="8">
          <el-button plain class="w-full" @click="setLoginState(LoginStateEnum.QR_CODE)">
            二维码登录
          </el-button>
        </el-col>
        <el-col :span="8">
          <el-button plain class="w-full" @click="setLoginState(LoginStateEnum.REGISTER)">
            注册
          </el-button>
        </el-col>
      </el-row>
    </el-form>
  </main>
</template>
