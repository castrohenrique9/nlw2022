# Project NLW 2022

Learn about NodeJS, React and React Native

## Install nodejs

1. Download NojeJS and install.
2. Make path structute: `www/nlw/esports/server`
3. Execute PowerShell (if Windows) for create basic structure: `npm init -y`
4. Open folder `www/nlw/esports/server` and install lib Express: `npm install express`

## Install and Configure TypeScript

1. Execute: `npm install typescript -D` (use `-D` to install just in dev environment)
2. Alter format `.mjs` (or `.js`) to `.ts`
3. Execute command to make `tsconfig.json`: `npx tsc --init`

### Add automatic build for .ts

1. Install dependency: `npm i ts-node-dev -D`.
2. Install dependency: `npm i @types/express -D`
3. Add script to file package.json: `"dev": "tsnd src/server.ts"`.
4. Run project with automatic build of .ts files: `npm run dev`

# Tools and util commands

1. [Postman](https://www.postman.com/)
2. [Insomia](https://insomnia.rest/)
3. [Hopp Scotch](https://hoppscotch.io/pt-br/)

`npm run build` (execute the script build defined on `package.json`)
