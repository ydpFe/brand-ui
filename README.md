# brand-ui 
react组件库（移动端）<br/>

## 地址：
https://brand-ui.github.io

### 名字由来：
大学打lol的时候玩的最溜的英雄就是 复仇焰魂-布兰德，所以命名叫brand-ui，用来记念我过去的大学时光。

项目结构
```
├── build: wepack和gulp配置
|   ├── build-style.js                     gulp配置
|   ├── webpack.base.config.js             webpack基础配置
|   ├── webpack.dist.component.config.js   webpack生产配置
|   ├── webpack.dist.all.config.js         webpack生产配置
|   ├── webpack.dist.config.js             webpackdist配置
|   └── webpack.dev.config.js              webpack开发配置
├── examples: demo详情 
|   ├── pages                              demo页面
|   ├── styles                             css文件
|   ├── index.html                         html文件
|   ├── main.js                            react实例和router定义
|   └── router.js                          router配置
├── dist: 编译后的demo文件目录
|   ├── index.html                         index.html
|   └── main.js                            总体js文件
├── lib: 编译后的文件目录
|   ├── baseList                           编译后的组件文件
|       ├── index.js                       组件js文件
|       └── index.css                      组件css文件
|   ├── ...                                表示其他组件
|   ├── brandui.css                       组件库总体css文件
|   └── brandui.js                        组件库总体js文件
├── src: 开发环境
|   ├── components                         组件js文件目录
|   ├── styles                             组件css文件目录
|   └── index.js                           brand-ui根组件
├── .babelrc                               babel配置文件
├── .editorconfig                          编辑器配置文件
├── .eslintignore                          eslintignore文件
├── .eslintrc                              eslintrc文件
├── .gitignore                             gitignore文件
├── .npmignore                             npmignore文件
├── .postcssrc.js                          postcss文件
├── package.json                           npm配置文件
└── README.md                              README文件
```
### 安装依赖

npm i brand-ui --save

### 本地服务与热更新
npm run dev

### 建立生产与压缩资源
npm run build


### 组件使用实例：
import { Button } from 'brand-ui'; <br />
import 'brand-ui/lib/brandui.css'

### 按需加载：
import Button from 'brand-ui/lib/button/index.js'; <br />
import 'brand-ui/lib/button/index.css'

