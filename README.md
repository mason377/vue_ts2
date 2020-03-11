# vue_ts
---

## 项目构建

### 第一步，如果你之前没有装vuecli，可以直接执行下面命令
```
npm install --global @vue/cli
```

### 如果之前装了vuecli的版本的，操作第一步之前需要先uninstall之前的版本
```
cnpm uninstall vue-cli -g // 卸载
```

### 创建一个vue项目
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

