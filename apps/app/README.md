# 一饭清单 App

基于 Expo、React Native、TypeScript 和 Expo Router。移动端是主产品，页面按功能路由组织；业务数据请求使用 TanStack Query，跨页面的本地交互状态使用 Zustand。

## 启动

在仓库根目录运行：

```bash
pnpm dev:app
```

在 Expo CLI 中按提示打开 Android 模拟器、iOS 模拟器或 Expo Go。也可以直接运行：

```bash
pnpm --filter @meallist/app android
pnpm --filter @meallist/app ios
pnpm --filter @meallist/app web
```

## 目录

- `app/`：Expo Router 路由和页面
- `features/`：按业务功能划分的数据与状态
- `providers/`：应用级 Provider，目前包含 TanStack Query
- `constants/theme.ts`：颜色、间距和圆角令牌
- `assets/`：App 使用的图片与图标

菜谱和清单目前使用本地演示数据，登录、真实 API、食材汇总和完整烹饪步骤后续接入共享后端。
