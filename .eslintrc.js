module.exports = {
  // 用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    node: true
  },
  // 用来配置标准的js风格
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "@vue/prettier",
    "@vue/typescript"
  ],
  rules: {
    // 添加prettier支持并规避prettier配置和编辑器prettier配置冲突报错
    // "error" : 对这些规则开启验证，否则报错
    // true: 必须用  false: 不能用 （不符合则直接报错）
    "prettier/prettier": [
      "error", // off、warn(只会在控制台和编辑器警告，不会直接报错)、error 分别代表对一下规则的关闭、开启、直接报错
      {
        eslintIntegration: true,
        semi: false, // 不能用分号
        endOfLine: "auto",
        tabWidth: 2,
        useTabs: false,
        arrowParens: "avoid",
        jsxBracketSameLine: true,
        singleQuote: false // 不能用单引号
      }
    ],
    // 下边部分eslint会充分依赖上边 prettier 的规则，以 prettier 为主，具体区别，看 reademe
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: 0, // 分号不必须
    quotes: 0, // 引号可以用单引号也可以双引号
    camelcase: 0, // 不需要驼峰
    "no-undef": 0, // define
    "no-return-assign": 0, // 允许在return中执行任务
    "no-extend-native": 0, // 允许挂载prototype
    "no-prototype-builtins": 0, // 允许访问原型链
    "no-tabs": 0,
    indent: 0,
    "space-before-function-paren": 0,
    "handle-callback-err": 0, // 对错误会调允许滞空处理
    eqeqeq: 2, // 强制3等号
    "no-unused-vars": 0, // 定义了允许不使用
    "no-empty": 0 // 对空代码块发出警告，不报错
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
}
