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
  },
  sitemap: {
    publicPath: './public',
    hostname: 'https://taverne.uralys.com',
    links: [
      {url: '/', lastmod: new Date()},
      {url: '/demo', lastmod: new Date()},
      {url: '/documentation/getting-started/', lastmod: new Date()},
      {url: '/documentation/react/', lastmod: new Date()}
    ]
  }
};
