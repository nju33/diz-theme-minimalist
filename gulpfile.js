require('babel-register')({
  presets: ['env', 'react'],
  plugins: [
    "transform-async-to-generator",
    "transform-class-properties",
    "transform-decorators-legacy",
    "transform-object-rest-spread"
  ]
});
require('./gulpmain');
