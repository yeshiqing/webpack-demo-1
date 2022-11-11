## 仓库简介
master 分支对应饥人谷第51课代码
webpack-demo-2 分支对应饥人谷第52课代码

## 项目依赖工具
Node.js v18.6.0  
npm v8.13.2

## 启动服务器进行开发
```shell
yarn start
```

## 编译生产环境代码
```shell
yarn build
```

## 提示
修改完`package.json`中的版本号，需要执行`yarn`或`npm install`命令重新更新相应版本号的模块。

## 说明
`NODE_OPTIONS=--openssl-legacy-provider`应对 Node.js v18 环境下执行 webpack 报错，见[原文](https://github.com/webpack/webpack/issues/14532#issuecomment-947012063)。