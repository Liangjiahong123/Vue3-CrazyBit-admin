<script lang="ts" setup>
const formData = reactive({
  account: "crazybit",
  password: "123456"
});
</script>

<template>
  <h2 class="mb-3 text-3xl font-bold">登录</h2>

  <ElForm class="p-4 xl:w-7/8">
    <ElFormItem name="account">
      <ElInput size="large" placeholder="账号" v-model="formData.account" />
    </ElFormItem>
    <ElFormItem name="password">
      <ElInput size="large" type="password" placeholder="密码" v-model="formData.password" />
    </ElFormItem>
  </ElForm>
</template>

<style lang="scss" scoped>
$prefix-cls: "login-password-form";
</style>
