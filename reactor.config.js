module.exports = {
  esbuild: {
    loader: {
      '.js': 'jsx',
      '.md': 'text'
    }
  },
  documentation: {
    dist: './tocs',
    source: './src/pages/docs'
  }
};
