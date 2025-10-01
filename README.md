# zsfxueye

这是一个基于 React 的前端项目，使用了现代的开发工具和库来构建用户界面。

## 技术栈

- **React 19** - 用于构建用户界面的核心库
- **React Router v7** - 声明式路由管理
- **Ant Design 5** - UI 组件库
- **ECharts 5** - 数据可视化图表库
- **Axios** - HTTP 客户端
- **React PDF** - PDF 文件展示组件


## 目录结构

\`\`\`
src/
├── components/     # 可复用的通用组件
├── pages/          # 页面级组件
├── utils/          # 工具函数和辅助方法
├── views/          # 视图组件
├── App.js          # 应用根组件
├── index.js        # 应用入口文件
└── ...
\`\`\`

## 快速开始

### 环境要求

- Node.js >= 14.x
- npm 或 yarn

### 安装依赖

\`\`\`bash
npm install
\`\`\`

或

\`\`\`bash
yarn install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm start
\`\`\`

或

\`\`\`bash
yarn start
\`\`\`

启动完成后，应用将在浏览器中自动打开 [http://localhost:3000](http://localhost:3000)。

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

或

\`\`\`bash
yarn build
\`\`\`

构建后的文件将输出到 \`build\` 目录，可用于部署。

## 开发规范

### 组件开发

1. 可复用的通用组件放在 \`src/components/\` 目录下
2. 页面级组件放在 \`src/pages/\` 目录下
3. 特定功能视图放在 \`src/views/\` 目录下

### 样式规范

- 每个组件的样式文件与其同名，如 \`Button.jsx\` 对应 \`Button.css\`
- 使用 CSS Modules 避免样式冲突
- 遵循 BEM 命名规范

### 路由管理

- 使用 React Router 进行路由管理
- 路由配置集中管理在 App.js 中

## 可用脚本

在项目目录下，你可以运行：

### \`npm start\`

启动开发服务器，具有热重载功能。

### \`npm test\`

启动测试运行器，以交互式监视模式运行测试。

### \`npm run build\`

将应用打包用于生产，输出到 \`build\` 文件夹。

### \`npm run eject\`

注意：这是单向操作，一旦执行无法撤销。
此命令会将所有配置文件和传递依赖项复制到项目中，以便完全控制它们。

## 浏览器支持

默认支持所有现代浏览器，具体列表可以在 package.json 的 \`browserslist\` 字段中查看。

## 部署

构建后的应用是一个静态站点，可以部署到任何静态文件服务器上：

- Netlify
- Vercel
- GitHub Pages
- Nginx/Apache 等传统服务器

## 学习资源

- [React 官方文档](https://reactjs.org/)
- [React Router 文档](https://reactrouter.com/)
- [Ant Design 组件库](https://ant.design/)
- [ECharts 图表库](https://echarts.apache.org/)