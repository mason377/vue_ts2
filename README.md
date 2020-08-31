# vue_ts

---

## 项目构建

### 第一步，如果你之前没有装 vuecli，可以直接执行下面命令

```
npm install --global @vue/cli
```

### 如果之前装了 vuecli 的版本的，操作第一步之前需要先 uninstall 之前的版本

```
cnpm uninstall vue-cli -g // 卸载
```

### 创建一个 vue 项目

```
vue create my-project-name
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## 文件说明

### shims-vue.d.ts

```
注：由于 TypeScript 默认并不支持 *.vue 后缀的文件，所以在 vue 项目中引入的时候需要创建一个shims-vue.d.ts 文件，放在项目项目对应使用目录下，例如 src/shims-vue.d.ts，用来支持*.vue 后缀的文件；
```

## 目标

### VUEX

```
namespace命名空间
```

```
vuex-class 结合使用
```

### postcss

```
vue-cli3 创建的时候并不会自动创建vue.config.js，因为这个是个可选项，所以一般都是需要修改webpack的时候才会自己创建一个vue.config.js

再然后因为vue-cli3内部高度集成了webpack，一般来说使用者不需要再去知道weboack做了什么，所以没有暴露webpack的配置文件，但你依然可以创建vue.config.js 去修改默认的webpack

postcss 的配置写在手动创建的 vue.config.js 文件里边

自动转换比例位于 utils/rem.js
```

### api, interface

### tslint, formatter

## 参考文档

```
https://github.com/pppercyWang/vue-typescript-mobile
```

---

### 一、interface

- src 新建 @types/ api-type.d.ts
- export 导出预定的接口规则
- 引用

```
import * as APITYPE from "@/@types/api-type"

queryParams: APITYPE.basic = {
  name: "all",
  age: 15,
}
```

---

### 二、格式化文件

- .eslintrc.js 配置文件
- 格式化文档时分号和逗号都是在 setting.json 中进行配置

```
"vetur.format.defaultFormatterOptions": {
    "prettier": {
      "singleQuote": false,
      "semi": false
    }
},

"prettier.trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号，none表示格式化时不添加
```

- ts 中 any 类型可以在快速修复中解决当前文件夹，或者当前行的内容，最终的解决方案是在 eslintrc.js 文件中单独配置(可以使用any类型)

```
// 下边是对 typescript 语法的配置
"@typescript-eslint/no-explicit-any": 0 // 允许使用any类型
```

### 三、plugin
- 当某一个组件或者功能经常需要被使用到时, 我们就可以将这个组件或者功能定义成一个插件
- 项目位置：/plugin/index.ts (项目中所有插件，均由此处被 main.js 引入)
- 使用 (类似于一个组件的导入，但是插件注册之后就可以全局引入，直接使用)
```
<loading :isShow="isShow"></loading>
```
