# 项目设计文档

## 项目简介
这是一个用 create-next-app 创建的 Next.js 项目,使用了 App Router。主要技术栈包括:

- Next.js 15.0.4
- React 19
- TypeScript
- Tailwind CSS
- ESLint
- PostCSS

## 目录结构 
.
├── src/
│ ├── app/
│ │ ├── fonts/ # 自定义字体文件
│ │ ├── layout.tsx # 根布局
│ │ ├── page.tsx # 首页
│ │ └── globals.css # 全局样式
│ ├── components/ # 组件目录
│ └── pages/ # 页面目录
├── public/ # 静态资源
├── .next/ # Next.js 构建输出
└── node_modules/ # 依赖包