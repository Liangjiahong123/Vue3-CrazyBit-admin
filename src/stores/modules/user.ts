import { defineStore } from "pinia";
import { store } from "@/stores";
import { loginApi, getUserInfoApi } from "@/api/sys/user";
import { isArray } from "@/utils/vaildate";
import { RoleEnum } from "@/enums/roleEnum";
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
    async loginAction(payload: LoginParams) {
      try {
        const { token } = await loginApi(payload);
        this.setToken(token);
        this.loginNextAction();
      } catch (error) {
        return Promise.reject(error);
      }
    },

    async loginNextAction() {
      if (!this.getToken) return;
      this.getUserInfoAction();
      // this.userInfo = await getUserInfoApi();
    },

    async getUserInfoAction() {
      if (!this.getToken) return;
      const userInfo = await getUserInfoApi();

      if (isArray(userInfo?.roles)) {
        const roleList = userInfo?.roles.map((item) => item.value) as RoleEnum[];
        this.setRoleList(roleList);
      } else {
        userInfo.roles = [];
        this.setRoleList([]);
      }

      this.setUserInfo(userInfo);
    },

    setToken(payload: string | undefined) {
      this.token = payload || "";
    },

    setUserInfo(payload: Nullable<UserInfo>) {
      this.userInfo = payload;
    },

    setRoleList(payload: RoleEnum[]) {
      this.roleList = payload;
    }
  }
});
