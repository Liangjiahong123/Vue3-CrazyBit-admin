import { set } from "lodash-es";

export const createMsgConfig = (modules: Recordable<Recordable>, prefix: string) => {
  const msgConfig: Recordable = {};
  Object.keys(modules).forEach((key) => {
    // 获取文件内容
    const langFileContent = modules[key].default;
    // 截取文件全称，eg:moudle/sys.ts
    let fileName = key.replace(`./${prefix}/`, "");
    // 截取文件路径+名称 eg:moudle/sys
    fileName = fileName.split(".")[0];
    // 分割模块层次，eg：['module', 'sys']
    const keyList = fileName.split("/");
    // 去除模块名，eg：module
    const moduleName = keyList.shift();
    // 转化为字符串形式
    const objKey = keyList.join("");

    if (!moduleName) return {};
    if (objKey) {
      // 如果objKey不为空，则代表是在某大模块下的
      // 设置成{ moduleName: { module1: {...}, module2: {...} } }
      set(msgConfig, `${moduleName}[${objKey}]`, langFileContent || {});
    } else {
      // 如果为空，则代表是单模块文
      // 设置成{ moduleName: {...} }
      set(msgConfig, moduleName, langFileContent || {});
    }
  });

  return msgConfig;
};
