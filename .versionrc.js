// .versionrc.js
module.exports = {
  bumpFiles: [
    {
      filename: 'package.json',
    },
    {
      filename: 'app.version.json',
      updater: require.resolve('standard-version-expo'),
    },
    {
      filename: 'app.version.json',
      updater: require.resolve('standard-version-expo/android/increment'),
    },
    {
      filename: 'app.version.json',
      updater: require.resolve('standard-version-expo/ios/increment'),
    },
  ],
};
