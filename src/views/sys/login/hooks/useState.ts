export enum LoginStateEnum {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  MOBILE,
  QR_CODE
}

const currentState = ref(LoginStateEnum.LOGIN);

export const useLoginState = () => {
  const loginState = computed(() => currentState.value);

  const setLoginState = (state: LoginStateEnum) => {
    currentState.value = state;
  };
  return { loginState, setLoginState };
};

export const usePasswordState = () => {
  const passwordState = ref(false);

  const setPasswordState = () => {
    passwordState.value = !passwordState.value;
  };

  return { passwordState, setPasswordState };
};
