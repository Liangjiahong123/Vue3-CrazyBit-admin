import { defineStore } from "pinia";
import { router } from "@/router";

import { loginApi, getUserInfoApi } from "@/api/sys/user";
import { LoginResponse } from "@/api/sys/types/userType";
import { isArray } from "@/utils/vaildate";
import { RoleEnum } from "@/enums/roleEnum";
import { PageEnum } from "@/enums/pageEnum";

import type { LoginParams } from "@/api/sys/types/userType";
import type { UserInfo } from "#/store";

interface UserState {
  token?: string;
  userInfo: Nullable<UserInfo>;
  roleList: RoleEnum[];
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    token: undefined,
    userInfo: null,
    roleList: []
  }),
  getters: {
    getToken: ({ token }) => token,
    getUserInfo: ({ userInfo }) => userInfo
  },
  actions: {
    async loginAction(payload: LoginParams): Promise<LoginResponse | null> {
      try {
        const { token } = await loginApi(payload);
        this.setToken(token);
        return this.loginNextAction();
      } catch (error) {
        return Promise.reject(error);
      }
    },

    async loginNextAction(): Promise<LoginResponse | null> {
      if (!this.getToken) return null;
      const userInfo = await this.getUserInfoAction();

      await router.replace(PageEnum.BASE_HOME);
      return userInfo;
    },

    async getUserInfoAction(): Promise<UserInfo | null> {
      if (!this.getToken) return null;
      const userInfo = await getUserInfoApi();
      if (isArray(userInfo?.roles)) {
        const roleList = userInfo?.roles.map((item) => item.value) as RoleEnum[];
        this.setRoleList(roleList);
      } else {
        userInfo.roles = [];
        this.setRoleList([]);
      }

      this.setUserInfo(userInfo);

      return userInfo;
    },

    setToken(payload: string | undefined) {
      this.token = payload || "";
      window.localStorage.setItem("token", this.token);
    },

    setUserInfo(payload: Nullable<UserInfo>) {
      this.userInfo = payload;
    },

    setRoleList(payload: RoleEnum[]) {
      this.roleList = payload;
    }
  }
});
