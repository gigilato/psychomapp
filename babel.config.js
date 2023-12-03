module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          root: ['./'],
          alias: {
            $libs: './src/shared/libs/',
            $infra: './src/shared/infra',
            $constants: './src/shared/constants',
            $theme: './src/shared/theme',
            $assets: './src/shared/assets',
            $atoms: './src/shared/views/atoms',
            $molecules: './src/shared/views/molecules',
            $organisms: './src/shared/views/organisms',
            $forms: './src/shared/views/forms',
            $features: './src/features',
            $shared: './src/shared',
            $app: './src/app',
          },
        },
      ],
      // 'react-native-reanimated/plugin',
    ],
  }
}
