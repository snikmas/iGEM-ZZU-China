module.exports = {
    extends: ['react-app'],
    rules: {
      // 允许未使用的变量以下划线开头
      'no-unused-vars': ['error', { 
        'varsIgnorePattern': '^_',
        'argsIgnorePattern': '^_' 
      }],
      // 对象元素需要 aria-label
      'jsx-a11y/alt-text': ['error', {
        'object': ['aria-label', 'aria-labelledby']
      }],
      // 图片 alt 属性不应包含冗余词汇
      'jsx-a11y/img-redundant-alt': ['error', {
        'words': ['image', 'photo', 'picture', 'pic']
      }],
      // 组件名必须是 PascalCase
      'react/jsx-pascal-case': 'error',
      // 不允许稀疏数组
      'no-sparse-arrays': 'error'
    }
  };