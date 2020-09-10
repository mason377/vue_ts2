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
- 格式化文档时分号和逗号都是在 setting.json(vscode 的设置文件) 中进行配置

```
"vetur.format.defaultFormatterOptions": {
    "prettier": {
      "singleQuote": false,
      "semi": false
    }
},

"prettier.trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号，none表示格式化时不添加
```

- ts 中 any 类型可以在快速修复中解决当前文件夹，或者当前行的内容，最终的解决方案是在 eslintrc.js 文件中单独配置(可以使用 any 类型)

```
// 下边是对 typescript 语法的配置
"@typescript-eslint/no-explicit-any": 0 // 允许使用any类型
```

- eslint 的 rules 用来设置从插件来的规范代码的规则
- 主要有如下的设置规则，可以设置字符串也可以设置数字，两者效果一致

```
  "off" -> 0 关闭规则
  "warn" -> 1 开启警告规则
  "error" -> 2 开启错误规则
```

- ESLint 与 Prettier 区别：
  1.ESLint：代码检测工具；可以检测出你代码中潜在的问题，比如使用了某个变量却忘记了定义；
  2.Prettier：代码格式化工具；作为代码格式化工具，能够统一你或者你的团队的代码风格。 3.使用 ESLint 与 eslint-plugin-prettier 的结果是最终得到的代码是充分尊重 Prettier 的结果(特别注意这点)，而 prettier-eslint-cli 则是先执行 Prettier 然后再自动使用 eslint --fix 将与 ESLint 规则冲突的代码修正成 ESLint 想要的结果。这样其实引入 Prettier 不会影响你原有的设置。

- 参考链接: https://zhuanlan.zhihu.com/p/80574300

### 三、plugin

- 当某一个组件或者功能经常需要被使用到时, 我们就可以将这个组件或者功能定义成一个插件
- 项目位置：/plugin/index.ts (项目中所有插件，均由此处被 main.js 引入)
- 使用 (类似于一个组件的导入，但是插件注册之后就可以全局引入，直接使用)

```
<loading :isShow="isShow"></loading>
```

### 四、Router

- App.vue 中 <router-view /> 标签，是不能缺少的。代表的是默认路由，指向 Home 组件,
- 在 Home 组件中可以手动跳转到其他组件

### 五、声明文件

- 原则上，TypeScript 需要开发者做到先声明后使用。这就导致开发者在调用很多原生接口（浏览器、Node.js）或者第三方模块的时候，因为某些全局变量或者对象的方法并没有声明过，导致编译器的类型检查失败。

- 用 ts 写的模块在发布的时候仍然是用 js 发布，这就导致一个问题：ts 那么多类型数据都没了，所以需要一个 d.ts 文件来标记某个 js 库里面对象的类型
  然后 typings 就是一个网络上的 d.ts 数据库

- d.ts 类型定义文件，我感觉现在对我的用处就是编辑器的智能提示

- 在项目中使用 ui 组件是很正常的操作,比如使用 Element-uI 的 meesage，用法如下图：

```
  this.$message({
    message: '恭喜你，这是一条成功消息',
    type: 'success'
  })
```

但是在配置了 typescript 之后

```
Protopype "$message" does not exist on type "App"
```

那是因为 $message 属性，并没有在 vue 实例中声明

解决办法也非常简单，那我们就声明一下

在之前文章中创建的 src/vue-shim.d.ts 文件中，增加如下代码：

```
// 声明全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $Message: any,
    $Modal: any
  }
}
```

这样，之后再使用 this.\$message()的话就不会报错了

- 同理，在 main.ts 文件中引入 \$api 中，需要在 definition.d.ts 文件中进行声明

```
main.ts 文件

import api from "@/api/api"
Vue.prototype.$api = api
```

```
definition.d.ts 文件

import api from "@/api/api"
Vue.prototype.$api = api

declare module "vue/types/vue" {
  interface Vue {
    $api: typeof AxiosApi
  }
}
```

### 待整理 或者 bug issue
- vue.config.js 中 postcss-pxtorem 提示 无法找到模块“postcss-pxtorem”的声明文件。 未解决
- 声明文件

