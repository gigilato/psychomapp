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
            $app: './src/shared/app',
            $features: './src/features',
            $shared: './src/shared',
          },
        },
      ],
      ['nativewind/babel', { mode: 'compileOnly' }],
      'expo-router/babel',
      'react-native-reanimated/plugin',
    ],
  }
}
