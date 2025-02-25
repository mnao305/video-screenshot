import path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import { version } from './package.json'

const config = (env: any, args: any): any => {
  return {
    devtool: args.mode === 'production' ? false : 'inline-source-map',
    context: path.join(__dirname, 'src'),
    entry: {
      popup: './popup/index.ts',
      options: './options/index.ts',
      background: './background/index.ts',
      content: './content/index.ts'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name]/index.js'
    },
    module: {
      rules: [
        {
          test: /.ts$/,
          use: 'ts-loader',
          exclude: '/node_modules/'
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'icons', to: 'icons' },
        { from: 'popup/index.html', to: 'popup/index.html' },
        { from: 'popup/style.css', to: 'popup/style.css' },
        { from: 'options/index.html', to: 'options/index.html' },
        { from: 'options/style.css', to: 'options/style.css' },
        {
          from: 'manifest.json',
          to: 'manifest.json',
          transform: (content) => {
            const jsonContent = JSON.parse(content.toString())
            jsonContent.version = version

            return JSON.stringify(jsonContent, null, 2)
          }
        }
        // { from: '_locales', to: '_locales' } //多言語化対応用
      ])
    ]
  }
}

export default config
