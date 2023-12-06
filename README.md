# 프로젝트 설정 안내

이 문서는 TypeScript와 React를 사용하는 웹 애플리케이션을 위한 Webpack 및 Babel 설정 방법을 설명합니다.

## 초기 설정

1. **Node.js 및 npm 설치**
   - 프로젝트를 시작하기 전에, [Node.js 공식 사이트](https://nodejs.org/)에서 Node.js를 설치하십시오.
   - Node.js를 설치하면 npm(Node Package Manager)도 함께 설치됩니다.

2. **프로젝트 초기화**
   - 새 프로젝트 디렉토리를 생성하고, 해당 디렉토리에서 터미널을 열어 다음 명령어를 실행합니다:
     ```
     npm init -y
     ```
   - 이 명령은 기본 설정으로 `package.json` 파일을 생성합니다.

## Webpack 및 Babel 설치

1. **Webpack 설치**
   - Webpack과 Webpack CLI를 설치합니다:
     ```
     npm install --save-dev webpack webpack-cli
     ```

2. **Babel 설치**
   - Babel과 필요한 프리셋 및 플러그인을 설치합니다:
     ```
     npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
     ```

3. **TypeScript 및 로더 설치**
   - TypeScript와 관련 로더를 설치합니다:
     ```
     npm install --save-dev typescript ts-loader
     ```

4. **스타일 로더 설치**
   - CSS를 처리하기 위한 로더를 설치합니다:
     ```
     npm install --save-dev style-loader css-loader
     ```

## `.babelrc` 설정

1. **`.babelrc` 파일 생성**
   - 프로젝트 루트에 `.babelrc` 파일을 생성하고, 위에서 제공한 설정을 복사하여 붙여넣습니다.
		```bash
			{
			  "presets": [
			    "@babel/preset-env",
			    "@babel/preset-react",
			    "@babel/preset-typescript"
			  ]
			}
		```
## 프로젝트 실행

1. **개발 서버 실행**
   - Webpack 개발 서버를 시작하기 위해 `package.json`에 다음 스크립트를 추가합니다:
     ```json
     "scripts": {
       "start": "webpack serve --mode development",
       "build": "webpack --mode production"
     }
     ```
   - 개발 서버를 시작하기 위해 다음 명령어를 실행합니다:
     ```
     npm start
     ```

2. **프로덕션 빌드**
   - 프로덕션용으로 애플리케이션을 빌드하려면 다음 명령어를 실행합니다:
     ```
     npm run build
     ```