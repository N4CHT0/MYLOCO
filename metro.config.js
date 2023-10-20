const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
<<<<<<< HEAD
const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;
=======

>>>>>>> origin/main
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
<<<<<<< HEAD
const config = {
    transformer: {
        babelTransformerPath: require.resolve("react-native-svg-transformer")
      },
      resolver: {
        assetExts: assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"]
      }
};
=======
const config = {};
>>>>>>> origin/main

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
