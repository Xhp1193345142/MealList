import type { UserConfigExport } from '@tarojs/cli';

export default {
  projectName: 'meal-list',
  date: '2026-09-20',
  designWidth: 750,
  deviceRatio: { 640: 2.34 / 2, 750: 1, 828: 1.81 / 2 },
  sourceRoot: 'src',
  outputRoot: 'dist',
  framework: 'react',
  compiler: 'webpack5',
  plugins: ['@tarojs/plugin-framework-react'],
  mini: {},
  h5: {}
} satisfies UserConfigExport;
