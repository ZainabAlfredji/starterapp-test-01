// .storybook/main.js
const path = require('path')

module.exports = {
    // defines where storybook will locate our stories
    stories: [
        '../src/**/*.stories.@(js|jsx)',
        '../src/components/**/*.stories.@(js|jsx)',
    ],

    addons: ['@storybook/addon-knobs/register'],

    babel: async (options) => {
        return {
            ...options,
        }
    },

    webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

        // here we use babel-loader
        config.module.rules.push({
            test: /\.(js|jsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                babelrc: false,
                presets: [
                    '@babel/preset-typescript',
                    [
                        '@babel/preset-react',
                        {
                            runtime: 'automatic',
                        },
                    ],
                ],
                plugins: [
                    ['@babel/plugin-proposal-nullish-coalescing-operator'],
                    ['@babel/plugin-proposal-optional-chaining'],
                    ['@teclone/babel-plugin-styled-components'],
                ],
            },
        })

        config.resolve.modules = [
            path.resolve(__dirname, '../', 'node_modules'),
            'node_modules',
        ]

        config.resolve.extensions.push('.js', '.jsx')

        config.stats = 'verbose'

        // Return the altered config
        return config
    },
}
