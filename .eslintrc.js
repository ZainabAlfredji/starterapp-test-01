module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        semi: [
            'error',
            'never',
        ],
        indent: [ 2, 4, { SwitchCase: 1 } ],
        'operator-linebreak': [ 'error', 'before' ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'quote-props': [ 'error', 'as-needed' ],
        'array-bracket-spacing': [ 'error', 'always', { singleValue: false } ],
        'new-cap': [ 2, { capIsNewExceptions: ['express.Router'] } ],
        'react/require-default-props': [2],
        'import/no-unresolved': [0],
        // 'react/prefer-stateless-function': [ 2, { ignorePureComponents: true } ],
        'prefer-reflect': [0],
        'react/react-in-jsx-scope': 'off',
        // 'react/forbid-prop-types': [0],
        'react-hooks/exhaustive-deps': 'off',
        'import/no-anonymous-default-export': [0],
        'react/no-children-prop': 'off',
        'react/no-unescaped-entities': 'off',
        'prefer-promise-reject-errors': 'off',
        'no-async-promise-executor': 'off',
        'react/prop-types': [1],
    },
}
