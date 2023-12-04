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
            $atoms: './src/shared/views/atoms',
            $molecules: './src/shared/views/molecules',
            $organisms: './src/shared/views/organisms',
            $forms: './src/shared/views/forms',
            $libs: './src/shared/libs/',
            $infra: './src/shared/infra',
            $constants: './src/shared/constants',
            $config: './src/shared/config',
            $theme: './src/shared/theme',
            $assets: './src/shared/assets',
            $views: './src/shared/views',
            $types: './src/shared/types',
            $features: './src/features',
            $shared: './src/shared',
            $app: './src/app',
          },
        },
      ],
      ['nativewind/babel', { mode: 'compileOnly' }],
      'react-native-reanimated/plugin',
    ],
  }
}
