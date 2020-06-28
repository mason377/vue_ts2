module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            rootValue: 32,
            unitPrecision: 5, // 最小精度，小数点位数
            // propList: ['*','!font*'], // !不匹配属性
            propList: ["*"],
            // selectorBlackList: ["v-"], // 不替换ui框架 或者将单位写PX
            minPixelValue: 2
          }),
          require("autoprefixer")({
            overrideBrowserslist: ["last 10 versions"]
          })
        ]
      }
    }
  }
}
