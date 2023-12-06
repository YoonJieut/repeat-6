const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 환경 변수 확인
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  // 모드 설정 (개발 혹은 프로덕션)
  mode: isProduction ? 'production' : 'development',

  // 진입점 설정 (TypeScript 및 React)
  entry: './index.html',

  // 출력 설정
  output: {
    filename: isProduction ? 'bundle.[hash].js' : 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // 소스 맵 설정 (개발 모드일 때만)
  devtool: isProduction ? false : 'inline-source-map',

  // 모듈 해석 방법 설정
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },

  // 개발 서버 설정
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true,
    open: true,
  },

  // 모듈 처리 방법 설정
  module: {
    rules: [
      // TypeScript 파일 처리
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // JavaScript 및 React 파일 처리 (Babel 사용)
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        exclude: /node_modules/,
      },
      // CSS 파일 처리
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 이미지 및 폰트 파일 처리
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },

  // 플러그인 설정
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
