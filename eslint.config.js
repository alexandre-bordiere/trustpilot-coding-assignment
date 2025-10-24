import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'alphabetical',
        groups: [
          'side-effect-style',
          ['type-import', 'value-builtin', 'value-external'],
          ['type-internal', 'value-internal'],
          ['type-parent', 'type-sibling', 'type-index', 'value-parent', 'value-sibling', 'value-index'],
          'ts-equals-import',
          'unknown',
        ],
      },
    ],
  },
  vue: {
    overrides: {
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    },
  },
  toml: false,
})
