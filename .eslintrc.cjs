/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true, // 停止在父级目录寻找配置文件
  // 启用特定环境的全局变量
  env: {
    browser: true, // 浏览器全局变量
    es6: true, // es6特性
    node: true // Node.js 全局变量和 Node.js 作用域
  },
  parser: "vue-eslint-parser", // 设置解析器
  // 设置解析器相关配置
  parserOptions: {
    parser: "@typescript-eslint/parser", // 将 TypeScript 转换成与 estree 兼容的形式
    ecmaVersion: "latest", // 指定使用的 ECMAScript 版本
    sourceType: "module", // 使用 ECMAScript 模块
    jsxPragma: "Vue", // 将JSX语法解析为Vue元素
    ecmaFeatures: { jsx: true } // 需要使用的额外的语言特性
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:prettier/recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting",
    "./.eslintrc-auto-import.json"
  ],
  plugins: ["vue"], // 引入指定的插件,此处省略了 eslint-plugin- 前缀
  rules: {
    "vue/script-setup-uses-vars": "warn", // 防止 <template> 中使用的 <script setup> 变量被标记为未用变量
    "vue/multi-word-component-names": "off", // 关闭Vue组件名称必须使用多个单词的规则
    "vue/custom-event-name-casing": "off", // 关闭自定义事件名称必须使用大写字母的规则

    "@typescript-eslint/no-unused-vars": ["warn", { vars: "all", args: "none" }],

    "no-return-assign": "off", // 关闭函数中允许使用赋值表达式的规则
    "no-param-reassign": "off", // 关闭函数参数不允许重新赋值的规则
    "guard-for-in": "off", // 关闭for-in循环中需要使用hasOwnProperty()的规则
    "no-unused-vars": ["warn", { vars: "all", args: "none" }], // 警告出现未使用过的变量
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-new": "off",
    "eol-last": "off",
    "no-shadow": "off"
  }
};
