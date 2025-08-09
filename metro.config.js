const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
  resolver: {
    unstable_conditionNames: ["browser", "require", "react-native"],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

// Manually merge defaultConfig and customConfig
module.exports = {
  ...defaultConfig,
  ...customConfig,
  resolver: {
    ...defaultConfig.resolver,
    ...customConfig.resolver,
  },
  transformer: {
    ...defaultConfig.transformer,
    ...customConfig.transformer,
  },
};