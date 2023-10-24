import { MockMethod } from "vite-plugin-mock";
import { resultSuccess } from "../_utils";

const userMaps = [
  {
    userId: "1",
    username: "crazybit",
    realName: "crazybit Admin",
    avatar: "",
    desc: "manager",
    password: "123456",
    token: "fakeToken1",
    homePath: "/dashboard/analysis",
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
    homePath: "/dashboard/workbench",
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
    url: "/api/login",
    timeout: 2400,
    method: "post",
    response: ({ query }) => {
      const { username, password } = query;
      const vaildUser = userMaps.find(
        (item) => item.username === username && password === item.password
      );

      if (!vaildUser)
        return {
          code: 401,
          msg: "Invalid username or password!"
        };

      const { userId, username: _username, token, realName, desc, roles } = vaildUser;

      return resultSuccess({ roles, userId, username: _username, token, realName, desc });
    }
  }
] as MockMethod[];
