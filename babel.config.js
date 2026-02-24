export default {
  presets: [
    ['@babel/preset-env', {
      //provide the logic (modules) for handling polyfills (don't need to import the core-js package)
      "useBuiltIns": "usage", 
      "corejs": "3.47",

      //include the target for which environment the compiled/transformed code should support 
      targets: {node: 'current'}, //code that the current node environment doesn't understand (good for development, but should probably be changed to specific browser(s) version(s) or something for production)
    }]
  ],
};