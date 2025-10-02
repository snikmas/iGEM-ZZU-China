module.exports = {
    extends: ['react-app'],
    rules: {
      // 在 CI 环境中将警告转为错误，但允许一些常见情况
      'no-unused-vars': ['error', { 
        'varsIgnorePattern': '^_',
        'argsIgnorePattern': '^_' 
      }],
      'jsx-a11y/alt-text': ['error', {
        'object': ['aria-label', 'aria-labelledby']
      }],
      'jsx-a11y/img-redundant-alt': 'error',
      'react/jsx-pascal-case': 'error',
      'no-sparse-arrays': 'error'
    }
  };