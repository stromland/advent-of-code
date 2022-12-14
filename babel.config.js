module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-typescript',
    ],
    plugins: ['@babel/plugin-syntax-import-assertions'],
    env: {
      build: {
        ignore: ['**/*.test.ts', '__snapshots__'],
      },
    },
    ignore: ['node_modules'],
  };
};
