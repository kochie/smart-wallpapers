const withPlugins = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')

const plugins = [withTypescript, withSass]

const config = {
  target: 'serverless',
  cssModules: true
}

module.exports = withPlugins(plugins, config)
