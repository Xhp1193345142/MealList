# 一饭清单 / MealList

> 从菜谱到开饭，一张清单搞定。

MealList 是一个面向家庭做饭的微信小程序：支持按人数换算食材、多菜谱合并采购清单、大字下厨步骤卡与热量估算。

## 技术栈

- 小程序：Taro 4、React、TypeScript、Zustand
- API：NestJS、REST API、Swagger/OpenAPI
- 数据库：PostgreSQL、Prisma
- 工作区：pnpm monorepo

## 项目结构

```text
apps/miniprogram  微信小程序
apps/api          NestJS API
packages/*        共享契约与纯业务引擎
infra/            本地三环境 PostgreSQL
docs/             产品、架构与环境文档
```

详细开发流程见 [开发流程与架构规范.md](./开发流程与架构规范.md)，环境启动方式见 [docs/环境与启动指南.md](./docs/环境与启动指南.md)。
