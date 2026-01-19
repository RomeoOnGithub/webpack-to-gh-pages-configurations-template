### who is this template for?

### list of packages
I include non-core packages under tools when its configurations are tied to that tool's configuration file - for the sake of continuity.

- Webpack
    - core
        - `webpack` <sup>[npm](https://www.npmjs.com/package/webpack)</sup>
        - `webpack-cli` <sup>[npm](https://www.npmjs.com/package/webpack-cli)</sup>
    - for rules (loaders or associated to loaders)
        - assets
            - `asset/resource` <sup>[webpack docs](https://webpack.js.org/guides/asset-modules/#resource-assets)</sup> (built-in webpack5+)
        - html
            - `html-loader` <sup>[npm](https://www.npmjs.com/package/html-loader)</sup>
        - css
            - `css-loader` <sup>[npm](https://www.npmjs.com/package/css-loader)</sup>
            - `style-loader` <sup>[npm](https://www.npmjs.com/package/style-loader)</sup>
    - plugins
        - `html-webpack-plugin` <sup>[npm](https://www.npmjs.com/package/html-webpack-plugin)</sup>
        - `eslint-webpack-plugin` <sup>[npm](https://www.npmjs.com/package/eslint-webpack-plugin)</sup>
    - supportive tools
        - `webpack-merge` <sup>[github](https://github.com/survivejs/webpack-merge)</sup>
        - `webpack-dev-server` <sup>[npm](https://www.npmjs.com/package/webpack-dev-server)</sup>
        - `babel-loader` <sup>[npm](https://www.npmjs.com/package/babel-loader)</sup>
- Jest
    - core 
        - `jest` <sup>[npm](https://www.npmjs.com/package/jest)</sup>
    - integration
        - `babel-jest` <sup>[npm](https://www.npmjs.com/package/babel-loader)</sup>
- Babel
    - core
        - `@babel/core` <sup>[npm](https://www.npmjs.com/package/@babel/core)</sup>
        - 
    - optional core
        - `@babel/preset-env` <sup>[npm](https://www.npmjs.com/package/@babel/preset-env)</sup>
        - `core-js` <sup>[babel docs](https://babeljs.io/docs/babel-preset-env#corejs) , [core-js docs](https://core-js.io/docs/usage#h-installation)</sup>
- ESLint
    - core
        - `eslint` <sup>[npm](https://www.npmjs.com/package/eslint)</sup>
    - integrations
        - `@babel/eslint-parser` <sup>[npm](https://www.npmjs.com/package/@babel/eslint-parser)</sup>
        - `@babel/eslint-plugin` <sup>[npm](https://www.npmjs.com/package/@babel/eslint-plugin)</sup>
        - `eslint-config-prettier` <sup>[npm](https://www.npmjs.com/package/eslint-config-prettier)</sup>
        - `eslint-plugin-jest` <sup>[npm](https://www.npmjs.com/package/eslint-plugin-jest)</sup>

- Prettier
    - `prettier` <sup>[npm](https://www.npmjs.com/package/prettier)</sup>

### todo
- get static html files (template html) to refresh automatically in the browser
- briefly summarise what each package does