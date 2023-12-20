import type { LoginParams } from "@/api/sys/types/userType";
import type { UserInfo } from "#/store";

import { defineStore } from "pinia";
import { router } from "@/router";

import { pinia } from "@/stores";
import { usePermissionStore } from "./permission";

import { loginApi, getUserInfoApi } from "@/api/sys/user";
import { LoginResponse } from "@/api/sys/types/userType";

import { isArray } from "@/utils/vaildate";

import { RoleEnum } from "@/enums/roleEnum";
import { PageEnum } from "@/enums/pageEnum";
import { KeyEnum } from "@/enums/cacheEnum";

interface UserState {
  token?: string;
  userInfo: Nullable<UserInfo>;
  roleList: RoleEnum[];
  lastUpdateTime: number;
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    token: undefined, // token
    userInfo: null, // 用户信息
    roleList: [], // 用户角色列表
    lastUpdateTime: 0 // 上次更新时间
  }),
  getters: {
    getToken: (state) => state.token || localStorage.getItem(KeyEnum.TOKEN_KEY),
    getUserInfo: (state) =>
      state.userInfo || JSON.parse(localStorage.getItem(KeyEnum.USER_INFO_KEY) as any),
    getRoleList: (state) => state.roleList,
    getLastUpdateTime: (state) => state.lastUpdateTime
  },
  actions: {
    async loginAction(payload: LoginParams): Promise<LoginResponse | null> {
      try {
        const { token } = await loginApi(payload);
        this.setToken(token);
        return this.loginNextAction();
      } catch (error) {
        console.error(error);
        return Promise.reject(error);
      }
    },

    async loginNextAction(): Promise<LoginResponse | null> {
      if (!this.getToken) return null;
      const userInfo = await this.getUserInfoAction();
      const permissionStore = usePermissionStore();
      await permissionStore.buildRoutesAction();
      await router.replace(PageEnum.BASE_HOME);
      return userInfo;
    },

    async getUserInfoAction(): Promise<UserInfo | null> {
      if (!this.getToken) return null;
      const userInfo = await getUserInfoApi();
      if (isArray(userInfo.roles)) {
        const roleList = userInfo.roles.map((item) => item.value) as RoleEnum[];
        this.setRoleList(roleList);
      } else {
        userInfo.roles = [];
        this.setRoleList([]);
      }

      this.setUserInfo(userInfo);

      return userInfo;
    },

    setToken(token: string | undefined) {
      this.token = token || "";
      localStorage.setItem(KeyEnum.TOKEN_KEY, token as string);
    },

    setUserInfo(info: Nullable<UserInfo>) {
      this.userInfo = info;
      this.lastUpdateTime = new Date().getTime();
      localStorage.setItem(KeyEnum.USER_INFO_KEY, JSON.stringify(info));
    },

    setRoleList(roleList: RoleEnum[]) {
      this.roleList = roleList;
    }
  }
});

export const useUserStoreWithOut = () => {
  return useUserStore(pinia);
};
