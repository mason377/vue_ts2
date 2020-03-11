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

### postCss

### api, interface

### tslint, formatter

