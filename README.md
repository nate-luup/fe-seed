# fe-seed
fe project skeleton

# Tech Stack
- css
- es6
- typescript
- react
- axios
# Tools and Plugins
## webpack
- loaders
    - style-loader（将生成的css插入到dom中）
    - css-loader (开启css module)
    - postcss-loader (使用最新css特性)

    - babel-loader (转换js, ts, react代码)
    - url-loader （转换文件，图片等资源路径）
## typescript
- [tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
## [babel](https://juejin.cn/post/6844904008679686152)
- presets (倒叙执行)
    - @babel/preset-env
    - @babel/preset-react
    - @babel/preset-typescript
- plugins （正序执行）
    - @babel/plugin-proposal-class-properties
## postcss
- plugins
    - postcss-preset-env （自动添加浏览器前缀，并且允许使用css新特性）
## eslint
- [用ESLint来规范Typescript代码](https://github.com/nate-luup/eslintArea/blob/master/doc/eslint-typescript.md)
- [ESLint 与 Prettier配合使用](https://github.com/nate-luup/eslintArea/blob/master/doc/eslint-prettier.md)
## prettier
- [options](https://prettier.io/docs/en/options.html)
