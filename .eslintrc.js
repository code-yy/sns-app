module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  rules: {
    'import/order': [
      'warn',
      { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'] },
    ],
    '@next/next/no-img-element': 'off',
    'no-console': ['error', { allow: ['error', 'warn'] }],
    'react/prop-types': 'off',
    'react/no-array-index-key': 'warn',
    'react-hooks/rules-of-hooks': 'error',

    /**
     * useCallbackなどの以前関係を保存時に自動保管
     * @see {@link https://github.com/facebook/react/issues/18235#issuecomment-898636301} for details.
     */
    'react-hooks/exhaustive-deps': ['warn', { enableDangerousAutofixThisMayCauseInfiniteLoops: true }],

    /**
     * @description importが型のみの場合は、import typeを強制
     */
    '@typescript-eslint/consistent-type-imports': 'error',
    /**
     * @description requireを許可
     */
    '@typescript-eslint/no-var-requires': 'off',

    /**
     * @description propsを自動でソート
     * @see {@link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md}
     */
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],

    /**
     * @description 中括弧を省略させないようにする
     * @see {@link https://eslint.org/docs/latest/rules/curly}
     */
    curly: ['error', 'all'],
  },
};
