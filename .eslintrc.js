// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfig = require('./.prettierrc')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'prettier'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      },
      alias: {
        map: [['src', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      }
    },
    react: {
      version: 'detect'
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  env: {
    browser: true,
    es2021: true
  },
  rules: {
    // Import plugin
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        tsx: 'never',
        ts: 'never'
      }
    ], // Don't required extension for these
    'import/no-extraneous-dependencies': 'off', // Skip check for dependencies vs devDependencies
    'import/prefer-default-export': 'off', // Named exports are easier to refactor & have better support in IDE

    // Typescript
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // infering is fine
    '@typescript-eslint/no-empty-function': 'off', // Too strict
    '@typescript-eslint/no-var-requires': 'off', // Use require in nodejs scripts or config files
    'prefer-destructuring': 'off', // Too strict
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off', // React 17+ https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/no-array-index-key': 'off', // This is the only choice very often
    'react/prop-types': 'off',
    'react/forbid-prop-types': 'off',
    // Prettier
    'prettier/prettier': ['error', prettierConfig]
  }
}
