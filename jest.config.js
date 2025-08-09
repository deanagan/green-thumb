module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|@react-native" +
      "|@react-navigation" +
      "|expo(nent)?|@expo(nent)?" +
      "|@unimodules|unimodules" +
      "|sentry-expo" +
      "|native-base" +
      "|react-native-paper" +
      "|react-clone-referenced-element" +
      "|expo-font" +
      "|expo-constants" +
      "|expo-asset" +
      "|expo-file-system" +
      "|expo-modules-core" +
      "|@expo/vector-icons" +
      ")/)"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect"
  ]
};