import { FormInstance, FormItemRule } from "element-plus";

export enum LoginStateEnum {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  MOBILE,
  QR_CODE
}

const currentState = ref(LoginStateEnum.LOGIN);

export const useLoginState = () => {
  const getLoginState = computed(() => currentState.value);

  const setLoginState = (state: LoginStateEnum) => {
    currentState.value = state;
  };

  return { getLoginState, setLoginState };
};

export const useFormVaild = (formRef: Ref<FormInstance | undefined>) => {
  const getValidate = computed(() => {});

  const validForm = () => {
    const formEl = unref(formRef);
    if (!formEl) return;
    return formEl.validate((vaild) => vaild);
  };

  return { getValidate, validForm };
};

export const useFormRules = (formData?: Recordable) => {
  const accountRule = createRule("请输入账号");
  const passwordRule = createRule("请输入密码");
  const mobileRule = createRule("请输入手机号");
  const authCodeRule = createRule("请输入验证码");

  const passwordFormRules = { account: accountRule, password: passwordRule };
  const mobileFormRules = { mobile: mobileRule, authCode: authCodeRule };

  const validatePolicy = (_: any, value: boolean, callback: any) => {
    if (!value) callback(new Error("请勾选相关协议"));
  };

  const validateComfirmPassword = (_: any, value: string, callback: any) => {
    if (!value) callback(new Error("请再次输入密码"));
    if (value !== formData?.password) callback(new Error("两次输入密码不一致"));
  };

  const getFormRules = computed((): Recordable<FormItemRule[]> => {
    switch (unref(currentState)) {
      case LoginStateEnum.MOBILE:
        return mobileFormRules;
      case LoginStateEnum.REGISTER:
        return {
          ...passwordFormRules,
          ...mobileFormRules,
          policy: [{ validator: validatePolicy, trigger: "change" }],
          confirmPassword: [{ validator: validateComfirmPassword, trigger: "change" }]
        };
      case LoginStateEnum.RESET_PASSWORD:
        return { ...mobileFormRules, account: accountRule };
      case LoginStateEnum.LOGIN:
        return passwordFormRules;
      default:
        return {};
    }
  });

  return { getFormRules };
};

function createRule(message: string) {
  return [{ required: true, message, trigger: "change" }];
}
