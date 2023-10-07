<script lang="ts" setup>
import { View, Hide } from "@element-plus/icons-vue";
const formData = reactive({
  account: "crazybit",
  password: "123456"
});
const rememberMe = ref(false);
const showPassword = ref(false);
</script>

<template>
  <h2 class="mb-3 text-3xl font-bold">登录</h2>

  <el-form class="p-4">
    <el-form-item name="account">
      <el-input size="large" placeholder="账号" v-model="formData.account" />
    </el-form-item>
    <el-form-item name="password">
      <el-input
        size="large"
        :type="showPassword ? 'text' : 'password'"
        placeholder="密码"
        v-model="formData.password"
      />
      <el-icon
        color="rgba(0,0,0,.4)"
        class="!absolute right-3 cursor-pointer"
        @click="showPassword = !showPassword"
      >
        <View v-show="showPassword" />
        <Hide v-show="!showPassword" />
      </el-icon>
      <!-- <el-icon color="rgba(0,0,0,.4)"><Hide /></el-icon> -->
    </el-form-item>

    <el-row>
      <el-col :span="12" class="flex items-center">
        <el-checkbox v-model="rememberMe" label="记住我" />
      </el-col>
      <el-col :span="12" class="text-right">
        <el-button class="text-sm" type="primary" link>忘记密码?</el-button>
      </el-col>
    </el-row>

    <el-button type="primary" size="large" class="w-full !rounded-lg mt-6">
      <span class="!text-16px !tracking-4px">登录</span>
    </el-button>

    <el-row :gutter="20" class="mt-6">
      <el-col :span="8">
        <el-button plain class="w-full">手机登录</el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain class="w-full">二维码登录</el-button>
      </el-col>
      <el-col :span="8">
        <el-button plain class="w-full">注册</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<style lang="scss" scoped>
$prefix-cls: "login-password-form";
</style>
