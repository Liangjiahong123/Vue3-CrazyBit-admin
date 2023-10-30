import { MockMethod } from "vite-plugin-mock";
import { resultSuccess, resultError, getReqToken, RequestParams } from "../_utils";

const userMaps = [
  {
    userId: "1",
    username: "crazybit",
    realName: "crazybit Admin",
    avatar: "",
    desc: "manager",
    password: "123456",
    token: "fakeToken1",
    roles: [
      {
        roleName: "Super Admin",
        value: "super"
      }
    ]
  },
  {
    userId: "2",
    username: "test",
    password: "123456",
    realName: "test user",
    avatar: "",
    desc: "tester",
    token: "fakeToken2",
    roles: [
      {
        roleName: "Tester",
        value: "test"
      }
    ]
  }
];

export default [
  {
    url: "/api/user/login",
    timeout: 2400,
    method: "post",
    response: ({ query }) => {
      const { username, password } = query;
      const vaildUser = userMaps.find(
        (item) => item.username === username && password === item.password
      );

      if (!vaildUser) return resultError("账号或密码错误");

      const { username: _username, token, userId } = vaildUser;
      return resultSuccess({ username: _username, userId, token });
    }
  },
  {
    url: "/api/user/info",
    method: "get",
    timeout: 2400,
    response: (req: RequestParams) => {
      const token = getReqToken(req);
      if (!token) return resultError("获取用户信息失败");
      const vaildUser = userMaps.find((item) => item.token === token);
      if (!vaildUser) return resultError("The corresponding user information was not obtained!");
      return resultSuccess(vaildUser);
    }
  }
] as MockMethod[];
