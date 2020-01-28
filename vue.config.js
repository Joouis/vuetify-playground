const routes = require('./src/plugins/routes');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/vuetify-playground',
  productionSourceMap: false,
  pluginOptions: {
    sitemap: {
      baseURL: 'https://joouis.com',
      routes
    }
  }
};