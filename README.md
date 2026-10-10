# 一饭清单 / MealList

> 从菜谱到开饭，一张清单搞定。

MealList 是一个面向家庭做饭的 App 与微信小程序产品：App 提供完整体验，小程序提供核心做饭流程入口；两端共用后端、账号数据和业务规则。

## 技术栈

- App：React Native、Expo、TypeScript、Expo Router、TanStack Query、Zustand
- 小程序：Taro 4、React、TypeScript、Zustand
- API：NestJS、REST API、Swagger/OpenAPI
- 数据库：PostgreSQL、Prisma
- 共享代码：pnpm monorepo、TypeScript API 契约与领域 packages

## 项目结构

```text
apps/app          React Native + Expo App
apps/miniprogram  Taro 微信小程序
apps/api          NestJS API
packages/*        共享契约与纯业务引擎
infra/            本地三环境 PostgreSQL
docs/             产品、架构与环境文档
```

详细开发流程见 [开发流程与架构规范.md](./开发流程与架构规范.md)，环境启动方式见 [docs/环境与启动指南.md](./docs/环境与启动指南.md)。

日常启动与预览控制统一使用 `make help` 查看；首页视觉预览可用 `make preview-start` 启动、`make preview-status` 检查、`make preview-restart` 恢复。
