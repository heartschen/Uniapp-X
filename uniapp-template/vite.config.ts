import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    uni(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'], // 指定需要检查的文件
      exclude: ['node_modules/**', 'dist/**'], // 指定不需要检查的文件
      fix: true, // 是否自动修复
      cache: false, // 是否启用缓存
    }),
  ],
});
