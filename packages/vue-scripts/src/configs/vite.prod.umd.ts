import { InlineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default (): InlineConfig => {
  const entry = 'components/arco-vue.ts';
  const entryFileName = 'arco-vue';
  const name = 'ArcoVue';

  return {
    mode: 'production',
    build: {
      target: 'modules',
      outDir: 'dist',
      emptyOutDir: false,
      sourcemap: true,
      minify: false,
      rollupOptions: {
        external: 'vue',
        output: [
          {
            format: 'umd',
            entryFileNames: `${entryFileName}.umd.js`,
            globals: {
              vue: 'Vue',
            },
          },
          {
            format: 'umd',
            entryFileNames: `${entryFileName}.min.js`,
            globals: {
              vue: 'Vue',
            },
          },
        ],
      },
      // 开启 lib 模式
      lib: {
        entry,
        formats: ['umd'],
        name,
      },
    },
    // @ts-ignore vite内部类型错误
    plugins: [vue(), vueJsx()],
  };
};
